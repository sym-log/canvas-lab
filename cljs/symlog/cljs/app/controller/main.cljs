(ns symlog.cljs.app.controller.main 
  (:require [symlog.cljs.app.elements :as elements]))

(def ctxt                             symlog.cljs.app.controller.main)  
(def target                           elements/mainVideo )
(def frameRate                        elements/FPS )
(def endFrame                         15608)
(def startFrame                       0)
(def playing                          (atom nil))
(def step                             (atom 0))
(def paused                           (atom false))
(def interrupted                      (atom false))

(defn init [ ]
  (symlog.cljs.app.sequencers.narrator.sequencer.init ctxt)
  (symlog.cljs.app.controller.actions.init ctxt)
  (def actions symlog.cljs.app.controller.actions.dom)
  (def handlers symlog.cljs.app.handlers.mainVideo)
  (def maxsteps (count (keys actions)))
  (def sequencers (vector symlog.cljs.app.sequencers.narrator.sequencer))
  (set! (. target -sequencer) ctxt)
  (symlog.cljs.app.handlers.mainVideo.init)
  (def loading-indicator symlog.cljs.app.mainLoader)

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
  (let [ frameNum (js.Math.round (* (. target -currentTime) frameRate))
        img (symlog.cljs.app.frameBuffer.getFrame frameNum) ]
    (if (= "wait" img)
      (do
        (. loading-indicator fire)
        (js.requestAnimationFrame wait))
      (do
        (. loading-indicator stop)
        (js.requestAnimationFrame cycler)))))

(defn play []
  (reset! paused false)
  (if @playing (if (. @playing -play) (. @playing play)))
  (set! (.. target -style -opacity) 1)
  (if (= 0 (. target -currentTime))
      (doframe 0)
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
          (set! (.-src elements/paintFrame) img)
          (doframe frameNum)
          (js.requestAnimationFrame cycler)))
   (pause))))

(defn doframe [frameNo]
  (if (= @step maxsteps) nil
      (if (>= frameNo ((actions @step) :frame))
        (do
          (((actions @step) :sequence))
          (swap! step inc)))))

(defn donext [sender]
  (if (= sender "narrator")
    (do
      (if @playing (reset! playing nil))
      (reset! interrupted false)
      (goog.events.fireListeners
           elements/mainVideoPlayTouchArea   
           "click"
           false
           (js-obj "type" "click" "target"   elements/mainVideoPlayTouchArea)))))

(defn stop []
  (if @playing (if (. @playing -stop) (. @playing stop)))
  (reset! paused true)
  (. target pause)
  (if (= 1 @(.. handlers -touchHandler -state))
    (do
      (reset! (.. handlers -touchHandler -state) 0)
      (set! (. target -opacity) 1)
      (set! (.. handlers -playButton -style -opacity) 0)))
  (doseq [ v sequencers ] (do
                            (. v stop)
                            (. v home))))

(defn reset [frame]
  (set! (. target -currentTime) (/ frame frameRate))
  (symlog.cljs.app.frameBuffer.seekFrame
   frame
   (fn [img]
      (set! (.-src elements/paintFrame) img)))
  (doseq [[k v] actions] 
    (cond (= k (- maxsteps 1))
            (if (>= frame (v :frame)) (reset! step (- maxsteps 1)))
            :else
            (if (and (>= frame (v :frame))
                     (<  frame (+ (v :frame) frameRate)))
                (reset! step k)
                (if (and (>= frame (v :frame))
                         (< frame ((actions (+ k 1)):frame)))
                  (reset! step (+ k 1))))))
   (reset! playing nil))

