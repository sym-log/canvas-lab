(ns symlog.cljs.video
  (:require [goog.events :as events] )
  (:use     [goog.string :only [toNumber]] )
 )

(defn blob2vid [blob vidId]
  "replaces whatever video source used by HTML video reference with blob and

   Example usage:
       (blob2vid blob myVideo) <=  myVideo should be in double quotes and be
       the id of an HTML video element. "


  (let [vid (goog.dom.getElement vidId)]
    (set! (.-src
           (aget
            (.getElementsByTagName (goog.dom.getElement "myVideo") "source") 0))
          (goog.global.URL.createObjectURL blob))
    (.load vid))
 )

(defn keyframe [ currentFrame ]
  "this maps a video frame to a keyframe value"
  ( cond

    (< currentFrame 50) 0

    (and ( > currentFrame 50) ( < currentFrame 750)) 1

  :else 1 )

)

(defn per-frame-function [ stage videoRef FPS ]
  (. stage paint (keyframe ( * (. videoRef -currentTime) FPS)))
)


(deftype STAGE [ svgRoot ] Object
         
    ( init [ this ]
      (set! (. this -keynum) 0)
       (aset this 0 nil)
       (aset this 1 (. svgRoot getElementById 1))
      this )

    ( paint [this keyframe]
      
      (if-not (= keyframe (. this -keynum))
        (do
          (set! (. this -keynum) keyframe)
          (.setAttribute (aget this keyframe) "display" "visible")
    )))    
)

(deftype vidWrapper [ video FPS per-frame-function ] Object

    ( stop [ this ]
      (do
        (if-not (type (. this -timerRef)) (set! (. this -timerRef) nil))
        (.. this -video pause)
        (js.clearInterval (. this -timerRef))) )
    
    ( start [ this ]
      (do
        (if (.. this -video -ended) (set! (.. this -video -currentTime) 0 ))
        (set! (. this -timerRef)
              (js.setInterval (. this -per-frame-function) (/ 1000 (+ (. this -FPS) 2))))
        (.. this -video play )))
)
