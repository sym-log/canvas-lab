goog.provide('symlog.cljs.app.schedulers.main');
goog.require('cljs.core');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
symlog.cljs.app.schedulers.main.Scheduler = (function Scheduler(sequencer,actionMap,subSequences){
var this$ = this;
this$.donext = (function (evt){
if(cljs.core._EQ_.call(null,evt.target.name,"narrator"))
{if(cljs.core.truth_(this$.playing))
{this$.playing = null;
} else
{}
sequencer.interrupted = null;
return goog.events.fireListeners(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideoPlayTouchArea"),"click",false,{"type":"click","target":symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideoPlayTouchArea")});
} else
{return null;
}
});
this$.subSequences = subSequences;
var seq__55461_55471 = cljs.core.seq.call(null,subSequences);
var chunk__55462_55472 = null;
var count__55463_55473 = 0;
var i__55464_55474 = 0;
while(true){
if((i__55464_55474 < count__55463_55473))
{var v_55475 = cljs.core._nth.call(null,chunk__55462_55472,i__55464_55474);
goog.events.listen(v_55475,"stopped",this$.donext);
{
var G__55476 = seq__55461_55471;
var G__55477 = chunk__55462_55472;
var G__55478 = count__55463_55473;
var G__55479 = (i__55464_55474 + 1);
seq__55461_55471 = G__55476;
chunk__55462_55472 = G__55477;
count__55463_55473 = G__55478;
i__55464_55474 = G__55479;
continue;
}
} else
{var temp__4092__auto___55480 = cljs.core.seq.call(null,seq__55461_55471);
if(temp__4092__auto___55480)
{var seq__55461_55481__$1 = temp__4092__auto___55480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55461_55481__$1))
{var c__2754__auto___55482 = cljs.core.chunk_first.call(null,seq__55461_55481__$1);
{
var G__55483 = cljs.core.chunk_rest.call(null,seq__55461_55481__$1);
var G__55484 = c__2754__auto___55482;
var G__55485 = cljs.core.count.call(null,c__2754__auto___55482);
var G__55486 = 0;
seq__55461_55471 = G__55483;
chunk__55462_55472 = G__55484;
count__55463_55473 = G__55485;
i__55464_55474 = G__55486;
continue;
}
} else
{var v_55487 = cljs.core.first.call(null,seq__55461_55481__$1);
goog.events.listen(v_55487,"stopped",this$.donext);
{
var G__55488 = cljs.core.next.call(null,seq__55461_55481__$1);
var G__55489 = null;
var G__55490 = 0;
var G__55491 = 0;
seq__55461_55471 = G__55488;
chunk__55462_55472 = G__55489;
count__55463_55473 = G__55490;
i__55464_55474 = G__55491;
continue;
}
}
} else
{}
}
break;
}
this$.step = cljs.core.atom.call(null,1);
this$.doframe = (function (frameNo){
if((cljs.core.deref.call(null,this$.step) > this$.maxsteps))
{return null;
} else
{if((frameNo >= this$.actions.call(null,cljs.core.deref.call(null,this$.step)).call(null,"\uFDD0:frame")))
{if(cljs.core.not.call(null,this$.playing))
{this$.playing = this$.actions.call(null,cljs.core.deref.call(null,this$.step)).call(null,"\uFDD0:action");
cljs.core.swap_BANG_.call(null,this$.step,cljs.core.inc);
return this$.playing();
} else
{return null;
}
} else
{return null;
}
}
});
this$.pause = (function (){
if(cljs.core.truth_(this$.playing))
{if(cljs.core.truth_(this$.playing.pause))
{return this$.playing.pause();
} else
{return null;
}
} else
{return null;
}
});
this$.play = (function (){
if(cljs.core.truth_(this$.playing.play))
{return this$.playing.play();
} else
{return null;
}
});
this$.stop = (function (){
if(cljs.core.truth_(this$.playing))
{this$.playing.stop();
return this$.playing = null;
} else
{return null;
}
});
this$.interrupt = (function (){
return sequencer.interrupt();
});
this$.resume = (function (){
this$.playing = null;
return sequencer.resume();
});
this$.reset = (function (frame){
var seq__55465 = cljs.core.seq.call(null,this$.actions);
var chunk__55466 = null;
var count__55467 = 0;
var i__55468 = 0;
while(true){
if((i__55468 < count__55467))
{var vec__55469 = cljs.core._nth.call(null,chunk__55466,i__55468);
var k = cljs.core.nth.call(null,vec__55469,0,null);
var v = cljs.core.nth.call(null,vec__55469,1,null);
if((function (){var and__3941__auto__ = (v.call(null,"\uFDD0:frame") <= frame);
if(and__3941__auto__)
{return (frame >= this$.actions.call(null,(k + 1)).call(null,"\uFDD0:frame"));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,this$.step,k);
} else
{}
{
var G__55492 = seq__55465;
var G__55493 = chunk__55466;
var G__55494 = count__55467;
var G__55495 = (i__55468 + 1);
seq__55465 = G__55492;
chunk__55466 = G__55493;
count__55467 = G__55494;
i__55468 = G__55495;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__55465);
if(temp__4092__auto__)
{var seq__55465__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55465__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__55465__$1);
{
var G__55496 = cljs.core.chunk_rest.call(null,seq__55465__$1);
var G__55497 = c__2754__auto__;
var G__55498 = cljs.core.count.call(null,c__2754__auto__);
var G__55499 = 0;
seq__55465 = G__55496;
chunk__55466 = G__55497;
count__55467 = G__55498;
i__55468 = G__55499;
continue;
}
} else
{var vec__55470 = cljs.core.first.call(null,seq__55465__$1);
var k = cljs.core.nth.call(null,vec__55470,0,null);
var v = cljs.core.nth.call(null,vec__55470,1,null);
if((function (){var and__3941__auto__ = (v.call(null,"\uFDD0:frame") <= frame);
if(and__3941__auto__)
{return (frame >= this$.actions.call(null,(k + 1)).call(null,"\uFDD0:frame"));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,this$.step,k);
} else
{}
{
var G__55500 = cljs.core.next.call(null,seq__55465__$1);
var G__55501 = null;
var G__55502 = 0;
var G__55503 = 0;
seq__55465 = G__55500;
chunk__55466 = G__55501;
count__55467 = G__55502;
i__55468 = G__55503;
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
this$.actions = actionMap.call(null,this$);
this$.maxsteps = cljs.core.count.call(null,cljs.core.keys.call(null,this$.actions));
return this$;
});
