(ns symlog.cljs.app.scheduler
  (:use [symlog.cljs.app.dom.elements  :only [elements]]))

(defn clickHandler [ target ]
  (this-as this
     (set! (. this -dragging) (atom false))      
     (set! (. this -listener)
           (fn [ evt ]
             (. evt preventDefault)
             (set! (. this -eventType) (. evt -type))
             (if @(. this -dragging) (. this dragit))
             (if (= (.  evt -type) "mousedown") (js.setTimeout (. this -eventCheck) 400))))
     
     (set! (. this -eventCheck)
           (fn [] 
             (if (= (. this -eventType) "click")
               (if (.  target -sequencer)
                 (if @(.. target -sequencer -paused)
                   (.. target -sequencer play)
                   (.. target -sequencer pause))))
             (if (= (. this -eventType) "mousemove")
               (do
                 (reset! (. this -dragging) true)
                 (set! (. this -startX)
                 (. this dragit)))))
 
     (set! (. this -dragit)
           (fn []
              (do
                (set! (.. target -style -cssText)
                  (str "top:"   (- (. currentPoint -y) (/ height 2)) "px; "
                   "left:"  (- (. currentPoint -x) (/ width 2 )) "px; "
                   "width:" width "px; "
                   "height:" height "px; "))

               
     
     (goog.events.listen target
                         (array "click" "dblclick" "mousedown" "mouseup" "mousemove")
                         (. this -listener) true)
 ))

  
(goog.inherits (defn toVideo [ seqTarget startFrame endFrame frameRate ]
      ; this variation just plays a video until the given frame is reach
  (this-as this
    (set! (. this -paused) (atom true))                        
    (set! (. this -play)
          (fn []
            (reset! (. this -paused) false)
            (. seqTarget play)
            (set! (. this -reqId) (js.requestAnimationFrame (. this -cycle)))))
    (set! (. this -pause)
          (fn []
            (reset! (. this -paused) true)
            (. seqTarget pause)
            (js.cancelAnimationFrame (. this -reqId))))
    (set! (. this -end)
          (fn []
            (. this pause)
            (set! (. seqTarget -sequencer) nil)))
    (set! (. this -cycle)
          (fn [ ]
            (let [ frameNum (js.Math.round (* (. seqTarget -currentTime) frameRate)) ]
              (if (<= frameNum endFrame)
                (js.requestAnimationFrame (. this -cycle))
                (do
                  (. this end)
                  (. this dispatchEvent "done"))))))

    (set! (. this -fire ) (fn []
                              (set! (. seqTarget -sequencer) this)
                              (set! (. seqTarget -currentTime) (/ startFrame frameRate))
                              (. this play)
                              this))
    this
    )) goog.events.EventTarget)

