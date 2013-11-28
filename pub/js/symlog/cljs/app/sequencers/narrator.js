goog.provide('symlog.cljs.app.sequencers.narrator');
goog.require('cljs.core');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
goog.inherits(symlog.cljs.app.sequencers.narrator.sequencer = (function sequencer(target,frameRate,scheduler,actionMap,name){
var this$ = this;
this$.name = name;
this$.enabled = true;
this$.rested = true;
this$.scheduler = (new scheduler(this$,actionMap));
this$.fire = (function (startFrame,endFrame,callback){
this$.startFrame = startFrame;
this$.endFrame = endFrame;
this$.callback = (function (){
return callback.call(null);
});
target.currentTime = (startFrame / frameRate);
return this$.play();
});
this$.stop = (function (){
this$.scheduler.stop();
target.pause();
cancelAnimationFrame(this$.reqId);
return this$.dispatchEvent("stopped");
});
this$.pause = (function (){
this$.scheduler.pause();
target.pause();
return cancelAnimationFrame(this$.reqId);
});
this$.play = (function (){
this$.reqId = requestAnimationFrame(this$.cycle);
this$.scheduler.play();
return target.play();
});
this$.cycle = (function (){
var frameNum = Math.round((target.currentTime * frameRate));
if((frameNum <= this$.endFrame))
{this$.scheduler.doframe(frameNum);
return requestAnimationFrame(this$.cycle);
} else
{this$.pause();
return this$.callback();
}
});
return this$;
}),goog.events.EventTarget);
