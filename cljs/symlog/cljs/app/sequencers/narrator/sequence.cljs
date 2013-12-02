(ns symlog.cljs.app.sequencers.narrator.sequence
  (:use    [symlog.cljs.app.dom :only [elements]]
           [symlog.cljs.animation.timing :only [listenTo serialize chain enChain]]
           [symlog.cljs.animation.functions :only [paint-frames animate-path]]))

(defn init []

(def sequencer symlog.cljs.app.sequencers.narrator.sequencer)
  
(set! (.(elements :narratorVid)-sequencer) sequencer)

(def animations
  (vector
   (paint-frames.
     (elements :paintFrame)
     (.slice @(elements :narratorFrameBuffer) 0 32) ;   1 - FIRST CHIRON - UNDERSTANDS AND RESPECTS
     (/ 1000 20))
   (paint-frames.
     (elements :paintFrame)
     (.slice @(elements :narratorFrameBuffer) 33 67) ;   2 - SECOND CHIRON - NOT CONFRONTATIONAL...
     (/ 1000 20))
   (paint-frames.
     (elements :paintFrame)
     (.slice @(elements :narratorFrameBuffer) 68 99) ;   3 - THIRD CHIRON - PROFSSIONAL
     (/ 1000 20))
   (paint-frames.
     (elements :paintFrame)
     (.slice @(elements :narratorFrameBuffer) 100 130) ;  4 - FOURTH CHIRON - INTEGRITY
     (/ 1000 20 ))
   (paint-frames.
     (elements :paintFrame)
     (.slice @(elements :narratorFrameBuffer) 131 135) ; 5 - ARROW TO LEFT
     (/ 1000 20))
   (paint-frames.
     (elements :paintFrame)
     (.slice @(elements :narratorFrameBuffer) 136 140) ; 6 - ARROW TO RIGHT
     (/ 1000 20))
   (paint-frames.
     (elements :paintFrame)
     (.slice @(elements :narratorFrameBuffer) 141 144) ; 7 - ARROW TO BACK
     (/ 1000 20))
   (paint-frames.
     (elements :paintFrame)
     (.slice @(elements :narratorFrameBuffer) 145 163) ; 8 - ON PRIVATE PROPERTY 
     (/ 1000 20))
   (paint-frames.
     (elements :paintFrame)
     (.slice @(elements :narratorFrameBuffer) 164 185) ; 9 - WITH OWNER CONSENT 
     (/ 1000 20))
   (paint-frames.
     (elements :paintFrame)
     (.slice @(elements :narratorFrameBuffer) 186 228) ;10 - NOT RESPONDING...  
     (/ 1000 20))
   (paint-frames.
     (elements :paintFrame)
     (.slice @(elements :narratorFrameBuffer) 229 262) ;11 - PATROLLING LOT 
     (/ 1000 20))
   (paint-frames.
     (elements :paintFrame)
     (.slice @(elements :narratorFrameBuffer) 263 268 );12 - REASONABLE SUSPICION
     (/ 1000 20))
   (paint-frames.
     (elements :paintFrame)
     (.slice @(elements :narratorFrameBuffer) 269 278 );13 - CIRCLE AROUND REASONABLE 
     (/ 1000 20))
   (paint-frames.
     (elements :paintFrame)
     (.slice @(elements :narratorFrameBuffer) 279 300 );14 - FACT OUTSIDE IMAGINATION
     (/ 1000 20))
   (paint-frames.
     (elements :paintFrame)
     (.slice @(elements :narratorFrameBuffer) 301 306 ); ALWAYS GIVE BENEFIT OF THE DOUBT
     (/ 1000 20))

))   

(def seqmap 
  
  { 1  {  ; TYPE first CHIRON
         :frame 927
         :sequence (fn []
                     (reset! (. sequencer -playing) (animations 0))
                     (.fire (animations 0)
                            (fn []
                             (reset! (. sequencer -playing) nil))))
        }

   2  {  ; TYPE second CHIRON
        :frame 1352
       :sequence (fn []
                   (reset! (. sequencer -playing) (animations 1))
                   (.fire (animations 1)
                      (fn [] (reset! (. sequencer -playing) nil))))
       }

   3 {   ; TYPE THIRD CHIRON
        :frame 1989
      :sequence (fn []
                  (reset! (. sequencer -playing) (animations 2))
                  (.fire (animations 2)
                      (fn [] (reset! (. sequencer -playing) nil))))
        
      }

   4 {   ; TYPE FOURTH CHIRON
       :frame 2456
      :sequence (fn []
                  (reset! (. sequencer -playing) (animations 3))
                  (.fire (animations 3)
                      (fn [] (reset! (. sequencer -playing) nil))))
      }

   5 { ; CLEAR CANVAS

      :frame 3448
      :sequence (fn [] (..(elements :paintFrame)-clearit fire)
                       (reset! (. sequencer -playing) nil))
      } 

   6 {   ; SHOW ARROW LEFT
       :frame 5036
      :sequence (fn []
                  (reset! (. sequencer -playing) (animations 4))
                  (.fire (animations 4)
                      (fn [] (reset! (. sequencer -playing) nil))))
      }

   7 {   ; SHOW ARROW RIGHT
       :frame 5154
      :sequence (fn []
                  (reset! (. sequencer -playing) (animations 5))
                  (.fire (animations 5)
                      (fn [] (reset! (. sequencer -playing) nil))))
      }

   8 {   ; SHOW ARROW BACK
       :frame 5324 
      :sequence (fn []
                  (reset! (. sequencer -playing) (animations 6))
                  (.fire (animations 6)
                      (fn [] (reset! (. sequencer -playing) nil))))
      }

   9 {   ; CLEAR CANVAS
        :frame 5480
        :sequence (fn [] (..(elements :paintFrame)-clearit fire)
                       (reset! (. sequencer -playing) nil))
      }

  10 {   ; SHOW ON PRIVATE PROPERTY
        :frame 5629
      :sequence (fn []
                  (reset! (. sequencer -playing) (animations 7))
                  (.fire (animations 7)
                      (fn [] (reset! (. sequencer -playing) nil))))
      }

 
  11 {   ; SHOW WITH OWNER CONSENT
        :frame 5700
      :sequence (fn []
                  (reset! (. sequencer -playing) (animations 8))
                  (.fire (animations 8)
                      (fn [] (reset! (. sequencer -playing) nil))))
      }

  12 { ; SHOW NOT RESPONDING
        :frame 5832
      :sequence (fn []
                  (reset! (. sequencer -playing) (animations 9))
                  (.fire (animations 9)
                      (fn [] (reset! (. sequencer -playing) nil))))
      }

  13 { ; SHOW PATROLLING PARKING LOT
        :frame 6046
      :sequence (fn []
                  (reset! (. sequencer -playing) (animations 10))
                  (.fire (animations 10)
                      (fn [] (reset! (. sequencer -playing) nil))))             
      }

  14 { ; CLEAR CANVAS
       :frame 6140
       :sequence (fn [] (..(elements :paintFrame)-clearit fire)
                       (reset! (. sequencer -playing) nil))
      }
      
  15 {   ; FADE IN SUSPICION VS. REASONABLE SUSPICION
       :frame 6673
      :sequence (fn []
                  (reset! (. sequencer -playing) (animations 11))
                  (.fire (animations 11)
                      (fn [] (reset! (. sequencer -playing) nil))))
      }

  16 {   ; DRAW CIRCLE AROUND REASONABLE
       :frame 6752
      :sequence (fn []
                  (reset! (. sequencer -playing) (animations 12))
                  (.fire (animations 12)
                      (fn [] (reset! (. sequencer -playing) nil))))
      }
                       
  17 {   ; FACT OUTSIDE YOUR IMAGINATION
       :frame 7153
      :sequence (fn []
                  (reset! (. sequencer -playing) (animations 13))
                  (.fire (animations 13)
                      (fn [] (reset! (. sequencer -playing) nil))))
      }

  18 {   ; CLEAR CANVAS
       :frame 7410
       :sequence (fn [] (..(elements :paintFrame)-clearit fire)
                       (reset! (. sequencer -playing) nil))
      }

  19 {   ; FADE IN BENEFIT OF THE DOUBT
       :frame 7745
      :sequence (fn []
                  (reset! (. sequencer -playing) (animations 14))
                  (.fire (animations 14)
                      (fn [] (reset! (. sequencer -playing) nil))))
      }
      
  20 {   ; CLEAR CANVS
      :frame 8409
      :sequence (fn [] (..(elements :paintFrame)-clearit fire)
                       (reset! (. sequencer -playing) nil))
 
      }





   21 { ; endpoint
       :frame 15000
       :sequence (fn [] (js.console.log "done"))
      }
}))

