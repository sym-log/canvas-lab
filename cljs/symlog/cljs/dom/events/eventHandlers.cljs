(ns symlog.cljs.dom.eventHandlers)

(goog.inherits
 (defn pause-play-alternator []
   (this-as this
     (set! (. this -counter) (atom 0))
     (set! (. this -handler )
           (fn [evt]
             (if (= 0 @(. this -counter))
               (do
                 (reset! (. this -counter) 1)
                 (. this dispatchEvent "pause"))
               (do
                 (reset! (. this -counter) 0)
                 (. this dispatchEvent "play")))))
                  
       this))
 goog.events.EventTarget)



