goog.provide('symlog.cljs.animation.sequencers');
goog.require('cljs.core');
goog.inherits(symlog.cljs.animation.sequencers.toVideo = (function toVideo(seqTarget,startFrame,endFrame,frameRate){
var this$ = this;
goog.events.EventTarget.call(this$);
this$.stop = (function (){
seqTarget.pause();
return cancelAnimationFrame(this$.reqId);
});
this$.pause = (function (){
this$.dispatchEvent("pause");
return this$.stop();
});
this$.play = (function (){
seqTarget.play();
return this$.reqId = requestAnimationFrame(this$.trigger);
});
this$.end = (function (){
this$.dispatchEvent("end");
return this$.stop();
});
this$.pause_listener = goog.events.listen(seqTarget,"pause",this$.pause);
this$.play_listener = goog.events.listen(seqTarget,"play",this$.play);
this$.play_listener = goog.events.listen(seqTarget,"end",this$.end);
this$.cycle = (function (){
var frameNum = Math.round((seqTarget.currentTime * frameRate));
if((frameNum <= endFrame))
{return requestAnimationFrame(this$.cycle);
} else
{this$.stop();
return this$.dispatchEvent("done");
}
});
this$.fire = (function (){
seqTarget.currentTime = (startFrame / frameRate);
this$.listener = goog.events.listen(seqTarget,goog.events.EventType.CLICK,this$.pause);
seqTarget.play();
this$.reqId = requestAnimationFrame(this$.cycle);
return this$;
});
return this$;
}),goog.events.EventTarget);
goog.inherits(symlog.cljs.animation.sequencers.clickevent = (function clickevent(){
var this$ = this;
goog.events.EventTarget.call(this$);
this$.clickCount = cljs.core.atom.call(null,0);
var retfun = (function (evt){
if(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,this$.clickCount)))
{cljs.core.reset_BANG_.call(null,this$.clickCount,1);
this$.dispatchEvent("hello");
return console.log("hello0");
} else
{cljs.core.reset_BANG_.call(null,this$.clickCount,0);
this$.dispatchEvent("goodbye");
return console.log("hello1");
}
});
return goog.inherits(retfun,goog.events.EventTarget);
}),goog.events.EventTarget);
symlog.cljs.animation.sequencers.mike = (new symlog.cljs.animation.sequencers.clickevent());
symlog.cljs.animation.sequencers.mike.call(null,"hello");
goog.events.listen(symlog.cljs.animation.sequencers.mike,"hello",(function (){
return console.log("gotit");
}));
symlog.cljs.animation.sequencers.onClickAlternator = (function onClickAlternator(){
var this$ = this;
this$.clickCount = cljs.core.atom.call(null,0);
this$.handler = (function (evt){
return this$.dispatchEvent("hello");
});
goog.inherits(this$.handler,goog.events.EventTarget);
return this$.handler.superClass_;
});
symlog.cljs.animation.sequencers.mike = (new symlog.cljs.animation.sequencers.onClickAlternator());
goog.events.listen(symlog.cljs.animation.sequencers.mike.superClass_,"hello",(function (){
return console.log("hello");
}));
symlog.cljs.animation.sequencers.charm = goog.dom.getElement("narratorVid");
goog.events.listen(symlog.cljs.animation.sequencers.charm,"click",(new symlog.cljs.animation.sequencers.onClickAlternator()));
symlog.cljs.animation.sequencers.charm.onclick = (new symlog.cljs.animation.sequencers.onClickAlternator());
goog.events.listen(symlog.cljs.animation.sequencers.charm,"click",(new symlog.cljs.animation.sequencers.onclickManager()));
