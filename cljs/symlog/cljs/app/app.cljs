(ns symlog.cljs.app
  (:require [symlog.cljs.app.elements :as elements]))

(defn init []

  (def mainLoader (symlog.cljs.animation.functions.loadingCircle. elements/mainSpinner))
  (def narratorLoader (symlog.cljs.animation.functions.loadingCircle. elements/narratorSpinner ))

  (. mainLoader fire)

  
(set! (.-onload elements/paintFrame)
        (fn [] (symlog.cljs.canvas.paintImage
               elements/context
               elements/canvas
               elements/paintFrame)))
   
 (set! (.-clearit elements/paintFrame)
         (symlog.cljs.canvas.clearCanvas. elements/context elements/canvas))
   
  (symlog.cljs.net.getTextArray "http://192.168.1.2/img/frame-buffers/narrator.imgs"
     (fn [ response ]
         (set! elements/narratorFrameBuffer(.split response "/ / /"))
         (symlog.cljs.net.getTextArray "http://192.168.1.2/img/frame-buffers/mainoverlays.imgs"
             (fn [response]
               (set! elements/mainVidOverlays (.split response "/ / /"))
               (symlog.cljs.app.controller.main.init)
               (symlog.cljs.app.frameBuffer.init)
               (symlog.cljs.app.handlers.toc.init)
               (. mainLoader stop)
               (goog.events.fireListeners
                   elements/mainVideoPlayTouchArea   
                   "click"
                   false
                   (js-obj "type" "click" "target" elements/mainVideoPlayTouchArea))))))


  

 )
