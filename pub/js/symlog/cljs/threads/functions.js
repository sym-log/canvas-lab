goog.provide('symlog.cljs.threads.functions');
goog.require('cljs.core');
symlog.cljs.threads.functions.getImageArray = (function getImageArray(message){
var req = (new XMLHttpRequest());
req.open("GET",message.data.url.concat(message.data.startFrame,".img"),true);
req.responseType = "text";
req.onload = (function (){
var arr = req.response.split("/ / /");
(arr[arr.length] = message.data.startFrame);
return postMessage({"imagearr":arr});
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
