goog.provide('symlog.cljs.app.sequencers.narrator.sequencer');
goog.require('cljs.core');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
goog.inherits(symlog.cljs.app.sequencers.narrator.sequencer.dispatch = (function dispatch(){
var this$ = this;
this$.send = (function (message){
return this$.dispatchEvent(message);
});
return this$;
}),goog.events.EventTarget);
symlog.cljs.app.sequencers.narrator.sequencer.dispatcher = (new symlog.cljs.app.sequencers.narrator.sequencer.dispatch());
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
symlog.cljs.app.sequencers.narrator.sequencer.init = (function init(){
symlog.cljs.app.sequencers.narrator.sequence.init.call(null);
symlog.cljs.app.sequencers.narrator.sequencer.sequence = symlog.cljs.app.sequencers.narrator.sequence.seqmap;
symlog.cljs.app.sequencers.narrator.sequencer.maxsteps = cljs.core.count.call(null,cljs.core.keys.call(null,symlog.cljs.app.sequencers.narrator.sequencer.sequence));
return symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorVid").sequencer = symlog.cljs.app.sequencers.narrator.sequencer.ctxt;
});
symlog.cljs.app.sequencers.narrator.sequencer.fire = (function fire(start,end,returnFunc){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.startFrame,start);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.endFrame,end);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.callback,returnFunc);
symlog.cljs.app.sequencers.narrator.sequencer.target.currentTime = (cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.startFrame) / symlog.cljs.app.sequencers.narrator.sequencer.frameRate);
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
symlog.cljs.app.sequencers.narrator.sequencer.pause.call(null);
return goog.events.fireListeners(symlog.cljs.app.sequencers.narrator.sequencer.dispatcher,"stopped",false,{"target":symlog.cljs.app.sequencers.narrator.sequencer.ctxt});
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
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing,symlog.cljs.app.sequencers.narrator.sequencer.sequence.call(null,cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.step)).call(null,"\uFDD0:sequence"));
cljs.core.swap_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequencer.step,cljs.core.inc);
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing).fire))
{return cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing).fire();
} else
{return cljs.core.deref.call(null,symlog.cljs.app.sequencers.narrator.sequencer.playing).call(null);
}
} else
{return null;
}
} else
{return null;
}
}
});
