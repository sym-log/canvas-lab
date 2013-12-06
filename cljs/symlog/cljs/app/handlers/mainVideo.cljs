(ns symlog.cljs.app.handlers.mainVideo
  (:use    [symlog.cljs.app.dom :only [elements]]))

(defn init []
   (def videoDuration (.-duration (elements :mainVideo)))
   (def travelLength 532)
   (def multiplier (/ travelLength videoDuration))
   (def buttonStartY 2)
   (def buttonEndY 534)
   (def video (elements :mainVideo))
   (def playButton (elements :mainVideoPlayButton))
   (def FPS (elements :FPS) )
   (def button (elements :controlButton))
   (def buttonHandler (controlButton. button))
   (def touchArea (elements :mainVideoPlayTouchArea))
   (def touchHandler (touchScreen. video))
   (def _subseq (.-sequencer (elements :narratorVid))) ; just a one-off to button if narrator has interrupted.  will need to change when more subsequencers are added
   
   (goog.events.listen ;THIS MOVES THE CONTROL BUTTON DOWN THE TRACK AS THE VIDEO PLAYS
      video
      "timeupdate"
      (fn [evt]
        (let [ locY  (* multiplier (.. evt -target -currentTime)) ]
          (cond
              (= 0 locY)
                (set! (.. button -style -top) (str buttonStartY "px"))
              (= travelLength locY)
                (set! (.. button -style -top) (str buttonEndY "px"))
              :else
                (set! (.. button -style -top) (str locY "px"))))))

   (goog.events.listen ; THE HANDLER FOR THE CONTROL BUTTON
      button
      (array "mousedown" "mousemove" "mouseup" "mouseout")
      (. buttonHandler -fire))

   (goog.events.listen ; THE HANDLER FOR THE TOUCH SCREEN
      touchArea
      "click"
      (. touchHandler -handler )
      false  )
   
 )

(defn controlButton [button]
  (this-as this
    (set! (. this -fire)
       (fn [evt]
         (.preventDefault evt)
         
         (cond
          
             (= (. evt -type) "mousedown")
             (if @(. _subseq -rested)
               (do
                  (set! (. this -selected) true)
                  (set! (. this -startY) (. evt -screenY))
                  (set! (. this -beginY) (js.parseInt (.. button  -style -top)))
                  (symlog.cljs.app.controller.main.pause)
                  (if ( = @(. touchHandler -state) 0)
                   (goog.events.fireListeners
                     touchArea
                     "click"
                     false
                     (js-obj "type" "click" "target" touchArea)))))
 
             (or
                (= (. evt -type)  "mouseup")
                (= (. evt -type)  "mouseout"))
             (if (. this -selected)
               (let [ locY (js.parseInt (.. button -style -top)) ]
                 (set! (. this -selected) false)
                 (cond
                  (= locY buttonStartY) (set! (.-currentTime video) 0)
                  (= locY buttonEndY)   (set! (.-currentTime video) videoDuration)
                  :else
                    (set! (.-currentTime video)
                          (* videoDuration (/ locY travelLength))))
                 (symlog.cljs.app.controller.main.reset
                  (js.Math.round (* (. video -currentTime)FPS)))))
 
             (= (. evt -type) "mousemove")
               (if (. this -selected)
                 (let [ locY (+ (. this -beginY) (- (. evt -screenY) (. this -startY))) ]
                   (cond                  
                    (> locY buttonEndY)     (set! (.. button -style -top) (str buttonEndY "px"))
                    (< locY buttonStartY)   (set! (.. button -style -top) (str buttonStartY "px"))
                    :else
                      (set! (.. button -style -top)  
                            (str
                             (+ (. this -beginY) (- (. evt -screenY) (. this -startY)))
                             "px")))))

 )))this))

(defn touchScreen [ video  ]
   (this-as this
     (set! (. this -state) (atom 0))
     (set! (. this -handler )
           (fn [evt]
             (cond
              (= 0 @(. this -state))
                  (if-not @(.. video -sequencer -interrupted) 
                    (do
                       (reset! (. this -state) 1)
                       (.. video -sequencer pause)
                       (set! (.. playButton -style -opacity) 1)))
                   
               (= 1 @(. this -state))
                (do
                  (reset! (. this -state) 0)
                   (set! (..  playButton -style -opacity) 0)
                  (.. video -sequencer play))
         )))       
  this))

