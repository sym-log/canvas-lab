goog.provide('symlog.cljs.animation.timing');
goog.require('cljs.core');
symlog.cljs.animation.timing.listenTo = (function listenTo(func){
func.toListento = true;
return func;
});
symlog.cljs.animation.timing.pause = (function pause(duration,callback){
return setTimeout(callback,duration);
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
var seq__3150 = cljs.core.seq.call(null,ref);
var chunk__3151 = null;
var count__3152 = 0;
var i__3153 = 0;
while(true){
if((i__3153 < count__3152))
{var vec__3154 = cljs.core._nth.call(null,chunk__3151,i__3153);
var k = cljs.core.nth.call(null,vec__3154,0,null);
var v = cljs.core.nth.call(null,vec__3154,1,null);
if(cljs.core._EQ_.call(null,k,lastidx))
{goog.events.listenOnce(ref.call(null,k),"done",((function (seq__3150,chunk__3151,count__3152,i__3153,vec__3154,k,v,this$,ref,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__3150,chunk__3151,count__3152,i__3153,vec__3154,k,v,this$,ref,lastidx))
);
ref.call(null,0).fire();
} else
{if("\uFDD0:else")
{goog.events.listenOnce(ref.call(null,k),"done",((function (seq__3150,chunk__3151,count__3152,i__3153,vec__3154,k,v,this$,ref,lastidx){
return (function (){
return ref.call(null,(k + 1)).fire();
});})(seq__3150,chunk__3151,count__3152,i__3153,vec__3154,k,v,this$,ref,lastidx))
);
} else
{}
}
{
var G__3156 = seq__3150;
var G__3157 = chunk__3151;
var G__3158 = count__3152;
var G__3159 = (i__3153 + 1);
seq__3150 = G__3156;
chunk__3151 = G__3157;
count__3152 = G__3158;
i__3153 = G__3159;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__3150);
if(temp__4092__auto__)
{var seq__3150__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3150__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__3150__$1);
{
var G__3160 = cljs.core.chunk_rest.call(null,seq__3150__$1);
var G__3161 = c__2754__auto__;
var G__3162 = cljs.core.count.call(null,c__2754__auto__);
var G__3163 = 0;
seq__3150 = G__3160;
chunk__3151 = G__3161;
count__3152 = G__3162;
i__3153 = G__3163;
continue;
}
} else
{var vec__3155 = cljs.core.first.call(null,seq__3150__$1);
var k = cljs.core.nth.call(null,vec__3155,0,null);
var v = cljs.core.nth.call(null,vec__3155,1,null);
if(cljs.core._EQ_.call(null,k,lastidx))
{goog.events.listenOnce(ref.call(null,k),"done",((function (seq__3150,chunk__3151,count__3152,i__3153,vec__3155,k,v,seq__3150__$1,temp__4092__auto__,this$,ref,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__3150,chunk__3151,count__3152,i__3153,vec__3155,k,v,seq__3150__$1,temp__4092__auto__,this$,ref,lastidx))
);
ref.call(null,0).fire();
} else
{if("\uFDD0:else")
{goog.events.listenOnce(ref.call(null,k),"done",((function (seq__3150,chunk__3151,count__3152,i__3153,vec__3155,k,v,seq__3150__$1,temp__4092__auto__,this$,ref,lastidx){
return (function (){
return ref.call(null,(k + 1)).fire();
});})(seq__3150,chunk__3151,count__3152,i__3153,vec__3155,k,v,seq__3150__$1,temp__4092__auto__,this$,ref,lastidx))
);
} else
{}
}
{
var G__3164 = cljs.core.next.call(null,seq__3150__$1);
var G__3165 = null;
var G__3166 = 0;
var G__3167 = 0;
seq__3150 = G__3164;
chunk__3151 = G__3165;
count__3152 = G__3166;
i__3153 = G__3167;
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
chain.cljs$lang$applyTo = (function (arglist__3168){
var args = cljs.core.seq(arglist__3168);
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
return (function iter__3179(s__3180){
return (new cljs.core.LazySeq(null,false,((function (argmap){
return (function (){
var s__3180__$1 = s__3180;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__3180__$1);
if(temp__4092__auto__)
{var s__3180__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3180__$2))
{var c__2721__auto__ = cljs.core.chunk_first.call(null,s__3180__$2);
var size__2722__auto__ = cljs.core.count.call(null,c__2721__auto__);
var b__3182 = cljs.core.chunk_buffer.call(null,size__2722__auto__);
if((function (){var i__3181 = 0;
while(true){
if((i__3181 < size__2722__auto__))
{var x = cljs.core._nth.call(null,c__2721__auto__,i__3181);
cljs.core.chunk_append.call(null,b__3182,cljs.core.PersistentArrayMap.fromArray([x.call(null,0),(new symlog.cljs.animation.timing.serializePrep(cljs.core.first.call(null,x.call(null,1)),cljs.core.second.call(null,x.call(null,1))))], true));
{
var G__3189 = (i__3181 + 1);
i__3181 = G__3189;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3182),iter__3179.call(null,cljs.core.chunk_rest.call(null,s__3180__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3182),null);
}
} else
{var x = cljs.core.first.call(null,s__3180__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.fromArray([x.call(null,0),(new symlog.cljs.animation.timing.serializePrep(cljs.core.first.call(null,x.call(null,1)),cljs.core.second.call(null,x.call(null,1))))], true),iter__3179.call(null,cljs.core.rest.call(null,s__3180__$2)));
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
var seq__3183_3190 = cljs.core.seq.call(null,refseq);
var chunk__3184_3191 = null;
var count__3185_3192 = 0;
var i__3186_3193 = 0;
while(true){
if((i__3186_3193 < count__3185_3192))
{var vec__3187_3194 = cljs.core._nth.call(null,chunk__3184_3191,i__3186_3193);
var k_3195 = cljs.core.nth.call(null,vec__3187_3194,0,null);
var v_3196 = cljs.core.nth.call(null,vec__3187_3194,1,null);
if(cljs.core._EQ_.call(null,k_3195,0))
{if(cljs.core.truth_(v_3196.func2go.toListento))
{goog.events.listen(v_3196.func2go,"done",((function (seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3187_3194,k_3195,v_3196,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3187_3194,k_3195,v_3196,this$,argmap,refseq,lastidx))
);
} else
{if(cljs.core._EQ_.call(null,k_3195,lastidx))
{goog.events.listen(v_3196,"done",((function (seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3187_3194,k_3195,v_3196,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3187_3194,k_3195,v_3196,this$,argmap,refseq,lastidx))
);
} else
{}
}
} else
{if(cljs.core._EQ_.call(null,k_3195,lastidx))
{if(cljs.core.truth_(v_3196.func2go.toListento))
{goog.events.listen(v_3196.func2go,"done",((function (seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3187_3194,k_3195,v_3196,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3187_3194,k_3195,v_3196,this$,argmap,refseq,lastidx))
);
goog.events.listen(refseq.call(null,(k_3195 - 1)),"done",v_3196.fire);
} else
{goog.events.listenOnce(refseq.call(null,(k_3195 - 1)),"done",v_3196.fire);
goog.events.listenOnce(v_3196,"done",((function (seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3187_3194,k_3195,v_3196,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3187_3194,k_3195,v_3196,this$,argmap,refseq,lastidx))
);
}
} else
{if("\uFDD0:else")
{if(cljs.core.truth_(v_3196.func2go.toListento))
{goog.events.listen(v_3196.func2go,"done",((function (seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3187_3194,k_3195,v_3196,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3187_3194,k_3195,v_3196,this$,argmap,refseq,lastidx))
);
goog.events.listen(refseq.call(null,(k_3195 - 1)),"done",v_3196.fire);
} else
{goog.events.listen(refseq.call(null,(k_3195 - 1)),"done",v_3196.fire);
}
} else
{}
}
}
{
var G__3197 = seq__3183_3190;
var G__3198 = chunk__3184_3191;
var G__3199 = count__3185_3192;
var G__3200 = (i__3186_3193 + 1);
seq__3183_3190 = G__3197;
chunk__3184_3191 = G__3198;
count__3185_3192 = G__3199;
i__3186_3193 = G__3200;
continue;
}
} else
{var temp__4092__auto___3201 = cljs.core.seq.call(null,seq__3183_3190);
if(temp__4092__auto___3201)
{var seq__3183_3202__$1 = temp__4092__auto___3201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3183_3202__$1))
{var c__2754__auto___3203 = cljs.core.chunk_first.call(null,seq__3183_3202__$1);
{
var G__3204 = cljs.core.chunk_rest.call(null,seq__3183_3202__$1);
var G__3205 = c__2754__auto___3203;
var G__3206 = cljs.core.count.call(null,c__2754__auto___3203);
var G__3207 = 0;
seq__3183_3190 = G__3204;
chunk__3184_3191 = G__3205;
count__3185_3192 = G__3206;
i__3186_3193 = G__3207;
continue;
}
} else
{var vec__3188_3208 = cljs.core.first.call(null,seq__3183_3202__$1);
var k_3209 = cljs.core.nth.call(null,vec__3188_3208,0,null);
var v_3210 = cljs.core.nth.call(null,vec__3188_3208,1,null);
if(cljs.core._EQ_.call(null,k_3209,0))
{if(cljs.core.truth_(v_3210.func2go.toListento))
{goog.events.listen(v_3210.func2go,"done",((function (seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3188_3208,k_3209,v_3210,seq__3183_3202__$1,temp__4092__auto___3201,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3188_3208,k_3209,v_3210,seq__3183_3202__$1,temp__4092__auto___3201,this$,argmap,refseq,lastidx))
);
} else
{if(cljs.core._EQ_.call(null,k_3209,lastidx))
{goog.events.listen(v_3210,"done",((function (seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3188_3208,k_3209,v_3210,seq__3183_3202__$1,temp__4092__auto___3201,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3188_3208,k_3209,v_3210,seq__3183_3202__$1,temp__4092__auto___3201,this$,argmap,refseq,lastidx))
);
} else
{}
}
} else
{if(cljs.core._EQ_.call(null,k_3209,lastidx))
{if(cljs.core.truth_(v_3210.func2go.toListento))
{goog.events.listen(v_3210.func2go,"done",((function (seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3188_3208,k_3209,v_3210,seq__3183_3202__$1,temp__4092__auto___3201,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3188_3208,k_3209,v_3210,seq__3183_3202__$1,temp__4092__auto___3201,this$,argmap,refseq,lastidx))
);
goog.events.listen(refseq.call(null,(k_3209 - 1)),"done",v_3210.fire);
} else
{goog.events.listenOnce(refseq.call(null,(k_3209 - 1)),"done",v_3210.fire);
goog.events.listenOnce(v_3210,"done",((function (seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3188_3208,k_3209,v_3210,seq__3183_3202__$1,temp__4092__auto___3201,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3188_3208,k_3209,v_3210,seq__3183_3202__$1,temp__4092__auto___3201,this$,argmap,refseq,lastidx))
);
}
} else
{if("\uFDD0:else")
{if(cljs.core.truth_(v_3210.func2go.toListento))
{goog.events.listen(v_3210.func2go,"done",((function (seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3188_3208,k_3209,v_3210,seq__3183_3202__$1,temp__4092__auto___3201,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__3183_3190,chunk__3184_3191,count__3185_3192,i__3186_3193,vec__3188_3208,k_3209,v_3210,seq__3183_3202__$1,temp__4092__auto___3201,this$,argmap,refseq,lastidx))
);
goog.events.listen(refseq.call(null,(k_3209 - 1)),"done",v_3210.fire);
} else
{goog.events.listen(refseq.call(null,(k_3209 - 1)),"done",v_3210.fire);
}
} else
{}
}
}
{
var G__3211 = cljs.core.next.call(null,seq__3183_3202__$1);
var G__3212 = null;
var G__3213 = 0;
var G__3214 = 0;
seq__3183_3190 = G__3211;
chunk__3184_3191 = G__3212;
count__3185_3192 = G__3213;
i__3186_3193 = G__3214;
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
serialize.cljs$lang$applyTo = (function (arglist__3215){
var args = cljs.core.seq(arglist__3215);
return serialize__delegate(args);
});
serialize.cljs$core$IFn$_invoke$arity$variadic = serialize__delegate;
return serialize;
})()
;
