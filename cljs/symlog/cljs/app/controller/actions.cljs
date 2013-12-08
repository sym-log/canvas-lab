(ns symlog.cljs.app.controller.actions
  (:require [symlog.cljs.app.elements :as elements])
  (:use    [symlog.cljs.animation.timing :only [ pause]]
           [symlog.cljs.animation.functions :only [paint-frames animate-path]]))


(defn init [ controller ]
 
(def sequencers (vector symlog.cljs.app.sequencers.narrator.sequencer))
(def controller controller)
(def animations
  (vector
    (animate-path.
      elements/narratorDiv    ; object to animate width:50px; 
      (/ 1000 25)                ; fps
      .4                         ; duration
       3                         ; scale factor
       false                     ; reverse direction
       (str "m 355,54 c 76.60172,229.51602 275,234 275,234"))
    (animate-path.
       elements/narratorDiv  ; object to animate width:50px
      (/ 1000 25)              ; fps
      .4                       ; duration
      .66666                   ; scale factor
       false                   ; reverse direction
       (str "M 630,288 C 487.55708,313.5267 420,218 420,218"))
    (animate-path.
       elements/narratorDiv  ; object to animate
      (/ 1000 25)              ; fps
      .3                       ; durat
      .5                       ; scale factor
       false                   ; reverse direction
       (str "M 420,218 C 355.87705,146.59579 355,54 355,54"))
    (animate-path.
       elements/narratorDiv      ; object to animate
      (/ 1000 25)                  ; fps
      .4                           ; duration
       2                           ; scale factor
       true                        ; reverse direction
       (str  "M 420,218 C 355.87705,146.59579 355,54 355,54" ))
    (animate-path.
       elements/narratorDiv     ; object to animate width:50px
      (/ 1000 25)                 ; fps
      .4                          ; duration
      .5                          ; scale factor
       true                       ; reverse direction
       (str "M 923,113 C 699.09177,208.04019 420,218 420,218"))
    (animate-path.
       elements/narratorDiv  ; object to animate width:50px
      (/ 1000 25)              ; fps
      .4                       ; duration
       1                       ; scale factor
       false                   ; reverse direction
       (str "M 923,113 C 682.98326,33.262894 355,54 355,54"))
    (animate-path.
       elements/narratorDiv  ; object to animate width:50px
      (/ 1000 25)              ; fps
      .4                       ; duration
       1                       ; scale factor
       true                   ; reverse direction
      (str "M 923,113 C 682.98326,33.262894 355,54 355,54"))
    
    ))

(def dom 
  {  0  { :frame 0
          :sequence
           (fn []
             (if @(((.-scenes (sequencers 0))0):enabled)
               (do
                   (. controller interrupt)
                   (reset! (. controller -playing) (animations 0))
                   (.fire (animations 0)
                         (fn []  
                             (reset! (.-rested (sequencers 0)) false)
                             (.fire (sequencers 0) 0
                                    (fn []
                                      (. controller doframe 0))))))
               (do
                 (reset! (. controller -step) 1)
                 (. controller doframe 0))))
         }
     1 { :frame 0
         :sequence 
           (fn []
             (if  @(((.-scenes (sequencers 0))1):enabled)
               (do
                 (set! (.. controller -target -currentTime) (/ 3 15))
                 (pause 300
                   (fn []
                     (.fire (animations 1)
                        (fn []
                          (.fire (sequencers 0) 1 
                             (fn []
                               (pause 300
                                  (fn []
                                      (.fire (animations 2)
                                            (fn []
                                                (reset! (.-rested (sequencers 0)) true)
                                                (reset! (. controller -playing) nil)
                                                (js.setTimeout (. controller -resume) 700))))))))))))
               (do
                (js.requestAnimationFrame (. controller -cycler))
                (.. controller -target play))))
         } 
                                                
     2  { :frame 2420 
          :sequence
         (fn []
            (if @(((.-scenes (sequencers 0))2):enabled)  
                (do
                  (. controller interrupt)
                  (set! (.. controller -target -style -opacity) .3) 
                  (pause 1000
                    (fn []
                       (.fire (animations 3)
                           (fn []
                               (reset! (.-rested (sequencers 0)) false)
                               (.fire (sequencers  0)
                                      2
                                     (fn []
                                      (.fire (animations 4) ;from left corner main to top right main
                                        (fn []
                                             (set! (.. controller -target -currentTime) (/ 2430 15))
                                             (.. elements/paintFrame -clearit fire)
                                             (reset! (. controller -playing) nil)
                                             (. controller doframe 2430))))))))))
                (do
                  ( set! (.. controller -target -style -opacity) 1)
                  (reset! (. controller -playing) nil)
                  (js.requestAnimationFrame (. controller -cycler))
                  (.. controller -target play)))) 
         }
     3  { :frame 2430  
          :sequence
         (fn []
           (if @(((.-scenes (sequencers 0))3):enabled)
             (do
               (. controller interrupt)
               (set! (.. controller -target -style -opacity) 1)
               (if @(.-rested (sequencers 0)) 
                 (.fire (animations 6)  ; puts it in right corner
                        (fn []
                          (reset! (.(sequencers 0) -rested) false)
                          (.fire (sequencers 0)
                                 3
                                 (fn []
                                   (.fire (animations 5); from right corner to home
                                      (fn []
                                            (reset! (.-rested (sequencers 0)) true)
                                            (set! (.. controller -target  -style -opacity) 1)
                                            (reset! (. controller -playing) nil)
                                            (js.setTimeout (. controller -resume) 700)))))))
                 (.fire (sequencers 0)
                        3
                        (fn []
                          (.fire (animations 5) ;takes it back
                            (fn []
                              (reset! (.-rested (sequencers 0)) true)
                              ( set! (.. controller -target -style -opacity) 1)
                              (reset! (. controller -playing) nil)
                              (js.setTimeout (. controller -resume) 700)))))))
             
             (do
                (js.requestAnimationFrame (. controller -cycler))
                (.. controller -target play) )))
               
         }
   
     4  { :frame 4285
          :sequence  
         (fn []
           (. controller interrupt)
           (set! (.-src elements/paintFrame) (aget @elements/mainVidOverlays 0))
           (if-not @(((.-scenes (sequencers 0))4):enabled)
             (do
               (pause 500
                   (fn []
                       (reset! (. controller -playing) nil)
                       (. controller resume))))
             (do
               (pause 500
                      (fn []
                        (.fire (animations 3)
                           (fn []
                                (reset! (.(sequencers 0)-rested) false)
                                (.fire (sequencers 0) 4
                                       (fn []
                                          (.fire (animations 2)
                                             (fn []
                                                 (reset! (.(sequencers 0)-rested) true)
                                                 (reset! (. controller -playing) nil)
                                                 (js.setTimeout (. controller -resume) 700))))))))))))
         }

     5 { :frame 15000
          :sequence
         (fn [] (js.console.log "ended"))
       }


   
                             

 })                             
 
) 


