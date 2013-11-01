goog.provide('symlog.cljs.animation.timing');
goog.require('cljs.core');
symlog.cljs.animation.timing.toListento = (function toListento(func){
func.toListento = true;
return func;
});
/**
* @param {...*} var_args
*/
symlog.cljs.animation.timing.chain = (function() { 
var chain__delegate = function (args){
var ref = cljs.core.zipmap.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.range.call(null,cljs.core.count.call(null,args))),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,args));
var lastidx = (cljs.core.count.call(null,args) - 1);
var returnFunction = ((function (ref,lastidx){
return (function (){
var this$ = this;
this$.fire = ((function (this$,ref,lastidx){
return (function (){
var seq__7956 = cljs.core.seq.call(null,ref);
var chunk__7957 = null;
var count__7958 = 0;
var i__7959 = 0;
while(true){
if((i__7959 < count__7958))
{var vec__7960 = cljs.core._nth.call(null,chunk__7957,i__7959);
var k = cljs.core.nth.call(null,vec__7960,0,null);
var v = cljs.core.nth.call(null,vec__7960,1,null);
if(cljs.core._EQ_.call(null,k,lastidx))
{goog.events.listenOnce(ref.call(null,k),"done",((function (seq__7956,chunk__7957,count__7958,i__7959,vec__7960,k,v,this$,ref,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__7956,chunk__7957,count__7958,i__7959,vec__7960,k,v,this$,ref,lastidx))
);
ref.call(null,0).fire();
} else
{if("\uFDD0:else")
{goog.events.listenOnce(ref.call(null,k),"done",((function (seq__7956,chunk__7957,count__7958,i__7959,vec__7960,k,v,this$,ref,lastidx){
return (function (){
return ref.call(null,(k + 1)).fire();
});})(seq__7956,chunk__7957,count__7958,i__7959,vec__7960,k,v,this$,ref,lastidx))
);
} else
{}
}
{
var G__7962 = seq__7956;
var G__7963 = chunk__7957;
var G__7964 = count__7958;
var G__7965 = (i__7959 + 1);
seq__7956 = G__7962;
chunk__7957 = G__7963;
count__7958 = G__7964;
i__7959 = G__7965;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7956);
if(temp__4092__auto__)
{var seq__7956__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7956__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__7956__$1);
{
var G__7966 = cljs.core.chunk_rest.call(null,seq__7956__$1);
var G__7967 = c__2754__auto__;
var G__7968 = cljs.core.count.call(null,c__2754__auto__);
var G__7969 = 0;
seq__7956 = G__7966;
chunk__7957 = G__7967;
count__7958 = G__7968;
i__7959 = G__7969;
continue;
}
} else
{var vec__7961 = cljs.core.first.call(null,seq__7956__$1);
var k = cljs.core.nth.call(null,vec__7961,0,null);
var v = cljs.core.nth.call(null,vec__7961,1,null);
if(cljs.core._EQ_.call(null,k,lastidx))
{goog.events.listenOnce(ref.call(null,k),"done",((function (seq__7956,chunk__7957,count__7958,i__7959,vec__7961,k,v,seq__7956__$1,temp__4092__auto__,this$,ref,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__7956,chunk__7957,count__7958,i__7959,vec__7961,k,v,seq__7956__$1,temp__4092__auto__,this$,ref,lastidx))
);
ref.call(null,0).fire();
} else
{if("\uFDD0:else")
{goog.events.listenOnce(ref.call(null,k),"done",((function (seq__7956,chunk__7957,count__7958,i__7959,vec__7961,k,v,seq__7956__$1,temp__4092__auto__,this$,ref,lastidx){
return (function (){
return ref.call(null,(k + 1)).fire();
});})(seq__7956,chunk__7957,count__7958,i__7959,vec__7961,k,v,seq__7956__$1,temp__4092__auto__,this$,ref,lastidx))
);
} else
{}
}
{
var G__7970 = cljs.core.next.call(null,seq__7956__$1);
var G__7971 = null;
var G__7972 = 0;
var G__7973 = 0;
seq__7956 = G__7970;
chunk__7957 = G__7971;
count__7958 = G__7972;
i__7959 = G__7973;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(this$,ref,lastidx))
;
return this$;
});})(ref,lastidx))
;
goog.inherits(returnFunction,goog.events.EventTarget);
return (new returnFunction());
};
var chain = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return chain__delegate.call(this, args);
};
chain.cljs$lang$maxFixedArity = 0;
chain.cljs$lang$applyTo = (function (arglist__7974){
var args = cljs.core.seq(arglist__7974);
return chain__delegate(args);
});
chain.cljs$core$IFn$_invoke$arity$variadic = chain__delegate;
return chain;
})()
;
goog.inherits(symlog.cljs.animation.timing.pauseInChain = (function pauseInChain(duration){
var this$ = this;
this$.fire = (function (){
return setTimeout((function (){
return this$.dispatchEvent("done");
}),duration);
});
return this$;
}),goog.events.EventTarget);
goog.inherits(symlog.cljs.animation.timing.enChain = (function enChain(func){
var this$ = this;
this$.fire = (function (){
func.call(null);
return this$.dispatchEvent("done");
});
return this$;
}),goog.events.EventTarget);
goog.inherits(symlog.cljs.animation.timing.serializePrep = (function serializePrep(delay,func){
var this$ = this;
this$.func2go = func;
this$.fire = (function (){
if(cljs.core._EQ_.call(null,0,delay))
{if(cljs.core.truth_(this$.func2go.fire))
{this$.func2go.fire();
} else
{this$.func2go();
}
return this$.dispatchEvent("done");
} else
{return setTimeout((function (){
if(cljs.core.truth_(this$.func2go.fire))
{this$.func2go.fire();
} else
{this$.func2go();
}
return this$.dispatchEvent("done");
}),delay);
}
});
return this$;
}),goog.events.EventTarget);
/**
* @param {...*} var_args
*/
symlog.cljs.animation.timing.serialize = (function() { 
var serialize__delegate = function (args){
var argmap = cljs.core.zipmap.call(null,cljs.core.range.call(null,(cljs.core.count.call(null,args) / 2)),cljs.core.partition.call(null,2,args));
var refseq = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__2723__auto__ = ((function (argmap){
return (function iter__7985(s__7986){
return (new cljs.core.LazySeq(null,false,((function (argmap){
return (function (){
var s__7986__$1 = s__7986;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7986__$1);
if(temp__4092__auto__)
{var s__7986__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7986__$2))
{var c__2721__auto__ = cljs.core.chunk_first.call(null,s__7986__$2);
var size__2722__auto__ = cljs.core.count.call(null,c__2721__auto__);
var b__7988 = cljs.core.chunk_buffer.call(null,size__2722__auto__);
if((function (){var i__7987 = 0;
while(true){
if((i__7987 < size__2722__auto__))
{var x = cljs.core._nth.call(null,c__2721__auto__,i__7987);
cljs.core.chunk_append.call(null,b__7988,cljs.core.PersistentArrayMap.fromArray([x.call(null,0),(new symlog.cljs.animation.timing.serializePrep(cljs.core.first.call(null,x.call(null,1)),cljs.core.second.call(null,x.call(null,1))))], true));
{
var G__7995 = (i__7987 + 1);
i__7987 = G__7995;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7988),iter__7985.call(null,cljs.core.chunk_rest.call(null,s__7986__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7988),null);
}
} else
{var x = cljs.core.first.call(null,s__7986__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.fromArray([x.call(null,0),(new symlog.cljs.animation.timing.serializePrep(cljs.core.first.call(null,x.call(null,1)),cljs.core.second.call(null,x.call(null,1))))], true),iter__7985.call(null,cljs.core.rest.call(null,s__7986__$2)));
}
} else
{return null;
}
break;
}
});})(argmap))
,null));
});})(argmap))
;
return iter__2723__auto__.call(null,argmap);
})());
var lastidx = (cljs.core.count.call(null,refseq) - 1);
var returnFunction = ((function (argmap,refseq,lastidx){
return (function (){
var this$ = this;
this$.fire = ((function (this$,argmap,refseq,lastidx){
return (function (){
var seq__7989_7996 = cljs.core.seq.call(null,refseq);
var chunk__7990_7997 = null;
var count__7991_7998 = 0;
var i__7992_7999 = 0;
while(true){
if((i__7992_7999 < count__7991_7998))
{var vec__7993_8000 = cljs.core._nth.call(null,chunk__7990_7997,i__7992_7999);
var k_8001 = cljs.core.nth.call(null,vec__7993_8000,0,null);
var v_8002 = cljs.core.nth.call(null,vec__7993_8000,1,null);
if(cljs.core._EQ_.call(null,k_8001,0))
{if(cljs.core.truth_(v_8002.func2go.toListento))
{goog.events.listen(v_8002.func2go,"done",((function (seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7993_8000,k_8001,v_8002,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7993_8000,k_8001,v_8002,this$,argmap,refseq,lastidx))
);
} else
{if(cljs.core._EQ_.call(null,k_8001,lastidx))
{goog.events.listen(v_8002,"done",((function (seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7993_8000,k_8001,v_8002,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7993_8000,k_8001,v_8002,this$,argmap,refseq,lastidx))
);
} else
{}
}
} else
{if(cljs.core._EQ_.call(null,k_8001,lastidx))
{if(cljs.core.truth_(v_8002.func2go.toListento))
{goog.events.listen(v_8002.func2go,"done",((function (seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7993_8000,k_8001,v_8002,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7993_8000,k_8001,v_8002,this$,argmap,refseq,lastidx))
);
goog.events.listen(refseq.call(null,(k_8001 - 1)),"done",v_8002.fire);
} else
{goog.events.listenOnce(refseq.call(null,(k_8001 - 1)),"done",v_8002.fire);
goog.events.listenOnce(v_8002,"done",((function (seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7993_8000,k_8001,v_8002,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7993_8000,k_8001,v_8002,this$,argmap,refseq,lastidx))
);
}
} else
{if("\uFDD0:else")
{if(cljs.core.truth_(v_8002.func2go.toListento))
{goog.events.listen(v_8002.func2go,"done",((function (seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7993_8000,k_8001,v_8002,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7993_8000,k_8001,v_8002,this$,argmap,refseq,lastidx))
);
goog.events.listen(refseq.call(null,(k_8001 - 1)),"done",v_8002.fire);
} else
{goog.events.listen(refseq.call(null,(k_8001 - 1)),"done",v_8002.fire);
}
} else
{}
}
}
{
var G__8003 = seq__7989_7996;
var G__8004 = chunk__7990_7997;
var G__8005 = count__7991_7998;
var G__8006 = (i__7992_7999 + 1);
seq__7989_7996 = G__8003;
chunk__7990_7997 = G__8004;
count__7991_7998 = G__8005;
i__7992_7999 = G__8006;
continue;
}
} else
{var temp__4092__auto___8007 = cljs.core.seq.call(null,seq__7989_7996);
if(temp__4092__auto___8007)
{var seq__7989_8008__$1 = temp__4092__auto___8007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7989_8008__$1))
{var c__2754__auto___8009 = cljs.core.chunk_first.call(null,seq__7989_8008__$1);
{
var G__8010 = cljs.core.chunk_rest.call(null,seq__7989_8008__$1);
var G__8011 = c__2754__auto___8009;
var G__8012 = cljs.core.count.call(null,c__2754__auto___8009);
var G__8013 = 0;
seq__7989_7996 = G__8010;
chunk__7990_7997 = G__8011;
count__7991_7998 = G__8012;
i__7992_7999 = G__8013;
continue;
}
} else
{var vec__7994_8014 = cljs.core.first.call(null,seq__7989_8008__$1);
var k_8015 = cljs.core.nth.call(null,vec__7994_8014,0,null);
var v_8016 = cljs.core.nth.call(null,vec__7994_8014,1,null);
if(cljs.core._EQ_.call(null,k_8015,0))
{if(cljs.core.truth_(v_8016.func2go.toListento))
{goog.events.listen(v_8016.func2go,"done",((function (seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7994_8014,k_8015,v_8016,seq__7989_8008__$1,temp__4092__auto___8007,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7994_8014,k_8015,v_8016,seq__7989_8008__$1,temp__4092__auto___8007,this$,argmap,refseq,lastidx))
);
} else
{if(cljs.core._EQ_.call(null,k_8015,lastidx))
{goog.events.listen(v_8016,"done",((function (seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7994_8014,k_8015,v_8016,seq__7989_8008__$1,temp__4092__auto___8007,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7994_8014,k_8015,v_8016,seq__7989_8008__$1,temp__4092__auto___8007,this$,argmap,refseq,lastidx))
);
} else
{}
}
} else
{if(cljs.core._EQ_.call(null,k_8015,lastidx))
{if(cljs.core.truth_(v_8016.func2go.toListento))
{goog.events.listen(v_8016.func2go,"done",((function (seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7994_8014,k_8015,v_8016,seq__7989_8008__$1,temp__4092__auto___8007,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7994_8014,k_8015,v_8016,seq__7989_8008__$1,temp__4092__auto___8007,this$,argmap,refseq,lastidx))
);
goog.events.listen(refseq.call(null,(k_8015 - 1)),"done",v_8016.fire);
} else
{goog.events.listenOnce(refseq.call(null,(k_8015 - 1)),"done",v_8016.fire);
goog.events.listenOnce(v_8016,"done",((function (seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7994_8014,k_8015,v_8016,seq__7989_8008__$1,temp__4092__auto___8007,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7994_8014,k_8015,v_8016,seq__7989_8008__$1,temp__4092__auto___8007,this$,argmap,refseq,lastidx))
);
}
} else
{if("\uFDD0:else")
{if(cljs.core.truth_(v_8016.func2go.toListento))
{goog.events.listen(v_8016.func2go,"done",((function (seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7994_8014,k_8015,v_8016,seq__7989_8008__$1,temp__4092__auto___8007,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__7989_7996,chunk__7990_7997,count__7991_7998,i__7992_7999,vec__7994_8014,k_8015,v_8016,seq__7989_8008__$1,temp__4092__auto___8007,this$,argmap,refseq,lastidx))
);
goog.events.listen(refseq.call(null,(k_8015 - 1)),"done",v_8016.fire);
} else
{goog.events.listen(refseq.call(null,(k_8015 - 1)),"done",v_8016.fire);
}
} else
{}
}
}
{
var G__8017 = cljs.core.next.call(null,seq__7989_8008__$1);
var G__8018 = null;
var G__8019 = 0;
var G__8020 = 0;
seq__7989_7996 = G__8017;
chunk__7990_7997 = G__8018;
count__7991_7998 = G__8019;
i__7992_7999 = G__8020;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(refseq.call(null,0).fire))
{return refseq.call(null,0).fire();
} else
{return refseq.call(null,0).call(null);
}
});})(this$,argmap,refseq,lastidx))
;
return this$;
});})(argmap,refseq,lastidx))
;
goog.inherits(returnFunction,goog.events.EventTarget);
return (new returnFunction());
};
var serialize = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return serialize__delegate.call(this, args);
};
serialize.cljs$lang$maxFixedArity = 0;
serialize.cljs$lang$applyTo = (function (arglist__8021){
var args = cljs.core.seq(arglist__8021);
return serialize__delegate(args);
});
serialize.cljs$core$IFn$_invoke$arity$variadic = serialize__delegate;
return serialize;
})()
;
