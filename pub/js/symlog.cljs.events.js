goog.provide('symlog.cljs.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('symlog.cljs.util');
symlog.cljs.events.attach_listeners = (function attach_listeners(jsObj,domtag){
var listeners = cljs.core.js__GT_clj.call(null,jsObj.listeners);
var seq__5239 = cljs.core.seq.call(null,cljs.core.keys.call(null,listeners));
var chunk__5240 = null;
var count__5241 = 0;
var i__5242 = 0;
while(true){
if((i__5242 < count__5241))
{var key = cljs.core._nth.call(null,chunk__5240,i__5242);
symlog.cljs.events.set_listener.call(null,jsObj,domtag,key,key.call(null,listeners));
{
var G__5243 = seq__5239;
var G__5244 = chunk__5240;
var G__5245 = count__5241;
var G__5246 = (i__5242 + 1);
seq__5239 = G__5243;
chunk__5240 = G__5244;
count__5241 = G__5245;
i__5242 = G__5246;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5239);
if(temp__4092__auto__)
{var seq__5239__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5239__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__5239__$1);
{
var G__5247 = cljs.core.chunk_rest.call(null,seq__5239__$1);
var G__5248 = c__2754__auto__;
var G__5249 = cljs.core.count.call(null,c__2754__auto__);
var G__5250 = 0;
seq__5239 = G__5247;
chunk__5240 = G__5248;
count__5241 = G__5249;
i__5242 = G__5250;
continue;
}
} else
{var key = cljs.core.first.call(null,seq__5239__$1);
symlog.cljs.events.set_listener.call(null,jsObj,domtag,key,key.call(null,listeners));
{
var G__5251 = cljs.core.next.call(null,seq__5239__$1);
var G__5252 = null;
var G__5253 = 0;
var G__5254 = 0;
seq__5239 = G__5251;
chunk__5240 = G__5252;
count__5241 = G__5253;
i__5242 = G__5254;
continue;
}
}
} else
{return null;
}
}
break;
}
});
symlog.cljs.events.set_listener = (function set_listener(jsObj,domtag,eType,handler){
return goog.events.listen(domtag,eType,eval(handler),false,jsObj);
});
