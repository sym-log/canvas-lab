(ns symlog.cljs.app)

(defn init [] ())

(comment
(defn init [] 

   (set! (.-onload (elements :paintFrame))
        (fn [] (symlog.cljs.canvas.paintImage
               (elements  :context)
               (elements  :canvas)
               (elements  :paintFrame))))
   
    (symlog.cljs.net.getTextArray
       "http://localhost/img/frame-buffers/scene1.imgs"
       (fn [ response ]
         (reset! (elements :seq1FrameBuffer) (.split response "/ / /"))))
 
    (symlog.cljs.net.getTextArray
       "http://localhost/img/frame-buffers/scene2.imgs"
       (fn [ response ]
         (reset! (elements :seq2FrameBuffer) (.split response "/ / /"))))
  
      ;TODO:  BUILD SOME FUNCTION HERE THAT LISTENS TO ALL THE PREP WORK FUNCTIONS AND THEN KICKS
      ;OFF THE PRESENTATION WHEN EVERYONE IS READY
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


