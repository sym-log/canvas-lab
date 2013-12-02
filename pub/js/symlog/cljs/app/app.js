goog.provide('symlog.cljs.app');
goog.require('cljs.core');
goog.require('symlog.cljs.app.dom');
goog.require('symlog.cljs.app.dom');
symlog.cljs.app.init = (function init(){
symlog.cljs.app.frameBuffer.init.call(null);
symlog.cljs.app.dom.elements.call(null,"\uFDD0:paintFrame").onload = (function (){
return symlog.cljs.canvas.paintImage.call(null,symlog.cljs.app.dom.elements.call(null,"\uFDD0:context"),symlog.cljs.app.dom.elements.call(null,"\uFDD0:canvas"),symlog.cljs.app.dom.elements.call(null,"\uFDD0:paintFrame"));
});
symlog.cljs.app.dom.elements.call(null,"\uFDD0:paintFrame").clearit = (new symlog.cljs.canvas.clearCanvas(symlog.cljs.app.dom.elements.call(null,"\uFDD0:context"),symlog.cljs.app.dom.elements.call(null,"\uFDD0:canvas")));
return symlog.cljs.net.getTextArray.call(null,"http://192.168.1.2/img/frame-buffers/narrator.imgs",(function (response){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorFrameBuffer"),response.split("/ / /"));
return symlog.cljs.net.getTextArray.call(null,"http://192.168.1.2/img/frame-buffers/mainoverlays.imgs",(function (response__$1){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.dom.elements.call(null,"\uFDD0:mainVidOverlays"),response__$1.split("/ / /"));
symlog.cljs.app.controller.main.init.call(null);
return goog.events.fireListeners(symlog.cljs.app.dom.elements.call(null,"\uFDD0:mainVideoPlayTouchArea"),"click",false,{"type":"click","target":symlog.cljs.app.dom.elements.call(null,"\uFDD0:mainVideoPlayTouchArea")});
}));
}));
});
