(ns symlog.cljs.app.dom.elements)

(def elements {
                
          :canvas               (goog.dom.getElement "canvas")
          :context              (. (goog.dom.getElement "canvas") getContext "2d")
          :paintFrame           (js.Image.)
          :goodcopSrc           "../video/goodcop.webm"
          :mainVidSrc           "../video/policeaction.webm"
          :seq1FrameBuffer      (atom nil) ; will be reset on init
          :seq2FrameBuffer      (atom nil) ; will be reset on init
          :narrator             (goog.dom.getElement  "narratorVid")
          :mainVideo            (goog.dom.getElement "mainVideo")
 }  )
