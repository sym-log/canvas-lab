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
symlog.cljs.app.controller.main.step = cljs.core.atom.call(null,1);
symlog.cljs.app.controller.main.paused = cljs.core.atom.call(null,false);
symlog.cljs.app.controller.main.interrupted = cljs.core.atom.call(null,false);
symlog.cljs.app.controller.main.init = (function init(){
symlog.cljs.app.controller.actions.init.call(null,symlog.cljs.app.controller.main.ctxt);
symlog.cljs.app.controller.main.actions = symlog.cljs.app.controller.actions.seqmap;
symlog.cljs.app.controller.main.maxsteps = cljs.core.count.call(null,cljs.core.keys.call(null,symlog.cljs.app.controller.main.actions));
symlog.cljs.app.sequencers.narrator.sequencer.init.call(null,symlog.cljs.app.controller.main.ctxt);
symlog.cljs.app.controller.main.seqsManaged = cljs.core.vector.call(null,symlog.cljs.app.sequencers.narrator.sequencer);
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
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,1);
return symlog.cljs.app.controller.main.doframe.call(null,0);
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
symlog.cljs.app.controller.main.reset = (function reset(frame){
symlog.cljs.app.frameBuffer.seekFrame.call(null,frame,(function (img){
return symlog.cljs.app.dom.elements.call(null,"\uFDD0:paintFrame").src = img;
}));
var seq__79864_79870 = cljs.core.seq.call(null,symlog.cljs.app.controller.main.actions);
var chunk__79865_79871 = null;
var count__79866_79872 = 0;
var i__79867_79873 = 0;
while(true){
if((i__79867_79873 < count__79866_79872))
{var vec__79868_79874 = cljs.core._nth.call(null,chunk__79865_79871,i__79867_79873);
var k_79875 = cljs.core.nth.call(null,vec__79868_79874,0,null);
var v_79876 = cljs.core.nth.call(null,vec__79868_79874,1,null);
if(cljs.core._EQ_.call(null,k_79875,symlog.cljs.app.controller.main.maxsteps))
{if((frame >= v_79876.call(null,"\uFDD0:frame")))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,symlog.cljs.app.controller.main.maxsteps);
} else
{}
} else
{if("\uFDD0:else")
{if((function (){var and__3941__auto__ = (frame >= v_79876.call(null,"\uFDD0:frame"));
if(and__3941__auto__)
{return (frame < (v_79876.call(null,"\uFDD0:frame") + symlog.cljs.app.controller.main.frameRate));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,k_79875);
} else
{if((function (){var and__3941__auto__ = (frame >= v_79876.call(null,"\uFDD0:frame"));
if(and__3941__auto__)
{return (frame < symlog.cljs.app.controller.main.actions.call(null,(k_79875 + 1)).call(null,"\uFDD0:frame"));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,(k_79875 + 1));
} else
{}
}
} else
{}
}
{
var G__79877 = seq__79864_79870;
var G__79878 = chunk__79865_79871;
var G__79879 = count__79866_79872;
var G__79880 = (i__79867_79873 + 1);
seq__79864_79870 = G__79877;
chunk__79865_79871 = G__79878;
count__79866_79872 = G__79879;
i__79867_79873 = G__79880;
continue;
}
} else
{var temp__4092__auto___79881 = cljs.core.seq.call(null,seq__79864_79870);
if(temp__4092__auto___79881)
{var seq__79864_79882__$1 = temp__4092__auto___79881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79864_79882__$1))
{var c__2754__auto___79883 = cljs.core.chunk_first.call(null,seq__79864_79882__$1);
{
var G__79884 = cljs.core.chunk_rest.call(null,seq__79864_79882__$1);
var G__79885 = c__2754__auto___79883;
var G__79886 = cljs.core.count.call(null,c__2754__auto___79883);
var G__79887 = 0;
seq__79864_79870 = G__79884;
chunk__79865_79871 = G__79885;
count__79866_79872 = G__79886;
i__79867_79873 = G__79887;
continue;
}
} else
{var vec__79869_79888 = cljs.core.first.call(null,seq__79864_79882__$1);
var k_79889 = cljs.core.nth.call(null,vec__79869_79888,0,null);
var v_79890 = cljs.core.nth.call(null,vec__79869_79888,1,null);
if(cljs.core._EQ_.call(null,k_79889,symlog.cljs.app.controller.main.maxsteps))
{if((frame >= v_79890.call(null,"\uFDD0:frame")))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,symlog.cljs.app.controller.main.maxsteps);
} else
{}
} else
{if("\uFDD0:else")
{if((function (){var and__3941__auto__ = (frame >= v_79890.call(null,"\uFDD0:frame"));
if(and__3941__auto__)
{return (frame < (v_79890.call(null,"\uFDD0:frame") + symlog.cljs.app.controller.main.frameRate));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,k_79889);
} else
{if((function (){var and__3941__auto__ = (frame >= v_79890.call(null,"\uFDD0:frame"));
if(and__3941__auto__)
{return (frame < symlog.cljs.app.controller.main.actions.call(null,(k_79889 + 1)).call(null,"\uFDD0:frame"));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.main.step,(k_79889 + 1));
} else
{}
}
} else
{}
}
{
var G__79891 = cljs.core.next.call(null,seq__79864_79882__$1);
var G__79892 = null;
var G__79893 = 0;
var G__79894 = 0;
seq__79864_79870 = G__79891;
chunk__79865_79871 = G__79892;
count__79866_79872 = G__79893;
i__79867_79873 = G__79894;
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
