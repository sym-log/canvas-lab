(ns symlog.cljs.app.handlers.toc
  (:require [symlog.cljs.app.elements :as elements]))

(def containerHeight 576)
(def scrollDivWidth 2010)
(def maxUp (+(- scrollDivWidth) containerHeight))
(def maxDown 0)
(def selected false)
(def locY nil)
(def easeOffset 30)

(defn init []
  (def target elements/tocCanvas)
  (goog.events.listen ; THE HANDLER FOR THE CONTROL BUTTON
     target
     (array "mousedown" "mousemove" "mouseup" "mouseout")
     TOCScrollHandler) )

(defn TOCScrollHandler [evt]
  (.preventDefault evt)
  (cond

   (= (. evt -type) "mousedown")
   (if-not  (= "buttonTouchArea" (.. evt -target -id))
     (do
      (set! selected true)
      (set! startY (. evt -screenY))
      (set! beginY (js.parseInt (.. target  -style -top)))))

    (or
       (= (. evt -type)  "mouseup")
       (= (. evt -type)  "mouseout"))
         (set! selected false)
    
    (= (. evt -type) "mousemove")
    (if selected
      (do
      (set! locY (+ beginY (- (. evt -screenY) startY)))
      (cond                  
            (< locY maxUp)
             (set! (.. target -style -top) (str maxUP "px"))
            (>  locY maxDown)
             (set! (.. target -style -top) (str maxDown "px"))
            :else
            (set! (.. target -style -top)(str locY "px")))))
    
))

