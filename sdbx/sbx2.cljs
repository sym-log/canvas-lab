(ns sbx2)


(goog.inherits (defn sync-prep [ delay func ]
     ;attaches a delay and preps a raw function to be part of a synchronized chain via synchronize fn
     (this-as this
           (goog.events.EventTarget.call this)
              (set! (. this -fire) (fn []
                                      (if (= 0 delay) 
                                          (do (func)
                                              (. this dispatchEvent "done"))
                                          ((fn [] ( js.setTimeout
                                             (fn []
                                                (func)
                                           (. this dispatchEvent "done")) delay)))
                )))
      this)        
    ) goog.events.EventTarget)



(defn synchronize [& args]
  (let [ funcobj (js-obj)
         count (atom -1) ]
    
    (doseq [[ k v ] (partition 2 (. args -arr)) ] (aset funcobj (swap! count inc) (sync-prep. k v)))
    
    (let [ arg (js->clj funcobj)]
      (fn []
        (doseq [ [ k v ] arg ] (let [ backidx (.toString (- (js.Number k) 1)) ]
                           (if (= k "0") nil
                               (goog.events.listen (arg backidx)
                                               "done"
                                               (. (arg k) -fire)))))
        (.fire (arg "0"))))

    ))

 (def mike (synchronize
           2000
           #(js.console.log "hello")
           0
           #(js.console.log "goodbye")
           1000
           #(js.console.log "dont")
           4000
           #(js.console.log "balf")))



(mike)
