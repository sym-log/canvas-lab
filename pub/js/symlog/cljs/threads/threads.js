goog.provide('symlog.cljs.threads');
goog.require('cljs.core');
symlog.cljs.threads.create_thread = (function create_thread(threadFunction,callback){
var worker = (new Worker(URL.createObjectURL((new Blob([[cljs.core.str("onmessage = "),cljs.core.str(threadFunction)].join('')],{"type":"text/javascript"})))));
worker.onmessage = callback;
return worker;
});
