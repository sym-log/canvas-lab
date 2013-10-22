goog.provide('symlog.cljs.net');
goog.require('cljs.core');
symlog.cljs.net.getTextArray = (function getTextArray(url,callbackOnResponse){
var req = (new XMLHttpRequest());
req.open("GET",url,true);
req.responseType = "text";
req.onload = (function (){
return callbackOnResponse.call(null,req.response);
});
return req.send(null);
});
