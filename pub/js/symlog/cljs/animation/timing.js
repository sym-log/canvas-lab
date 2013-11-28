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
var seq__51810 = cljs.core.seq.call(null,ref);
var chunk__51811 = null;
var count__51812 = 0;
var i__51813 = 0;
while(true){
if((i__51813 < count__51812))
{var vec__51814 = cljs.core._nth.call(null,chunk__51811,i__51813);
var k = cljs.core.nth.call(null,vec__51814,0,null);
var v = cljs.core.nth.call(null,vec__51814,1,null);
if(cljs.core._EQ_.call(null,k,lastidx))
{goog.events.listenOnce(ref.call(null,k),"done",((function (seq__51810,chunk__51811,count__51812,i__51813,vec__51814,k,v,this$,ref,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__51810,chunk__51811,count__51812,i__51813,vec__51814,k,v,this$,ref,lastidx))
);
ref.call(null,0).fire();
} else
{if("\uFDD0:else")
{goog.events.listenOnce(ref.call(null,k),"done",((function (seq__51810,chunk__51811,count__51812,i__51813,vec__51814,k,v,this$,ref,lastidx){
return (function (){
return ref.call(null,(k + 1)).fire();
});})(seq__51810,chunk__51811,count__51812,i__51813,vec__51814,k,v,this$,ref,lastidx))
);
} else
{}
}
{
var G__51816 = seq__51810;
var G__51817 = chunk__51811;
var G__51818 = count__51812;
var G__51819 = (i__51813 + 1);
seq__51810 = G__51816;
chunk__51811 = G__51817;
count__51812 = G__51818;
i__51813 = G__51819;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__51810);
if(temp__4092__auto__)
{var seq__51810__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51810__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__51810__$1);
{
var G__51820 = cljs.core.chunk_rest.call(null,seq__51810__$1);
var G__51821 = c__2754__auto__;
var G__51822 = cljs.core.count.call(null,c__2754__auto__);
var G__51823 = 0;
seq__51810 = G__51820;
chunk__51811 = G__51821;
count__51812 = G__51822;
i__51813 = G__51823;
continue;
}
} else
{var vec__51815 = cljs.core.first.call(null,seq__51810__$1);
var k = cljs.core.nth.call(null,vec__51815,0,null);
var v = cljs.core.nth.call(null,vec__51815,1,null);
if(cljs.core._EQ_.call(null,k,lastidx))
{goog.events.listenOnce(ref.call(null,k),"done",((function (seq__51810,chunk__51811,count__51812,i__51813,vec__51815,k,v,seq__51810__$1,temp__4092__auto__,this$,ref,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__51810,chunk__51811,count__51812,i__51813,vec__51815,k,v,seq__51810__$1,temp__4092__auto__,this$,ref,lastidx))
);
ref.call(null,0).fire();
} else
{if("\uFDD0:else")
{goog.events.listenOnce(ref.call(null,k),"done",((function (seq__51810,chunk__51811,count__51812,i__51813,vec__51815,k,v,seq__51810__$1,temp__4092__auto__,this$,ref,lastidx){
return (function (){
return ref.call(null,(k + 1)).fire();
});})(seq__51810,chunk__51811,count__51812,i__51813,vec__51815,k,v,seq__51810__$1,temp__4092__auto__,this$,ref,lastidx))
);
} else
{}
}
{
var G__51824 = cljs.core.next.call(null,seq__51810__$1);
var G__51825 = null;
var G__51826 = 0;
var G__51827 = 0;
seq__51810 = G__51824;
chunk__51811 = G__51825;
count__51812 = G__51826;
i__51813 = G__51827;
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
chain.cljs$lang$applyTo = (function (arglist__51828){
var args = cljs.core.seq(arglist__51828);
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
return (function iter__51839(s__51840){
return (new cljs.core.LazySeq(null,false,((function (argmap){
return (function (){
var s__51840__$1 = s__51840;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__51840__$1);
if(temp__4092__auto__)
{var s__51840__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51840__$2))
{var c__2721__auto__ = cljs.core.chunk_first.call(null,s__51840__$2);
var size__2722__auto__ = cljs.core.count.call(null,c__2721__auto__);
var b__51842 = cljs.core.chunk_buffer.call(null,size__2722__auto__);
if((function (){var i__51841 = 0;
while(true){
if((i__51841 < size__2722__auto__))
{var x = cljs.core._nth.call(null,c__2721__auto__,i__51841);
cljs.core.chunk_append.call(null,b__51842,cljs.core.PersistentArrayMap.fromArray([x.call(null,0),(new symlog.cljs.animation.timing.serializePrep(cljs.core.first.call(null,x.call(null,1)),cljs.core.second.call(null,x.call(null,1))))], true));
{
var G__51849 = (i__51841 + 1);
i__51841 = G__51849;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51842),iter__51839.call(null,cljs.core.chunk_rest.call(null,s__51840__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51842),null);
}
} else
{var x = cljs.core.first.call(null,s__51840__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.fromArray([x.call(null,0),(new symlog.cljs.animation.timing.serializePrep(cljs.core.first.call(null,x.call(null,1)),cljs.core.second.call(null,x.call(null,1))))], true),iter__51839.call(null,cljs.core.rest.call(null,s__51840__$2)));
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
var seq__51843_51850 = cljs.core.seq.call(null,refseq);
var chunk__51844_51851 = null;
var count__51845_51852 = 0;
var i__51846_51853 = 0;
while(true){
if((i__51846_51853 < count__51845_51852))
{var vec__51847_51854 = cljs.core._nth.call(null,chunk__51844_51851,i__51846_51853);
var k_51855 = cljs.core.nth.call(null,vec__51847_51854,0,null);
var v_51856 = cljs.core.nth.call(null,vec__51847_51854,1,null);
if(cljs.core._EQ_.call(null,k_51855,0))
{if(cljs.core.truth_(v_51856.func2go.toListento))
{goog.events.listen(v_51856.func2go,"done",((function (seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51847_51854,k_51855,v_51856,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51847_51854,k_51855,v_51856,this$,argmap,refseq,lastidx))
);
} else
{if(cljs.core._EQ_.call(null,k_51855,lastidx))
{goog.events.listen(v_51856,"done",((function (seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51847_51854,k_51855,v_51856,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51847_51854,k_51855,v_51856,this$,argmap,refseq,lastidx))
);
} else
{}
}
} else
{if(cljs.core._EQ_.call(null,k_51855,lastidx))
{if(cljs.core.truth_(v_51856.func2go.toListento))
{goog.events.listen(v_51856.func2go,"done",((function (seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51847_51854,k_51855,v_51856,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51847_51854,k_51855,v_51856,this$,argmap,refseq,lastidx))
);
goog.events.listen(refseq.call(null,(k_51855 - 1)),"done",v_51856.fire);
} else
{goog.events.listenOnce(refseq.call(null,(k_51855 - 1)),"done",v_51856.fire);
goog.events.listenOnce(v_51856,"done",((function (seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51847_51854,k_51855,v_51856,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51847_51854,k_51855,v_51856,this$,argmap,refseq,lastidx))
);
}
} else
{if("\uFDD0:else")
{if(cljs.core.truth_(v_51856.func2go.toListento))
{goog.events.listen(v_51856.func2go,"done",((function (seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51847_51854,k_51855,v_51856,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51847_51854,k_51855,v_51856,this$,argmap,refseq,lastidx))
);
goog.events.listen(refseq.call(null,(k_51855 - 1)),"done",v_51856.fire);
} else
{goog.events.listen(refseq.call(null,(k_51855 - 1)),"done",v_51856.fire);
}
} else
{}
}
}
{
var G__51857 = seq__51843_51850;
var G__51858 = chunk__51844_51851;
var G__51859 = count__51845_51852;
var G__51860 = (i__51846_51853 + 1);
seq__51843_51850 = G__51857;
chunk__51844_51851 = G__51858;
count__51845_51852 = G__51859;
i__51846_51853 = G__51860;
continue;
}
} else
{var temp__4092__auto___51861 = cljs.core.seq.call(null,seq__51843_51850);
if(temp__4092__auto___51861)
{var seq__51843_51862__$1 = temp__4092__auto___51861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51843_51862__$1))
{var c__2754__auto___51863 = cljs.core.chunk_first.call(null,seq__51843_51862__$1);
{
var G__51864 = cljs.core.chunk_rest.call(null,seq__51843_51862__$1);
var G__51865 = c__2754__auto___51863;
var G__51866 = cljs.core.count.call(null,c__2754__auto___51863);
var G__51867 = 0;
seq__51843_51850 = G__51864;
chunk__51844_51851 = G__51865;
count__51845_51852 = G__51866;
i__51846_51853 = G__51867;
continue;
}
} else
{var vec__51848_51868 = cljs.core.first.call(null,seq__51843_51862__$1);
var k_51869 = cljs.core.nth.call(null,vec__51848_51868,0,null);
var v_51870 = cljs.core.nth.call(null,vec__51848_51868,1,null);
if(cljs.core._EQ_.call(null,k_51869,0))
{if(cljs.core.truth_(v_51870.func2go.toListento))
{goog.events.listen(v_51870.func2go,"done",((function (seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51848_51868,k_51869,v_51870,seq__51843_51862__$1,temp__4092__auto___51861,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51848_51868,k_51869,v_51870,seq__51843_51862__$1,temp__4092__auto___51861,this$,argmap,refseq,lastidx))
);
} else
{if(cljs.core._EQ_.call(null,k_51869,lastidx))
{goog.events.listen(v_51870,"done",((function (seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51848_51868,k_51869,v_51870,seq__51843_51862__$1,temp__4092__auto___51861,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51848_51868,k_51869,v_51870,seq__51843_51862__$1,temp__4092__auto___51861,this$,argmap,refseq,lastidx))
);
} else
{}
}
} else
{if(cljs.core._EQ_.call(null,k_51869,lastidx))
{if(cljs.core.truth_(v_51870.func2go.toListento))
{goog.events.listen(v_51870.func2go,"done",((function (seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51848_51868,k_51869,v_51870,seq__51843_51862__$1,temp__4092__auto___51861,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51848_51868,k_51869,v_51870,seq__51843_51862__$1,temp__4092__auto___51861,this$,argmap,refseq,lastidx))
);
goog.events.listen(refseq.call(null,(k_51869 - 1)),"done",v_51870.fire);
} else
{goog.events.listenOnce(refseq.call(null,(k_51869 - 1)),"done",v_51870.fire);
goog.events.listenOnce(v_51870,"done",((function (seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51848_51868,k_51869,v_51870,seq__51843_51862__$1,temp__4092__auto___51861,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51848_51868,k_51869,v_51870,seq__51843_51862__$1,temp__4092__auto___51861,this$,argmap,refseq,lastidx))
);
}
} else
{if("\uFDD0:else")
{if(cljs.core.truth_(v_51870.func2go.toListento))
{goog.events.listen(v_51870.func2go,"done",((function (seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51848_51868,k_51869,v_51870,seq__51843_51862__$1,temp__4092__auto___51861,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__51843_51850,chunk__51844_51851,count__51845_51852,i__51846_51853,vec__51848_51868,k_51869,v_51870,seq__51843_51862__$1,temp__4092__auto___51861,this$,argmap,refseq,lastidx))
);
goog.events.listen(refseq.call(null,(k_51869 - 1)),"done",v_51870.fire);
} else
{goog.events.listen(refseq.call(null,(k_51869 - 1)),"done",v_51870.fire);
}
} else
{}
}
}
{
var G__51871 = cljs.core.next.call(null,seq__51843_51862__$1);
var G__51872 = null;
var G__51873 = 0;
var G__51874 = 0;
seq__51843_51850 = G__51871;
chunk__51844_51851 = G__51872;
count__51845_51852 = G__51873;
i__51846_51853 = G__51874;
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
serialize.cljs$lang$applyTo = (function (arglist__51875){
var args = cljs.core.seq(arglist__51875);
return serialize__delegate(args);
});
serialize.cljs$core$IFn$_invoke$arity$variadic = serialize__delegate;
return serialize;
})()
;
