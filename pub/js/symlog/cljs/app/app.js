goog.provide('symlog.cljs.app');
goog.require('cljs.core');
goog.require('symlog.cljs.app.elements');
symlog.cljs.app.init = (function init(){
symlog.cljs.app.mainLoader = (new symlog.cljs.animation.functions.loadingCircle(symlog.cljs.app.elements.mainSpinner));
symlog.cljs.app.narratorLoader = (new symlog.cljs.animation.functions.loadingCircle(symlog.cljs.app.elements.narratorSpinner));
symlog.cljs.app.mainLoader.fire();
symlog.cljs.app.elements.paintFrame.onload = (function (){
return symlog.cljs.canvas.paintImage.call(null,symlog.cljs.app.elements.context,symlog.cljs.app.elements.canvas,symlog.cljs.app.elements.paintFrame);
});
symlog.cljs.app.elements.paintFrame.clearit = (new symlog.cljs.canvas.clearCanvas(symlog.cljs.app.elements.context,symlog.cljs.app.elements.canvas));
return symlog.cljs.net.getTextArray.call(null,"http://192.168.1.2/img/frame-buffers/narrator.imgs",(function (response){
symlog.cljs.app.elements.narratorFrameBuffer = response.split("/ / /");
return symlog.cljs.net.getTextArray.call(null,"http://192.168.1.2/img/frame-buffers/mainoverlays.imgs",(function (response__$1){
symlog.cljs.app.elements.mainVidOverlays = response__$1.split("/ / /");
symlog.cljs.app.controller.main.init.call(null);
symlog.cljs.app.frameBuffer.init.call(null);
symlog.cljs.app.handlers.toc.init.call(null);
symlog.cljs.app.mainLoader.stop();
return goog.events.fireListeners(symlog.cljs.app.elements.mainVideoPlayTouchArea,"click",false,{"type":"click","target":symlog.cljs.app.elements.mainVideoPlayTouchArea});
}));
}));
});
