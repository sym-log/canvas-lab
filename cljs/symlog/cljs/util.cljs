(ns symlog.cljs.util)


(goog.inherits (defn dispatcher []
  (this-as this      
    (set! (. this -send)
       (fn [message]             
           (. this dispatchEvent message)))

  this))goog.events.EventTarget)         

(defn nodelist->coll [nl]
  (for [x (range 0 (.-length nl))]
    (aget nl x)))
