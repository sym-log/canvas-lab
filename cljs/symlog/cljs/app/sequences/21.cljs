(ns symlog.cljs.app.sequences.sq21
  (:require [symlog.cljs.animation.functions :as animate])
  (:use     [symlog.cljs.animation.sequencers :only [toVideo]]
            [symlog.cljs.app :only [elements]]))

(defn init []
  (def actionlist
                 {
                  1 {   ; MOVE NARRATOR TO CENTER SCREN RESIZE BY 3 THEN START PLAYING
                     :enabled     (atom true)
                     :range       (range 0 100)
                     :triggered   (atom false)
                     :trigger     (synchronize
                                0
                               (.-fire (animate/animate-path.
                                        (elements :narrator)     ; object to animate
                                        (/ 1000 25)              ; fps
                                        .3                       ; duration
                                         4                       ; scale factor
                                         false                   ; reverse direction
                                (str "m 265,52 c 9.56472,122.78368 97.77957,193.18726 207.23261,"
                                     "222.73973 C 508.42367,283.64875 547.29345,294.84793 600,300")
                                ) )
                                0 
                                #(.play (elements :narrator))
 
                                )
                     }                   

                  2 {   ; PAUSE NARRATOR, MOVE TOP LEFT, REDUCE BY 1/3, CHANGE MAINVID SRC;
                        ; PLAY NARRATOR
                     :enabled    (atom true)
                     :range      (range 101 200)
                     :triggered  (atom false)
                     :trigger    (synchronize
                               0
                               #(.pause (elements :narrator))
                               0
                               (.-fire (animate/animate-path.
                                        (elements :narrator )    ; object to animate
                                        (/ 1000 25)            ; fps
                                        .3                     ; duration
                                        .5                     ; scale factor
                                        true                   ; reverse direction
                               (str "m 420,210 c 0,0 26.04289,32.69952 71.51328,53.92846 "
                                    "C 520.5366,277.47869 546.81365,285.37235 600,300")
                               ))
                               500
                               (fn [] (set! (. (elements :mainVideo) -src) (elements :goodcopSrc))
                                      (set! (.-className (elements :mainVideo)) "faded")
                                      (.play (elements :narrator)))
                                )
                     }
 
                  3 {    ; NARRATOR PAUSED, MOVED TO REST POSITION BRIGHTEN MAIN AND PLAY 
                     :enabled    (atom true)
                     :range      (range 201 300)
                     :triggered  (atom false)
                     :trigger    (synchronize
                               0
                               #(.pause (elements :narrator))
                               0
                               (.-fire (animate/animate-path.
                                         (elements :narrator)     ; object to animate
                                         (/ 1000 25)            ; fps
                                         .5                     ; duration
                                         .5                     ; scale factor
                                         true                   ; reverse direction
                               (str "m 265,52 c 0,0 9.35,58.01292 47.74129,100.8298 "
                                    "C 332.33405,174.68113 366.81365,195.37235 420,210")
                               ))
                               500
                               (fn []
                                 (set! (.-className (elements :mainVideo)) "unfaded")
                                 (.play (elements :mainVideo)))

                                )
                     }
}))         

 (comment  
   (animate/animate-path.
    (def mike {
                   4 {     ; MAINVID PAUSED/DIMMED, NARRATOR INSIDE CORNER OF MOVIE AND PLAYS
                      :enabled    (atom true)
                      :range      (range 301 400)
                      :triggered  (atom false)
                      :trigger    (synchronize
                               0
                               (fn [] (.pause (elements :mainVideo))
                                      (set! (.-className (elements :mainVideo)) "faded"))
                               500
                               (.-fire (animate/animate-path.
                                         (elements :narrator)     ; object to animate
                                          (/ 1000 25)             ; fps
                                          .2                      ; duration
                                          2                       ; scale factor
                                          false                   ; reverse direction
                               (str "m 265,52 c 0,0 9.35,58.01292 47.74129,100.8298 "
                                    "C 332.33405,174.68113 366.81365,195.37235 420,210")
                                ))
                               0
                               #(.play (elements :narrator))

                                 )
                      }

                   5 {   ; TYPE FIRST CHIRON
                      :enabled    (atom true)
                      :range      (range 401 500)
                      :triggered  (atom false)
                      :trigger    (synchronize
                               0    
                               (.-fire (animate/paint-frames.
                                         (elements :paintFrame)
                                         (.slice @(elements :seq1FrameBuffer) 0 34)
                                         (/ 1000 20)
                               ))
                               )
                      }

                   6 {   ; TYPE SECOND CHIRON
                      :enabled    (atom true)
                      :range      (range 501 600)
                      :triggered  (atom false)
                      :trigger    (synchronize
                               0    
                               (.-fire (animate/paint-frames.
                                         (elements :paintFrame)
                                         (.slice @(elements :seq1FrameBuffer) 35 69)
                                         (/ 1000 20)
                               ))
                               )
                      }
                   7 {   ; TYPE THIRD CHIRON
                      :enabled    (atom true)
                      :range      (range 601 700)
                      :triggered  (atom false)
                      :trigger    (synchronize
                               0    
                               (.-fire (animate/paint-frames.
                                         (elements :paintFrame)
                                         (.slice @(elements :seq1FrameBuffer) 70 104)
                                         (/ 1000 20)
                               ))
                               )
                      }

                   8 {   ; TYPE FOURTH CHIRON
                      :enabled    (atom true)
                      :range      (range 701 800)
                      :triggered  (atom false)
                      :trigger    (synchronize
                               0    
                               (.-fire (animate/paint-frames.
                                         (elements :paintFrame)
                                         (.slice @(elements :seq1FrameBuffer) 105 138)
                                         (/ 1000 20)
                               ))
                               )
                      }

               }         

        )))
 