(ns symlog.cljs.app) 

(deftype KeyFrames [ ] Object

   (init [this]
     (set! (. this -count)                                     10)
     this)

   (get [this currentFrame]
     ( cond
       (< currentFrame 688)                                    0
       (and ( > currentFrame 688) ( < currentFrame 719))       1
       (and ( > currentFrame 788) ( < currentFrame 812))       2
       (and ( > currentFrame 832) ( < currentFrame 862))       3
       (and ( > currentFrame 942) ( < currentFrame 965))       4
       (and ( > currentFrame 982) ( < currentFrame 1001))      5
       (and ( > currentFrame 1066) ( < currentFrame 1110))     6
       (and ( > currentFrame 1385) ( < currentFrame 1404))     7
       (and ( > currentFrame 1420) ( < currentFrame 1438))     8
       (and ( > currentFrame 1441) ( < currentFrame 1460))     9
     :else 0 ))
   )


(deftype STAGE [  ] Object
         
  ( init [ this ]
    (do         
      (set! (. this -keynum) nil)
      (set! (. this -frameList) (apply array (range 0 (. keyframes -count))))
      (.forEach (. this -frameList)
           (fn [ elem idx arr ]
             (let [ img (js.Image.) ]
               (set! (. img -src) (str "temp/" elem ".png"))
               (set! (. img -onload) (fn [] (aset this elem img)))
      )))
     this
   ))

  ( paint [ this keyframe ]
       (if-not (= keyframe (. this -keynum))
        (do
          (set! (. this -keynum) keyframe)
          (. symlog.cljs.app.context clearRect
                                 0
                                 0
                                 (. symlog.cljs.app.canvas -width)
                                 (. symlog.cljs.app.canvas -height))
          (. symlog.cljs.app.context drawImage (aget this keyframe) 0 0)
   )))

  )

(defn animate []
  (if-not (. video -ended)
    (let [ timeIdx (. video -currentTime) ]
      
      (set! (. timeField -value) (time-index-to-string timeIdx FPS))
      (. stage paint (. keyframes get (* timeIdx FPS)))
      (js.window.requestAnimationFrame animate)))
)


(defn jump []
  (if-not (. video -ended)
    (do
      (set! (. timeField -value) (time-index-to-string (. video -currentTime) FPS))
        (. stage paint (. keyframes get (* (. video -currentTime) FPS)))
)))

(defn init [ ]

  (def keyframes (.init (KeyFrames.)))  
  (def stage (.init (STAGE.)))
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
        (fn [evt] (do
                    (. video play)
                    (def reqId (js.window.requestAnimationFrame animate)))))
  
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

