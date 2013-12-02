(ns symlog.cljs.app.handlers.narrator
  (:use [symlog.cljs.app.dom :only [elements]]))

(def FPS 15)
(def ctxt symlog.cljs.app.handlers.narrator)

(defn init []
  (def disableButton (elements :narratorDisableButton))
  (def disableTouchArea (elements :narratorDisableTouchArea))
  (def playButton (elements :narratorPlayButton))
  (def playTouchArea (elements :narratorPlayTouchArea))
  (def video (elements :narratorVid) )
  (def container (elements :narratorDiv))
  (def nodeList nil)
  (def state (atom 0))
  (def tocRef nil)
  (def listener nil)

  (goog.events.listen ; TOUCH HANDLER FOR NARRATOR
     playTouchArea
     "click"
     touchHandler
     true
     ctxt)

 )

(defn touchHandler [evt]
  (cond
   (= 0 @state)
     (do
        (if @(.. video -sequencer -rested)
           (if @(.. video -sequencer -enabled)
               (do
                  (set! (.. video -style -opacity) .2)
                  (reset! (.. video -sequencer -enabled) false))
               (do
                  (set! (.. video -style -opacity) 1)
                  (reset! (.. video -sequencer -enabled) true)))
           (do
              (.. video -sequencer pause)
              (set! (.. playButton -style -opacity) 1)
              (set! (.. disableButton -style -opacity) 1)
              (set! tocRef
                    (goog.dom.getElement
                     (str "n" (.. video -sequencer -TOCnum))))
              (set! nodeList
                    (symlog.cljs.util.nodelist->coll
                       (goog.dom.getElementsByClass
                          "toc"
                          tocRef)))
              (doseq [ v nodeList ]
                (goog.events.listenOnce
                    v
                    "click"
                    TOChandler
                    true
                    ctxt))
              (set! (.. tocRef -style -display) "inline")
              (set! listener
                    (goog.events.listen disableTouchArea 
                       "click"
                       (fn []
                           (set! (.. playButton -style -opacity) 0)
                           (set! (.. disableButton -style -opacity) 0)
                           (set! (.. tocRef -style -display) "none")
                           (set! (.. video -style -opacity) 0)
                           (set! (.. container -style -top) "9px")
                           (set! (.. container -style -left) "310px")
                           (set! (.. container -style -height) "90px")
                           (set! (.. container -style -width) "90px")
                           (set! (.. video -style -opacity) .2)
                           (reset! (.. video -sequencer -rested) true)
                           (reset! (.. video -sequencer -enabled) false)
                           (.. video -sequencer stop)
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
       (if @(.. video -sequencer -rested)
           (if @(.. video -sequencer -enabled)
               (do
                  (set! (.. video -style -opacity) .2)
                  (reset! (.. video -sequencer -enabled) false))
               (do
                 (set! (.. video -style -opacity) 1 )
                 (reset! (.. video -sequencer -enabled) true)))
           (do
             (set! (.. tocRef -style -display) "none")
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
             (.. video -sequencer play))))
))

(defn TOChandler [evt]
  (cond
   (= "endButton" (.. evt -target -id))
   (do
     (reset! state 0)
     (set! (.. tocRef -style -display) "none")
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
       (set! (.. tocRef -style -display) "none")
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
       (.setStep (.. video -sequencer) frame)
       (.. video -sequencer clear)
       (.. video -sequencer play))))

