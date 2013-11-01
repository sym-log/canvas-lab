goog.provide('symlog.cljs.animation.functions');
goog.require('cljs.core');
goog.inherits(symlog.cljs.animation.functions.paint_frames = (function paint_frames(image,frames,fps){
var this$ = this;
goog.events.EventTarget.call(this$);
this$.counter = cljs.core.atom.call(null,0);
this$.timer = (new goog.Timer(this$.fps));
this$.calc = (function (){
var frame = (frames[cljs.core.deref.call(null,this$.counter)]);
if(cljs.core.truth_(frame))
{image.src = frame;
return cljs.core.swap_BANG_.call(null,this$.counter,cljs.core.inc);
} else
{cljs.core.reset_BANG_.call(null,this$.counter,0);
goog.events.unlistenByKey(this$.listener);
this$.timer.stop();
return this$.dispatchEvent("done");
}
});
this$.fire = (function (){
this$.listener = goog.events.listen(this$.timer,goog.Timer.TICK,this$.calc,false,this$);
return this$.timer.start();
});
return this$;
}),goog.events.EventTarget);
goog.inherits(symlog.cljs.animation.functions.paint_frames2 = (function paint_frames2(image,frames,fps,sequencer){
var this$ = this;
goog.events.EventTarget.call(this$);
this$.timer = (new goog.Timer(fps));
this$.counter = cljs.core.atom.call(null,0);
this$.pause = (function (){
return this$.timer.stop();
});
this$.play = (function (){
return this$.timer.start();
});
this$.end = (function (){
this$.timer.stop();
cljs.core.reset_BANG_.call(null,this$.counter,0);
return this$.dispatchEvent("ended");
});
this$.finish = (function (){
this$.timer.stop();
cljs.core.reset_BANG_.call(null,this$.counter,0);
return this$.dispatchEvent("done");
});
this$.calc = (function (){
var frame = (frames[cljs.core.deref.call(null,this$.counter)]);
if(cljs.core.truth_(frame))
{image.src = frame;
return cljs.core.swap_BANG_.call(null,this$.counter,cljs.core.inc);
} else
{return this$.finish();
}
});
goog.events.listen(this$.timer,goog.Timer.TICK,this$.calc,false,this$);
goog.events.listen(sequencer,"pause",this$.pause);
goog.events.listen(sequencer,"resume",this$.play);
goog.events.listen(sequencer,"end",this$.end);
return this$;
}),goog.events.EventTarget);
goog.inherits(symlog.cljs.animation.functions.animate_path = (function animate_path(obj,fps,duration,scale,reverse,pathstr){
var this$ = this;
goog.events.EventTarget.call(this$);
this$.timer = (new goog.Timer(this$.fps));
this$.path = document.createElementNS("http://www.w3.org/2000/svg","path");
this$.path.setAttribute("d",pathstr);
this$.length = this$.path.getTotalLength();
this$.percent = cljs.core.atom.call(null,0);
this$.fire = (function (){
this$.sWidth = obj.offsetWidth;
this$.sHeight = obj.offsetHeight;
this$.listener = goog.events.listen(this$.timer,goog.Timer.TICK,this$.calc,false,this$);
this$.startTime = goog.now();
return this$.timer.start();
});
this$.calc = (function (){
cljs.core.reset_BANG_.call(null,this$.percent,(((goog.now() - this$.startTime) / 1000) / duration));
if((cljs.core.deref.call(null,this$.percent) < 1))
{return this$.step();
} else
{if("\uFDD0:else")
{this$.timer.stop();
goog.events.unlistenByKey(this$.listener);
cljs.core.reset_BANG_.call(null,this$.percent,1);
this$.step();
return this$.dispatchEvent("done");
} else
{return null;
}
}
});
this$.step = (function (){
var adjustedPercent = (cljs.core.truth_(reverse)?(1 - cljs.core.deref.call(null,this$.percent)):cljs.core.deref.call(null,this$.percent));
var adjustedScale = (((scale < 1))?(- scale):(scale - 1));
var width = (this$.sWidth + ((this$.sWidth * adjustedScale) * cljs.core.deref.call(null,this$.percent)));
var height = (this$.sHeight + ((this$.sHeight * adjustedScale) * cljs.core.deref.call(null,this$.percent)));
var currentPoint = this$.path.getPointAtLength((this$.length * adjustedPercent));
obj.style.top = [cljs.core.str((currentPoint.y - (height / 2))),cljs.core.str("px")].join('');
obj.style.left = [cljs.core.str((currentPoint.x - (width / 2))),cljs.core.str("px")].join('');
obj.style.width = [cljs.core.str(width),cljs.core.str("px")].join('');
return obj.style.height = [cljs.core.str(height),cljs.core.str("px")].join('');
});
return this$;
}),goog.events.EventTarget);
