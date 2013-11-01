(ns symlog.cljs.app.dom.actions
  (:require [symlog.cljs.app :as app]
            [symlog.cljs.animation.functions :as anim]
            [symlog.cljs.animation.timing :as timing])
  (:use [symlog.cljs.app.dom.elements :only [elements]]))

(comment
(init)


(def blmap {
           :narratorRestedEnabled  (goog.dom.getElement "layer17")
           :narratorRestedDisabled (goog.dom.getElement "layer18")
           :narratorCenter         (goog.dom.getElement "layer15")
           :narratorTopLeft        (goog.dom.getElement "layer16")
           :mainVid                (goog.dom.getElement "layer12")
           })

(defn cEnable [controller]
  (set! (.. controller -style -display) "inline"))

(defn cDisable [controller]
  (set! (.. controller -style -display) "none"))

(cEnable (blmap :narratorRestedEnabled))
(cDisable (blmap :narratorRestedEnabled))


(cEnable (blmap :narratorRestedDisabled))
(cDisable (blmap :narratorRestedDisabled))

(.fire (_map :1))


(cEnable (blmap :narratorCenter))
(cDisable (blmap :narratorCenter))

(.fire (_map :2))

(cEnable (blmap :narratorTopLeft))
(cDisable (blmap :narratorTopLeft))

(.fire (_map :3))

(cEnable (blmap :mainVid))
(cDisable (blmap :mainVid))

(init)

)
  (defn init []

  (def _map {
             
    :1   ; MOVE NARRATOR from rest TO CENTER SCREEN, enlarge BY 3 
        (anim/animate-path.
             (elements :narrator)     ; object to animate
             (/ 1000 25)              ; fps
             .3                       ; duration
              4                       ; scale factor
             false                   ; reverse direction
             (str "m 265,52 c 9.56472,122.78368 97.77957,193.18726 207.23261,"
                  "222.73973 C 508.42367,283.64875 547.29345,294.84793 600,300")
         )
    :2   ; MOVE narrator from center to TOP LEFT of main video, REDUCE size BY 1/3
         ; change main vid source to good cop and brighten
        (timing/serialize
             0
             (anim/animate-path.
              (elements :narrator )    ; object to animate
                 (/ 1000 25)            ; fps
                 .3                     ; duration
                 .5                     ; scale factor
                 true                   ; reverse direction
                 (str "m 420,210 c 0,0 26.04289,32.69952 71.51328,53.92846 "
                       "C 520.5366,277.47869 546.81365,285.37235 600,300")
              )    
             1000    
              (fn []  ( set! (. (elements :mainVideo) -src)
                              (elements :goodcopSrc ))
                      ( set! (.-className (elements :mainVideo)) "faded"))
         )
   
    :3   ; move narrator to rest position from top left of main vid
         ; unfade main vid panel
        (timing/serialize
             0
             (anim/animate-path.
                 (elements :narrator)     ; object to animate
                 (/ 1000 25)            ; fps
                 .5                     ; duration
                 .5                     ; scale factor
                 true                   ; reverse direction
                 (str "m 265,52 c 0,0 9.35,58.01292 47.74129,100.8298 "
                      "C 332.33405,174.68113 366.81365,195.37235 420,210")
             )
             0
             (fn []
               (set! (.-className (elements :mainVideo) ) "unfaded"))
      
         )

    :4   ; move narrator from rest to top left corner of main vid
        (timing/serialize.
             0
            (anim/animate-path.
                (elements :narrator)     ; object to animate
                (/ 1000 25)             ; fps
                .4                      ; duration
                 2                       ; scale factor
                false                   ; reverse direction
                (str "m 265,52 c 0,0 9.35,58.01292 47.74129,100.8298 "
                      "C 332.33405,174.68113 366.81365,195.37235 420,210")
            )
             0
            (fn []
               (set! (.-className (elements :mainVideo)) "faded"))
        )
                           
             }))


        




