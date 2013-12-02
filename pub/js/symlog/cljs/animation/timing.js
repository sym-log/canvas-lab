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
var seq__31478 = cljs.core.seq.call(null,ref);
var chunk__31479 = null;
var count__31480 = 0;
var i__31481 = 0;
while(true){
if((i__31481 < count__31480))
{var vec__31482 = cljs.core._nth.call(null,chunk__31479,i__31481);
var k = cljs.core.nth.call(null,vec__31482,0,null);
var v = cljs.core.nth.call(null,vec__31482,1,null);
if(cljs.core._EQ_.call(null,k,lastidx))
{goog.events.listenOnce(ref.call(null,k),"done",((function (seq__31478,chunk__31479,count__31480,i__31481,vec__31482,k,v,this$,ref,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__31478,chunk__31479,count__31480,i__31481,vec__31482,k,v,this$,ref,lastidx))
);
ref.call(null,0).fire();
} else
{if("\uFDD0:else")
{goog.events.listenOnce(ref.call(null,k),"done",((function (seq__31478,chunk__31479,count__31480,i__31481,vec__31482,k,v,this$,ref,lastidx){
return (function (){
return ref.call(null,(k + 1)).fire();
});})(seq__31478,chunk__31479,count__31480,i__31481,vec__31482,k,v,this$,ref,lastidx))
);
} else
{}
}
{
var G__31484 = seq__31478;
var G__31485 = chunk__31479;
var G__31486 = count__31480;
var G__31487 = (i__31481 + 1);
seq__31478 = G__31484;
chunk__31479 = G__31485;
count__31480 = G__31486;
i__31481 = G__31487;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31478);
if(temp__4092__auto__)
{var seq__31478__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31478__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__31478__$1);
{
var G__31488 = cljs.core.chunk_rest.call(null,seq__31478__$1);
var G__31489 = c__2754__auto__;
var G__31490 = cljs.core.count.call(null,c__2754__auto__);
var G__31491 = 0;
seq__31478 = G__31488;
chunk__31479 = G__31489;
count__31480 = G__31490;
i__31481 = G__31491;
continue;
}
} else
{var vec__31483 = cljs.core.first.call(null,seq__31478__$1);
var k = cljs.core.nth.call(null,vec__31483,0,null);
var v = cljs.core.nth.call(null,vec__31483,1,null);
if(cljs.core._EQ_.call(null,k,lastidx))
{goog.events.listenOnce(ref.call(null,k),"done",((function (seq__31478,chunk__31479,count__31480,i__31481,vec__31483,k,v,seq__31478__$1,temp__4092__auto__,this$,ref,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__31478,chunk__31479,count__31480,i__31481,vec__31483,k,v,seq__31478__$1,temp__4092__auto__,this$,ref,lastidx))
);
ref.call(null,0).fire();
} else
{if("\uFDD0:else")
{goog.events.listenOnce(ref.call(null,k),"done",((function (seq__31478,chunk__31479,count__31480,i__31481,vec__31483,k,v,seq__31478__$1,temp__4092__auto__,this$,ref,lastidx){
return (function (){
return ref.call(null,(k + 1)).fire();
});})(seq__31478,chunk__31479,count__31480,i__31481,vec__31483,k,v,seq__31478__$1,temp__4092__auto__,this$,ref,lastidx))
);
} else
{}
}
{
var G__31492 = cljs.core.next.call(null,seq__31478__$1);
var G__31493 = null;
var G__31494 = 0;
var G__31495 = 0;
seq__31478 = G__31492;
chunk__31479 = G__31493;
count__31480 = G__31494;
i__31481 = G__31495;
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
chain.cljs$lang$applyTo = (function (arglist__31496){
var args = cljs.core.seq(arglist__31496);
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
return (function iter__31507(s__31508){
return (new cljs.core.LazySeq(null,false,((function (argmap){
return (function (){
var s__31508__$1 = s__31508;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31508__$1);
if(temp__4092__auto__)
{var s__31508__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31508__$2))
{var c__2721__auto__ = cljs.core.chunk_first.call(null,s__31508__$2);
var size__2722__auto__ = cljs.core.count.call(null,c__2721__auto__);
var b__31510 = cljs.core.chunk_buffer.call(null,size__2722__auto__);
if((function (){var i__31509 = 0;
while(true){
if((i__31509 < size__2722__auto__))
{var x = cljs.core._nth.call(null,c__2721__auto__,i__31509);
cljs.core.chunk_append.call(null,b__31510,cljs.core.PersistentArrayMap.fromArray([x.call(null,0),(new symlog.cljs.animation.timing.serializePrep(cljs.core.first.call(null,x.call(null,1)),cljs.core.second.call(null,x.call(null,1))))], true));
{
var G__31517 = (i__31509 + 1);
i__31509 = G__31517;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31510),iter__31507.call(null,cljs.core.chunk_rest.call(null,s__31508__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31510),null);
}
} else
{var x = cljs.core.first.call(null,s__31508__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.fromArray([x.call(null,0),(new symlog.cljs.animation.timing.serializePrep(cljs.core.first.call(null,x.call(null,1)),cljs.core.second.call(null,x.call(null,1))))], true),iter__31507.call(null,cljs.core.rest.call(null,s__31508__$2)));
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
var seq__31511_31518 = cljs.core.seq.call(null,refseq);
var chunk__31512_31519 = null;
var count__31513_31520 = 0;
var i__31514_31521 = 0;
while(true){
if((i__31514_31521 < count__31513_31520))
{var vec__31515_31522 = cljs.core._nth.call(null,chunk__31512_31519,i__31514_31521);
var k_31523 = cljs.core.nth.call(null,vec__31515_31522,0,null);
var v_31524 = cljs.core.nth.call(null,vec__31515_31522,1,null);
if(cljs.core._EQ_.call(null,k_31523,0))
{if(cljs.core.truth_(v_31524.func2go.toListento))
{goog.events.listen(v_31524.func2go,"done",((function (seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31515_31522,k_31523,v_31524,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31515_31522,k_31523,v_31524,this$,argmap,refseq,lastidx))
);
} else
{if(cljs.core._EQ_.call(null,k_31523,lastidx))
{goog.events.listen(v_31524,"done",((function (seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31515_31522,k_31523,v_31524,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31515_31522,k_31523,v_31524,this$,argmap,refseq,lastidx))
);
} else
{}
}
} else
{if(cljs.core._EQ_.call(null,k_31523,lastidx))
{if(cljs.core.truth_(v_31524.func2go.toListento))
{goog.events.listen(v_31524.func2go,"done",((function (seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31515_31522,k_31523,v_31524,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31515_31522,k_31523,v_31524,this$,argmap,refseq,lastidx))
);
goog.events.listen(refseq.call(null,(k_31523 - 1)),"done",v_31524.fire);
} else
{goog.events.listenOnce(refseq.call(null,(k_31523 - 1)),"done",v_31524.fire);
goog.events.listenOnce(v_31524,"done",((function (seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31515_31522,k_31523,v_31524,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31515_31522,k_31523,v_31524,this$,argmap,refseq,lastidx))
);
}
} else
{if("\uFDD0:else")
{if(cljs.core.truth_(v_31524.func2go.toListento))
{goog.events.listen(v_31524.func2go,"done",((function (seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31515_31522,k_31523,v_31524,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31515_31522,k_31523,v_31524,this$,argmap,refseq,lastidx))
);
goog.events.listen(refseq.call(null,(k_31523 - 1)),"done",v_31524.fire);
} else
{goog.events.listen(refseq.call(null,(k_31523 - 1)),"done",v_31524.fire);
}
} else
{}
}
}
{
var G__31525 = seq__31511_31518;
var G__31526 = chunk__31512_31519;
var G__31527 = count__31513_31520;
var G__31528 = (i__31514_31521 + 1);
seq__31511_31518 = G__31525;
chunk__31512_31519 = G__31526;
count__31513_31520 = G__31527;
i__31514_31521 = G__31528;
continue;
}
} else
{var temp__4092__auto___31529 = cljs.core.seq.call(null,seq__31511_31518);
if(temp__4092__auto___31529)
{var seq__31511_31530__$1 = temp__4092__auto___31529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31511_31530__$1))
{var c__2754__auto___31531 = cljs.core.chunk_first.call(null,seq__31511_31530__$1);
{
var G__31532 = cljs.core.chunk_rest.call(null,seq__31511_31530__$1);
var G__31533 = c__2754__auto___31531;
var G__31534 = cljs.core.count.call(null,c__2754__auto___31531);
var G__31535 = 0;
seq__31511_31518 = G__31532;
chunk__31512_31519 = G__31533;
count__31513_31520 = G__31534;
i__31514_31521 = G__31535;
continue;
}
} else
{var vec__31516_31536 = cljs.core.first.call(null,seq__31511_31530__$1);
var k_31537 = cljs.core.nth.call(null,vec__31516_31536,0,null);
var v_31538 = cljs.core.nth.call(null,vec__31516_31536,1,null);
if(cljs.core._EQ_.call(null,k_31537,0))
{if(cljs.core.truth_(v_31538.func2go.toListento))
{goog.events.listen(v_31538.func2go,"done",((function (seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31516_31536,k_31537,v_31538,seq__31511_31530__$1,temp__4092__auto___31529,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31516_31536,k_31537,v_31538,seq__31511_31530__$1,temp__4092__auto___31529,this$,argmap,refseq,lastidx))
);
} else
{if(cljs.core._EQ_.call(null,k_31537,lastidx))
{goog.events.listen(v_31538,"done",((function (seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31516_31536,k_31537,v_31538,seq__31511_31530__$1,temp__4092__auto___31529,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31516_31536,k_31537,v_31538,seq__31511_31530__$1,temp__4092__auto___31529,this$,argmap,refseq,lastidx))
);
} else
{}
}
} else
{if(cljs.core._EQ_.call(null,k_31537,lastidx))
{if(cljs.core.truth_(v_31538.func2go.toListento))
{goog.events.listen(v_31538.func2go,"done",((function (seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31516_31536,k_31537,v_31538,seq__31511_31530__$1,temp__4092__auto___31529,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31516_31536,k_31537,v_31538,seq__31511_31530__$1,temp__4092__auto___31529,this$,argmap,refseq,lastidx))
);
goog.events.listen(refseq.call(null,(k_31537 - 1)),"done",v_31538.fire);
} else
{goog.events.listenOnce(refseq.call(null,(k_31537 - 1)),"done",v_31538.fire);
goog.events.listenOnce(v_31538,"done",((function (seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31516_31536,k_31537,v_31538,seq__31511_31530__$1,temp__4092__auto___31529,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31516_31536,k_31537,v_31538,seq__31511_31530__$1,temp__4092__auto___31529,this$,argmap,refseq,lastidx))
);
}
} else
{if("\uFDD0:else")
{if(cljs.core.truth_(v_31538.func2go.toListento))
{goog.events.listen(v_31538.func2go,"done",((function (seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31516_31536,k_31537,v_31538,seq__31511_31530__$1,temp__4092__auto___31529,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__31511_31518,chunk__31512_31519,count__31513_31520,i__31514_31521,vec__31516_31536,k_31537,v_31538,seq__31511_31530__$1,temp__4092__auto___31529,this$,argmap,refseq,lastidx))
);
goog.events.listen(refseq.call(null,(k_31537 - 1)),"done",v_31538.fire);
} else
{goog.events.listen(refseq.call(null,(k_31537 - 1)),"done",v_31538.fire);
}
} else
{}
}
}
{
var G__31539 = cljs.core.next.call(null,seq__31511_31530__$1);
var G__31540 = null;
var G__31541 = 0;
var G__31542 = 0;
seq__31511_31518 = G__31539;
chunk__31512_31519 = G__31540;
count__31513_31520 = G__31541;
i__31514_31521 = G__31542;
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
serialize.cljs$lang$applyTo = (function (arglist__31543){
var args = cljs.core.seq(arglist__31543);
return serialize__delegate(args);
});
serialize.cljs$core$IFn$_invoke$arity$variadic = serialize__delegate;
return serialize;
})()
;
