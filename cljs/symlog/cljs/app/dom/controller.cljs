(ns symlog.cljs.app.dom.controller
  (:require
            [symlog.cljs.animation.sequencers :as seqs]
            [symlog.cljs.app.dom.actions :as actions]
            [symlog.cljs.app.sequences :as sqns]  )
  (:use [symlog.cljs.animation.timing :only [toListento serialize chain]]
        [symlog.cljs.animation.sequencers :only [toVideo]]
       
    
        ))

(comment
  
(symlog.cljs.app.dom.actions.init)
(symlog.cljs.app.sequences.sq1.init)

(goog.events.listen (elements :narrator) "click" #(js.console.log "hello"))

(def mike
  (chain
   
     (serialize
        0
      (actions/_map :1)
        0
       (toListento (toVideo. (elements :narrator)  0 100 15 ))
      )
     
     (serialize
        0
      (actions/_map :2)
        100
       (toListento (toVideo. (elements :narrator)  100 200 15 ))
      )
     
     (serialize
        0
      (actions/_map :3)
        0
      (toListento (toVideo. (elements :mainVideo)  0 300 15 ))
      )
     
     (serialize
        0
      (actions/_map :4)
       1000
      (toListento (toVideo. (elements :narrator ) 300 800 15
                            (.-_map symlog.cljs.app.sequences.sq1) ))
      )
     
 )) 

)
 


