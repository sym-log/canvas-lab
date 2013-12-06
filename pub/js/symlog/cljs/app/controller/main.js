goog.provide('symlog.cljs.app.controller.main');
goog.require('cljs.core');
goog.require('symlog.cljs.app.dom');
goog.require('symlog.cljs.app.dom');
symlog.cljs.app.controller.main.ctxt = symlog.cljs.app.controller.main;
symlog.cljs.app.controller.main.target = goog.dom.getElement("mainVideo");
symlog.cljs.app.controller.main.frameRate = 15;
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
symlog.cljs.app.dom.elements.call(null,"\uFDD0:mainVideo").sequencer = symlog.cljs.app.controller.main.ctxt;
return symlog.cljs.app.handlers.mainVideo.init.call(null);
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
{symlog.cljs.app.dom.elements.call(null,"\uFDD0:paintFrame").src = img;
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
return goog.events.fireListeners(symlog.cljs.app.dom.elements.call(null,"\uFDD0:mainVideoPlayTouchArea"),"click",false,{"type":"click","target":symlog.cljs.app.dom.elements.call(null,"\uFDD0:mainVideoPlayTouchArea")});
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
var seq__34822 = cljs.core.seq.call(null,symlog.cljs.app.controller.main.sequencers);
var chunk__34823 = null;
var count__34824 = 0;
var i__34825 = 0;
while(true){
if((i__34825 < count__34824))
{var v = cljs.core._nth.call(null,chunk__34823,i__34825);
v.stop();
v.home();
{
var G__34826 = seq__34822;
var G__34827 = chunk__34823;
var G__34828 = count__34824;
var G__34829 = (i__34825 + 1);
seq__34822 = G__34826;
chunk__34823 = G__34827;
count__34824 = G__34828;
i__34825 = G__34829;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34822);
if(temp__4092__auto__)
{var seq__34822__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34822__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__34822__$1);
{
var G__34830 = cljs.core.chunk_rest.call(null,seq__34822__$1);
var G__34831 = c__2754__auto__;
var G__34832 = cljs.core.count.call(null,c__2754__auto__);
var G__34833 = 0;
seq__34822 = G__34830;
chunk__34823 = G__34831;
count__34824 = G__34832;
i__34825 = G__34833;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__34822__$1);
v.stop();
v.home();
{
var G__34834 = cljs.core.next.call(null,seq__34822__$1);
var G__34835 = null;
var G__34836 = 0;
var G__34837 = 0;
seq__34822 = G__34834;
chunk__34823 = G__34835;
count__34824 = G__34836;
i__34825 = G__34837;
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
return symlog.cljs.app.dom.elements.call(null,"\uFDD0:paintFrame").src = img;
}));
var seq__34844_34850 = cljs.core.seq.call(null,symlog.cljs.app.controller.main.actions);
var chunk__34845_34851 = null;
var count__34846_34852 = 0;
var i__34847_34853 = 0;
while(true){
if((i__34847_34853 < count__34846_34852))
{var vec__34848_34854 = cljs.core._nth.call(null,chunk__34845_34851,i__34847_34853);
var k_34855 = cljs.core.nth.call(null,vec__34848_34854,0,null);
var v_34856 = cljs.core.nth.call(null,vec__34848_34854,1,null);
if(cljs.core._EQ_.call(null,k_34855,(symlog.cljs.app.controller.main.maxsteps - 1)))
{if((frame >= v_34856.call(null,"\uFDD0:frame")))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,(symlog.cljs.app.controller.main.maxsteps - 1));
} else
{}
} else
{if("\uFDD0:else")
{if((function (){var and__3941__auto__ = (frame >= v_34856.call(null,"\uFDD0:frame"));
if(and__3941__auto__)
{return (frame < (v_34856.call(null,"\uFDD0:frame") + symlog.cljs.app.controller.main.frameRate));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,k_34855);
} else
{if((function (){var and__3941__auto__ = (frame >= v_34856.call(null,"\uFDD0:frame"));
if(and__3941__auto__)
{return (frame < symlog.cljs.app.controller.main.actions.call(null,(k_34855 + 1)).call(null,"\uFDD0:frame"));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,(k_34855 + 1));
} else
{}
}
} else
{}
}
{
var G__34857 = seq__34844_34850;
var G__34858 = chunk__34845_34851;
var G__34859 = count__34846_34852;
var G__34860 = (i__34847_34853 + 1);
seq__34844_34850 = G__34857;
chunk__34845_34851 = G__34858;
count__34846_34852 = G__34859;
i__34847_34853 = G__34860;
continue;
}
} else
{var temp__4092__auto___34861 = cljs.core.seq.call(null,seq__34844_34850);
if(temp__4092__auto___34861)
{var seq__34844_34862__$1 = temp__4092__auto___34861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34844_34862__$1))
{var c__2754__auto___34863 = cljs.core.chunk_first.call(null,seq__34844_34862__$1);
{
var G__34864 = cljs.core.chunk_rest.call(null,seq__34844_34862__$1);
var G__34865 = c__2754__auto___34863;
var G__34866 = cljs.core.count.call(null,c__2754__auto___34863);
var G__34867 = 0;
seq__34844_34850 = G__34864;
chunk__34845_34851 = G__34865;
count__34846_34852 = G__34866;
i__34847_34853 = G__34867;
continue;
}
} else
{var vec__34849_34868 = cljs.core.first.call(null,seq__34844_34862__$1);
var k_34869 = cljs.core.nth.call(null,vec__34849_34868,0,null);
var v_34870 = cljs.core.nth.call(null,vec__34849_34868,1,null);
if(cljs.core._EQ_.call(null,k_34869,(symlog.cljs.app.controller.main.maxsteps - 1)))
{if((frame >= v_34870.call(null,"\uFDD0:frame")))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,(symlog.cljs.app.controller.main.maxsteps - 1));
} else
{}
} else
{if("\uFDD0:else")
{if((function (){var and__3941__auto__ = (frame >= v_34870.call(null,"\uFDD0:frame"));
if(and__3941__auto__)
{return (frame < (v_34870.call(null,"\uFDD0:frame") + symlog.cljs.app.controller.main.frameRate));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,k_34869);
} else
{if((function (){var and__3941__auto__ = (frame >= v_34870.call(null,"\uFDD0:frame"));
if(and__3941__auto__)
{return (frame < symlog.cljs.app.controller.main.actions.call(null,(k_34869 + 1)).call(null,"\uFDD0:frame"));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,(k_34869 + 1));
} else
{}
}
} else
{}
}
{
var G__34871 = cljs.core.next.call(null,seq__34844_34862__$1);
var G__34872 = null;
var G__34873 = 0;
var G__34874 = 0;
seq__34844_34850 = G__34871;
chunk__34845_34851 = G__34872;
count__34846_34852 = G__34873;
i__34847_34853 = G__34874;
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
