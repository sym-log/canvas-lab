goog.provide('symlog.cljs.app.frameBuffer');
goog.require('cljs.core');
symlog.cljs.app.frameBuffer.startFrame = cljs.core.atom.call(null,0);
symlog.cljs.app.frameBuffer.frame__GT_buffer = (function frame__GT_buffer(message){
var idx = (message.data.frame - cljs.core.deref.call(null,symlog.cljs.app.frameBuffer.startFrame));
(symlog.cljs.app.buffer[idx]).src = message.data.image;
return (symlog.cljs.app.buffer[idx]).frame = message.data.frame;
});
symlog.cljs.app.frameBuffer.fillFrameBuffer = (function fillFrameBuffer(url,buffer,workerRef,startNum){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.startFrame,startNum);
return buffer.forEach((function (elem,idx,arr){
return workerRef.postMessage({"url":[cljs.core.str(url),cljs.core.str((idx + cljs.core.deref.call(null,symlog.cljs.app.frameBuffer.startFrame))),cljs.core.str(".png")].join(''),"frame":(idx + cljs.core.deref.call(null,symlog.cljs.app.frameBuffer.startFrame))});
}));
});
symlog.cljs.app.frameBuffer.getImage = (function getImage(message){
var req = (new XMLHttpRequest());
req.open("GET",message.data.url);
req.responseType = "arraybuffer";
req.onload = (function (evt){
return postMessage({"image":"data:image/png;base64,".concat(btoa(String.fromCharCode.apply(null,Uint8Array(req.response)))),"frame":message.data.frame});
});
return req.send(null);
});
symlog.cljs.app.frameBuffer.create_thread = (function create_thread(callback,threadFunction){
var worker = (new Worker(URL.createObjectURL((new Blob([[cljs.core.str("onmessage = "),cljs.core.str(threadFunction)].join('')],{"type":"text/javascript"})))));
worker.onmessage = callback;
return worker;
});
