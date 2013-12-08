(ns symlog.cljs.animation.functions)

(defn loadingCircle [ target ]
  (this-as this
     (set! (. this -target) target)     
     (set! (. this -rotation) (atom 0))
     (set! (. this -timer) (goog.Timer. 100))
     (set! (. this -fire)
           (fn []
             (if (. this -playing) nil
                 (do
                   (set! (. this -playing) true)
                   (set! (.. (. this -target) -parentNode -style -display) "inline")
                   (.. this -timer start)))))
     (set! (. this -play)
           (fn []
              (swap! (. this -rotation) + 30)
              (.(. this -target) setAttribute
                    "transform"
                    (str
                       "rotate("
                       @(. this -rotation)
                       ",50,50)"))))
     (set! (. this -stop)
           (fn []
             (set! (.. this -target -parentNode -style -display) "none")
             (.. this -timer stop)))
     
     (goog.events.listen (. this -timer)
                         goog.Timer.TICK
                         (. this -play) false this)
  this))

(defn paint-frames [ image frames fps ]
   ; the rider is a function you can pass that will be submitted to execute async when
   ; an instance of this function is triggered                
   (this-as this
     (set! (. this -timer) (goog.Timer. fps))
     (set! (. this -counter) (atom 0))
     (set! (. this -pause) (fn []
                             (.. this -timer stop)))
                             
     (set! (. this -play) (fn [] (.. this -timer start)))
     (set! (. this -fire) (fn [callback]
                            (set! (. this -callback) callback)
                            (.. this -timer start)))
     (set! (. this -stop) (fn []
                           (.. this -timer stop)
                           (reset! (. this -counter) 0)
                           (.. image -clearit fire)))
     (set! (. this -end) (fn []
                           (.. this -timer stop)
                           (reset! (. this -counter) 0)
                           (. this callback)))
     (set! (. this -calc) (fn []
             (let [ frame (aget frames  @(. this -counter)) ]
               (if frame
                 (do
                   (set! (. image -src) frame )
                   (swap! (. this -counter) inc))
                 (. this end)))))

     (goog.events.listen (. this -timer)
                               goog.Timer.TICK (. this -calc) false this)
     this)) 

(defn animate-path [ obj fps duration scale reverse pathstr ]
   ; the rider is a function you can pass that will be submitted to execute async when
   ; an instance of this function is triggered                

    (this-as this
           (set! (. this -timer) (goog.Timer. (. this -fps)))
           (set! (. this -path) (js.document.createElementNS "http://www.w3.org/2000/svg" "path"))
           (.setAttribute (. this -path) "d" pathstr)
           (set! (. this -length) (.. this -path getTotalLength))
           (set! (. this -percent) (atom 0))
           (set! (. this -fire)
             (fn [callback]
              (set! (. this -callback) callback)      
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
                   (. this callback)
             ))))
           (set! (. this -step)
              (fn []
                (let [
                  adjustedPercent (if reverse (- 1 @(. this -percent)) @(. this -percent))
                  adjustedScale   (if (< scale 1) (-(- 1 scale)) (- scale 1))
                  width (+ (. this -sWidth) (*  (. this -sWidth) adjustedScale @(. this -percent)))
                  height (+ (. this -sHeight) (* (. this -sHeight) adjustedScale @(. this -percent)))
             
                  currentPoint  (.getPointAtLength (. this -path)
                                                   (* (. this -length)  adjustedPercent))             ]
                  (set! (.. obj -style -top) (str (- (. currentPoint -y) (/ height 2)) "px"))
                  (set! (.. obj -style -left) (str (- (. currentPoint -x) (/ width 2 )) "px"))
                  (set! (.. obj -style -width) (str width "px"))
                  (set! (.. obj -style -height) (str height "px"))
                  
          )))
   this)) 

