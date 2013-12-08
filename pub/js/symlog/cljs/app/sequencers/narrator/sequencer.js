goog.provide('symlog.cljs.app.sequencers.narrator.sequencer');
goog.require('cljs.core');
goog.require('symlog.cljs.app.elements');
symlog.cljs.app.sequencers.narrator.sequencer.ctxt = symlog.cljs.app.sequencers.narrator.sequencer;
symlog.cljs.app.sequencers.narrator.sequencer.label = "narrator";
symlog.cljs.app.sequencers.narrator.sequencer.target = symlog.cljs.app.elements.narratorVid;
symlog.cljs.app.sequencers.narrator.sequencer.container = symlog.cljs.app.elements.narratorDiv;
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
symlog.cljs.app.sequencers.narrator.sequencer.paintFrame = symlog.cljs.app.elements.paintFrame;
symlog.cljs.app.sequencers.narrator.sequencer.scenes = symlog.cljs.app.elements.narratorScenes;
symlog.cljs.app.sequencers.narrator.sequencer.init = (function init(controller){
symlog.cljs.app.sequencers.narrator.sequencer.controller = controller;
symlog.cljs.app.sequencers.narrator.sequence.init.call(null);
symlog.cljs.app.sequencers.narrator.sequencer.sequence = symlog.cljs.app.sequencers.narrator.sequence.seqmap;
symlog.cljs.app.sequencers.narrator.sequencer.maxsteps = cljs.core.count.call(null,cljs.core.keys.call(null,symlog.cljs.app.sequencers.narrator.sequencer.sequence));
symlog.cljs.app.sequencers.narrator.sequencer.scenes = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (elem){
return cljs.core.PersistentHashMap.fromArrays(["\uFDD0:enabled","\uFDD0:playlabel","\uFDD0:tIdx","\uFDD0:playlink","\uFDD0:playtoggle","\uFDD0:fend","\uFDD0:fstart","\uFDD0:sceneNo","\uFDD0:tocNodes","\uFDD0:toc","\uFDD0:id"],[cljs.core.atom.call(null,true),(elem.children[0]),parseInt(elem.attributes.tidx.value),(elem.children[1]),(elem.children[2]),parseInt(elem.attributes.fend.value),parseInt(elem.attributes.fstart.value),parseInt(cljs.core.apply.call(null,cljs.core.str,cljs.core.filter.call(null,(function (p1__55688_SHARP_){
return goog.string.isNumeric(p1__55688_SHARP_);
}),elem.id))),symlog.cljs.util.nodelist__GT_coll.call(null,goog.dom.getElementsByClass("toc",goog.dom.getElement([cljs.core.str("nt"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.filter.call(null,(function (p1__55690_SHARP_){
return goog.string.isNumeric(p1__55690_SHARP_);
}),elem.id)))].join('')))),goog.dom.getElement([cljs.core.str("nt"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.filter.call(null,(function (p1__55689_SHARP_){
return goog.string.isNumeric(p1__55689_SHARP_);
}),elem.id)))].join('')),elem.id]);
}),cljs.core.vec.call(null,symlog.cljs.util.nodelist__GT_coll.call(null,symlog.cljs.app.sequencers.narrator.sequencer.scenes))));
symlog.cljs.app.sequencers.narrator.sequencer.target.sequencer = symlog.cljs.app.sequencers.narrator.sequencer.ctxt;
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
var seq__55697 = cljs.core.seq.call(null,symlog.cljs.app.sequencers.narrator.sequencer.sequence);
var chunk__55698 = null;
var count__55699 = 0;
var i__55700 = 0;
while(true){
if((i__55700 < count__55699))
{var vec__55701 = cljs.core._nth.call(null,chunk__55698,i__55700);
var k = cljs.core.nth.call(null,vec__55701,0,null);
var v = cljs.core.nth.call(null,vec__55701,1,null);
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
var G__55703 = seq__55697;
var G__55704 = chunk__55698;
var G__55705 = count__55699;
var G__55706 = (i__55700 + 1);
seq__55697 = G__55703;
chunk__55698 = G__55704;
count__55699 = G__55705;
i__55700 = G__55706;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__55697);
if(temp__4092__auto__)
{var seq__55697__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55697__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__55697__$1);
{
var G__55707 = cljs.core.chunk_rest.call(null,seq__55697__$1);
var G__55708 = c__2754__auto__;
var G__55709 = cljs.core.count.call(null,c__2754__auto__);
var G__55710 = 0;
seq__55697 = G__55707;
chunk__55698 = G__55708;
count__55699 = G__55709;
i__55700 = G__55710;
continue;
}
} else
{var vec__55702 = cljs.core.first.call(null,seq__55697__$1);
var k = cljs.core.nth.call(null,vec__55702,0,null);
var v = cljs.core.nth.call(null,vec__55702,1,null);
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
var G__55711 = cljs.core.next.call(null,seq__55697__$1);
var G__55712 = null;
var G__55713 = 0;
var G__55714 = 0;
seq__55697 = G__55711;
chunk__55698 = G__55712;
count__55699 = G__55713;
i__55700 = G__55714;
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
var seq__55719 = cljs.core.seq.call(null,sceneRange);
var chunk__55720 = null;
var count__55721 = 0;
var i__55722 = 0;
while(true){
if((i__55722 < count__55721))
{var x = cljs.core._nth.call(null,chunk__55720,i__55722);
if(cljs.core.not.call(null,goog.string.contains(symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:id"),"sub")))
{symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:playbutton").style.display = "none";
symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:playlabel").style.opacity = .4;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:enabled"),false);
} else
{}
{
var G__55723 = seq__55719;
var G__55724 = chunk__55720;
var G__55725 = count__55721;
var G__55726 = (i__55722 + 1);
seq__55719 = G__55723;
chunk__55720 = G__55724;
count__55721 = G__55725;
i__55722 = G__55726;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__55719);
if(temp__4092__auto__)
{var seq__55719__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55719__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__55719__$1);
{
var G__55727 = cljs.core.chunk_rest.call(null,seq__55719__$1);
var G__55728 = c__2754__auto__;
var G__55729 = cljs.core.count.call(null,c__2754__auto__);
var G__55730 = 0;
seq__55719 = G__55727;
chunk__55720 = G__55728;
count__55721 = G__55729;
i__55722 = G__55730;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__55719__$1);
if(cljs.core.not.call(null,goog.string.contains(symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:id"),"sub")))
{symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:playbutton").style.display = "none";
symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:playlabel").style.opacity = .4;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:enabled"),false);
} else
{}
{
var G__55731 = cljs.core.next.call(null,seq__55719__$1);
var G__55732 = null;
var G__55733 = 0;
var G__55734 = 0;
seq__55719 = G__55731;
chunk__55720 = G__55732;
count__55721 = G__55733;
i__55722 = G__55734;
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
var seq__55739 = cljs.core.seq.call(null,sceneRange);
var chunk__55740 = null;
var count__55741 = 0;
var i__55742 = 0;
while(true){
if((i__55742 < count__55741))
{var x = cljs.core._nth.call(null,chunk__55740,i__55742);
if(cljs.core.not.call(null,goog.string.contains(symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:id"),"sub")))
{symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:playbutton").style.display = "inline";
symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:playlabel").style.opacity = 1;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:enabled"),true);
} else
{}
{
var G__55743 = seq__55739;
var G__55744 = chunk__55740;
var G__55745 = count__55741;
var G__55746 = (i__55742 + 1);
seq__55739 = G__55743;
chunk__55740 = G__55744;
count__55741 = G__55745;
i__55742 = G__55746;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__55739);
if(temp__4092__auto__)
{var seq__55739__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55739__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__55739__$1);
{
var G__55747 = cljs.core.chunk_rest.call(null,seq__55739__$1);
var G__55748 = c__2754__auto__;
var G__55749 = cljs.core.count.call(null,c__2754__auto__);
var G__55750 = 0;
seq__55739 = G__55747;
chunk__55740 = G__55748;
count__55741 = G__55749;
i__55742 = G__55750;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__55739__$1);
if(cljs.core.not.call(null,goog.string.contains(symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:id"),"sub")))
{symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:playbutton").style.display = "inline";
symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:playlabel").style.opacity = 1;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.scenes.call(null,x).call(null,"\uFDD0:enabled"),true);
} else
{}
{
var G__55751 = cljs.core.next.call(null,seq__55739__$1);
var G__55752 = null;
var G__55753 = 0;
var G__55754 = 0;
seq__55739 = G__55751;
chunk__55740 = G__55752;
count__55741 = G__55753;
i__55742 = G__55754;
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
