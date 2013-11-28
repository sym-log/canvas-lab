(ns symlog.cljs.app
  (:use [symlog.cljs.app.dom.elements :only [elements]]
        [symlog.cljs.app.dom.eventHandlers :only [narratorTouchHandler mainVideoTouchHandler]]))

(defn init [] 
   (set! (.-onload (elements :paintFrame))
        (fn [] (symlog.cljs.canvas.paintImage
               (elements  :context)
               (elements  :canvas)
               (elements  :paintFrame))))  
   (set! (.-clearit (elements :paintFrame))
         (symlog.cljs.canvas.clearCanvas. (elements :context) (elements :canvas)))

   (symlog.cljs.app.frameBuffer.init)
   
   (symlog.cljs.net.getTextArray "http://192.168.1.2/img/frame-buffers/narrator.imgs"
     (fn [ response ]
         (reset! (elements :narratorFrameBuffer) (.split response "/ / /"))
         (symlog.cljs.net.getTextArray "http://192.168.1.2/img/frame-buffers/mainoverlays.imgs"
             (fn [response]
                 (reset! (elements :mainVidOverlays ) (.split response "/ / /"))
                 (symlog.cljs.app.controller.main.init)
                 (goog.events.listen (elements :narratorPlayTouchArea)
                   "click"
                   (.-handler (narratorTouchHandler. (elements :narratorVid))) false)
                 (goog.events.listen (elements :mainVideoPlayTouchArea)
                   "click"
                   (.-handler (mainVideoTouchHandler. (elements :mainVideo))) false)
          ; (symlog.cljs.app.sequencers.main.sequencer.fire)
                 
)))))


