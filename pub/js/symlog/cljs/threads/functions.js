goog.provide('symlog.cljs.threads.functions');
goog.require('cljs.core');
symlog.cljs.threads.functions.getImageArray = (function getImageArray(message){
var req = (new XMLHttpRequest());
req.open("GET",message.data.url.concat(message.data.idx,".imgs"),true);
req.responseType = "text";
req.onload = (function (){
var arr = req.response.split("/ / /");
(arr[message.data.endpoint] = message.data.idx);
return postMessage({"imagearr":arr,"idx":message.data.idx});
});
return req.send(null);
});
symlog.cljs.threads.functions.getSceneArray = (function getSceneArray(message){
var req = (new XMLHttpRequest());
req.open("GET",message,true);
req.responseType = "text";
req.onload = (function (){
var arr = req.response.split("/ / /");
return postMessage({"imagearr":arr});
});
return req.send(null);
});
