(ns symlog.cljs.app.handlers.narrator
  (:require [symlog.cljs.app.elements :as elements]))

(def FPS elements/FPS)
(def ctxt symlog.cljs.app.handlers.narrator)

(defn init []
  
  (def disableButton elements/narratorDisableButton)
  (def disableTouchArea elements/narratorDisableTouchArea)
  (def playButton elements/narratorPlayButton)
  (def playTouchArea elements/narratorPlayTouchArea)
  (def skipButton elements/narratorSkipButton)
  (def skipTouchArea elements/narratorSkipTouchArea)
  (def video elements/narratorVid)
  (def tocsDiv elements/narratorTOCsDiv)
  (def container elements/narratorDiv)
  (def scenes symlog.cljs.app.sequencers.narrator.sequencer.scenes)
  (def sequencer symlog.cljs.app.sequencers.narrator.sequencer)
  (def controller symlog.cljs.app.controller.main)
  (def videoTouchHandler (screenTouchHandler.))

  (goog.events.listen ; TOUCH HANDLER FOR NARRATOR
     playTouchArea
     "click"
     (.-fire videoTouchHandler)
     true
     ctxt)

  (doseq [v scenes]
    (let [ handler (TOCToggleHandler. v)  ]
      (set! (. v -handler) handler)
      (goog.events.listen (v :playlabel) "click" (.-fire (TOCLabelHandler. (v :tIdx) v)))
      (goog.events.listen (v :playtoggle) "click" (.. v -handler -fire))
      (if (> (count (v :tocNodes)) 0)
        (doseq [x (v :tocNodes) ] 
          (goog.events.listen
            x
           "click"
           (.-fire (inlineTOChandler.
                    (js.parseInt (.. x -attributes -frame -value))
                    FPS
                    (v :toc))))))))

  )

(defn screenTouchHandler []
  (this-as this
    (set! (. this -state) (atom 0))
    (set! (. this -disableButtonListener) (atom nil))
    (set! (. this -skipButtonListener) (atom nil))
    (set! (. this -switchOff)
          (fn []
              (reset! (. this -state) 0)
              (set! (.. playButton -style -opacity) 0)
              (set! (.. disableButton -style -opacity) 0)
              (set! (.. skipButton -style -opacity) 0)
              (set! (.. tocsDiv -style -display) "none")
              (set! (.. ((scenes @(. sequencer -scene)):toc) -style -display) "none")
              (goog.events.unlistenByKey (. this -disableButtonListener))
              (goog.events.unlistenByKey (. this -skipButtonListener))))
    (set! (. this -fire)
          (fn [evt]
              (cond
                  (= 0 @(. this -state))
                  (do
                    (reset! (. this -state) 1)
                      (if @(. sequencer -rested)
                        (if @(. sequencer -enabled)
                          (do
                            (set! (.. video -style -opacity) .5)
                            (reset! (. sequencer -enabled) false)
                            (doseq [v scenes] (.. v -handler switchOff)))
                          (do
                            (set! (.. video -style -opacity) 1)
                            (reset! (. sequencer -enabled) true)
                            (doseq [v scenes] (.. v -handler switchOn))))
                        (do
                          (. sequencer pause)
                          (set! (.. playButton -style -opacity) 1)
                          (set! (.. disableButton -style -opacity) 1)
                          (set! (.. skipButton -style -opacity) 1)
                          (set! (.. tocsDiv -style -display) "inline")
                          (set! (.. ((scenes @(. sequencer -scene)):toc) -style -display) "inline")
                          (set! (. this -disableButtonListener)
                                (goog.events.listenOnce
                                  disableTouchArea
                                  "click"
                                  disableButtonHandler))
                          (set! (. this -skipButtonListener)
                                (goog.events.listenOnce
                                  skipTouchArea
                                  "click"
                                  skipButtonHandler)))))
                          

                  (= 1 @(. this -state))
                    (do
                      (reset! (. this -state) 0)
                      (if @(. sequencer -rested)
                        (if @(. sequencer -enabled)
                          (do
                            (set! (.. video -style -opacity) .2)
                            (reset! (. sequencer -enabled) false)
                            (doseq [v scenes] (.. v -handler switchOff)))
                          (do
                            (set! (.. video -style -opacity) 1 )
                            (reset! (. sequencer -enabled) true)
                            (doseq [v scenes] (.. v -handler switchOn))))
                        (do
                          (set! (.. tocsDiv -style -display) "none")
                          (set! (.. ((scenes @(. sequencer -scene)):toc) -style -display) "none")
                          (set! (.. playButton -style -opacity) 0)
                          (set! (.. disableButton -style -opacity) 0)
                          (set! (.. skipButton -style -opacity) 0)
                          (goog.events.unlistenByKey (. this -disableButtonListener))
                          (goog.events.unlistenByKey (. this -skipButtonListener))
                          (. sequencer play)))))))
  this))



(defn inlineTOChandler [ frameRef frameRate toc ]
  (this-as this
     (set! (. this -toc) toc)      
     (set! (. this -frame) frameRef)
     (set! (. this -time) (/ frameRef frameRate))     
     (set! (. this -fire)
           (fn [evt]
             (set! (.. toc -style -display) "none")
             (. videoTouchHandler switchOff)
             (set! (. video -currentTime) (. this -time))
             (.setStep sequencer (. this -frame))
             (. sequencer clear)
             (. sequencer play)))
    this))

(defn disableButtonHandler []
  (. videoTouchHandler switchOff)
  (set! (.. container -style -top) "9px")
  (set! (.. container -style -left) "310px")
  (set! (.. container -style -height) "90px")
  (set! (.. container -style -width) "90px")
  (set! (.. video -style -opacity) .5)
  (reset! (.. video -sequencer -rested) true)
  (reset! (.. video -sequencer -enabled) false)
  (.. video -sequencer stop)
  (doseq [v scenes] (.. v -handler switchOff))
  (. controller donext "narrator"))

(defn sendHome []
  (set! (.. container -style -top) "9px")
  (set! (.. container -style -left) "310px")
  (set! (.. container -style -height) "90px")
  (set! (.. container -style -width) "90px")
  (reset! (.. video -sequencer -rested) true))

(defn skipButtonHandler []
  (. videoTouchHandler switchOff)
  (.. video -sequencer end))

(defn TOCLabelHandler [time scene ]
  (this-as this
   (set! (. this -fire)
         (fn [evt]
           (reset! (scene  :enabled) true)
           (. controller stop)
           (. videoTouchHandler switchOff)
           (sendHome)
           (. controller reset time)
           (reset! (. controller -step) (scene :sceneNo))
           (. controller play)))

  this))

(defn TOCToggleHandler [ scene ]
  (this-as this
   (set! (. this -state ) (atom 0))
   (set! (. this -fire)
         (fn [evt]
             (. evt preventDefault)
             (if (= 0 @(. this -state))
               (do
                 (reset! (. this -state) 1)
                 (set! (..(scene :playlink) -style -opacity) .2)
                 (reset! (scene :enabled) false))
               (do
                 (reset! (. this -state) 0)
                 (set! (..(scene :playlink) -style -opacity) 1)
                 (reset! (scene  :enabled) true)))))
   (set! (. this -switchOff)
         (fn []
           (reset! (. this -state) 1)
           (set! (..(scene :playlink) -style -opacity) .2)
           (reset! (scene  :enabled) false)))
   (set! (. this -switchOn)
         (fn []
           (reset! (. this -state) 0)
           (set! (..(scene :playlink) -style -opacity) 1)
           (reset! (scene  :enabled) true)))
   
   this))


