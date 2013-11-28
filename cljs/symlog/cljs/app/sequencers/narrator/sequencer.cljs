(ns symlog.cljs.app.sequencers.narrator.sequencer
  (:use    [symlog.cljs.app.dom.elements :only [elements]]
           [symlog.cljs.animation.timing :only [listenTo serialize chain enChain]]
           [symlog.cljs.animation.functions :only [paint-frames animate-path]]))

(goog.inherits
 (defn dispatch []
   (this-as this
            (set! (. this -send) (fn [message] (. this dispatchEvent message)))
   this)) goog.events.EventTarget)

(def dispatcher                       (dispatch.))
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

(defn init []
  (symlog.cljs.app.sequencers.narrator.sequence.init)
  (def sequence symlog.cljs.app.sequencers.narrator.sequence.seqmap)
  (def maxsteps (count (keys sequence)))
  (set! (.(elements :narratorVid) -sequencer) ctxt))
  
(defn fire [ start end returnFunc ]
  (reset! startFrame start)
  (reset! endFrame end)
  (reset! callback returnFunc)
  (set! (. target -currentTime) (/ @startFrame frameRate))
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
  (pause)
  (goog.events.fireListeners dispatcher "stopped" false (js-obj "target" ctxt)))

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
          (do (reset! playing ((sequence @step):sequence))
              (swap! step inc)
              (if (. @playing -fire) (. @playing fire) (@playing)))))))

