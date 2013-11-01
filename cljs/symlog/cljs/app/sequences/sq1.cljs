(ns symlog.cljs.app.sequences.sq1
  (:use [symlog.cljs.animation.timing :only [toListento serialize chain]]
        [symlog.cljs.animation.sequencers :only [toVideo]]
        [symlog.cljs.app :only [elements]]
        [ symlog.cljs.animation.functions :only [paint-frames2]]
    
        ))



(defn init []
  (def controller (toVideo. (elements :narrator)  300 700 15 seqmap))
  (def seqmap
            { 
                   :1 {   ; TYPE FIRST CHIRON
                      :range      (range 300 350)
                      :triggered  (atom false)
                      :trigger    (paint-frames2.
                                         (elements :paintFrame)
                                         (.slice @(elements :seq1FrameBuffer) 0 34)
                                         (/ 1000 20)
                                         controller)
                       }})
  )
(comment
(init)
(. controller fire)
{
                   :2 {   ; TYPE SECOND CHIRON
                      :range      (range 400 450)
                      :triggered  (atom false)
                      :trigger    (paint-frames.
                                         (app/elements :paintFrame)
                                         (.slice @(app/elements :seq1FrameBuffer) 35 69)
                                         (/ 1000 20))
                       }
                
                   :3 {   ; TYPE THIRD CHIRON
                      :range      (range 500 550)
                      :triggered  (atom false)
                      :trigger    (paint-frames.
                                         (app/elements :paintFrame)
                                         (.slice @(app/elements :seq1FrameBuffer) 70 104)
                                         (/ 1000 20))
                      }

                   :4 {   ; TYPE FOURTH CHIRON
                      :range      (range 601 650)
                      :triggered  (atom false)
                      :trigger    (paint-frames.
                                         (app/elements :paintFrame)
                                         (.slice @(app/elements :seq1FrameBuffer) 105 138)
                                         (/ 1000 20))
                       }
 })