goog.provide('symlog.cljs.app.sequencers.main.sequencer');
goog.require('cljs.core');
goog.require('symlog.cljs.app.dom.elements');
goog.require('symlog.cljs.app.dom.elements');
symlog.cljs.app.sequencers.main.sequencer.ctxt = symlog.cljs.app.sequencers.main.sequencer;
symlog.cljs.app.sequencers.main.sequencer.target = goog.dom.getElement("mainVideo");
symlog.cljs.app.sequencers.main.sequencer.frameRate = 15;
symlog.cljs.app.sequencers.main.sequencer.endFrame = 15608;
symlog.cljs.app.sequencers.main.sequencer.startFrame = 0;
symlog.cljs.app.sequencers.main.sequencer.playing = cljs.core.atom.call(null,null);
symlog.cljs.app.sequencers.main.sequencer.step = cljs.core.atom.call(null,1);
symlog.cljs.app.sequencers.main.sequencer.paused = cljs.core.atom.call(null,false);
symlog.cljs.app.sequencers.main.sequencer.interrupted = cljs.core.atom.call(null,true);
symlog.cljs.app.sequencers.main.sequencer.init = (function init(){
symlog.cljs.app.sequencers.main.sequence.init.call(null,symlog.cljs.app.sequencers.main.sequencer.ctxt);
symlog.cljs.app.sequencers.main.sequencer.sequence = symlog.cljs.app.sequencers.main.sequence.seqmap;
symlog.cljs.app.sequencers.main.sequencer.maxsteps = cljs.core.count.call(null,cljs.core.keys.call(null,symlog.cljs.app.sequencers.main.sequencer.sequence));
symlog.cljs.app.sequencers.narrator.sequencer.init.call(null);
symlog.cljs.app.sequencers.main.sequencer.seqsManaged = cljs.core.vector.call(null,symlog.cljs.app.sequencers.narrator.sequencer);
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").sequencer = symlog.cljs.app.sequencers.main.sequencer.ctxt;
var seq__22268 = cljs.core.seq.call(null,symlog.cljs.app.sequencers.main.sequencer.seqsManaged);
var chunk__22269 = null;
var count__22270 = 0;
var i__22271 = 0;
while(true){
if((i__22271 < count__22270))
{var v = cljs.core._nth.call(null,chunk__22269,i__22271);
goog.events.listen(v.dispatcher,"stopped",symlog.cljs.app.sequencers.main.sequencer.donext);
{
var G__22272 = seq__22268;
var G__22273 = chunk__22269;
var G__22274 = count__22270;
var G__22275 = (i__22271 + 1);
seq__22268 = G__22272;
chunk__22269 = G__22273;
count__22270 = G__22274;
i__22271 = G__22275;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22268);
if(temp__4092__auto__)
{var seq__22268__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22268__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__22268__$1);
{
var G__22276 = cljs.core.chunk_rest.call(null,seq__22268__$1);
var G__22277 = c__2754__auto__;
var G__22278 = cljs.core.count.call(null,c__2754__auto__);
var G__22279 = 0;
seq__22268 = G__22276;
chunk__22269 = G__22277;
count__22270 = G__22278;
i__22271 = G__22279;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__22268__$1);
goog.events.listen(v.dispatcher,"stopped",symlog.cljs.app.sequencers.main.sequencer.donext);
{
var G__22280 = cljs.core.next.call(null,seq__22268__$1);
var G__22281 = null;
var G__22282 = 0;
var G__22283 = 0;
seq__22268 = G__22280;
chunk__22269 = G__22281;
count__22270 = G__22282;
i__22271 = G__22283;
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
symlog.cljs.app.sequencers.main.sequencer.interrupt = (function interrupt(){
symlog.cljs.app.sequencers.main.sequencer.pause.call(null);
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.main.sequencer.interrupted,true);
});
symlog.cljs.app.sequencers.main.sequencer.resume = (function resume(){
symlog.cljs.app.sequencers.main.sequencer.play.call(null);
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.main.sequencer.interrupted,false);
});
symlog.cljs.app.sequencers.main.sequencer.fire = (function fire(){
symlog.cljs.app.sequencers.main.sequencer.target.currentTime = (symlog.cljs.app.sequencers.main.sequencer.startFrame / symlog.cljs.app.sequencers.main.sequencer.frameRate);
return symlog.cljs.app.sequencers.main.sequencer.doframe.call(null,0);
});
symlog.cljs.app.sequencers.main.sequencer.pause = (function pause(){
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.sequencers.main.sequencer.playing)))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.sequencers.main.sequencer.playing).pause))
{cljs.core.deref.call(null,symlog.cljs.app.sequencers.main.sequencer.playing).pause();
} else
{}
} else
{}
symlog.cljs.app.sequencers.main.sequencer.target.pause();
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.main.sequencer.paused,true);
});
symlog.cljs.app.sequencers.main.sequencer.wait = (function wait(){
return requestAnimationFrame(symlog.cljs.app.sequencers.main.sequencer.cycler);
});
symlog.cljs.app.sequencers.main.sequencer.play = (function play(){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.main.sequencer.paused,false);
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.sequencers.main.sequencer.playing)))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.sequencers.main.sequencer.playing).play))
{cljs.core.deref.call(null,symlog.cljs.app.sequencers.main.sequencer.playing).play();
} else
{}
} else
{}
requestAnimationFrame(symlog.cljs.app.sequencers.main.sequencer.cycler);
return symlog.cljs.app.sequencers.main.sequencer.target.play();
});
symlog.cljs.app.sequencers.main.sequencer.cycler = (function cycler(){
var frameNum = Math.round((symlog.cljs.app.sequencers.main.sequencer.target.currentTime * symlog.cljs.app.sequencers.main.sequencer.frameRate));
var img = symlog.cljs.app.frameBuffer.nextFrame.call(null,frameNum);
if((frameNum <= symlog.cljs.app.sequencers.main.sequencer.endFrame))
{if(cljs.core._EQ_.call(null,"wait",img))
{return symlog.cljs.app.sequencers.main.sequencer.wait.call(null);
} else
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,symlog.cljs.app.sequencers.main.sequencer.paused),true))
{return null;
} else
{if("\uFDD0:else")
{symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame").src = img;
symlog.cljs.app.sequencers.main.sequencer.doframe.call(null,frameNum);
return requestAnimationFrame(cycler);
} else
{return null;
}
}
}
} else
{return symlog.cljs.app.sequencers.main.sequencer.pause.call(null);
}
});
symlog.cljs.app.sequencers.main.sequencer.doframe = (function doframe(frameNo){
if((cljs.core.deref.call(null,symlog.cljs.app.sequencers.main.sequencer.step) > symlog.cljs.app.sequencers.main.sequencer.maxsteps))
{return null;
} else
{if((frameNo >= symlog.cljs.app.sequencers.main.sequencer.sequence.call(null,cljs.core.deref.call(null,symlog.cljs.app.sequencers.main.sequencer.step)).call(null,"\uFDD0:frame")))
{if(cljs.core.not.call(null,cljs.core.deref.call(null,symlog.cljs.app.sequencers.main.sequencer.playing)))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.main.sequencer.playing,symlog.cljs.app.sequencers.main.sequencer.sequence.call(null,cljs.core.deref.call(null,symlog.cljs.app.sequencers.main.sequencer.step)).call(null,"\uFDD0:sequence"));
cljs.core.swap_BANG_.call(null,symlog.cljs.app.sequencers.main.sequencer.step,cljs.core.inc);
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.sequencers.main.sequencer.playing).fire))
{return cljs.core.deref.call(null,symlog.cljs.app.sequencers.main.sequencer.playing).fire();
} else
{return cljs.core.deref.call(null,symlog.cljs.app.sequencers.main.sequencer.playing).call(null);
}
} else
{return null;
}
} else
{return null;
}
}
});
symlog.cljs.app.sequencers.main.sequencer.donext = (function donext(evt){
if(cljs.core._EQ_.call(null,evt.target.label,"narrator"))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.sequencers.main.sequencer.playing)))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.main.sequencer.playing,null);
} else
{}
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.main.sequencer.interrupted,false);
return goog.events.fireListeners(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideoPlayTouchArea"),"click",false,{"type":"click","target":symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideoPlayTouchArea")});
} else
{return null;
}
});
symlog.cljs.app.sequencers.main.sequencer.reset = (function reset(frame){
var seq__22290 = cljs.core.seq.call(null,symlog.cljs.app.sequencers.main.sequencer.sequence);
var chunk__22291 = null;
var count__22292 = 0;
var i__22293 = 0;
while(true){
if((i__22293 < count__22292))
{var vec__22294 = cljs.core._nth.call(null,chunk__22291,i__22293);
var k = cljs.core.nth.call(null,vec__22294,0,null);
var v = cljs.core.nth.call(null,vec__22294,1,null);
if((function (){var and__3941__auto__ = (v.call(null,"\uFDD0:frame") <= frame);
if(and__3941__auto__)
{return (frame >= symlog.cljs.app.sequencers.main.sequencer.sequence.call(null,(k + 1)).call(null,"\uFDD0:frame"));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.main.sequencer.step,k);
} else
{}
{
var G__22296 = seq__22290;
var G__22297 = chunk__22291;
var G__22298 = count__22292;
var G__22299 = (i__22293 + 1);
seq__22290 = G__22296;
chunk__22291 = G__22297;
count__22292 = G__22298;
i__22293 = G__22299;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22290);
if(temp__4092__auto__)
{var seq__22290__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22290__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__22290__$1);
{
var G__22300 = cljs.core.chunk_rest.call(null,seq__22290__$1);
var G__22301 = c__2754__auto__;
var G__22302 = cljs.core.count.call(null,c__2754__auto__);
var G__22303 = 0;
seq__22290 = G__22300;
chunk__22291 = G__22301;
count__22292 = G__22302;
i__22293 = G__22303;
continue;
}
} else
{var vec__22295 = cljs.core.first.call(null,seq__22290__$1);
var k = cljs.core.nth.call(null,vec__22295,0,null);
var v = cljs.core.nth.call(null,vec__22295,1,null);
if((function (){var and__3941__auto__ = (v.call(null,"\uFDD0:frame") <= frame);
if(and__3941__auto__)
{return (frame >= symlog.cljs.app.sequencers.main.sequencer.sequence.call(null,(k + 1)).call(null,"\uFDD0:frame"));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.main.sequencer.step,k);
} else
{}
{
var G__22304 = cljs.core.next.call(null,seq__22290__$1);
var G__22305 = null;
var G__22306 = 0;
var G__22307 = 0;
seq__22290 = G__22304;
chunk__22291 = G__22305;
count__22292 = G__22306;
i__22293 = G__22307;
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
