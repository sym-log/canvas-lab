(ns symlog.cljs.app
  (:use [symlog.cljs.app.dom :only [elements]]))

(defn init []
  
   (symlog.cljs.app.frameBuffer.init)

   (set! (.-onload (elements :paintFrame))
        (fn [] (symlog.cljs.canvas.paintImage
               (elements  :context)
               (elements  :canvas)
               (elements  :paintFrame))))
   
   (set! (.-clearit (elements :paintFrame))
         (symlog.cljs.canvas.clearCanvas. (elements :context) (elements :canvas)))

   
   (symlog.cljs.net.getTextArray "http://192.168.1.2/img/frame-buffers/narrator.imgs"
     (fn [ response ]
         (reset! (elements :narratorFrameBuffer) (.split response "/ / /"))
         (symlog.cljs.net.getTextArray "http://192.168.1.2/img/frame-buffers/mainoverlays.imgs"
             (fn [response]
               (reset! (elements :mainVidOverlays ) (.split response "/ / /"))
               (symlog.cljs.app.controller.main.init)
               (goog.events.fireListeners
                   (elements :mainVideoPlayTouchArea)   
                   "click"
                   false
                   (js-obj "type" "click" "target" (elements :mainVideoPlayTouchArea)))))))
   )
