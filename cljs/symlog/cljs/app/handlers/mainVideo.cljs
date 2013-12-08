(ns symlog.cljs.app.handlers.mainVideo
  (:require [symlog.cljs.app.elements :as elements]))

(defn init []
  
   (def videoDuration (.-duration elements/mainVideo))
   (def travelLength 2000)
   (def multiplier (/ travelLength videoDuration))
   (def buttonStartY 2)
   (def buttonEndY 2000)
   (def controllerPath elements/controllerTouchArea)
   (def video elements/mainVideo)
   (def playButton elements/mainVideoPlayButton)
   (def FPS elements/FPS)
   (def button elements/controlButton )
   (def buttonHandler (controlButton. button))
   (def touchArea elements/mainVideoPlayTouchArea)
   (def touchHandler (touchScreen. video))
   (def buttonHandler (controlButton. button))
   (def _subseq (.-sequencer elements/narratorVid))
   (def buttonOffset 58)
  
   (goog.events.listen ;THIS MOVES THE CONTROL BUTTON DOWN THE TRACK AS THE VIDEO PLAYS
      video
      "timeupdate"
      (fn [evt]
        (let [ locY  (* multiplier (.. evt -target -currentTime)) ]
          (cond
              (= 0 locY)
                (set! (.. button -y -baseVal -value) buttonStartY)
              (= travelLength locY)
                (set! (.. button -y -baseVal -value) buttonEndY)
              :else
              (set! (.. button -y -baseVal -value) locY)))))

   (goog.events.listen
    touchArea
    "click"
    (.-fire touchHandler))
    
   (goog.events.listen
      button
      (array "mousedown" "mousemove" "mouseup" "mouseout")
      (.-fire buttonHandler)
      true)
   
   (goog.events.listen
    controllerPath
    "click"
    controlButtonPath)

 )

(defn controlButtonPath [ evt ]
  (let [ locY (-
               (. evt -clientY)
               buttonOffset
               (js.parseInt (.. evt -target -parentElement -style -top))) ]
    (set! (.. button -y -baseVal -value) locY)
    (set! (.-currentTime video)
          (* videoDuration (/ locY travelLength)))))
  
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
                   (set! (. this -beginY) (.. button  -y -baseVal -value))
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
               (let [ locY (.. button -y -baseVal -value) ]
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
             (do
               (if (. this -selected)
                 (let [ locY (+ (. this -beginY) (- (. evt -screenY) (. this -startY))) ]
                   (cond                  
                    (> locY buttonEndY)     (set! (.. button -y -baseVal -value) buttonEndY)
                    (< locY buttonStartY)   (set! (.. button -y -baseVal -value) buttonStartY)
                    :else
                    (do
                    (set! (.. button -y -baseVal -value) (+ (. this -beginY) (- (. evt -screenY) (. this -startY)))))))))
  )))this))
                    

(defn touchScreen [ video  ]
   (this-as this
     (set! (. this -state) (atom 0))
     (set! (. this -fire )
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

