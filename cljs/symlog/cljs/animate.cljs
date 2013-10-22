(ns symlog.cljs.animate)

(defn paint-frames [ image frames fps ]
  (this-as this
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
                   (.. this -timer stop))
             ))))
     
     (set! (. this -fire) (fn []
         (set! (. this -listener)
            (goog.events.listen (. this -timer) goog.Timer.TICK (. this -calc) false this))
            (.. this -timer start)
     ))this))

(defn animate-path [ obj fps duration scale reverse pathstr ]
  (this-as this
           
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
               (set! (.. obj -style -cssText)
                  (str "top:"   (- (. currentPoint -y) (/ height 2)) "px; "
                   "left:"  (- (. currentPoint -x) (/ width 2 )) "px; "
                   "width:" width "px; "
                   "height:" height "px; "))
          )))
   this))

