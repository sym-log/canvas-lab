(ns symlog.cljs.animation.functions)

(goog.inherits (defn paint-frames [ image frames fps ]
   ; the rider is a function you can pass that will be submitted to execute async when
   ; an instance of this function is triggered                
   (this-as this
     (goog.events.EventTarget.call this)                     
     (set! (. this -counter) (atom 0))
     (set! (. this -timer) (goog.Timer. (. this -fps)))
     (set! (. this -calc) (fn []
             (let [ frame (aget frames  @(. this -counter)) ]
               (if frame
                 (do
                   (set! (. image -src) frame )
                   (swap! (. this -counter) inc))
                 (do
                   (reset! (. this -counter) 0)
                   (goog.events.unlistenByKey (. this -listener)) 
                   (.. this -timer stop)
                   (. this dispatchEvent "done"))
             ))))
     
     (set! (. this -fire) (fn []
         (set! (. this -listener)
            (goog.events.listen (. this -timer) goog.Timer.TICK (. this -calc) false this))
            (.. this -timer start)
         ))
     this)) goog.events.EventTarget)




(goog.inherits (defn paint-frames2 [ image frames fps sequencer ]
   ; the rider is a function you can pass that will be submitted to execute async when
   ; an instance of this function is triggered                
   (this-as this
     (goog.events.EventTarget.call this)
     (set! (. this -timer) (goog.Timer. fps))
     (set! (. this -counter) (atom 0))
     (set! (. this -pause) (fn [] (.. this -timer stop)))
     (set! (. this -play) (fn [] (.. this -timer start)))
     (set! (. this -end) (fn []
                           (.. this -timer stop)
                           (reset! (. this -counter) 0)
                           (. this dispatchEvent "ended")))
     (set! (. this -finish) (fn []
                           (.. this -timer stop)
                           (reset! (. this -counter) 0)
                           (. this dispatchEvent "done")))
     (set! (. this -calc) (fn []
             (let [ frame (aget frames  @(. this -counter)) ]
               (if frame
                 (do
                   (set! (. image -src) frame )
                   (swap! (. this -counter) inc))
                 (. this finish)))))
     
     (goog.events.listen (. this -timer)
                         goog.Timer.TICK (. this -calc) false this)
     (goog.events.listen sequencer "pause" (. this -pause))
     (goog.events.listen sequencer "resume" (. this -play))
     (goog.events.listen sequencer  "end" (. this -end))
     
    this)) goog.events.EventTarget)








(goog.inherits (defn animate-path [ obj fps duration scale reverse pathstr]
   ; the rider is a function you can pass that will be submitted to execute async when
   ; an instance of this function is triggered                

    (this-as this
           (goog.events.EventTarget.call this)
           (set! (. this -timer) (goog.Timer. (. this -fps)))
           (set! (. this -path) (js.document.createElementNS "http://www.w3.org/2000/svg" "path"))
           (.setAttribute (. this -path) "d" pathstr)
           (set! (. this -length) (.. this -path getTotalLength))
           (set! (. this -percent) (atom 0))
           (set! (. this -fire)
             (fn []
              (set! (. this -sWidth) (.  obj -offsetWidth))
              (set! (. this -sHeight) (. obj -offsetHeight))
              (set! (. this -listener)
                 (goog.events.listen (. this -timer) goog.Timer.TICK (. this -calc) false this))
              ( set! (. this -startTime) (goog.now))
              (.. this -timer start)
              
           ))
           (set! (. this -calc)
             (fn []
               (reset! (. this -percent)
                    (/ (/ (- (goog.now) (. this -startTime)) 1000) duration))
           
               (cond
                  (< @(. this -percent) 1) (. this step)
               :else
                 (do
                   (.. this -timer stop)
                   (goog.events.unlistenByKey (. this -listener)) 
                   (reset! (. this -percent) 1)
                   (. this step)
                   (. this dispatchEvent "done")
             ))))
           (set! (. this -step)
              (fn []
                (let [
                  adjustedPercent (if reverse (- 1 @(. this -percent)) @(. this -percent))
                  adjustedScale   (if (< scale 1) (- scale) (- scale 1))
                  width (+ (. this -sWidth) (*  (. this -sWidth) adjustedScale @(. this -percent)))
                  height (+ (. this -sHeight) (* (. this -sHeight) adjustedScale @(. this -percent)))
             
                  currentPoint  (.getPointAtLength (. this -path)
                                                   (* (. this -length)  adjustedPercent))             ]
                  (set! (.. obj -style -top) (str (- (. currentPoint -y) (/ height 2)) "px"))
                  (set! (.. obj -style -left) (str (- (. currentPoint -x) (/ width 2 )) "px"))
                  (set! (.. obj -style -width) (str width "px"))
                  (set! (.. obj -style -height) (str height "px"))
                  
          )))
   this)) goog.events.EventTarget)

