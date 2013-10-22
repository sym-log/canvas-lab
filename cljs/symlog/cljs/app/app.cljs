(ns symlog.cljs.app 
  (:require [symlog.cljs.app.controller :as controller]
            [symlog.cljs.animate :as animate]))

(def sync symlog.cljs.util.synchronize)

(defn init [] 

   (set! (.-onload (props :paintFrame))
        (fn [] (symlog.cljs.canvas.paintImage
               (props  :context)
               (props  :canvas)
               (props  :paintFrame))))

    (symlog.cljs.net.getTextArray
       "http://localhost/img/frame-buffers/vid1.scene1.imgs"
       (fn [ response ]
         (reset! (props :narratorFrameBuffer) (.split response "/ / /"))
         (init-actions))
    )
 )

    
;  (def width (. video -width))
;  (def height (. video -height))
;  (def vidx (js.Math.round (/ (- (. canvas -width) (. video -width)) 2)))
;  (def vidy (js.Math.round (/ (- (. canvas -height) (. video -height)) 2)))
;  (def FPS 15)
;  (def timeField (goog.dom.getElement "timeIndexCell"))
;
;  (goog.events.listen (goog.dom.getElement "playButton")
;        symlog.cljs.dom.click
;        (fn [evt] (def reqId (js.window.requestAnimationFrame animate))))
;  
;  (goog.events.listen (goog.dom.getElement "pauseButton")
;        symlog.cljs.dom.click
;        (fn [evt] (do
;                    (. video pause)
;                    (js.window.cancelAnimationFrame reqId))))
;
;  (goog.events.listen (goog.dom.getElement "skipForwardButton")
;        symlog.cljs.dom.click
;        ( fn [evt]
;          ( do
;            (. video pause)
;            (set! (. video -currentTime)
;                  (+ (. video -currentTime)
;                     (/ (js.parseInt (.-value (goog.dom.getElement "forwardStepCountField"))) FPS)))
;            
;            ( jump ))))
;
;  (goog.events.listen (goog.dom.getElement "skipBackwardButton")
;         symlog.cljs.dom.click
;         ( fn [evt]
;           ( do
;             (. video pause)
;             (set! (. video -currentTime)
;                  (- (. video -currentTime)
;                   (/ (js.parseInt (.-value (goog.dom.getElement "backwardStepCountField"))) FPS)))
;             ( jump ))))
;
;  (goog.events.listen (goog.dom.getElement "autoReturnCheckbox")
;         symlog.cljs.dom.click
;         (fn [evt] (if (.-checked (goog.dom.getElement "autoReturnCheckbox"))
;                     (set! (.-value (goog.dom.getElement "timeReturnField"))
;                           (str (. video -currentTime)))
;                     (set! (.-value (goog.dom.getElement "timeReturnField")) nil))))


;(defn animate []
;  
;     (let [ timeIdx (. video -currentTime)
;            frameNo (js.Math.round (* timeIdx 15))
;            img (symlog.cljs.app.frameBuffer.nextFrame frameNo) ]
;
;       (cond
;
;        (= "wait" img)
;        (do
;            (. video pause)
;            (reset! playing false)
;            (js.window.requestAnimationFrame animate))
;        
;        :else
;        (do
;            (set! (. imageFrame -src) img)
;            (set! (. timeField -value) (time-index-to-string timeIdx FPS))
;            (if-not @playing
;             (do
;               (reset! playing true)
;               (. video play)))
;           (js.window.requestAnimationFrame animate))
;       )
; ))     


;(defn jump []
;  (if-not (. video -ended)
;    (do
;      (set! (. timeField -value) (time-index-to-string (. video -currentTime) FPS))
;        (. stage paint (. keyframes get (* (. video -currentTime) FPS)))
; )))

(def props   {
                
                :canvas               (goog.dom.getElement "canvas")
                :context              (. (goog.dom.getElement "canvas") getContext "2d")
                :paintFrame           (js.Image.)
                :goodcopSrc           "../video/goodcop.webm"
                :narratorFrameBuffer  (atom nil) ; will be reset on init
     })

(def actors  {
                :narrator (goog.dom.getElement  "narratorVid")
                :mainVideo (goog.dom.getElement "mainVideo")
     })

(defn init-actions []
 (def actions {
                  1 {   ; MOVE NARRATOR TO CENTER SCREN RESIZE BY 3 THEN START PLAYING
                     :enabled     true
                     :range       (range 0 100)
                     :triggered   false
                     :trigger     (sync
                               0
                               (.-fire (animate/animate-path.
                                        (actors :narrator)     ; object to animate
                                        (/ 1000 25)             ; fps
                                        .2                      ; duration
                                         4                      ; scale factor
                                         false                   ; reverse direction
                                         (str "m 265,52 c 9.56472,122.78368 97.77957,193.18726 207.23261,"
                                              "222.73973 C 508.42367,283.64875 547.29345,294.84793 600,300")
                                ))
                                0 
                                #(controller/playNarrator)
 
                                )
                     }                   
                       
                  2 {   ; PAUSE NARRATOR, MOVE TOP LEFT, REDUCE BY 1/3, CHANGE MAINVID SRC;
                        ; PLAY NARRATOR
                     :enabled    true
                     :range      (range 0 100)
                     :triggered  false
                     :trigger    (sync
                               0
                               #(controller/pauseNarrator)
                               0
                               (.-fire (animate/animate-path.
                                        (actors :narrator )    ; object to animate
                                        (/ 1000 25)            ; fps
                                        .2                     ; duration
                                        .5                     ; scale factor
                                        true                   ; reverse direction
                                        (str "m 420,210 c 0,0 26.04289,32.69952 71.51328,53.92846 "
                                              "C 520.5366,277.47869 546.81365,285.37235 600,300")
                               ))
                               0
                               (fn [] (set! (. (actors :mainVideo) -src) (props :goodcopSrc))
                                      (controller/playNarrator))
                               )
                     }

                  3 {    ; NARRATOR PAUSED, MOVED TO REST POSITION BRIGHTEN MAIN AND PLAY 
                     :enabled    true
                     :range      (range 0 100)
                     :triggered  false
                     :trigger    (sync
                               0
                               #(controller/pauseNarrator)
                               0
                               (.-fire (animate/animate-path.
                                         (actors :narrator)    ; object to animate
                                         (/ 1000 25)            ; fps
                                         .2                     ; duration
                                         .5                     ; scale factor
                                         true                   ; reverse direction
                                         (str "m 265,52 c 0,0 9.35,58.01292 47.74129,100.8298 "
                                              "C 332.33405,174.68113 366.81365,195.37235 420,210")
                               ))
                               0
                               (fn []
                                 (set! (.. (actors :mainVideo) -style -opacity) 1)
                                 (controller/playMainVid))
                               )
                      }
                
                   4 {     ; MAINVID PAUSED/DIMMED, NARRATOR INSIDE CORNER OF MOVIE AND PLAYS
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    (sync
                               0
                               (fn [] (controller/pauseMainVid)
                                 (set! (..(actors :mainVideo) -style -opacity) .2))
                               1000
                               (.-fire (animate/animate-path.
                                         (actors :narrator)     ; object to animate
                                          (/ 1000 25)             ; fps
                                          .2                      ; duration
                                          2                       ; scale factor
                                          false                   ; reverse direction
                                          (str "m 265,52 c 0,0 9.35,58.01292 47.74129,100.8298 "
                                              "C 332.33405,174.68113 366.81365,195.37235 420,210")
                                ))
                               0
                               #(controller/playNarrator)

                               )
                      }

                   5 {   ; TYPE FIRST CHIRON
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    (sync
                               0    
                               (.-fire (symlog.cljs.animate.paint-frames.
                                         (props :paintFrame)
                                         (.slice @(props :narratorFrameBuffer) 0 34)
                                         (/ 1000 25)
                               ))
                               )
                      }

                   6 {   ; TYPE SECOND CHIRON
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    (sync
                               0    
                               (.-fire (symlog.cljs.animate.paint-frames.
                                         (props :paintFrame)
                                         (.slice @(props :narratorFrameBuffer) 35 69)
                                         (/ 1000 25)
                               ))
                               )
                      }
                   7 {   ; TYPE THIRD CHIRON
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    (sync
                               0    
                               (.-fire (symlog.cljs.animate.paint-frames.
                                         (props :paintFrame)
                                         (.slice @(props :narratorFrameBuffer) 70 104)
                                         (/ 1000 25)
                               ))
                               )
                      }

                   8 {   ; TYPE FOURTH CHIRON
                      :enabled    true
                      :range      (range 0 100)
                      :triggered  false
                      :trigger    (sync
                               0    
                               (.-fire (symlog.cljs.animate.paint-frames.
                                         (props :paintFrame)
                                         (.slice @(props :narratorFrameBuffer) 105 138)
                                         (/ 1000 25)
                               ))
                               )
                      }


      }))


