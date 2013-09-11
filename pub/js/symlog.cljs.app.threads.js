goog.provide('symlog.cljs.app.threads');
goog.require('cljs.core');
symlog.cljs.app.threads.frame__GT_buffer = (function frame__GT_buffer(message,startFrame){
var idx = (message.data.frame - startFrame);
(symlog.cljs.app.buffer[idx]).src = message.data.image;
return (symlog.cljs.app.buffer[idx]).frame = message.data.frame;
});
symlog.cljs.app.threads.getImage = (function getImage(message){
var req = (new XMLHttpRequest());
req.open("GET",message.data.url);
req.responseType = "arraybuffer";
req.onload = (function (evt){
return postMessage({"image":"data:image/png;base64,".concat(btoa(String.fromCharCode.apply(null,Uint8Array(req.response)))),"frame":message.data.frame});
});
return req.send(null);
});
symlog.cljs.app.threads.create_thread = (function create_thread(callback,threadFunction){
var worker = (new Worker(URL.createObjectURL((new Blob([[cljs.core.str("onmessage = "),cljs.core.str(threadFunction)].join('')],{"type":"text/javascript"})))));
worker.onmessage = callback;
return worker;
});
