goog.provide('symlog.cljs.animation.sequencers');
goog.require('cljs.core');
goog.inherits(symlog.cljs.animation.sequencers.toVideo = (function toVideo(seqTarget,startFrame,endFrame,frameRate,sequence){
var this$ = this;
if(cljs.core.truth_(sequence))
{this$.straightplay = false;
} else
{this$.straightplay = true;
}
this$.pause = (function (){
if(cljs.core.truth_(this$.sequence))
{this$.sequence.call(null,"\uFDD0:trigger").pause();
} else
{}
seqTarget.pause();
return cancelAnimationFrame(this$.reqId);
});
this$.play = (function (){
if(cljs.core.truth_(this$.straightplay))
{this$.reqId = requestAnimationFrame(this$.cycle);
} else
{this$.reqId = requestAnimationFrame(this$.cycleWithSequence);
}
seqTarget.play();
if(cljs.core.truth_(this$.sequence))
{return this$.sequence.call(null,"\uFDD0:trigger").play();
} else
{return null;
}
});
this$.stop = (function (){
cancelAnimationFrame(this$.reqId);
if(cljs.core.truth_(this$.sequence))
{this$.sequence.call(null,"\uFDD0:trigger").stop();
this$.sequence = null;
} else
{}
return this$.dispatchEvent("done");
});
this$.cycle = (function (){
var frameNum = Math.round((seqTarget.currentTime * frameRate));
if((frameNum <= endFrame))
{return requestAnimationFrame(this$.cycle);
} else
{return this$.stop();
}
});
this$.cycleWithSequence = (function (){
var frameNum = Math.round((seqTarget.currentTime * frameRate));
if((frameNum <= endFrame))
{var seq__56573_56579 = cljs.core.seq.call(null,sequence);
var chunk__56574_56580 = null;
var count__56575_56581 = 0;
var i__56576_56582 = 0;
while(true){
if((i__56576_56582 < count__56575_56581))
{var vec__56577_56583 = cljs.core._nth.call(null,chunk__56574_56580,i__56576_56582);
var k_56584 = cljs.core.nth.call(null,vec__56577_56583,0,null);
var v_56585 = cljs.core.nth.call(null,vec__56577_56583,1,null);
if(cljs.core.not.call(null,cljs.core.deref.call(null,v_56585.call(null,"\uFDD0:triggered"))))
{if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([frameNum,null], true),v_56585.call(null,"\uFDD0:range"))))
{cljs.core.reset_BANG_.call(null,v_56585.call(null,"\uFDD0:triggered"),true);
this$.sequence = v_56585;
v_56585.call(null,"\uFDD0:trigger").play();
} else
{}
} else
{}
{
var G__56586 = seq__56573_56579;
var G__56587 = chunk__56574_56580;
var G__56588 = count__56575_56581;
var G__56589 = (i__56576_56582 + 1);
seq__56573_56579 = G__56586;
chunk__56574_56580 = G__56587;
count__56575_56581 = G__56588;
i__56576_56582 = G__56589;
continue;
}
} else
{var temp__4092__auto___56590 = cljs.core.seq.call(null,seq__56573_56579);
if(temp__4092__auto___56590)
{var seq__56573_56591__$1 = temp__4092__auto___56590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56573_56591__$1))
{var c__2754__auto___56592 = cljs.core.chunk_first.call(null,seq__56573_56591__$1);
{
var G__56593 = cljs.core.chunk_rest.call(null,seq__56573_56591__$1);
var G__56594 = c__2754__auto___56592;
var G__56595 = cljs.core.count.call(null,c__2754__auto___56592);
var G__56596 = 0;
seq__56573_56579 = G__56593;
chunk__56574_56580 = G__56594;
count__56575_56581 = G__56595;
i__56576_56582 = G__56596;
continue;
}
} else
{var vec__56578_56597 = cljs.core.first.call(null,seq__56573_56591__$1);
var k_56598 = cljs.core.nth.call(null,vec__56578_56597,0,null);
var v_56599 = cljs.core.nth.call(null,vec__56578_56597,1,null);
if(cljs.core.not.call(null,cljs.core.deref.call(null,v_56599.call(null,"\uFDD0:triggered"))))
{if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([frameNum,null], true),v_56599.call(null,"\uFDD0:range"))))
{cljs.core.reset_BANG_.call(null,v_56599.call(null,"\uFDD0:triggered"),true);
this$.sequence = v_56599;
v_56599.call(null,"\uFDD0:trigger").play();
} else
{}
} else
{}
{
var G__56600 = cljs.core.next.call(null,seq__56573_56591__$1);
var G__56601 = null;
var G__56602 = 0;
var G__56603 = 0;
seq__56573_56579 = G__56600;
chunk__56574_56580 = G__56601;
count__56575_56581 = G__56602;
i__56576_56582 = G__56603;
continue;
}
}
} else
{}
}
break;
}
return requestAnimationFrame(this$.cycleWithSequence);
} else
{return this$.stop();
}
});
this$.fire = (function (){
if(cljs.core.truth_(seqTarget.enabled))
{seqTarget.currentTime = (startFrame / frameRate);
seqTarget.sequencer = this$;
if(cljs.core.truth_(this$.straightplay))
{this$.reqId = requestAnimationFrame(this$.cycle);
} else
{this$.reqId = requestAnimationFrame(this$.cycleWithSequence);
}
seqTarget.play();
return this$;
} else
{return this$.dispatchEvent("done");
}
});
return this$;
}),goog.events.EventTarget);
