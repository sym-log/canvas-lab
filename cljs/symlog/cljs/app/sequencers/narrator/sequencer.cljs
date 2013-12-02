(ns symlog.cljs.app.sequencers.narrator.sequencer
  (:use    [symlog.cljs.app.dom :only [elements]]
           [symlog.cljs.animation.timing :only [listenTo serialize chain enChain]]
           [symlog.cljs.animation.functions :only [paint-frames animate-path]]))

(def ctxt                             symlog.cljs.app.sequencers.narrator.sequencer)
(def label                             "narrator")
(def target                           (goog.dom.getElement "narratorVid"))
(def frameRate                        15)
(def startFrame                       (atom 0))
(def endFrame                         (atom 0))
(def playing                          (atom nil))
(def paused                           (atom false))
(def step                             (atom 1))
(def enabled                          (atom true))
(def rested                           (atom true))
(def callback                         (atom nil))
(def TOCnum                           0)
(def paintFrame                       (elements :paintFrame))

(comment

(.-fire @playing )
((sequence (- @step 1)):sequence)  
)

(defn init [controller]
  (def controller controller)
  (symlog.cljs.app.sequencers.narrator.sequence.init)
  (def sequence symlog.cljs.app.sequencers.narrator.sequence.seqmap)
  (def maxsteps (count (keys sequence)))
  (set! (.(elements :narratorVid) -sequencer) ctxt)
  (symlog.cljs.app.handlers.narrator.init))
  
(defn fire [ start end tocNum returnFunc ]
  (reset! startFrame start)
  (reset! endFrame end)
  (reset! callback returnFunc)
  (set! TOCnum tocNum)
  (set! (. target -currentTime) (/ @startFrame frameRate))
  (setStep (js.Math.round (* (. target -currentTime) frameRate)))
  (play))

(defn pause []
  (reset! paused true)
  (if @playing (if (. @playing -pause) (. @playing pause)))
  (. target pause))

(defn play []
  (if  @playing (if (. @playing -play) (. @playing play)))
  (reset! paused false)
  (js.requestAnimationFrame cycler)
  (. target play))

(defn stop []
  (if @playing (if (. @playing -stop) (. @playing stop)))
  (. target pause)
  (reset! playing nil)
  (.. paintFrame -clearit fire)
  (. controller donext "narrator"))

(defn clear[]
  (if @playing (if (. @playing -stop) (. @playing stop)))
  (reset! playing nil)
  (.. paintFrame -clearit fire))

(defn end []
  (if @playing (if (. @playing -stop) (. @playing stop)))
  (. target pause)
  (reset! playing nil)
  (reset! paused false)
  (.. paintFrame -clearit fire)
  (set! (. target -currentTime) (/ @endFrame frameRate))
  (@callback))

(defn cycler []
  (let [ frameNum (js.Math.round (* (. target -currentTime) frameRate)) ]
    (if (<= frameNum @endFrame )
      (cond
       (= @paused false)
        (do
          (doframe frameNum)
          (js.requestAnimationFrame cycler))
        :else nil)
      (do
        (pause)
        (@callback)))))

(defn doframe [frameNo]
  (if (> @step maxsteps) nil
      (if (>= frameNo ((sequence @step):frame))
        (if-not @playing
          (((sequence @step):sequence))
          (swap! step inc)))))

(defn setStep [ frameNo ]
  (doseq [[k v] sequence] 
    (cond (= k maxsteps)
            (if (>= frameNo (v :frame)) (reset! step maxsteps))
            :else
            (if (and (>= frameNo (v :frame))
                     (<  frameNo (+ (v :frame) frameRate)))
                (reset! step k)
                (if (and (>= frameNo (v :frame))
                         (< frameNo ((sequence (+ k 1)):frame)))
                  (reset! step (+ k 1)))))))


