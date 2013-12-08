goog.provide('symlog.cljs.app.controller.main');
goog.require('cljs.core');
goog.require('symlog.cljs.app.elements');
symlog.cljs.app.controller.main.ctxt = symlog.cljs.app.controller.main;
symlog.cljs.app.controller.main.target = symlog.cljs.app.elements.mainVideo;
symlog.cljs.app.controller.main.frameRate = symlog.cljs.app.elements.FPS;
symlog.cljs.app.controller.main.endFrame = 15608;
symlog.cljs.app.controller.main.startFrame = 0;
symlog.cljs.app.controller.main.playing = cljs.core.atom.call(null,null);
symlog.cljs.app.controller.main.step = cljs.core.atom.call(null,0);
symlog.cljs.app.controller.main.paused = cljs.core.atom.call(null,false);
symlog.cljs.app.controller.main.interrupted = cljs.core.atom.call(null,false);
symlog.cljs.app.controller.main.init = (function init(){
symlog.cljs.app.sequencers.narrator.sequencer.init.call(null,symlog.cljs.app.controller.main.ctxt);
symlog.cljs.app.controller.actions.init.call(null,symlog.cljs.app.controller.main.ctxt);
symlog.cljs.app.controller.main.actions = symlog.cljs.app.controller.actions.dom;
symlog.cljs.app.controller.main.handlers = symlog.cljs.app.handlers.mainVideo;
symlog.cljs.app.controller.main.maxsteps = cljs.core.count.call(null,cljs.core.keys.call(null,symlog.cljs.app.controller.main.actions));
symlog.cljs.app.controller.main.sequencers = cljs.core.vector.call(null,symlog.cljs.app.sequencers.narrator.sequencer);
symlog.cljs.app.controller.main.target.sequencer = symlog.cljs.app.controller.main.ctxt;
symlog.cljs.app.handlers.mainVideo.init.call(null);
symlog.cljs.app.controller.main.loading_indicator = symlog.cljs.app.mainLoader;
});
symlog.cljs.app.controller.main.interrupt = (function interrupt(){
symlog.cljs.app.controller.main.pause.call(null);
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.interrupted,true);
});
symlog.cljs.app.controller.main.resume = (function resume(){
symlog.cljs.app.controller.main.play.call(null);
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.interrupted,false);
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
var frameNum = Math.round((symlog.cljs.app.controller.main.target.currentTime * symlog.cljs.app.controller.main.frameRate));
var img = symlog.cljs.app.frameBuffer.getFrame.call(null,frameNum);
if(cljs.core._EQ_.call(null,"wait",img))
{symlog.cljs.app.controller.main.loading_indicator.fire();
return requestAnimationFrame(wait);
} else
{symlog.cljs.app.controller.main.loading_indicator.stop();
return requestAnimationFrame(symlog.cljs.app.controller.main.cycler);
}
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
symlog.cljs.app.controller.main.target.style.opacity = 1;
if(cljs.core._EQ_.call(null,0,symlog.cljs.app.controller.main.target.currentTime))
{return symlog.cljs.app.controller.main.doframe.call(null,0);
} else
{requestAnimationFrame(symlog.cljs.app.controller.main.cycler);
return symlog.cljs.app.controller.main.target.play();
}
});
symlog.cljs.app.controller.main.cycler = (function cycler(){
var frameNum = Math.round((symlog.cljs.app.controller.main.target.currentTime * symlog.cljs.app.controller.main.frameRate));
var img = symlog.cljs.app.frameBuffer.getFrame.call(null,frameNum);
if((frameNum <= symlog.cljs.app.controller.main.endFrame))
{if(cljs.core._EQ_.call(null,"wait",img))
{return symlog.cljs.app.controller.main.wait.call(null);
} else
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,symlog.cljs.app.controller.main.paused),true))
{return null;
} else
{if("\uFDD0:else")
{symlog.cljs.app.elements.paintFrame.src = img;
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
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,symlog.cljs.app.controller.main.step),symlog.cljs.app.controller.main.maxsteps))
{return null;
} else
{if((frameNo >= symlog.cljs.app.controller.main.actions.call(null,cljs.core.deref.call(null,symlog.cljs.app.controller.main.step)).call(null,"\uFDD0:frame")))
{symlog.cljs.app.controller.main.actions.call(null,cljs.core.deref.call(null,symlog.cljs.app.controller.main.step)).call(null,"\uFDD0:sequence").call(null);
return cljs.core.swap_BANG_.call(null,symlog.cljs.app.controller.main.step,cljs.core.inc);
} else
{return null;
}
}
});
symlog.cljs.app.controller.main.donext = (function donext(sender){
if(cljs.core._EQ_.call(null,sender,"narrator"))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.controller.main.playing)))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.playing,null);
} else
{}
cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.interrupted,false);
return goog.events.fireListeners(symlog.cljs.app.elements.mainVideoPlayTouchArea,"click",false,{"type":"click","target":symlog.cljs.app.elements.mainVideoPlayTouchArea});
} else
{return null;
}
});
symlog.cljs.app.controller.main.stop = (function stop(){
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.controller.main.playing)))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.controller.main.playing).stop))
{cljs.core.deref.call(null,symlog.cljs.app.controller.main.playing).stop();
} else
{}
} else
{}
cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.paused,true);
symlog.cljs.app.controller.main.target.pause();
if(cljs.core._EQ_.call(null,1,cljs.core.deref.call(null,symlog.cljs.app.controller.main.handlers.touchHandler.state)))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.handlers.touchHandler.state,0);
symlog.cljs.app.controller.main.target.opacity = 1;
symlog.cljs.app.controller.main.handlers.playButton.style.opacity = 0;
} else
{}
var seq__38336 = cljs.core.seq.call(null,symlog.cljs.app.controller.main.sequencers);
var chunk__38337 = null;
var count__38338 = 0;
var i__38339 = 0;
while(true){
if((i__38339 < count__38338))
{var v = cljs.core._nth.call(null,chunk__38337,i__38339);
v.stop();
v.home();
{
var G__38340 = seq__38336;
var G__38341 = chunk__38337;
var G__38342 = count__38338;
var G__38343 = (i__38339 + 1);
seq__38336 = G__38340;
chunk__38337 = G__38341;
count__38338 = G__38342;
i__38339 = G__38343;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38336);
if(temp__4092__auto__)
{var seq__38336__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38336__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__38336__$1);
{
var G__38344 = cljs.core.chunk_rest.call(null,seq__38336__$1);
var G__38345 = c__2754__auto__;
var G__38346 = cljs.core.count.call(null,c__2754__auto__);
var G__38347 = 0;
seq__38336 = G__38344;
chunk__38337 = G__38345;
count__38338 = G__38346;
i__38339 = G__38347;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__38336__$1);
v.stop();
v.home();
{
var G__38348 = cljs.core.next.call(null,seq__38336__$1);
var G__38349 = null;
var G__38350 = 0;
var G__38351 = 0;
seq__38336 = G__38348;
chunk__38337 = G__38349;
count__38338 = G__38350;
i__38339 = G__38351;
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
symlog.cljs.app.controller.main.reset = (function reset(frame){
symlog.cljs.app.controller.main.target.currentTime = (frame / symlog.cljs.app.controller.main.frameRate);
symlog.cljs.app.frameBuffer.seekFrame.call(null,frame,(function (img){
return symlog.cljs.app.elements.paintFrame.src = img;
}));
var seq__38358_38364 = cljs.core.seq.call(null,symlog.cljs.app.controller.main.actions);
var chunk__38359_38365 = null;
var count__38360_38366 = 0;
var i__38361_38367 = 0;
while(true){
if((i__38361_38367 < count__38360_38366))
{var vec__38362_38368 = cljs.core._nth.call(null,chunk__38359_38365,i__38361_38367);
var k_38369 = cljs.core.nth.call(null,vec__38362_38368,0,null);
var v_38370 = cljs.core.nth.call(null,vec__38362_38368,1,null);
if(cljs.core._EQ_.call(null,k_38369,(symlog.cljs.app.controller.main.maxsteps - 1)))
{if((frame >= v_38370.call(null,"\uFDD0:frame")))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,(symlog.cljs.app.controller.main.maxsteps - 1));
} else
{}
} else
{if("\uFDD0:else")
{if((function (){var and__3941__auto__ = (frame >= v_38370.call(null,"\uFDD0:frame"));
if(and__3941__auto__)
{return (frame < (v_38370.call(null,"\uFDD0:frame") + symlog.cljs.app.controller.main.frameRate));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,k_38369);
} else
{if((function (){var and__3941__auto__ = (frame >= v_38370.call(null,"\uFDD0:frame"));
if(and__3941__auto__)
{return (frame < symlog.cljs.app.controller.main.actions.call(null,(k_38369 + 1)).call(null,"\uFDD0:frame"));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,(k_38369 + 1));
} else
{}
}
} else
{}
}
{
var G__38371 = seq__38358_38364;
var G__38372 = chunk__38359_38365;
var G__38373 = count__38360_38366;
var G__38374 = (i__38361_38367 + 1);
seq__38358_38364 = G__38371;
chunk__38359_38365 = G__38372;
count__38360_38366 = G__38373;
i__38361_38367 = G__38374;
continue;
}
} else
{var temp__4092__auto___38375 = cljs.core.seq.call(null,seq__38358_38364);
if(temp__4092__auto___38375)
{var seq__38358_38376__$1 = temp__4092__auto___38375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38358_38376__$1))
{var c__2754__auto___38377 = cljs.core.chunk_first.call(null,seq__38358_38376__$1);
{
var G__38378 = cljs.core.chunk_rest.call(null,seq__38358_38376__$1);
var G__38379 = c__2754__auto___38377;
var G__38380 = cljs.core.count.call(null,c__2754__auto___38377);
var G__38381 = 0;
seq__38358_38364 = G__38378;
chunk__38359_38365 = G__38379;
count__38360_38366 = G__38380;
i__38361_38367 = G__38381;
continue;
}
} else
{var vec__38363_38382 = cljs.core.first.call(null,seq__38358_38376__$1);
var k_38383 = cljs.core.nth.call(null,vec__38363_38382,0,null);
var v_38384 = cljs.core.nth.call(null,vec__38363_38382,1,null);
if(cljs.core._EQ_.call(null,k_38383,(symlog.cljs.app.controller.main.maxsteps - 1)))
{if((frame >= v_38384.call(null,"\uFDD0:frame")))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,(symlog.cljs.app.controller.main.maxsteps - 1));
} else
{}
} else
{if("\uFDD0:else")
{if((function (){var and__3941__auto__ = (frame >= v_38384.call(null,"\uFDD0:frame"));
if(and__3941__auto__)
{return (frame < (v_38384.call(null,"\uFDD0:frame") + symlog.cljs.app.controller.main.frameRate));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,k_38383);
} else
{if((function (){var and__3941__auto__ = (frame >= v_38384.call(null,"\uFDD0:frame"));
if(and__3941__auto__)
{return (frame < symlog.cljs.app.controller.main.actions.call(null,(k_38383 + 1)).call(null,"\uFDD0:frame"));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,(k_38383 + 1));
} else
{}
}
} else
{}
}
{
var G__38385 = cljs.core.next.call(null,seq__38358_38376__$1);
var G__38386 = null;
var G__38387 = 0;
var G__38388 = 0;
seq__38358_38364 = G__38385;
chunk__38359_38365 = G__38386;
count__38360_38366 = G__38387;
i__38361_38367 = G__38388;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.playing,null);
});
