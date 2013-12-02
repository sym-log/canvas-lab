(ns symlog.cljs.app.controller.main
(:use    [symlog.cljs.app.dom :only [elements]]))

(def ctxt                             symlog.cljs.app.controller.main)  
(def target                           (goog.dom.getElement "mainVideo"))
(def frameRate                        15)
(def endFrame                         15608)
(def startFrame                       0)
(def playing                          (atom nil))
(def step                             (atom 1))
(def paused                           (atom false))
(def interrupted                      (atom false))

(comment
  (play)
  @step
  @paused
  (doframe 2430)
  (.-currentTime (elements :mainVideo))
)

(defn init []
  (symlog.cljs.app.controller.actions.init ctxt)
  (def actions symlog.cljs.app.controller.actions.seqmap)
  (def maxsteps (count (keys actions)))
  (symlog.cljs.app.sequencers.narrator.sequencer.init ctxt)
  (def seqsManaged (vector symlog.cljs.app.sequencers.narrator.sequencer))
  (set! (. (elements :mainVideo) -sequencer) ctxt)
  (symlog.cljs.app.handlers.mainVideo.init)
)
  
(defn interrupt []
  (pause)
  (reset! interrupted true))

(defn resume []
  (play)
  (reset! interrupted false))

(defn pause []
  (if @playing (if (. @playing -pause) (. @playing pause)))
  (. target pause)
  (reset! paused true))

(defn wait []
  (js.requestAnimationFrame cycler))

(defn play []
  (reset! paused false)
  (if @playing (if (. @playing -play) (. @playing play)))
  (if (= 0 (. target -currentTime))
    (do
      (reset! step 1)
      (doframe 0))
    (do
        (js.requestAnimationFrame cycler)
        (. target play))))

(defn cycler []
  (let [ frameNum (js.Math.round (* (. target -currentTime) frameRate))
         img (symlog.cljs.app.frameBuffer.getFrame frameNum) ]
    (if (<= frameNum endFrame)
      (cond
       (= "wait" img) (wait)
       
       (= @paused true) nil
      :else   
       (do
          (set! (.-src (elements :paintFrame)) img)
          (doframe frameNum)
          (js.requestAnimationFrame cycler)))
   (pause))))

(defn doframe [frameNo]
  (if (> @step maxsteps) nil
        (if (>= frameNo ((actions @step) :frame))
          (if-not @playing
            (do
              (reset! playing ((actions @step):sequence))
              (swap! step inc)
              (if (. @playing -fire) (. @playing fire) (@playing)))))))

(defn donext [sender]
  (if (= sender "narrator")
    (do
      (if @playing (reset! playing nil))
      (reset! interrupted false)
      (goog.events.fireListeners
         (elements :mainVideoPlayTouchArea)   
           "click"
           false
           (js-obj "type" "click" "target" (elements :mainVideoPlayTouchArea)))  )))

(defn reset [frame]
  (symlog.cljs.app.frameBuffer.seekFrame
   frame
   (fn [img]
      (set! (.-src (elements :paintFrame)) img)))
  (doseq [[k v] actions] 
    (cond (= k maxsteps)
            (if (>= frame (v :frame)) (reset! step maxsteps))
            :else
            (if (and (>= frame (v :frame))
                     (<  frame (+ (v :frame) frameRate)))
                (reset! step k)
                (if (and (>= frame (v :frame))
                         (< frame ((actions (+ k 1)):frame)))
                  (reset! step (+ k 1))))))
   (reset! playing nil))

