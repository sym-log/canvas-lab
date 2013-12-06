(ns symlog.cljs.app.sequencers.narrator.sequencer
  (:use    [symlog.cljs.app.dom :only [elements]]
           [symlog.cljs.animation.timing :only [listenTo serialize chain enChain]]
           [symlog.cljs.animation.functions :only [paint-frames animate-path]]))

(def ctxt                             symlog.cljs.app.sequencers.narrator.sequencer)
(def label                             "narrator")
(def target                           (goog.dom.getElement "narratorVid"))
(def container                        (elements :narratorDiv))
(def frameRate                        15)
(def startFrame                       (atom 0))
(def endFrame                         (atom 0))
(def playing                          (atom nil))
(def paused                           (atom false))
(def step                             (atom 1))
(def enabled                          (atom true))
(def rested                           (atom true))
(def callback                         (atom nil))
(def scene                            (atom 0))
(def paintFrame                       (elements :paintFrame))

(defn init [controller]
  (def controller controller)
  (symlog.cljs.app.sequencers.narrator.sequence.init)
  (def sequence symlog.cljs.app.sequencers.narrator.sequence.seqmap)
  (def maxsteps (count (keys sequence)))
  (def scenes
    (into []
          (map (fn [ elem ]
                 {
                   :fstart (js.parseInt (.. elem -attributes -fstart -value))
                   :fend   (js.parseInt (.. elem -attributes -fend -value))
                   :playbutton (aget (. elem -children)  0)
                   :playlabel  (aget (. elem -children)  1)
                   :tIdx (js.parseInt (.. elem -attributes -tidx -value))
                   :id (. elem -id)
                   :sceneNo (js.parseInt (first
                                      (filter #(goog.string.isNumeric %)
                                              (. elem -id))))
                   :toc (goog.dom.getElement
                          (str "nt" (first
                                      (filter #(goog.string.isNumeric %)
                                              (. elem -id)))))
                  :enabled (atom true)
                             
                  })
               (vec (symlog.cljs.util.nodelist->coll (elements :narratorScenes))))))
  (set! (.(elements :narratorVid) -sequencer) ctxt)
  (symlog.cljs.app.handlers.narrator.init))

(defn fire [ sceneNo returnFunc ]
  (reset! startFrame ((scenes sceneNo):fstart))
  (reset! endFrame ((scenes sceneNo):fend))
  (reset! scene ((scenes sceneNo):sceneNo))
  (reset! callback returnFunc)
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
  (set! (.. target -style -opacity) 1)
  (js.requestAnimationFrame cycler)
  (. target play))

(defn stop []
  (if @playing (if (. @playing -stop) (. @playing stop)))
  (. target pause)
  (reset! playing nil)
  (.. paintFrame -clearit fire))

(defn home []
  (set! (.. container -style -height) "90px")
  (set! (.. container -style -width)  "90px")
  (set! (.. container -style -top) "9px")
  (set! (.. container -style -left) "310px")
  (set! (..((scenes @scene):toc) -style -display) "none")
  (reset! rested true))
 
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
        (if-not @enabled (set! (.. target -style -opacity) .5))
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

(defn disableScenes [sceneRange]
  (doseq [x sceneRange ]
    (if-not (goog.string.contains ((scenes x):id) "sub")
      (do
       (set! (..((scenes x):playbutton) -style -display) "none")
       (set! (..((scenes x):playlabel) -style -opacity) .4)
       (reset! ((scenes x):enabled) false)
    ))))

(defn enableScenes [sceneRange]
  (doseq [x sceneRange ]
    (if-not (goog.string.contains ((scenes x):id) "sub")
      (do
        (set! (..((scenes x):playbutton) -style -display) "inline")
        (set! (..((scenes x):playlabel) -style -opacity) 1)
        (reset! ((scenes x):enabled) true)
   ))))
    
