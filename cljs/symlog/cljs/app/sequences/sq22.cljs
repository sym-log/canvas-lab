(ns symlog.cljs.app.sequences.sq22
  (:require [symlog.cljs.animation.functions :as animate])
  (:use [symlog.cljs.app :only [elements]]))

(defn init []
  (def actions  {
                1 {  
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    (synchronize
                                    0
                                    (fn []
                                        (.clearRect (elements :context)
                                           0
                                           0
                                           (.-width (elements :canvas))
                                           (.-height (elements :canvas)))
                                        (set! (.-className (elements :mainVideo)) "dark")
                                     )
                                    0
                                    (.-fire (animate/animate-path.
                                        (elements :narrator )    ; object to animate
                                        (/ 1000 25)            ; fps
                                        .2                     ; duration
                                        1                      ; scale factor
                                        false                   ; reverse direction
                                        (str "M 420,210 C 704.65414,195.76729 870,120 870,120" )
                                     ))
                                    0
                                    (fn []
                                      (set! (. (elements :mainVideo) -src) (elements :mainVidSrc))
                                      (set! (.-className (elements :mainVideo)) "faded")
                                      (controller/playNarrator)
                                    )
                             )
                     }

                  2 {   ; SHOW ARROW LEFT
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    (.-fire (animate/paint-frames.
                                         (elements :paintFrame)
                                         (.slice @(elements :seq2FrameBuffer) 0 9)
                                         (/ 1000 20)
                                   ))
                      }

                      
                  3 {   ; SHOW ARROW RIGHT
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    (.-fire (animate/paint-frames.
                                         (elements :paintFrame)
                                         (.slice @(elements :seq2FrameBuffer) 10 18)
                                         (/ 1000 20)
                                   ))
                      }

                   4 {   ; SHOW ARROW BACK
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    (.-fire (animate/paint-frames.
                                         (elements :paintFrame)
                                         (.slice @(elements :seq2FrameBuffer) 19 26)
                                         (/ 1000 20)
                                   ))
                      }

                    5 {   ; CLEAR CANVAS
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    #(.clearRect (elements :context)
                                            0
                                            0
                                            (.-width (elements :canvas))
                                            (.-height (elements :canvas))
                                   )
                      } 
                        
                   6 {   ; SHOW ON PRIVATE PROPERTY
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    (.-fire (animate/paint-frames.
                                         (elements :paintFrame)
                                         (.slice @(elements :seq2FrameBuffer) 27 55)
                                         (/ 1000 20)
                                  ))
                      }

                   7 {   ; SHOW WITH OWNER CONSENT
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    (.-fire (animate/paint-frames.
                                         (elements :paintFrame)
                                         (.slice @(elements :seq2FrameBuffer) 55 78 )
                                         (/ 1000 20)
                                   ))
                      }
    
                    8 {   ; SHOW PATROLLING PARKING LOT
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    (.-fire (animate/paint-frames.
                                         (elements :paintFrame)
                                         (.slice @(elements :seq2FrameBuffer) 79 116)
                                         (/ 1000 20)
                                   ))
                       }

                    9 {   ; SHOW NOT RESPONDING TO CALL OR COMPLAINT
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    (.-fire (animate/paint-frames.
                                         (elements :paintFrame)
                                         (.slice @(elements :seq2FrameBuffer) 117 161 )
                                         (/ 1000 20)
                                   ))
                      }

                    10 {   ; CLEAR CANVAS
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    #(.clearRect (elements :context)
                                            0
                                            0
                                            (.-width (elements :canvas))
                                            (.-height (elements :canvas))
                                   )
                      }

                    11 {   ; FADE IN SUSPICION VS. REASONABLE SUSPICION
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    (.-fire (animate/paint-frames.
                                         (elements :paintFrame)
                                         (.slice @(elements :seq2FrameBuffer) 162 167 )
                                         (/ 1000 20)
                                  ))
                      }

                    12 {   ; DRAW CIRCLE AROUND REASONABLE
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    (.-fire (animate/paint-frames.
                                         (elements :paintFrame)
                                         (.slice @(elements :seq2FrameBuffer) 168 177 )
                                         (/ 1000 20)
                                  ))
                       }
                       
                   13 {   ; CHIRON: MORE THAN JUST YOUR IMAGINATION
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    (.-fire (animate/paint-frames.
                                         (elements :paintFrame)
                                         (.slice @(elements :seq2FrameBuffer) 178 198)
                                         (/ 1000 20)
                                  ))
                       }
                       
                   14 {   ; CLEAR CANVAS
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    #(.clearRect (elements :context)
                                            0
                                            0
                                            (.-width (elements :canvas))
                                            (.-height (elements :canvas))
                                   )
                      }
  
                   15 {   ; FADE IN ASSUME GOOD FAITH
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    (.-fire (animate/paint-frames.
                                         (elements :paintFrame)
                                         (.slice @(elements :seq2FrameBuffer) 199 207)
                                         (/ 1000 20)
                                   ))
                       }
                       
                    16 { ;CLEAR CANVAS
                         ;PAUSE NARRATOR AND RETURN TO HOME WITH SHRINK 
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                        :trigger   (synchronize
                                    0
                                     #(.clearRect (elements :context)
                                            0
                                            0
                                            (.-width (elements :canvas))
                                            (.-height (elements :canvas))
                                      )
                                    0
                                    #(controller/pauseNarrator)
                                    0
                                    (.-fire (animate/animate-path.
                                        (elements :narrator )    ; object to animate
                                        (/ 1000 20)            ; fps
                                        .2                     ; duration
                                        .5                     ; scale factor
                                        false                   ; reverse direction
                                        (str "M 870,120 C 602.16633,60.481405 265,52 265,52")
                                        ))
                                   )   
                       }
          }         
))
