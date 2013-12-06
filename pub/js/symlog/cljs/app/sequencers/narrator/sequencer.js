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
symlog.cljs.app.sequencers.narrator.sequencer.container = symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorDiv");
symlog.cljs.app.sequencers.narrator.sequencer.frameRate = 15;
symlog.cljs.app.sequencers.narrator.sequencer.startFrame = cljs.core.atom.call(null,0);
symlog.cljs.app.sequencers.narrator.sequencer.endFrame = cljs.core.atom.call(null,0);
symlog.cljs.app.sequencers.narrator.sequencer.playing = cljs.core.atom.call(null,null);
symlog.cljs.app.sequencers.narrator.sequencer.paused = cljs.core.atom.call(null,false);
symlog.cljs.app.sequencers.narrator.sequencer.step = cljs.core.atom.call(null,1);
symlog.cljs.app.sequencers.narrator.sequencer.enabled = cljs.core.atom.call(null,true);
symlog.cljs.app.sequencers.narrator.sequencer.rested = cljs.core.atom.call(null,true);
symlog.cljs.app.sequencers.narrator.sequencer.callback = cljs.core.atom.call(null,null);
symlog.cljs.app.sequencers.narrator.sequencer.scene = cljs.core.atom.call(null,0);
symlog.cljs.app.sequencers.narrator.sequencer.paintFrame = symlog.cljs.app.dom.elements.call(null,"\uFDD0:paintFrame");
symlog.cljs.app.sequencers.narrator.sequencer.init = (function init(controller){
symlog.cljs.app.sequencers.narrator.sequencer.controller = controller;
symlog.cljs.app.sequencers.narrator.sequence.init.call(null);
symlog.cljs.app.sequencers.narrator.sequencer.sequence = symlog.cljs.app.sequencers.narrator.sequence.seqmap;
symlog.cljs.app.sequencers.narrator.sequencer.maxsteps = cljs.core.count.call(null,cljs.core.keys.call(null,symlog.cljs.app.sequencers.narrator.sequencer.sequence));
symlog.cljs.app.sequencers.narrator.sequencer.scenes = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (elem){
return cljs.core.PersistentHashMap.fromArrays(["\uFDD0:enabled","\uFDD0:playlabel","\uFDD0:tIdx","\uFDD0:fend","\uFDD0:playbutton","\uFDD0:fstart","\uFDD0:sceneNo","\uFDD0:toc","\uFDD0:id"],[cljs.core.atom.call(null,true),(elem.children[1]),parseInt(elem.attributes.tidx.value),parseInt(elem.attributes.fend.value),(elem.children[0]),parseInt(elem.attributes.fstart.value),parseInt(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__32197_SHARP_){
return goog.string.isNumeric(p1__32197_SHARP_);
}),elem.id))),goog.dom.getElement([cljs.core.str("nt"),cljs.core.str(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__32198_SHARP_){
return goog.string.isNumeric(p1__32198_SHARP_);
}),elem.id)))].join('')),elem.id]);
}),cljs.core.vec.call(null,symlog.cljs.util.nodelist__GT_coll.call(null,symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorScenes")))));
symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorVid").sequencer = symlog.cljs.app.sequencers.narrator.sequencer.ctxt;
return symlog.cljs.app.handlers.narrator.init.call(null);
});
symlog.cljs.app.sequencers.narrator.sequencer.fire = (function fire(sceneNo,returnFunc){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.startFrame,symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,sceneNo).call(null,"\uFDD0:fstart"));
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.endFrame,symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,sceneNo).call(null,"\uFDD0:fend"));
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.scene,symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,sceneNo).call(null,"\uFDD0:sceneNo"));
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.callback,returnFunc);
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
symlog.cljs.app.sequencers.narrator.sequencer.target.style.opacity = 1;
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
return symlog.cljs.app.sequencers.narrator.sequencer.paintFrame.clearit.fire();
});
symlog.cljs.app.sequencers.narrator.sequencer.home = (function home(){
symlog.cljs.app.sequencers.narrator.sequencer.container.style.height = "90px";
symlog.cljs.app.sequencers.narrator.sequencer.container.style.width = "90px";
symlog.cljs.app.sequencers.narrator.sequencer.container.style.top = "9px";
symlog.cljs.app.sequencers.narrator.sequencer.container.style.left = "310px";
symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.scene)).call(null,"\uFDD0:toc").style.display = "none";
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.rested,true);
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
if(cljs.core.not.call(null,cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.enabled)))
{symlog.cljs.app.sequencers.narrator.sequencer.target.style.opacity = .5;
} else
{}
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
var seq__32205 = cljs.core.seq.call(null,symlog.cljs.app.sequencers.narrator.sequencer.sequence);
var chunk__32206 = null;
var count__32207 = 0;
var i__32208 = 0;
while(true){
if((i__32208 < count__32207))
{var vec__32209 = cljs.core._nth.call(null,chunk__32206,i__32208);
var k = cljs.core.nth.call(null,vec__32209,0,null);
var v = cljs.core.nth.call(null,vec__32209,1,null);
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
var G__32211 = seq__32205;
var G__32212 = chunk__32206;
var G__32213 = count__32207;
var G__32214 = (i__32208 + 1);
seq__32205 = G__32211;
chunk__32206 = G__32212;
count__32207 = G__32213;
i__32208 = G__32214;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32205);
if(temp__4092__auto__)
{var seq__32205__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32205__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__32205__$1);
{
var G__32215 = cljs.core.chunk_rest.call(null,seq__32205__$1);
var G__32216 = c__2754__auto__;
var G__32217 = cljs.core.count.call(null,c__2754__auto__);
var G__32218 = 0;
seq__32205 = G__32215;
chunk__32206 = G__32216;
count__32207 = G__32217;
i__32208 = G__32218;
continue;
}
} else
{var vec__32210 = cljs.core.first.call(null,seq__32205__$1);
var k = cljs.core.nth.call(null,vec__32210,0,null);
var v = cljs.core.nth.call(null,vec__32210,1,null);
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
var G__32219 = cljs.core.next.call(null,seq__32205__$1);
var G__32220 = null;
var G__32221 = 0;
var G__32222 = 0;
seq__32205 = G__32219;
chunk__32206 = G__32220;
count__32207 = G__32221;
i__32208 = G__32222;
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
symlog.cljs.app.sequencers.narrator.sequencer.disableScenes = (function disableScenes(sceneRange){
var seq__32227 = cljs.core.seq.call(null,sceneRange);
var chunk__32228 = null;
var count__32229 = 0;
var i__32230 = 0;
while(true){
if((i__32230 < count__32229))
{var x = cljs.core._nth.call(null,chunk__32228,i__32230);
if(cljs.core.not.call(null,goog.string.contains(symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:id"),"sub")))
{symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:playbutton").style.display = "none";
symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:playlabel").style.opacity = .4;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:enabled"),false);
} else
{}
{
var G__32231 = seq__32227;
var G__32232 = chunk__32228;
var G__32233 = count__32229;
var G__32234 = (i__32230 + 1);
seq__32227 = G__32231;
chunk__32228 = G__32232;
count__32229 = G__32233;
i__32230 = G__32234;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32227);
if(temp__4092__auto__)
{var seq__32227__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32227__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__32227__$1);
{
var G__32235 = cljs.core.chunk_rest.call(null,seq__32227__$1);
var G__32236 = c__2754__auto__;
var G__32237 = cljs.core.count.call(null,c__2754__auto__);
var G__32238 = 0;
seq__32227 = G__32235;
chunk__32228 = G__32236;
count__32229 = G__32237;
i__32230 = G__32238;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__32227__$1);
if(cljs.core.not.call(null,goog.string.contains(symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:id"),"sub")))
{symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:playbutton").style.display = "none";
symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:playlabel").style.opacity = .4;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:enabled"),false);
} else
{}
{
var G__32239 = cljs.core.next.call(null,seq__32227__$1);
var G__32240 = null;
var G__32241 = 0;
var G__32242 = 0;
seq__32227 = G__32239;
chunk__32228 = G__32240;
count__32229 = G__32241;
i__32230 = G__32242;
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
symlog.cljs.app.sequencers.narrator.sequencer.enableScenes = (function enableScenes(sceneRange){
var seq__32247 = cljs.core.seq.call(null,sceneRange);
var chunk__32248 = null;
var count__32249 = 0;
var i__32250 = 0;
while(true){
if((i__32250 < count__32249))
{var x = cljs.core._nth.call(null,chunk__32248,i__32250);
if(cljs.core.not.call(null,goog.string.contains(symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:id"),"sub")))
{symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:playbutton").style.display = "inline";
symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:playlabel").style.opacity = 1;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:enabled"),true);
} else
{}
{
var G__32251 = seq__32247;
var G__32252 = chunk__32248;
var G__32253 = count__32249;
var G__32254 = (i__32250 + 1);
seq__32247 = G__32251;
chunk__32248 = G__32252;
count__32249 = G__32253;
i__32250 = G__32254;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32247);
if(temp__4092__auto__)
{var seq__32247__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32247__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__32247__$1);
{
var G__32255 = cljs.core.chunk_rest.call(null,seq__32247__$1);
var G__32256 = c__2754__auto__;
var G__32257 = cljs.core.count.call(null,c__2754__auto__);
var G__32258 = 0;
seq__32247 = G__32255;
chunk__32248 = G__32256;
count__32249 = G__32257;
i__32250 = G__32258;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__32247__$1);
if(cljs.core.not.call(null,goog.string.contains(symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:id"),"sub")))
{symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:playbutton").style.display = "inline";
symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:playlabel").style.opacity = 1;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:enabled"),true);
} else
{}
{
var G__32259 = cljs.core.next.call(null,seq__32247__$1);
var G__32260 = null;
var G__32261 = 0;
var G__32262 = 0;
seq__32247 = G__32259;
chunk__32248 = G__32260;
count__32249 = G__32261;
i__32250 = G__32262;
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
