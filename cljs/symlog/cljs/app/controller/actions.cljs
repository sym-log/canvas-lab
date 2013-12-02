(ns symlog.cljs.app.controller.actions
  (:use    [symlog.cljs.app.dom :only [elements]]
           [symlog.cljs.animation.timing :only [ pause]]
           [symlog.cljs.animation.functions :only [paint-frames animate-path]]))

(comment

  (.fire (animations 3) #(js.console.log "OK"))
  (reset! (.. (elements :narratorVid) -sequencer -enabled) true)
  (reset! (.. (elements :narratorVid) -sequencer -rested) false)
  (.fire symlog.cljs.app.sequencers.narrator.sequencer 607 3523 1
         #(js.console.log "OK"))

  @symlog.cljs.app.sequencers.narrator.sequencer.playing
                                   
  
)


(defn init [ controller ]

(def animations
  (vector
    (animate-path.
      (elements :narratorDiv)    ; object to animate width:50px; 
      (/ 1000 25)                ; fps
      .4                         ; duration
       3                         ; scale factor
       false                     ; reverse direction
       (str "m 355,54 c 76.60172,229.51602 275,234 275,234"))
    (animate-path.
      (elements :narratorDiv)  ; object to animate width:50px
      (/ 1000 25)              ; fps
      .4                       ; duration
      .66666                   ; scale factor
       false                   ; reverse direction
       (str "M 630,288 C 487.55708,313.5267 420,218 420,218"))
    (animate-path.
      (elements :narratorDiv)  ; object to animate
      (/ 1000 25)              ; fps
      .3                       ; durat
      .5                       ; scale factor
       false                   ; reverse direction
       (str "M 420,218 C 355.87705,146.59579 355,54 355,54"))
    (animate-path.
      (elements :narratorDiv)      ; object to animate
      (/ 1000 25)                  ; fps
      .4                           ; duration
       2                           ; scale factor
       true                        ; reverse direction
       (str  "M 420,218 C 355.87705,146.59579 355,54 355,54" ))
    (animate-path.
      (elements :narratorDiv)     ; object to animate width:50px
      (/ 1000 25)                 ; fps
      .4                          ; duration
      .5                          ; scale factor
       true                       ; reverse direction
       (str "M 923,113 C 699.09177,208.04019 420,218 420,218"))
    (animate-path.
      (elements :narratorDiv)  ; object to animate width:50px
      (/ 1000 25)              ; fps
      .4                       ; duration
       1                       ; scale factor
       false                   ; reverse direction
       (str "M 923,113 C 682.98326,33.262894 355,54 355,54"))
    (animate-path.
      (elements :narratorDiv)  ; object to animate width:50px
      (/ 1000 25)              ; fps
      .4                       ; duration
       1                       ; scale factor
       true                   ; reverse direction
      (str "M 923,113 C 682.98326,33.262894 355,54 355,54"))

    
    ))

(def seqmap 
  {  1  { :frame 0
          :sequence
           (fn []
             (if @(.-enabled ((. controller -seqsManaged)0))
               (do
                  (. controller interrupt)
                  (set! (.. (elements :mainVideo) -style -opacity) .3)
                  (.fire (animations 0)
                         (fn []
                             (reset! (..(elements :narratorVid) -sequencer -rested) false)
                             (.fire ((. controller -seqsManaged) 0) 0 155 0 
                                    (fn []
                                      (pause 300
                                         (fn []
                                           (.fire (animations 1)
                                               (fn []
                                                  (set! (.-currentTime(elements :mainVideo)) (/ 3 15))
                                                  (.fire ((. controller -seqsManaged) 0) 170 595 0 ; ref screenplay 2)
                                                    (fn []
                                                      (pause 500
                                                         (fn []
                                                           (.fire (animations 2)
                                                              (fn []
                                                                  (reset! (..(elements :narratorVid) -sequencer -rested) true)
                                                                  ( set! (.. (elements :mainVideo) -style -opacity) 1)
                                                                  (reset! (. controller -playing) nil)
                                                                  (js.setTimeout (. controller -resume) 700))))))))))))))))
               (do
                (js.requestAnimationFrame (. controller -cycler))
                (.. controller -target play) )))
              
         } 
                                                
     2  { :frame 2420
          :sequence
         (fn []
            (if @(.-enabled ((. controller -seqsManaged) 0))  
                (do
                  (. controller interrupt)
                  (set! (.-currentTime (elements :mainVideo)) (/ 2420 15))
                  (set! (.. (elements :mainVideo) -style -opacity) .3) 
                  (pause 1000
                    (fn []
                       (.fire (animations 3)
                         (fn []
                           (reset! (..(elements :narratorVid) -sequencer -rested) false)
                           (.fire ((. controller -seqsManaged) 0) 607 3523 1 ; ref Screenplay 3)
                                  (fn []
                                    (.fire (animations 4)
                                           (fn []
                                             (set! (.-currentTime (elements :mainVideo)) (/ 2430 15))
                                             (..(elements :paintFrame)-clearit fire)
                                             (reset! (. controller -playing) nil)
                                             (. controller doframe 2430))))))))))))
         }
   
     3  { :frame 2430  
          :sequence
         (fn []
           (if @(.-enabled ((. controller -seqsManaged) 0))
             (do
               (. controller interrupt)
               ( set! (.. (elements :mainVideo) -style -opacity) 1)
               (if @(..(elements :narratorVid) -sequencer -rested)
                 (.fire (animations 6)
                        (fn []
                          (reset! (..(elements :narratorVid) -sequencer -rested) false)
                          (.fire ((. controller -seqsManaged) 0) 3536 8744 2
                                 (fn []
                                   (.fire (animations 5)
                                          (fn []
                                            (reset! (..(elements :narratorVid) -sequencer -rested) true)
                                            ( set! (.. (elements :mainVideo) -style -opacity) 1)
                                            (reset! (. controller -playing) nil)
                                            (js.setTimeout (. controller -resume) 700)))))))
                 (.fire ((. controller -seqsManaged) 0) 3536 8744 3
                        (fn []
                          (.fire (animations 5)
                                 (fn []
                                   (reset! (..(elements :narratorVid) -sequencer -rested) true)
                                   ( set! (.. (elements :mainVideo) -style -opacity) 1)
                                   (reset! (. controller -playing) nil)
                                   (js.setTimeout (. controller -resume) 700)))))))))
               
         }
   
     4  { :frame 4285
          :sequence  
         (fn []
           (. controller interrupt)
           (set! (.-src (elements :paintFrame)) (aget @(elements :mainVidOverlays) 0))
           (set! (.-innerHTML (elements :liesScore)) "1")
           (set! (.-innerHTML (elements :unlawfulsScore)) "1")
           (if-not @(.-enabled ((. controller -seqsManaged) 0))
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
                                (reset! (..(elements :narratorVid) -sequencer -rested) false)
                                (.fire ((. controller -seqsManaged) 0) 8745 13355 3
                                       (fn []
                                         (.fire (animations 2)
                                             (fn []
                                                 (reset! (..(elements :narratorVid) -sequencer -rested) true)
                                                 (reset! (. controller -playing) nil)
                                                 (js.setTimeout (. controller -resume) 700))))))))))))
         }

 
    5  { :frame 15000
          :sequence
         (fn [] (js.console.log "ended"))
       }


   
                             

 })                             
 
)


