goog.provide('symlog.cljs.util');
goog.require('cljs.core');
goog.inherits(symlog.cljs.util.syncprep = (function syncprep(delay,func){
var this$ = this;
goog.events.EventTarget.call(this$);
this$.fire = (function (){
if(cljs.core._EQ_.call(null,0,delay))
{func.call(null);
return this$.dispatchEvent("done");
} else
{return (function (){
return setTimeout((function (){
func.call(null);
return this$.dispatchEvent("done");
}),delay);
}).call(null);
}
});
return this$;
}),goog.events.EventTarget);
/**
* @param {...*} var_args
*/
symlog.cljs.util.chorograph = (function() { 
var chorograph__delegate = function (args){
var argmap = cljs.core.zipmap.call(null,cljs.core.range.call(null,(cljs.core.count.call(null,args) / 2)),cljs.core.partition.call(null,2,args));
var refseq = (function (){var iter__2723__auto__ = ((function (argmap){
return (function iter__33391(s__33392){
return (new cljs.core.LazySeq(null,false,((function (argmap){
return (function (){
var s__33392__$1 = s__33392;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33392__$1);
if(temp__4092__auto__)
{var s__33392__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33392__$2))
{var c__2721__auto__ = cljs.core.chunk_first.call(null,s__33392__$2);
var size__2722__auto__ = cljs.core.count.call(null,c__2721__auto__);
var b__33394 = cljs.core.chunk_buffer.call(null,size__2722__auto__);
if((function (){var i__33393 = 0;
while(true){
if((i__33393 < size__2722__auto__))
{var x = cljs.core._nth.call(null,c__2721__auto__,i__33393);
cljs.core.chunk_append.call(null,b__33394,cljs.core.PersistentArrayMap.fromArray([x.call(null,0),(new symlog.cljs.util.syncprep(cljs.core.first.call(null,x.call(null,1)),cljs.core.second.call(null,x.call(null,1))))], true));
{
var G__33411 = (i__33393 + 1);
i__33393 = G__33411;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33394),iter__33391.call(null,cljs.core.chunk_rest.call(null,s__33392__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33394),null);
}
} else
{var x = cljs.core.first.call(null,s__33392__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.fromArray([x.call(null,0),(new symlog.cljs.util.syncprep(cljs.core.first.call(null,x.call(null,1)),cljs.core.second.call(null,x.call(null,1))))], true),iter__33391.call(null,cljs.core.rest.call(null,s__33392__$2)));
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
})();
var lastidx = ((cljs.core.count.call(null,args) / 2) - 1);
var returnFunction = ((function (argmap,refseq,lastidx){
return (function (){
var this$ = this;
goog.events.EventTarget.call(this$);
this$.fire = ((function (this$,argmap,refseq,lastidx){
return (function (){
var seq__33395_33412 = cljs.core.seq.call(null,refseq);
var chunk__33396_33413 = null;
var count__33397_33414 = 0;
var i__33398_33415 = 0;
while(true){
if((i__33398_33415 < count__33397_33414))
{var v_33416 = cljs.core._nth.call(null,chunk__33396_33413,i__33398_33415);
var seq__33399_33417 = cljs.core.seq.call(null,v_33416);
var chunk__33400_33418 = null;
var count__33401_33419 = 0;
var i__33402_33420 = 0;
while(true){
if((i__33402_33420 < count__33401_33419))
{var vec__33403_33421 = cljs.core._nth.call(null,chunk__33400_33418,i__33402_33420);
var k_33422 = cljs.core.nth.call(null,vec__33403_33421,0,null);
var v_33423__$1 = cljs.core.nth.call(null,vec__33403_33421,1,null);
if(cljs.core._EQ_.call(null,k_33422,0))
{if(cljs.core._EQ_.call(null,0,lastidx))
{goog.events.listenOnce(cljs.core.nth.call(null,refseq,k_33422).call(null,k_33422),"done",((function (seq__33399_33417,chunk__33400_33418,count__33401_33419,i__33402_33420,seq__33395_33412,chunk__33396_33413,count__33397_33414,i__33398_33415,vec__33403_33421,k_33422,v_33423__$1,v_33416,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__33399_33417,chunk__33400_33418,count__33401_33419,i__33402_33420,seq__33395_33412,chunk__33396_33413,count__33397_33414,i__33398_33415,vec__33403_33421,k_33422,v_33423__$1,v_33416,this$,argmap,refseq,lastidx))
);
} else
{}
} else
{if(cljs.core._EQ_.call(null,k_33422,lastidx))
{goog.events.listenOnce(cljs.core.nth.call(null,refseq,(k_33422 - 1)).call(null,(k_33422 - 1)),"done",cljs.core.nth.call(null,refseq,k_33422).call(null,k_33422).fire);
goog.events.listenOnce(cljs.core.nth.call(null,refseq,k_33422).call(null,k_33422),"done",((function (seq__33399_33417,chunk__33400_33418,count__33401_33419,i__33402_33420,seq__33395_33412,chunk__33396_33413,count__33397_33414,i__33398_33415,vec__33403_33421,k_33422,v_33423__$1,v_33416,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__33399_33417,chunk__33400_33418,count__33401_33419,i__33402_33420,seq__33395_33412,chunk__33396_33413,count__33397_33414,i__33398_33415,vec__33403_33421,k_33422,v_33423__$1,v_33416,this$,argmap,refseq,lastidx))
);
} else
{if("\uFDD0:else")
{goog.events.listenOnce(cljs.core.nth.call(null,refseq,(k_33422 - 1)).call(null,(k_33422 - 1)),"done",cljs.core.nth.call(null,symlog.cljs.util.rfseq,k_33422).call(null,k_33422).fire);
} else
{}
}
}
{
var G__33424 = seq__33399_33417;
var G__33425 = chunk__33400_33418;
var G__33426 = count__33401_33419;
var G__33427 = (i__33402_33420 + 1);
seq__33399_33417 = G__33424;
chunk__33400_33418 = G__33425;
count__33401_33419 = G__33426;
i__33402_33420 = G__33427;
continue;
}
} else
{var temp__4092__auto___33428 = cljs.core.seq.call(null,seq__33399_33417);
if(temp__4092__auto___33428)
{var seq__33399_33429__$1 = temp__4092__auto___33428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33399_33429__$1))
{var c__2754__auto___33430 = cljs.core.chunk_first.call(null,seq__33399_33429__$1);
{
var G__33431 = cljs.core.chunk_rest.call(null,seq__33399_33429__$1);
var G__33432 = c__2754__auto___33430;
var G__33433 = cljs.core.count.call(null,c__2754__auto___33430);
var G__33434 = 0;
seq__33399_33417 = G__33431;
chunk__33400_33418 = G__33432;
count__33401_33419 = G__33433;
i__33402_33420 = G__33434;
continue;
}
} else
{var vec__33404_33435 = cljs.core.first.call(null,seq__33399_33429__$1);
var k_33436 = cljs.core.nth.call(null,vec__33404_33435,0,null);
var v_33437__$1 = cljs.core.nth.call(null,vec__33404_33435,1,null);
if(cljs.core._EQ_.call(null,k_33436,0))
{if(cljs.core._EQ_.call(null,0,lastidx))
{goog.events.listenOnce(cljs.core.nth.call(null,refseq,k_33436).call(null,k_33436),"done",((function (seq__33399_33417,chunk__33400_33418,count__33401_33419,i__33402_33420,seq__33395_33412,chunk__33396_33413,count__33397_33414,i__33398_33415,vec__33404_33435,k_33436,v_33437__$1,seq__33399_33429__$1,temp__4092__auto___33428,v_33416,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__33399_33417,chunk__33400_33418,count__33401_33419,i__33402_33420,seq__33395_33412,chunk__33396_33413,count__33397_33414,i__33398_33415,vec__33404_33435,k_33436,v_33437__$1,seq__33399_33429__$1,temp__4092__auto___33428,v_33416,this$,argmap,refseq,lastidx))
);
} else
{}
} else
{if(cljs.core._EQ_.call(null,k_33436,lastidx))
{goog.events.listenOnce(cljs.core.nth.call(null,refseq,(k_33436 - 1)).call(null,(k_33436 - 1)),"done",cljs.core.nth.call(null,refseq,k_33436).call(null,k_33436).fire);
goog.events.listenOnce(cljs.core.nth.call(null,refseq,k_33436).call(null,k_33436),"done",((function (seq__33399_33417,chunk__33400_33418,count__33401_33419,i__33402_33420,seq__33395_33412,chunk__33396_33413,count__33397_33414,i__33398_33415,vec__33404_33435,k_33436,v_33437__$1,seq__33399_33429__$1,temp__4092__auto___33428,v_33416,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__33399_33417,chunk__33400_33418,count__33401_33419,i__33402_33420,seq__33395_33412,chunk__33396_33413,count__33397_33414,i__33398_33415,vec__33404_33435,k_33436,v_33437__$1,seq__33399_33429__$1,temp__4092__auto___33428,v_33416,this$,argmap,refseq,lastidx))
);
} else
{if("\uFDD0:else")
{goog.events.listenOnce(cljs.core.nth.call(null,refseq,(k_33436 - 1)).call(null,(k_33436 - 1)),"done",cljs.core.nth.call(null,symlog.cljs.util.rfseq,k_33436).call(null,k_33436).fire);
} else
{}
}
}
{
var G__33438 = cljs.core.next.call(null,seq__33399_33429__$1);
var G__33439 = null;
var G__33440 = 0;
var G__33441 = 0;
seq__33399_33417 = G__33438;
chunk__33400_33418 = G__33439;
count__33401_33419 = G__33440;
i__33402_33420 = G__33441;
continue;
}
}
} else
{}
}
break;
}
{
var G__33442 = seq__33395_33412;
var G__33443 = chunk__33396_33413;
var G__33444 = count__33397_33414;
var G__33445 = (i__33398_33415 + 1);
seq__33395_33412 = G__33442;
chunk__33396_33413 = G__33443;
count__33397_33414 = G__33444;
i__33398_33415 = G__33445;
continue;
}
} else
{var temp__4092__auto___33446 = cljs.core.seq.call(null,seq__33395_33412);
if(temp__4092__auto___33446)
{var seq__33395_33447__$1 = temp__4092__auto___33446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33395_33447__$1))
{var c__2754__auto___33448 = cljs.core.chunk_first.call(null,seq__33395_33447__$1);
{
var G__33449 = cljs.core.chunk_rest.call(null,seq__33395_33447__$1);
var G__33450 = c__2754__auto___33448;
var G__33451 = cljs.core.count.call(null,c__2754__auto___33448);
var G__33452 = 0;
seq__33395_33412 = G__33449;
chunk__33396_33413 = G__33450;
count__33397_33414 = G__33451;
i__33398_33415 = G__33452;
continue;
}
} else
{var v_33453 = cljs.core.first.call(null,seq__33395_33447__$1);
var seq__33405_33454 = cljs.core.seq.call(null,v_33453);
var chunk__33406_33455 = null;
var count__33407_33456 = 0;
var i__33408_33457 = 0;
while(true){
if((i__33408_33457 < count__33407_33456))
{var vec__33409_33458 = cljs.core._nth.call(null,chunk__33406_33455,i__33408_33457);
var k_33459 = cljs.core.nth.call(null,vec__33409_33458,0,null);
var v_33460__$1 = cljs.core.nth.call(null,vec__33409_33458,1,null);
if(cljs.core._EQ_.call(null,k_33459,0))
{if(cljs.core._EQ_.call(null,0,lastidx))
{goog.events.listenOnce(cljs.core.nth.call(null,refseq,k_33459).call(null,k_33459),"done",((function (seq__33405_33454,chunk__33406_33455,count__33407_33456,i__33408_33457,seq__33395_33412,chunk__33396_33413,count__33397_33414,i__33398_33415,vec__33409_33458,k_33459,v_33460__$1,v_33453,seq__33395_33447__$1,temp__4092__auto___33446,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__33405_33454,chunk__33406_33455,count__33407_33456,i__33408_33457,seq__33395_33412,chunk__33396_33413,count__33397_33414,i__33398_33415,vec__33409_33458,k_33459,v_33460__$1,v_33453,seq__33395_33447__$1,temp__4092__auto___33446,this$,argmap,refseq,lastidx))
);
} else
{}
} else
{if(cljs.core._EQ_.call(null,k_33459,lastidx))
{goog.events.listenOnce(cljs.core.nth.call(null,refseq,(k_33459 - 1)).call(null,(k_33459 - 1)),"done",cljs.core.nth.call(null,refseq,k_33459).call(null,k_33459).fire);
goog.events.listenOnce(cljs.core.nth.call(null,refseq,k_33459).call(null,k_33459),"done",((function (seq__33405_33454,chunk__33406_33455,count__33407_33456,i__33408_33457,seq__33395_33412,chunk__33396_33413,count__33397_33414,i__33398_33415,vec__33409_33458,k_33459,v_33460__$1,v_33453,seq__33395_33447__$1,temp__4092__auto___33446,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__33405_33454,chunk__33406_33455,count__33407_33456,i__33408_33457,seq__33395_33412,chunk__33396_33413,count__33397_33414,i__33398_33415,vec__33409_33458,k_33459,v_33460__$1,v_33453,seq__33395_33447__$1,temp__4092__auto___33446,this$,argmap,refseq,lastidx))
);
} else
{if("\uFDD0:else")
{goog.events.listenOnce(cljs.core.nth.call(null,refseq,(k_33459 - 1)).call(null,(k_33459 - 1)),"done",cljs.core.nth.call(null,symlog.cljs.util.rfseq,k_33459).call(null,k_33459).fire);
} else
{}
}
}
{
var G__33461 = seq__33405_33454;
var G__33462 = chunk__33406_33455;
var G__33463 = count__33407_33456;
var G__33464 = (i__33408_33457 + 1);
seq__33405_33454 = G__33461;
chunk__33406_33455 = G__33462;
count__33407_33456 = G__33463;
i__33408_33457 = G__33464;
continue;
}
} else
{var temp__4092__auto___33465__$1 = cljs.core.seq.call(null,seq__33405_33454);
if(temp__4092__auto___33465__$1)
{var seq__33405_33466__$1 = temp__4092__auto___33465__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33405_33466__$1))
{var c__2754__auto___33467 = cljs.core.chunk_first.call(null,seq__33405_33466__$1);
{
var G__33468 = cljs.core.chunk_rest.call(null,seq__33405_33466__$1);
var G__33469 = c__2754__auto___33467;
var G__33470 = cljs.core.count.call(null,c__2754__auto___33467);
var G__33471 = 0;
seq__33405_33454 = G__33468;
chunk__33406_33455 = G__33469;
count__33407_33456 = G__33470;
i__33408_33457 = G__33471;
continue;
}
} else
{var vec__33410_33472 = cljs.core.first.call(null,seq__33405_33466__$1);
var k_33473 = cljs.core.nth.call(null,vec__33410_33472,0,null);
var v_33474__$1 = cljs.core.nth.call(null,vec__33410_33472,1,null);
if(cljs.core._EQ_.call(null,k_33473,0))
{if(cljs.core._EQ_.call(null,0,lastidx))
{goog.events.listenOnce(cljs.core.nth.call(null,refseq,k_33473).call(null,k_33473),"done",((function (seq__33405_33454,chunk__33406_33455,count__33407_33456,i__33408_33457,seq__33395_33412,chunk__33396_33413,count__33397_33414,i__33398_33415,vec__33410_33472,k_33473,v_33474__$1,seq__33405_33466__$1,temp__4092__auto___33465__$1,v_33453,seq__33395_33447__$1,temp__4092__auto___33446,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__33405_33454,chunk__33406_33455,count__33407_33456,i__33408_33457,seq__33395_33412,chunk__33396_33413,count__33397_33414,i__33398_33415,vec__33410_33472,k_33473,v_33474__$1,seq__33405_33466__$1,temp__4092__auto___33465__$1,v_33453,seq__33395_33447__$1,temp__4092__auto___33446,this$,argmap,refseq,lastidx))
);
} else
{}
} else
{if(cljs.core._EQ_.call(null,k_33473,lastidx))
{goog.events.listenOnce(cljs.core.nth.call(null,refseq,(k_33473 - 1)).call(null,(k_33473 - 1)),"done",cljs.core.nth.call(null,refseq,k_33473).call(null,k_33473).fire);
goog.events.listenOnce(cljs.core.nth.call(null,refseq,k_33473).call(null,k_33473),"done",((function (seq__33405_33454,chunk__33406_33455,count__33407_33456,i__33408_33457,seq__33395_33412,chunk__33396_33413,count__33397_33414,i__33398_33415,vec__33410_33472,k_33473,v_33474__$1,seq__33405_33466__$1,temp__4092__auto___33465__$1,v_33453,seq__33395_33447__$1,temp__4092__auto___33446,this$,argmap,refseq,lastidx){
return (function (){
return this$.dispatchEvent("done");
});})(seq__33405_33454,chunk__33406_33455,count__33407_33456,i__33408_33457,seq__33395_33412,chunk__33396_33413,count__33397_33414,i__33398_33415,vec__33410_33472,k_33473,v_33474__$1,seq__33405_33466__$1,temp__4092__auto___33465__$1,v_33453,seq__33395_33447__$1,temp__4092__auto___33446,this$,argmap,refseq,lastidx))
);
} else
{if("\uFDD0:else")
{goog.events.listenOnce(cljs.core.nth.call(null,refseq,(k_33473 - 1)).call(null,(k_33473 - 1)),"done",cljs.core.nth.call(null,symlog.cljs.util.rfseq,k_33473).call(null,k_33473).fire);
} else
{}
}
}
{
var G__33475 = cljs.core.next.call(null,seq__33405_33466__$1);
var G__33476 = null;
var G__33477 = 0;
var G__33478 = 0;
seq__33405_33454 = G__33475;
chunk__33406_33455 = G__33476;
count__33407_33456 = G__33477;
i__33408_33457 = G__33478;
continue;
}
}
} else
{}
}
break;
}
{
var G__33479 = cljs.core.next.call(null,seq__33395_33447__$1);
var G__33480 = null;
var G__33481 = 0;
var G__33482 = 0;
seq__33395_33412 = G__33479;
chunk__33396_33413 = G__33480;
count__33397_33414 = G__33481;
i__33398_33415 = G__33482;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.first.call(null,refseq).call(null,0).fire();
});})(this$,argmap,refseq,lastidx))
;
return this$;
});})(argmap,refseq,lastidx))
;
goog.inherits(returnFunction,goog.events.EventTarget);
return (new returnFunction());
};
var chorograph = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return chorograph__delegate.call(this, args);
};
chorograph.cljs$lang$maxFixedArity = 0;
chorograph.cljs$lang$applyTo = (function (arglist__33483){
var args = cljs.core.seq(arglist__33483);
return chorograph__delegate(args);
});
chorograph.cljs$core$IFn$_invoke$arity$variadic = chorograph__delegate;
return chorograph;
})()
;
