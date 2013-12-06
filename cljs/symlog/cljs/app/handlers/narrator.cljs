(ns symlog.cljs.app.handlers.narrator
  (:use [symlog.cljs.app.dom :only [elements]]))

(def FPS 15)
(def ctxt symlog.cljs.app.handlers.narrator)

(defn init []
  
  (def disableButton (elements :narratorDisableButton))
  (def disableTouchArea (elements :narratorDisableTouchArea))
  (def playButton (elements :narratorPlayButton))
  (def playTouchArea (elements :narratorPlayTouchArea))
  (def skipButton (elements :narratorSkipButton))
  (def skipTouchArea (elements :narratorSkipTouchArea))
  (def video (elements :narratorVid) )
  (def container (elements :narratorDiv))
  (def nodeList nil)
  (def state (atom 0))
  (def listener nil)
  (def scenes symlog.cljs.app.sequencers.narrator.sequencer.scenes)
  (def sequencer symlog.cljs.app.sequencers.narrator.sequencer)
  (def controller symlog.cljs.app.controller.main)

  (goog.events.listen ; TOUCH HANDLER FOR NARRATOR
     playTouchArea
     "click"
     touchHandler
     true
     ctxt)

  (doseq [v scenes]
    (let [ handler (tocLabelHandler.) ]
      (set! (. v -handler) handler)
      (goog.events.listen (v :playbutton) "click" tocPlayButtonHandler)
      (goog.events.listen (v :playlabel) "click" (.. v -handler -fire))))

  )

(defn tocPlayButtonHandler [evt]
  (. controller stop)
  (if (= 1 @state)
     (do
       (reset! state 0)
       (set! (.. playButton -style -opacity) 0)
       (set! (.. disableButton -style -opacity) 0)
       (doseq [v nodeList ]
               (goog.events.unlisten
                  v
                  "click"
                  TOChandler
                  true
                  ctxt))
       (goog.events.unlistenByKey listener)))
  (. controller reset
     (js.parseInt (.. evt
                        -currentTarget
                        -parentNode
                        -attributes
                        -tidx
                        -value)))
  (reset! (. controller -step)
            (js.parseInt
             (first
              (filter
               #(goog.string.isNumeric %)
               (.. evt -currentTarget -parentNode -id)))))

  (. controller play))

(defn tocLabelHandler [ ]
  (this-as this
   (set! (. this -state ) (atom 0))        
   (set! (. this -fire)
         (fn [evt]
           (let [ scene (scenes 
                         (js.parseInt
                          (first
                           (filter
                            #(goog.string.isNumeric %)
                            (.. evt -currentTarget -parentNode -id))))) ]
             (if (= 0 @(. this -state))
               (do
                 (reset! (. this -state) 1)
                 (set! (..(scene :playbutton) -style -display) "none")
                 (set! (..(scene :playlabel) -style -opacity) .5)
                 (reset! (scene :enabled) false))
               (do
                 (reset! (. this -state) 0)
                 (set! (..(scene :playbutton) -style -display) "inline")
                 (set! (..(scene :playlabel) -style -opacity) 1)
                 (reset! (scene :enabled) true))))))
   this))

(defn touchHandler [evt]
  (cond
   (= 0 @state)
     (do
        (if @(. sequencer -rested)
           (if @(. sequencer -enabled)
               (do
                  (set! (.. video -style -opacity) .5)
                  (reset! (. sequencer -enabled) false)
                  (doseq [v scenes]
                         (do
                            (set! (..(v :playbutton) -style -display) "none")
                            (set! (..(v :playlabel) -style -opacity) .5)
                            (reset! (v :enabled) false)
                            (reset! (.. v -handler -state) 1))))
               (do
                  (set! (.. video -style -opacity) 1)
                  (reset! (. sequencer -enabled) true)
                  (doseq [v scenes]
                         (do
                            (set! (..(v :playbutton) -style -display) "inline")
                            (set! (..(v :playlabel) -style -opacity) 1)
                            (reset! (v :enabled) true)
                            (reset! (.. v -handler -state) 0)))))

           (do
              (. sequencer pause)
              (set! (.. playButton -style -opacity) 1)
              (set! (.. disableButton -style -opacity) 1)
              (set! (.. skipButton -style -opacity) 1)
              (set! nodeList
                    (symlog.cljs.util.nodelist->coll
                     (goog.dom.getElementsByClass
                      "toc"
                      ((scenes @(. sequencer -scene)):toc)))) 
              (doseq [ v nodeList ]
                (goog.events.listenOnce
                    v
                    "click"
                    TOChandler
                    true
                    ctxt))
              (set! (.. ((scenes @(. sequencer -scene)):toc) -style -display) "inline")
              (set! listener
                    (goog.events.listen disableTouchArea 
                       "click"
                       (fn []
                           (set! (.. playButton -style -opacity) 0)
                           (set! (.. disableButton -style -opacity) 0)
                           (set! (.. ((scenes @(. sequencer -scene)):toc) -style -display) "none")
                           (set! (.. video -style -opacity) 0)
                           (set! (.. container -style -top) "9px")
                           (set! (.. container -style -left) "310px")
                           (set! (.. container -style -height) "90px")
                           (set! (.. container -style -width) "90px")
                           (set! (.. video -style -opacity) .5)
                           (reset! (.. video -sequencer -rested) true)
                           (reset! (.. video -sequencer -enabled) false)
                           (.. video -sequencer stop)
                           (doseq [v scenes]
                               (do
                                 (set! (..(v :playbutton) -style -display) "none")
                                 (set! (..(v :playlabel) -style -opacity) .5)
                                 (reset! (.. v -handler -state) 1)
                                 (reset! (v :enabled) false)))
                           (. controller donext "narrator")
                           (goog.events.unlistenByKey listener)
                           (doseq [v nodeList ]
                             (goog.events.unlisten
                              v
                              "click"
                              TOChandler
                              true
                              ctxt)))))
              ))
        (reset! state 1))

     (= 1 @state)
     (do
       (reset! state 0)
       (if @(. sequencer -rested)
           (if @(. sequencer -enabled)
             (do
                  (set! (.. video -style -opacity) .2)
                  (reset! (. sequencer -enabled) false)
                  (doseq [v scenes]
                     (if-not (.contains (v :id) "sub")
                         (do
                            (set! (..(v :playbutton) -style -display) "none")
                            (set! (..(v :playlabel) -style -opacity) .5)
                            (reset! (v :enabled) false)
                            (reset! (.. v -handler -state) 1)))))
          
             (do
                 (set! (.. video -style -opacity) 1 )
                 (reset! (. sequencer -enabled) true)
                 (doseq [v scenes]
                         (do
                            (set! (..(v :playbutton) -style -display) "inline")
                            (set! (..(v :playlabel) -style -opacity) 1)
                            (reset! (v :enabled) true)
                            (reset! (.. v -handler -state) 0)))))
          
           (do
             (set! (.. ((scenes @(. sequencer -scene)):toc) -style -display) "none")
             (set! (.. playButton -style -opacity) 0)
             (set! (.. disableButton -style -opacity) 0)
             (doseq [v nodeList ]
               (goog.events.unlisten
                  v
                  "click"
                  TOChandler
                  true
                  ctxt))
             (goog.events.unlistenByKey listener)
             (. sequencer play))))
))

(defn TOChandler [evt]
  (cond
   (= "endButton" (.. evt -target -id))
   (do
     (reset! state 0)
     (set! (.. ((scenes @(. sequencer -scene)):toc) -style -display) "none")
     (set! (.. playButton -style -opacity) 0)
     (set! (.. disableButton -style -opacity) 0)
     (doseq [v nodeList ]
         (goog.events.unlisten
             v
             "click"
             TOChandler
             true
      ctxt))
     (goog.events.unlistenByKey listener)
     (.. video -sequencer end))
   :else
     (let [ frame (js.parseInt (.. evt -target -attributes -frame -value))
            time    (/ frame FPS)
           ]
       (reset! state 0)
       (set! (.. ((scenes @(. sequencer -scene)):toc) -style -display) "none")
       (set! (.. playButton -style -opacity) 0)
       (set! (.. disableButton -style -opacity) 0)
       (doseq [v nodeList ]
         (goog.events.unlisten
             v
             "click"
             TOChandler
             true
             ctxt))
       (goog.events.unlistenByKey listener)
       (set! (. video -currentTime) time)
       (.setStep sequencer frame)
       (. sequencer clear)
       (. sequencer play))))

  

