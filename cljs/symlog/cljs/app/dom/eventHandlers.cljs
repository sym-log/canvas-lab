(ns symlog.cljs.app.dom.eventHandlers
    (:use [symlog.cljs.app.dom.elements :only [elements]]))

(defn narratorTouchHandler [ target  ]
   (this-as this
     (set! (. this -state) (atom 0))
     (set! (. this -handler )
           (fn [evt]
             (cond
               (= 0 @(. this -state))
               (do
                  (if (.. target -sequencer -rested)
                    (if (.. target -sequencer -enabled)
                      (do
                         (set! (.. target -style -opacity) .2)
                         (set! (.. target -sequencer -enabled) false))
                      (do
                         (set! (.. target -style -opacity) 1)
                         (set! (.. target -sequencer -enabled) true)))
                    (do
                     (.. target -sequencer pause)
                     (set! (.. (elements :narratorPlayButton) -style -opacity) 1)
                     (set! (.. (elements :narratorDisableButton) -style -opacity) 1)
                     (set! (. this -listener)
                           (goog.events.listen (elements :narratorDisableTouchArea)
                                "click"
                                (fn []
                                  (set! (.. (elements :narratorPlayButton) -style -opacity) 0)
                                  (set! (.. (elements :narratorDisableButton) -style -opacity) 0)
                                  (set! (.. (elements :narratorVid) -style -opacity) 0)
                                  (set! (.. (elements :narratorDiv) -style -top) "9px")
                                  (set! (.. (elements :narratorDiv) -style -left) "310px")
                                  (set! (.. (elements :narratorDiv) -style -height) "90px")
                                  (set! (.. (elements :narratorDiv) -style -width) "90px")
                                  (set! (.. (elements :narratorVid) -style -opacity) .2)
                                  (set! (.. target -sequencer -rested) true)
                                  (set! (.. target -sequencer -enabled) false)
                                  (.. target -sequencer stop)
                                  (goog.events.unlistenByKey (. this -listener)))))
                     ))
                  (reset! (. this -state) 1))
                  
               (= 1 @(. this -state))
                (do
                  (reset! (. this -state) 0)
                  (if (.. target -sequencer -rested)
                    (if (.. target -sequencer -enabled)
                       (do
                         (set! (.. target -style -opacity) .2)
                         (set! (.. target -sequencer -enabled) false))
                       (do
                         (set! (.. target -style -opacity) 1 )
                         (set! (.. target -sequencer -enabled) true)))
                    (do
                      (set! (.. (elements :narratorPlayButton) -style -opacity) 0)
                      (set! (.. (elements :narratorDisableButton) -style -opacity) 0)
                      (goog.events.unlistenByKey (. this -listener))
                      (.. target -sequencer play))))
     )))
  this))

(defn mainVideoTouchHandler [ target  ]
   (this-as this
     (set! (. this -state) (atom 0))
     (set! (. this -handler )
           (fn [evt]
             (cond
              (= 0 @(. this -state))
                  (if-not @(.. target -controller -interrupted) 
                    (do
                       (reset! (. this -state) 1)
                       (.. target -controller pause)
                       (set! (.. target -style -opacity) .2)
                       (set! (.. (elements :mainVideoPlayButton) -style -opacity) 1)
                       (set! (.. (elements :mainVideoPlayButton) -style -opacity) 1)))
                   
               (= 1 @(. this -state))
                (do
                  (reset! (. this -state) 0)
                  (set! (.. target -style -opacity) 1)
                  (set! (.. (elements :mainVideoPlayButton) -style -opacity) 0)
                  (.. target -controller play))
         )))       
     this))




