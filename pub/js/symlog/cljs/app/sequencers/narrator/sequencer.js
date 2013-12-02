goog.provide('symlog.cljs.app.sequencers.narrator.sequencer');
goog.require('cljs.core');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom');
symlog.cljs.app.sequencers.narrator.sequencer.ctxt = symlog.cljs.app.sequencers.narrator.sequencer;
symlog.cljs.app.sequencers.narrator.sequencer.label = "narrator";
symlog.cljs.app.sequencers.narrator.sequencer.target = goog.dom.getElement("narratorVid");
symlog.cljs.app.sequencers.narrator.sequencer.frameRate = 15;
symlog.cljs.app.sequencers.narrator.sequencer.startFrame = cljs.core.atom.call(null,0);
symlog.cljs.app.sequencers.narrator.sequencer.endFrame = cljs.core.atom.call(null,0);
symlog.cljs.app.sequencers.narrator.sequencer.playing = cljs.core.atom.call(null,null);
symlog.cljs.app.sequencers.narrator.sequencer.paused = cljs.core.atom.call(null,false);
symlog.cljs.app.sequencers.narrator.sequencer.step = cljs.core.atom.call(null,1);
symlog.cljs.app.sequencers.narrator.sequencer.enabled = cljs.core.atom.call(null,true);
symlog.cljs.app.sequencers.narrator.sequencer.rested = cljs.core.atom.call(null,true);
symlog.cljs.app.sequencers.narrator.sequencer.callback = cljs.core.atom.call(null,null);
symlog.cljs.app.sequencers.narrator.sequencer.TOCnum = 0;
symlog.cljs.app.sequencers.narrator.sequencer.paintFrame = symlog.cljs.app.dom.elements.call(null,"\uFDD0:paintFrame");
symlog.cljs.app.sequencers.narrator.sequencer.init = (function init(controller){
symlog.cljs.app.sequencers.narrator.sequencer.controller = controller;
symlog.cljs.app.sequencers.narrator.sequence.init.call(null);
symlog.cljs.app.sequencers.narrator.sequencer.sequence = symlog.cljs.app.sequencers.narrator.sequence.seqmap;
symlog.cljs.app.sequencers.narrator.sequencer.maxsteps = cljs.core.count.call(null,cljs.core.keys.call(null,symlog.cljs.app.sequencers.narrator.sequencer.sequence));
symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorVid").sequencer = symlog.cljs.app.sequencers.narrator.sequencer.ctxt;
return symlog.cljs.app.handlers.narrator.init.call(null);
});
symlog.cljs.app.sequencers.narrator.sequencer.fire = (function fire(start,end,tocNum,returnFunc){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.startFrame,start);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.endFrame,end);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.callback,returnFunc);
symlog.cljs.app.sequencers.narrator.sequencer.TOCnum = tocNum;
symlog.cljs.app.sequencers.narrator.sequencer.target.currentTime = (cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.startFrame) / symlog.cljs.app.sequencers.narrator.sequencer.frameRate);
symlog.cljs.app.sequencers.narrator.sequencer.setStep.call(null,Math.round((symlog.cljs.app.sequencers.narrator.sequencer.target.currentTime * symlog.cljs.app.sequencers.narrator.sequencer.frameRate)));
return symlog.cljs.app.sequencers.narrator.sequencer.play.call(null);
});
symlog.cljs.app.sequencers.narrator.sequencer.pause = (function pause(){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.paused,true);
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing)))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing).pause))
{cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing).pause();
} else
{}
} else
{}
return symlog.cljs.app.sequencers.narrator.sequencer.target.pause();
});
symlog.cljs.app.sequencers.narrator.sequencer.play = (function play(){
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing)))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing).play))
{cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing).play();
} else
{}
} else
{}
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.paused,false);
requestAnimationFrame(symlog.cljs.app.sequencers.narrator.sequencer.cycler);
return symlog.cljs.app.sequencers.narrator.sequencer.target.play();
});
symlog.cljs.app.sequencers.narrator.sequencer.stop = (function stop(){
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing)))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing).stop))
{cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing).stop();
} else
{}
} else
{}
symlog.cljs.app.sequencers.narrator.sequencer.target.pause();
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing,null);
symlog.cljs.app.sequencers.narrator.sequencer.paintFrame.clearit.fire();
return symlog.cljs.app.sequencers.narrator.sequencer.controller.donext("narrator");
});
symlog.cljs.app.sequencers.narrator.sequencer.clear = (function clear(){
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing)))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing).stop))
{cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing).stop();
} else
{}
} else
{}
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing,null);
return symlog.cljs.app.sequencers.narrator.sequencer.paintFrame.clearit.fire();
});
symlog.cljs.app.sequencers.narrator.sequencer.end = (function end(){
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing)))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing).stop))
{cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing).stop();
} else
{}
} else
{}
symlog.cljs.app.sequencers.narrator.sequencer.target.pause();
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing,null);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.paused,false);
symlog.cljs.app.sequencers.narrator.sequencer.paintFrame.clearit.fire();
symlog.cljs.app.sequencers.narrator.sequencer.target.currentTime = (cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.endFrame) / symlog.cljs.app.sequencers.narrator.sequencer.frameRate);
return cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.callback).call(null);
});
symlog.cljs.app.sequencers.narrator.sequencer.cycler = (function cycler(){
var frameNum = Math.round((symlog.cljs.app.sequencers.narrator.sequencer.target.currentTime * symlog.cljs.app.sequencers.narrator.sequencer.frameRate));
if((frameNum <= cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.endFrame)))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.paused),false))
{symlog.cljs.app.sequencers.narrator.sequencer.doframe.call(null,frameNum);
return requestAnimationFrame(cycler);
} else
{if("\uFDD0:else")
{return null;
} else
{return null;
}
}
} else
{symlog.cljs.app.sequencers.narrator.sequencer.pause.call(null);
return cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.callback).call(null);
}
});
symlog.cljs.app.sequencers.narrator.sequencer.doframe = (function doframe(frameNo){
if((cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.step) > symlog.cljs.app.sequencers.narrator.sequencer.maxsteps))
{return null;
} else
{if((frameNo >= symlog.cljs.app.sequencers.narrator.sequencer.sequence.call(null,cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.step)).call(null,"\uFDD0:frame")))
{if(cljs.core.not.call(null,cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing)))
{return symlog.cljs.app.sequencers.narrator.sequencer.sequence.call(null,cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.step)).call(null,"\uFDD0:sequence").call(null);
} else
{return cljs.core.swap_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.step,cljs.core.inc);
}
} else
{return null;
}
}
});
symlog.cljs.app.sequencers.narrator.sequencer.setStep = (function setStep(frameNo){
var seq__71759 = cljs.core.seq.call(null,symlog.cljs.app.sequencers.narrator.sequencer.sequence);
var chunk__71760 = null;
var count__71761 = 0;
var i__71762 = 0;
while(true){
if((i__71762 < count__71761))
{var vec__71763 = cljs.core._nth.call(null,chunk__71760,i__71762);
var k = cljs.core.nth.call(null,vec__71763,0,null);
var v = cljs.core.nth.call(null,vec__71763,1,null);
if(cljs.core._EQ_.call(null,k,symlog.cljs.app.sequencers.narrator.sequencer.maxsteps))
{if((frameNo >= v.call(null,"\uFDD0:frame")))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.step,symlog.cljs.app.sequencers.narrator.sequencer.maxsteps);
} else
{}
} else
{if("\uFDD0:else")
{if((function (){var and__3941__auto__ = (frameNo >= v.call(null,"\uFDD0:frame"));
if(and__3941__auto__)
{return (frameNo < (v.call(null,"\uFDD0:frame") + symlog.cljs.app.sequencers.narrator.sequencer.frameRate));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.step,k);
} else
{if((function (){var and__3941__auto__ = (frameNo >= v.call(null,"\uFDD0:frame"));
if(and__3941__auto__)
{return (frameNo < symlog.cljs.app.sequencers.narrator.sequencer.sequence.call(null,(k + 1)).call(null,"\uFDD0:frame"));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.step,(k + 1));
} else
{}
}
} else
{}
}
{
var G__71765 = seq__71759;
var G__71766 = chunk__71760;
var G__71767 = count__71761;
var G__71768 = (i__71762 + 1);
seq__71759 = G__71765;
chunk__71760 = G__71766;
count__71761 = G__71767;
i__71762 = G__71768;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__71759);
if(temp__4092__auto__)
{var seq__71759__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71759__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__71759__$1);
{
var G__71769 = cljs.core.chunk_rest.call(null,seq__71759__$1);
var G__71770 = c__2754__auto__;
var G__71771 = cljs.core.count.call(null,c__2754__auto__);
var G__71772 = 0;
seq__71759 = G__71769;
chunk__71760 = G__71770;
count__71761 = G__71771;
i__71762 = G__71772;
continue;
}
} else
{var vec__71764 = cljs.core.first.call(null,seq__71759__$1);
var k = cljs.core.nth.call(null,vec__71764,0,null);
var v = cljs.core.nth.call(null,vec__71764,1,null);
if(cljs.core._EQ_.call(null,k,symlog.cljs.app.sequencers.narrator.sequencer.maxsteps))
{if((frameNo >= v.call(null,"\uFDD0:frame")))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.step,symlog.cljs.app.sequencers.narrator.sequencer.maxsteps);
} else
{}
} else
{if("\uFDD0:else")
{if((function (){var and__3941__auto__ = (frameNo >= v.call(null,"\uFDD0:frame"));
if(and__3941__auto__)
{return (frameNo < (v.call(null,"\uFDD0:frame") + symlog.cljs.app.sequencers.narrator.sequencer.frameRate));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.step,k);
} else
{if((function (){var and__3941__auto__ = (frameNo >= v.call(null,"\uFDD0:frame"));
if(and__3941__auto__)
{return (frameNo < symlog.cljs.app.sequencers.narrator.sequencer.sequence.call(null,(k + 1)).call(null,"\uFDD0:frame"));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.step,(k + 1));
} else
{}
}
} else
{}
}
{
var G__71773 = cljs.core.next.call(null,seq__71759__$1);
var G__71774 = null;
var G__71775 = 0;
var G__71776 = 0;
seq__71759 = G__71773;
chunk__71760 = G__71774;
count__71761 = G__71775;
i__71762 = G__71776;
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
