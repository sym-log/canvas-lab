goog.provide('symlog.cljs.app.schedulers.narrator');
goog.require('cljs.core');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
symlog.cljs.app.schedulers.narrator.Scheduler = (function Scheduler(sequencer,actionMap){
var this$ = this;
this$.step = cljs.core.atom.call(null,1);
this$.doframe = (function (frameNo){
if((cljs.core.deref.call(null,this$.step) > this$.maxsteps))
{return null;
} else
{if((frameNo >= this$.actions.call(null,cljs.core.deref.call(null,this$.step)).call(null,"\uFDD0:frame")))
{if(cljs.core.not.call(null,this$.playing))
{this$.playing = this$.actions.call(null,cljs.core.deref.call(null,this$.step)).call(null,"\uFDD0:action");
cljs.core.swap_BANG_.call(null,this$.step,cljs.core.inc);
if(cljs.core.truth_(this$.playing.fire))
{return this$.playing.fire();
} else
{return this$.playing();
}
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
if(cljs.core.truth_(this$.playing))
{if(cljs.core.truth_(this$.playing.play))
{return this$.playing.play();
} else
{return null;
}
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
this$.reset = (function (frame){
var seq__60690 = cljs.core.seq.call(null,this$.actions);
var chunk__60691 = null;
var count__60692 = 0;
var i__60693 = 0;
while(true){
if((i__60693 < count__60692))
{var vec__60694 = cljs.core._nth.call(null,chunk__60691,i__60693);
var k = cljs.core.nth.call(null,vec__60694,0,null);
var v = cljs.core.nth.call(null,vec__60694,1,null);
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
var G__60696 = seq__60690;
var G__60697 = chunk__60691;
var G__60698 = count__60692;
var G__60699 = (i__60693 + 1);
seq__60690 = G__60696;
chunk__60691 = G__60697;
count__60692 = G__60698;
i__60693 = G__60699;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__60690);
if(temp__4092__auto__)
{var seq__60690__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60690__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__60690__$1);
{
var G__60700 = cljs.core.chunk_rest.call(null,seq__60690__$1);
var G__60701 = c__2754__auto__;
var G__60702 = cljs.core.count.call(null,c__2754__auto__);
var G__60703 = 0;
seq__60690 = G__60700;
chunk__60691 = G__60701;
count__60692 = G__60702;
i__60693 = G__60703;
continue;
}
} else
{var vec__60695 = cljs.core.first.call(null,seq__60690__$1);
var k = cljs.core.nth.call(null,vec__60695,0,null);
var v = cljs.core.nth.call(null,vec__60695,1,null);
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
var G__60704 = cljs.core.next.call(null,seq__60690__$1);
var G__60705 = null;
var G__60706 = 0;
var G__60707 = 0;
seq__60690 = G__60704;
chunk__60691 = G__60705;
count__60692 = G__60706;
i__60693 = G__60707;
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
this$.actions = (new actionMap(this$));
this$.maxsteps = cljs.core.count.call(null,cljs.core.keys.call(null,this$.actions));
return this$;
});
