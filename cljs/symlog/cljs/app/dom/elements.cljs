(ns symlog.cljs.app.dom.elements)

(def elements {
          :FPS                          15      
          :canvas                       (goog.dom.getElement "canvas")
          :context                      (. (goog.dom.getElement "canvas") getContext "2d")
          :paintFrame                   (js.Image.)
          :goodcopSrc                   "../video/goodcop.webm"
          :mainVidSrc                   "../video/policeaction.webm"
          :narratorFrameBuffer          (atom nil) ; will be reset on init
          :narratorDiv                  (goog.dom.getElement  "narrator")
          :narratorVid                  (goog.dom.getElement "narratorVid")
          :narratorPlayTouchArea        (goog.dom.getElement "narratorPlayTouchArea")
          :narratorDisableTouchArea     (goog.dom.getElement "narratorDisableTouchArea")
          :narratorPlayButton           (goog.dom.getElement "narratorPlayButton")
          :narratorDisableButton        (goog.dom.getElement "narratorDisableButton")     
          :mainVideo                    (goog.dom.getElement "mainVideo")
          :mainVideoPlayButton          (goog.dom.getElement "mainVideoPlayButton")
          :mainVideoPlayTouchArea       (goog.dom.getElement "mainVideoPlayTouchArea")
          :liesScore                    (goog.dom.getElement "lies")
          :threatsScore                 (goog.dom.getElement "threats")
          :crimesScore                  (goog.dom.getElement "crimes")
          :unlawfulsScore               (goog.dom.getElement "unlawfuls")
          :controlButton                (goog.dom.getElement "controlButton")     
          :mainVidOverlays              (atom nil) ; will be given value on app init     

     }  )
