(ns symlog.cljs.app.controller.main
(:use    [symlog.cljs.app.dom.elements :only [elements]]))


(def ctxt                             symlog.cljs.app.controller.main)  
(def target                           (goog.dom.getElement "mainVideo"))
(def frameRate                        15)
(def endFrame                         15608)
(def startFrame                       0)
(def playing                          (atom nil))
(def step                             (atom 1))
(def paused                           (atom false))
(def interrupted                      (atom true))

(comment
  (init)
(fire)
) 

(defn init []
  (symlog.cljs.app.controller.actions.init ctxt)
  (def actions symlog.cljs.app.controller.actions.seqmap)
  (def maxsteps (count (keys actions)))
  (symlog.cljs.app.sequencers.narrator.sequencer.init)
  (def seqsManaged (vector symlog.cljs.app.sequencers.narrator.sequencer))
  (set! (. (elements :mainVideo) -controller) ctxt)
  (doseq [ v seqsManaged ]
    (goog.events.listen
     (. v -dispatcher)
     "stopped"
     donext  )))

(defn interrupt []
  (pause)
  (reset! interrupted true))

(defn resume []
  (play)
  (reset! interrupted false))

(defn fire [ ]
  (set! (. target -currentTime) (/ startFrame frameRate))
  (doframe 0))

(defn pause []
  (if @playing (if (. @playing -pause) (. @playing pause)))
  (. target pause)
  (reset! paused true))

(defn wait []
  (js.requestAnimationFrame cycler))

(defn play []
  (reset! paused false)
  (if @playing (if (. @playing -play) (. @playing play)))
  (js.requestAnimationFrame cycler)  
  (. target play))

(defn cycler []
  (let [ frameNum (js.Math.round (* (. target -currentTime) frameRate))
         img (symlog.cljs.app.frameBuffer.nextFrame frameNum) ]
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
      (if (>= frameNo ((actions @step):frame))
        (if-not @playing
          (do (reset! playing ((actions @step):sequence))
              (swap! step inc)
              (if (. @playing -fire) (. @playing fire) (@playing)))))))

(defn donext [evt]
  (if (= (.. evt -target -label) "narrator")
    (do 
      (if @playing (reset! playing nil))
      (reset! interrupted false)
      (goog.events.fireListeners
         (elements :mainVideoPlayTouchArea)   
           "click"
           false
           (js-obj "type" "click" "target" (elements :mainVideoPlayTouchArea))))))

(defn reset [frame]
  (let [ img (symlog.cljs.app.frameBuffer.nextFrame frame) ]
    (doseq [[k v] actions]
    (if (and (<= (v :frame) frame) (>= frame ((actions (+ k 1)):frame)))
      (reset! step k)))
    (if-not (= img "wait")
      (set! (.-src (elements :paintFrame)) img)
      (.. (elements :paintFrame) -clearit fire))))
      

