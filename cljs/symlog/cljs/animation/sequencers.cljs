(ns symlog.cljs.animation.sequencers)
(comment
  ; trigger a defined sequence of instructions the seqTarget as it plays in the browser               ; seq object could be a video or sound file
  ; the sequence most in a specific format ...see:                  
  ; first an event to a listener when the seqTarget has completed

(goog.inherits (defn toVideo
 ( [ seqTarget startFrame endFrame frameRate ]
      ; this variation just plays a video until the given frame is reach
   (this-as this 
    (goog.events.EventTarget.call this)
    (set! (. this -enabled) (atom true))
    (set! (. this -pause) (fn [] (. this dispatchEvent "pause")
                                 (. this stop)))
    (set! (. this -end) (fn []   (. this dispatchEvent "ended")
                                 (. this stop)))
      (set! (. this -trigger) (fn [ ]
               (let [ frameNum (js.Math.round (* (. seqTarget -currentTime) frameRate)) ]
                  (if (<= frameNum endFrame)
                       (js.requestAnimationFrame (. this -trigger))
                       (do
                         (. this stop)
                         (. this dispatchEvent "done"))))))

      (set! (. this -fire ) (fn []
                              (set! (. seqTarget -currentTime) (/ startFrame frameRate))
                              (set! (. this -listener)
                                    (goog.events.listen
                                     seqTarget
                                     goog.events.EventType.CLICK
                                     (. this -pause)))
                              (. seqTarget play)
                              (set! (. this -reqId) (js.requestAnimationFrame (. this -trigger)))
                              this))
      (set! (. this -stop) (fn []
                              (. seqTarget pause)
                              (js.cancelAnimationFrame (. this -reqId))))
      (set! (. this -play) (fn []
                              (. seqTarget play)
                              (set! (. this -reqId) (js.requestAnimationFrame (. this -trigger)))))
                              
    this))
 ( [ seqTarget startFrame endFrame frameRate sequence ]
      ; this variation maps events to the running video as it plays
  (this-as this
      (goog.events.EventTarget.call this)
      (set! (. this -enabled) (atom true))      
      (set! (. this -trigger)
            (fn [ ]
              (let [ frameNum (js.Math.round (* (. seqTarget -currentTime) frameRate)) ]
                (if (<= frameNum endFrame) 
                  (do 
                    (doseq [ [ k v ] sequence ]
                      (if-not @(v :triggered)
                        (if (some #{frameNum} (v :range))
                              (do
                                (reset! (v :triggered) true)
                                (.play (v :trigger))))))
                    (js.requestAnimationFrame (. this -trigger)))
                  (do
                    (. this stop)
                    (. this dispatchEvent "done"))))))

      (set! (. this -fire ) (fn []
                             (set! (. seqTarget -currentTime) (/ startFrame frameRate))
                              (. seqTarget play)
                              (set! (. this -reqId) (js.requestAnimationFrame (. this -trigger)))
                              this))
      (set! (. this -stop) (fn []
                              (. seqTarget pause)
                              (js.cancelAnimationFrame (. this -reqId))))
      this))
      
   )goog.events.EventTarget)

)