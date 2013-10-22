(ns symlog.cljs.app.controller)

(defn playNarrator []
   ;   (def reqIdn (js.requestAnimationFrame framecall actions))
      (.play (symlog.cljs.app.actors :narrator)))

(defn pauseNarrator []
   ;   (def reqIdn (js.requestAnimationFrame framecall actions))
      (.pause (symlog.cljs.app.actors :narrator)))

(defn playMainVid []
   ;   (def reqIdm (js.requestAnimationFrame framecall actions))
      (.play (symlog.cljs.app.actors :mainVideo))
 )

 (defn pauseMainVid []
     (.pause (symlog.cljs.app.actors :mainVideo))
   ;  (js.cancelAnimationFrame reqIdm)
     )

 (defn framecall [ ]
    (let [ frameNum (js.Math.round (* (. video -currentTime) videoFrameRate)) ]
      (goog.object.forEach actions
         (fn [elem idx obj]
              (if (. elem -enabled)
                (if-not (= -1 (.indexOf (. elem -range) frameNum ))
                    (if-not (. elem -triggered)
                        (do (set! elem -triggered true)
                             (.. elem -trigger fire)))))))
; find if a range has a given value
;(if (some #{101} mike) "hello" "goodbye")

  ))
