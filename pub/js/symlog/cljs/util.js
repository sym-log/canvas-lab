goog.provide('symlog.cljs.util');
goog.require('cljs.core');
goog.inherits(symlog.cljs.util.dispatcher = (function dispatcher(){
var this$ = this;
this$.send = (function (message){
return this$.dispatchEvent(message);
});
return this$;
}),goog.events.EventTarget);
symlog.cljs.util.nodelist__GT_coll = (function nodelist__GT_coll(nl){
var iter__2723__auto__ = (function iter__3220(s__3221){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3221__$1 = s__3221;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__3221__$1);
if(temp__4092__auto__)
{var s__3221__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3221__$2))
{var c__2721__auto__ = cljs.core.chunk_first.call(null,s__3221__$2);
var size__2722__auto__ = cljs.core.count.call(null,c__2721__auto__);
var b__3223 = cljs.core.chunk_buffer.call(null,size__2722__auto__);
if((function (){var i__3222 = 0;
while(true){
if((i__3222 < size__2722__auto__))
{var x = cljs.core._nth.call(null,c__2721__auto__,i__3222);
cljs.core.chunk_append.call(null,b__3223,(nl[x]));
{
var G__3224 = (i__3222 + 1);
i__3222 = G__3224;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3223),iter__3220.call(null,cljs.core.chunk_rest.call(null,s__3221__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3223),null);
}
} else
{var x = cljs.core.first.call(null,s__3221__$2);
return cljs.core.cons.call(null,(nl[x]),iter__3220.call(null,cljs.core.rest.call(null,s__3221__$2)));
}
} else
{return null;
}
break;
}
}),null));
});
return iter__2723__auto__.call(null,cljs.core.range.call(null,0,nl.length));
});
