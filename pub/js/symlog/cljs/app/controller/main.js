goog.provide('symlog.cljs.app.controller.main');
goog.require('cljs.core');
goog.require('symlog.cljs.app.dom.elements');
goog.require('symlog.cljs.app.dom.elements');
symlog.cljs.app.controller.main.ctxt = symlog.cljs.app.controller.main;
symlog.cljs.app.controller.main.target = goog.dom.getElement("mainVideo");
symlog.cljs.app.controller.main.frameRate = 15;
symlog.cljs.app.controller.main.endFrame = 15608;
symlog.cljs.app.controller.main.startFrame = 0;
symlog.cljs.app.controller.main.playing = cljs.core.atom.call(null,null);
symlog.cljs.app.controller.main.step = cljs.core.atom.call(null,1);
symlog.cljs.app.controller.main.paused = cljs.core.atom.call(null,false);
symlog.cljs.app.controller.main.interrupted = cljs.core.atom.call(null,true);
symlog.cljs.app.controller.main.init = (function init(){
symlog.cljs.app.controller.actions.init.call(null,symlog.cljs.app.controller.main.ctxt);
symlog.cljs.app.controller.main.actions = symlog.cljs.app.controller.actions.seqmap;
symlog.cljs.app.controller.main.maxsteps = cljs.core.count.call(null,cljs.core.keys.call(null,symlog.cljs.app.controller.main.actions));
symlog.cljs.app.sequencers.narrator.sequencer.init.call(null);
symlog.cljs.app.controller.main.seqsManaged = cljs.core.vector.call(null,symlog.cljs.app.sequencers.narrator.sequencer);
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").controller = symlog.cljs.app.controller.main.ctxt;
var seq__31121 = cljs.core.seq.call(null,symlog.cljs.app.controller.main.seqsManaged);
var chunk__31122 = null;
var count__31123 = 0;
var i__31124 = 0;
while(true){
if((i__31124 < count__31123))
{var v = cljs.core._nth.call(null,chunk__31122,i__31124);
goog.events.listen(v.dispatcher,"stopped",symlog.cljs.app.controller.main.donext);
{
var G__31125 = seq__31121;
var G__31126 = chunk__31122;
var G__31127 = count__31123;
var G__31128 = (i__31124 + 1);
seq__31121 = G__31125;
chunk__31122 = G__31126;
count__31123 = G__31127;
i__31124 = G__31128;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31121);
if(temp__4092__auto__)
{var seq__31121__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31121__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__31121__$1);
{
var G__31129 = cljs.core.chunk_rest.call(null,seq__31121__$1);
var G__31130 = c__2754__auto__;
var G__31131 = cljs.core.count.call(null,c__2754__auto__);
var G__31132 = 0;
seq__31121 = G__31129;
chunk__31122 = G__31130;
count__31123 = G__31131;
i__31124 = G__31132;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__31121__$1);
goog.events.listen(v.dispatcher,"stopped",symlog.cljs.app.controller.main.donext);
{
var G__31133 = cljs.core.next.call(null,seq__31121__$1);
var G__31134 = null;
var G__31135 = 0;
var G__31136 = 0;
seq__31121 = G__31133;
chunk__31122 = G__31134;
count__31123 = G__31135;
i__31124 = G__31136;
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
symlog.cljs.app.controller.main.interrupt = (function interrupt(){
symlog.cljs.app.controller.main.pause.call(null);
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.interrupted,true);
});
symlog.cljs.app.controller.main.resume = (function resume(){
symlog.cljs.app.controller.main.play.call(null);
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.interrupted,false);
});
symlog.cljs.app.controller.main.fire = (function fire(){
symlog.cljs.app.controller.main.target.currentTime = (symlog.cljs.app.controller.main.startFrame / symlog.cljs.app.controller.main.frameRate);
return symlog.cljs.app.controller.main.doframe.call(null,0);
});
symlog.cljs.app.controller.main.pause = (function pause(){
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.controller.main.playing)))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.controller.main.playing).pause))
{cljs.core.deref.call(null,symlog.cljs.app.controller.main.playing).pause();
} else
{}
} else
{}
symlog.cljs.app.controller.main.target.pause();
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.paused,true);
});
symlog.cljs.app.controller.main.wait = (function wait(){
return requestAnimationFrame(symlog.cljs.app.controller.main.cycler);
});
symlog.cljs.app.controller.main.play = (function play(){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.paused,false);
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.controller.main.playing)))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.controller.main.playing).play))
{cljs.core.deref.call(null,symlog.cljs.app.controller.main.playing).play();
} else
{}
} else
{}
requestAnimationFrame(symlog.cljs.app.controller.main.cycler);
return symlog.cljs.app.controller.main.target.play();
});
symlog.cljs.app.controller.main.cycler = (function cycler(){
var frameNum = Math.round((symlog.cljs.app.controller.main.target.currentTime * symlog.cljs.app.controller.main.frameRate));
var img = symlog.cljs.app.frameBuffer.nextFrame.call(null,frameNum);
if((frameNum <= symlog.cljs.app.controller.main.endFrame))
{if(cljs.core._EQ_.call(null,"wait",img))
{return symlog.cljs.app.controller.main.wait.call(null);
} else
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,symlog.cljs.app.controller.main.paused),true))
{return null;
} else
{if("\uFDD0:else")
{symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame").src = img;
symlog.cljs.app.controller.main.doframe.call(null,frameNum);
return requestAnimationFrame(cycler);
} else
{return null;
}
}
}
} else
{return symlog.cljs.app.controller.main.pause.call(null);
}
});
symlog.cljs.app.controller.main.doframe = (function doframe(frameNo){
if((cljs.core.deref.call(null,symlog.cljs.app.controller.main.step) > symlog.cljs.app.controller.main.maxsteps))
{return null;
} else
{if((frameNo >= symlog.cljs.app.controller.main.actions.call(null,cljs.core.deref.call(null,symlog.cljs.app.controller.main.step)).call(null,"\uFDD0:frame")))
{if(cljs.core.not.call(null,cljs.core.deref.call(null,symlog.cljs.app.controller.main.playing)))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.playing,symlog.cljs.app.controller.main.actions.call(null,cljs.core.deref.call(null,symlog.cljs.app.controller.main.step)).call(null,"\uFDD0:sequence"));
cljs.core.swap_BANG_.call(null,symlog.cljs.app.controller.main.step,cljs.core.inc);
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.controller.main.playing).fire))
{return cljs.core.deref.call(null,symlog.cljs.app.controller.main.playing).fire();
} else
{return cljs.core.deref.call(null,symlog.cljs.app.controller.main.playing).call(null);
}
} else
{return null;
}
} else
{return null;
}
}
});
symlog.cljs.app.controller.main.donext = (function donext(evt){
if(cljs.core._EQ_.call(null,evt.target.label,"narrator"))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.controller.main.playing)))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.playing,null);
} else
{}
cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.interrupted,false);
return goog.events.fireListeners(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideoPlayTouchArea"),"click",false,{"type":"click","target":symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideoPlayTouchArea")});
} else
{return null;
}
});
symlog.cljs.app.controller.main.reset = (function reset(frame){
var img = symlog.cljs.app.frameBuffer.nextFrame.call(null,frame);
var seq__31143_31149 = cljs.core.seq.call(null,symlog.cljs.app.controller.main.actions);
var chunk__31144_31150 = null;
var count__31145_31151 = 0;
var i__31146_31152 = 0;
while(true){
if((i__31146_31152 < count__31145_31151))
{var vec__31147_31153 = cljs.core._nth.call(null,chunk__31144_31150,i__31146_31152);
var k_31154 = cljs.core.nth.call(null,vec__31147_31153,0,null);
var v_31155 = cljs.core.nth.call(null,vec__31147_31153,1,null);
if((function (){var and__3941__auto__ = (v_31155.call(null,"\uFDD0:frame") <= frame);
if(and__3941__auto__)
{return (frame >= symlog.cljs.app.controller.main.actions.call(null,(k_31154 + 1)).call(null,"\uFDD0:frame"));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,k_31154);
} else
{}
{
var G__31156 = seq__31143_31149;
var G__31157 = chunk__31144_31150;
var G__31158 = count__31145_31151;
var G__31159 = (i__31146_31152 + 1);
seq__31143_31149 = G__31156;
chunk__31144_31150 = G__31157;
count__31145_31151 = G__31158;
i__31146_31152 = G__31159;
continue;
}
} else
{var temp__4092__auto___31160 = cljs.core.seq.call(null,seq__31143_31149);
if(temp__4092__auto___31160)
{var seq__31143_31161__$1 = temp__4092__auto___31160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31143_31161__$1))
{var c__2754__auto___31162 = cljs.core.chunk_first.call(null,seq__31143_31161__$1);
{
var G__31163 = cljs.core.chunk_rest.call(null,seq__31143_31161__$1);
var G__31164 = c__2754__auto___31162;
var G__31165 = cljs.core.count.call(null,c__2754__auto___31162);
var G__31166 = 0;
seq__31143_31149 = G__31163;
chunk__31144_31150 = G__31164;
count__31145_31151 = G__31165;
i__31146_31152 = G__31166;
continue;
}
} else
{var vec__31148_31167 = cljs.core.first.call(null,seq__31143_31161__$1);
var k_31168 = cljs.core.nth.call(null,vec__31148_31167,0,null);
var v_31169 = cljs.core.nth.call(null,vec__31148_31167,1,null);
if((function (){var and__3941__auto__ = (v_31169.call(null,"\uFDD0:frame") <= frame);
if(and__3941__auto__)
{return (frame >= symlog.cljs.app.controller.main.actions.call(null,(k_31168 + 1)).call(null,"\uFDD0:frame"));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,k_31168);
} else
{}
{
var G__31170 = cljs.core.next.call(null,seq__31143_31161__$1);
var G__31171 = null;
var G__31172 = 0;
var G__31173 = 0;
seq__31143_31149 = G__31170;
chunk__31144_31150 = G__31171;
count__31145_31151 = G__31172;
i__31146_31152 = G__31173;
continue;
}
}
} else
{}
}
break;
}
if(!(cljs.core._EQ_.call(null,img,"wait")))
{return symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame").src = img;
} else
{return symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame").clearit.fire();
}
});
