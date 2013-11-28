goog.provide('symlog.cljs.app');
goog.require('cljs.core');
goog.require('symlog.cljs.app.dom.eventHandlers');
goog.require('symlog.cljs.app.dom.elements');
goog.require('symlog.cljs.app.dom.eventHandlers');
goog.require('symlog.cljs.app.dom.elements');
symlog.cljs.app.init = (function init(){
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame").onload = (function (){
return symlog.cljs.canvas.paintImage.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:context"),symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:canvas"),symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"));
});
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame").clearit = (new symlog.cljs.canvas.clearCanvas(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:context"),symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:canvas")));
symlog.cljs.app.frameBuffer.init.call(null);
return symlog.cljs.net.getTextArray.call(null,"http://192.168.1.2/img/frame-buffers/narrator.imgs",(function (response){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorFrameBuffer"),response.split("/ / /"));
return symlog.cljs.net.getTextArray.call(null,"http://192.168.1.2/img/frame-buffers/mainoverlays.imgs",(function (response__$1){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVidOverlays"),response__$1.split("/ / /"));
symlog.cljs.app.controller.main.init.call(null);
goog.events.listen(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorPlayTouchArea"),"click",(new symlog.cljs.app.dom.eventHandlers.narratorTouchHandler(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorVid"))).handler,false);
return goog.events.listen(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideoPlayTouchArea"),"click",(new symlog.cljs.app.dom.eventHandlers.mainVideoTouchHandler(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo"))).handler,false);
}));
}));
});
