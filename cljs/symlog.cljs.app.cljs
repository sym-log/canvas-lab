(ns symlog.cljs.app) 

(def playing (atom false))

(defn paintImage [ image ]
  (do
    (. symlog.cljs.app.context clearRect
                                 0
                                 0
                                 (. symlog.cljs.app.canvas -width)
                                 (. symlog.cljs.app.canvas -height))
    (. symlog.cljs.app.context drawImage image 0 0)))

(defn animate []
  
     (let [ timeIdx (. video -currentTime)
            frameNo (js.Math.round (* timeIdx 15))
            img (symlog.cljs.app.frameBuffer.nextFrame frameNo) ]

       (cond

        (= "wait" img)
        (do
            (. video pause)
            (reset! playing false)
            (js.window.requestAnimationFrame animate))
        
        :else
        (do
            (paintImage img)
            (set! (. timeField -value) (time-index-to-string timeIdx FPS))
            (if-not @playing
             (do
               (reset! playing true)
               (. video play)))
           (js.window.requestAnimationFrame animate))
       )
))     


(defn jump []
  (if-not (. video -ended)
    (do
      (set! (. timeField -value) (time-index-to-string (. video -currentTime) FPS))
        (. stage paint (. keyframes get (* (. video -currentTime) FPS)))
)))


(defn init [ ]

  (symlog.cljs.app.frameBuffer.init)
  (def video (goog.dom.getElement "video"))
  (def canvas (goog.dom.getElement "canvas"))
  (def context (. canvas getContext "2d"))
  (def width (. video -width))
  (def height (. video -height))
  (def vidx (js.Math.round (/ (- (. canvas -width) (. video -width)) 2)))
  (def vidy (js.Math.round (/ (- (. canvas -height) (. video -height)) 2)))
  (def FPS 15)
  (def timeField (goog.dom.getElement "timeIndexCell"))

  (goog.events.listen (goog.dom.getElement "playButton")
        symlog.cljs.dom.click
        (fn [evt] (def reqId (js.window.requestAnimationFrame animate))))
  
  (goog.events.listen (goog.dom.getElement "pauseButton")
        symlog.cljs.dom.click
        (fn [evt] (do
                    (. video pause)
                    (js.window.cancelAnimationFrame reqId))))

  (goog.events.listen (goog.dom.getElement "skipForwardButton")
        symlog.cljs.dom.click
        ( fn [evt]
          ( do
            (. video pause)
            (set! (. video -currentTime)
                  (+ (. video -currentTime)
                     (/ (js.parseInt (.-value (goog.dom.getElement "forwardStepCountField"))) FPS)))
            
            ( jump ))))

  (goog.events.listen (goog.dom.getElement "skipBackwardButton")
         symlog.cljs.dom.click
         ( fn [evt]
           ( do
             (. video pause)
             (set! (. video -currentTime)
                  (- (. video -currentTime)
                   (/ (js.parseInt (.-value (goog.dom.getElement "backwardStepCountField"))) FPS)))
             ( jump ))))

  (goog.events.listen (goog.dom.getElement "autoReturnCheckbox")
         symlog.cljs.dom.click
         (fn [evt] (if (.-checked (goog.dom.getElement "autoReturnCheckbox"))
                     (set! (.-value (goog.dom.getElement "timeReturnField"))
                           (str (. video -currentTime)))
                     (set! (.-value (goog.dom.getElement "timeReturnField")) nil))))
)


(defn time-index-to-string [timevalue FPS]
  "this function takes a time value from video.currenTime and the frames per second of the video

   it returns a formatted string giving the time index of the video, the right-most value being the
   current frame"
  
   (let [ hours (rem (.floor js/Math (/ timevalue 3600 )) 24)
          minutes (rem (.floor js/Math (/ timevalue 60 )) 60)
          seconds (.floor js/Math (rem timevalue 60))
          frames (.floor js/Math (.toFixed (* (rem timevalue 1) FPS) 3))  ]
      ( str
      ( if (< hours 10) (str "0" hours ":") ( str hours ":"))
      ( if (< minutes 10) (str "0" minutes ":") (str minutes ":"))
      ( if (< seconds 10) (str "0" seconds ":") (str seconds ":"))
      ( if (< frames 10) (str "0" frames) (str frames)))
))

