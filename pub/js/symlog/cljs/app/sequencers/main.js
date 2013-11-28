goog.provide('symlog.cljs.app.sequencers.main');
goog.require('cljs.core');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
symlog.cljs.app.sequencers.main.mainSequencer = (function mainSequencer(target,startFrame,endFrame,frameRate,scheduler,actionMap,subSequences){
var this$ = this;
this$.interrupted = true;
this$.scheduler = (new scheduler(this$,actionMap,subSequences));
this$.fire = (function (){
target.currentTime = (startFrame / frameRate);
this$.scheduler.doframe(0);
return this$;
});
this$.interrupt = (function (){
target.pause();
cancelAnimationFrame(this$.reqId);
return this$.interrupted = true;
});
this$.resume = (function (){
this$.interrupted = false;
return this$.play();
});
this$.pause = (function (){
this$.scheduler.pause();
target.pause();
return cancelAnimationFrame(this$.reqId);
});
this$.play = (function (){
this$.reqId = requestAnimationFrame(this$.cycle);
return target.play();
});
this$.cycle = (function (){
var frameNum = Math.round((target.currentTime * frameRate));
if((frameNum <= endFrame))
{this$.scheduler.doframe(frameNum);
return requestAnimationFrame(this$.cycle);
} else
{return this$.pause();
}
});
return this$;
});
