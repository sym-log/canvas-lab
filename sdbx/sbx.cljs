(ns user
  (:use    [symlog.cljs.app.dom.elements :only [elements]]
           [symlog.cljs.animation.timing :only [listenTo serialize chain]]
           [symlog.cljs.animation.functions :only [paint-frames]]))

(def multi (/ 532 (.-duration (elements :mainVideo))))
(def duration (.-duration (elements :mainVideo)))

(goog.events.listen (elements :mainVideo)
                    "timeupdate"
                    (fn [evt]
                      (let [ locY  (* multi (.. evt -target -currentTime)) ]
                        (cond
                         (= 0 locY)
                         (set! (.. (elements :controlButton) -y -baseVal -value) 2)
                         (= 532 locY)
                         (set! (.. (elements :controlButton) -y -baseVal -value) 534)
                         :else
                          (set! (.. (elements :controlButton) -y -baseVal -value) locY)))))

(defn controlButtonEventHandler [target]
  (this-as this
           
    (set! (. this -fire)
       (fn [evt]
          (.preventDefault evt)     
          (cond
            
             (= (. evt -type) "mousedown")
             (do
                (set! (. this -selected) true)
                (set! (. this -startY) (. evt -screenY))
                (set! (. this -beginY) (.. target  -y -baseVal -value))
                (symlog.cljs.app.controller.main.pause))
 
             (or
                (= (. evt -type)  "mouseup")
                (= (. evt -type)  "mouseout"))
             (if (. this -selected)
               (let [ locY (.. target -y -baseVal -value)
                      frame (js.Math.round (* (. (elements :mainVideo) -currentTime)15)) ]

                 (symlog.cljs.app.frameBuffer.nextFrame frame)
                 (set! (. this -selected) false)
                 (cond
                  (= locY 2) (set! (.-currentTime (elements :mainVideo)) 0)
                  (= locY 534) (set! (.-currentTime (elements :mainVideo)) duration)
                  :else
                    (set! (.-currentTime (elements :mainVideo))
                          (* duration (/ (.. target -y -baseVal -value)532))))
                 (symlog.cljs.app.controller.main.reset frame)))
 
             (= (. evt -type) "mousemove")
               (if (. this -selected)
                 (let [ locY (+ (. this -beginY) (- (. evt -screenY) (. this -startY))) ]
                   (cond
                    (> locY 534) (set! (.. target -y -baseVal -value) 534)
                    (< locY 2)   (set! (.. target -y -baseVal -value) 2)
                    :else
                      (set! (.. target -y -baseVal -value)  
                        (+ (. this -beginY) (- (. evt -screenY) (. this -startY)))))))

    )))this))

(def mike (controlButtonEventHandler. (elements :controlButton)))

(goog.events.listen (elements :controlButton)
                    (array "mousedown" "mousemove" "mouseup" "mouseout")
                    (.-fire mike))
