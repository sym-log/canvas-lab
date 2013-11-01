goog.provide('symlog.cljs.dom.eventHandlers');
goog.require('cljs.core');
goog.inherits(symlog.cljs.dom.eventHandlers.pause_play_alternator = (function pause_play_alternator(){
var this$ = this;
this$.counter = cljs.core.atom.call(null,0);
this$.handler = (function (evt){
if(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,this$.counter)))
{cljs.core.reset_BANG_.call(null,this$.counter,1);
return this$.dispatchEvent("pause");
} else
{cljs.core.reset_BANG_.call(null,this$.counter,0);
return this$.dispatchEvent("play");
}
});
return this$;
}),goog.events.EventTarget);
