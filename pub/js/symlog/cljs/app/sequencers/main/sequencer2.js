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
var seq__5202 = cljs.core.seq.call(null,symlog.cljs.app.sequencers.main.sequencer.seqsManaged);
var chunk__5203 = null;
var count__5204 = 0;
var i__5205 = 0;
while(true){
if((i__5205 < count__5204))
{var v = cljs.core._nth.call(null,chunk__5203,i__5205);
goog.events.listen(v.dispatcher,"stopped",symlog.cljs.app.sequencers.main.sequencer.donext);
{
var G__5206 = seq__5202;
var G__5207 = chunk__5203;
var G__5208 = count__5204;
var G__5209 = (i__5205 + 1);
seq__5202 = G__5206;
chunk__5203 = G__5207;
count__5204 = G__5208;
i__5205 = G__5209;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5202);
if(temp__4092__auto__)
{var seq__5202__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5202__$1))
{var c__2756__auto__ = cljs.core.chunk_first.call(null,seq__5202__$1);
{
var G__5210 = cljs.core.chunk_rest.call(null,seq__5202__$1);
var G__5211 = c__2756__auto__;
var G__5212 = cljs.core.count.call(null,c__2756__auto__);
var G__5213 = 0;
seq__5202 = G__5210;
chunk__5203 = G__5211;
count__5204 = G__5212;
i__5205 = G__5213;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__5202__$1);
goog.events.listen(v.dispatcher,"stopped",symlog.cljs.app.sequencers.main.sequencer.donext);
{
var G__5214 = cljs.core.next.call(null,seq__5202__$1);
var G__5215 = null;
var G__5216 = 0;
var G__5217 = 0;
seq__5202 = G__5214;
chunk__5203 = G__5215;
count__5204 = G__5216;
i__5205 = G__5217;
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
var seq__5224 = cljs.core.seq.call(null,symlog.cljs.app.sequencers.main.sequencer.sequence);
var chunk__5225 = null;
var count__5226 = 0;
var i__5227 = 0;
while(true){
if((i__5227 < count__5226))
{var vec__5228 = cljs.core._nth.call(null,chunk__5225,i__5227);
var k = cljs.core.nth.call(null,vec__5228,0,null);
var v = cljs.core.nth.call(null,vec__5228,1,null);
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
var G__5230 = seq__5224;
var G__5231 = chunk__5225;
var G__5232 = count__5226;
var G__5233 = (i__5227 + 1);
seq__5224 = G__5230;
chunk__5225 = G__5231;
count__5226 = G__5232;
i__5227 = G__5233;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5224);
if(temp__4092__auto__)
{var seq__5224__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5224__$1))
{var c__2756__auto__ = cljs.core.chunk_first.call(null,seq__5224__$1);
{
var G__5234 = cljs.core.chunk_rest.call(null,seq__5224__$1);
var G__5235 = c__2756__auto__;
var G__5236 = cljs.core.count.call(null,c__2756__auto__);
var G__5237 = 0;
seq__5224 = G__5234;
chunk__5225 = G__5235;
count__5226 = G__5236;
i__5227 = G__5237;
continue;
}
} else
{var vec__5229 = cljs.core.first.call(null,seq__5224__$1);
var k = cljs.core.nth.call(null,vec__5229,0,null);
var v = cljs.core.nth.call(null,vec__5229,1,null);
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
var G__5238 = cljs.core.next.call(null,seq__5224__$1);
var G__5239 = null;
var G__5240 = 0;
var G__5241 = 0;
seq__5224 = G__5238;
chunk__5225 = G__5239;
count__5226 = G__5240;
i__5227 = G__5241;
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
