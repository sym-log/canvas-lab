(ns symlog.cljs.animation.timing )

(defn listenTo [func]
  (set! (. func -toListento) true)
  func)

(defn pause [duration callback]
  (js.setTimeout callback duration))
  

             
(defn chain [& args]
  ; takes however many functions you pass and returns a function that links each
  ; function in the list to the one before it via a listener.
  ; each function must have a fire method and dispatch a "done" when finished
  ; use sync, below, and pause to help
  ; dispatches a "done" when the chain is complete
  
  (let [ ref (zipmap (into [] (range (count args))) (into [] args))
              lastidx (- (count args) 1)
              returnFunction
               (fn []
                 (this-as this
 ;CHECK!                  (goog.events.EventTarget.call this)
                   (set! (. this -fire)
                      (fn []      
                        (doseq [[k v] ref]
                          (cond
                           (= k lastidx)
                             (do
                               (goog.events.listenOnce
                                 (ref k)
                                 "done"
                                  #(. this dispatchEvent "done"))
                               (.fire(ref 0)))
                           :else
                              (do 
                                (goog.events.listenOnce
                                  (ref k)
                                  "done"
                                #(.fire(ref (+ k 1)))))
                  )))) 
                this))
        ]
          (goog.inherits returnFunction goog.events.EventTarget)
          (returnFunction.)     
  ))

(goog.inherits (defn pauseInChain [duration]
  ; designed to work with chain, above.
   (this-as this
; CHECK!        (goog.events.EventTarget.call this)                       
        (set! (. this -fire) (fn []
                               (js.setTimeout #(. this dispatchEvent "done") duration))
        )
    this)) goog.events.EventTarget)


(goog.inherits (defn enChain [ func ]
  ; designed to work with chain, above
       (this-as this
;CHECK!           (goog.events.EventTarget.call this)
           (set! (. this -fire) (fn [] (func)
                                  (. this dispatchEvent "done")))
           this))
goog.events.EventTarget)

(goog.inherits (defn serializePrep [ delay func ]
  ;attaches a delay and preps a raw function to be part of a synchronized chain via synchronize fn
         (this-as this
;CHECK!           (goog.events.EventTarget.call this)
           (set! (. this -func2go) func)
           (set! (. this -fire) (fn []
                                      (if (= 0 delay) 
                                        (do
                                          (if (.. this -func2go -fire) (.. this -func2go fire) (. this func2go))
                                          (. this dispatchEvent "done"))
                                         (js.setTimeout
                                          (fn[]
                                            (if (.. this -func2go -fire) (.. this -func2go fire) (. this func2go))
                                            (. this dispatchEvent "done"))
                                          delay))))
              
         this))  goog.events.EventTarget)


(defn serialize [& args]
  (let [ argmap (zipmap (range (/(count args) 2)) (partition 2 args))
         refseq (into {} (for [x argmap] { (x 0) (serializePrep. (first (x 1)) (second (x 1))) }))
         lastidx (-(count refseq)1)
         returnFunction
            (fn []
               (this-as this
;CHECK!                (goog.events.EventTarget.call this)
                (set! (. this -fire)
                    (fn []
                       (doseq [ [ k v  ] refseq ]
                          (cond 
                           (= k 0)
                               (if (.. v -func2go -toListento)
                                 (goog.events.listen (. v -func2go) "done" #(. this dispatchEvent "done"))
                                 (do
                                   (if (= k lastidx)
                                     (goog.events.listen v "done" #(. this dispatchEvent "done"))
                                     nil)))
                           (= k lastidx)
                               (if (.. v -func2go -toListento)
                                 (do (goog.events.listen (. v -func2go) "done" #(. this dispatchEvent "done"))
                                     (goog.events.listen (refseq (- k 1)) "done" (. v -fire)))
                                 (do (goog.events.listenOnce ( refseq (- k 1)) "done" (. v -fire))
                                     (goog.events.listenOnce v  "done" #(. this dispatchEvent "done"))))
                           :else
                           (if (.. v -func2go -toListento)
                              (do 
                                (goog.events.listen (. v -func2go) "done" #(. this dispatchEvent "done"))
                                (goog.events.listen (refseq (- k 1)) "done" (. v -fire)))
                              (goog.events.listen (refseq (- k 1)) "done" (. v -fire)))
                           ))
                       (if (.-fire (refseq 0)) (.fire(refseq 0)) ((refseq 0)))))
                this))
        ]
    (goog.inherits returnFunction goog.events.EventTarget)
    (returnFunction.)))

