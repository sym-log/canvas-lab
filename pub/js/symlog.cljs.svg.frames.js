goog.provide('symlog.cljs.app');
goog.require('cljs.core');
goog.provide('symlog.cljs.app.KeyFrames');

/**
* @constructor
*/
symlog.cljs.app.KeyFrames = (function (){
})
symlog.cljs.app.KeyFrames.cljs$lang$type = true;
symlog.cljs.app.KeyFrames.cljs$lang$ctorStr = "symlog.cljs.app/KeyFrames";
symlog.cljs.app.KeyFrames.cljs$lang$ctorPrWriter = (function (this__2564__auto__,writer__2565__auto__,opt__2566__auto__){
return cljs.core._write.call(null,writer__2565__auto__,"symlog.cljs.app/KeyFrames");
});
symlog.cljs.app.KeyFrames.prototype.init = (function (){
var self__ = this;
var this$ = this;
this$.count = 10;
return this$;
});
symlog.cljs.app.KeyFrames.prototype.get = (function (currentFrame){
var self__ = this;
var this$ = this;
if((currentFrame < 688))
{return 0;
} else
{if((function (){var and__3941__auto__ = (currentFrame > 688);
if(and__3941__auto__)
{return (currentFrame < 719);
} else
{return and__3941__auto__;
}
})())
{return 1;
} else
{if((function (){var and__3941__auto__ = (currentFrame > 788);
if(and__3941__auto__)
{return (currentFrame < 812);
} else
{return and__3941__auto__;
}
})())
{return 2;
} else
{if((function (){var and__3941__auto__ = (currentFrame > 832);
if(and__3941__auto__)
{return (currentFrame < 862);
} else
{return and__3941__auto__;
}
})())
{return 3;
} else
{if((function (){var and__3941__auto__ = (currentFrame > 942);
if(and__3941__auto__)
{return (currentFrame < 965);
} else
{return and__3941__auto__;
}
})())
{return 4;
} else
{if((function (){var and__3941__auto__ = (currentFrame > 982);
if(and__3941__auto__)
{return (currentFrame < 1001);
} else
{return and__3941__auto__;
}
})())
{return 5;
} else
{if((function (){var and__3941__auto__ = (currentFrame > 1066);
if(and__3941__auto__)
{return (currentFrame < 1110);
} else
{return and__3941__auto__;
}
})())
{return 6;
} else
{if((function (){var and__3941__auto__ = (currentFrame > 1385);
if(and__3941__auto__)
{return (currentFrame < 1404);
} else
{return and__3941__auto__;
}
})())
{return 7;
} else
{if((function (){var and__3941__auto__ = (currentFrame > 1420);
if(and__3941__auto__)
{return (currentFrame < 1438);
} else
{return and__3941__auto__;
}
})())
{return 8;
} else
{if((function (){var and__3941__auto__ = (currentFrame > 1441);
if(and__3941__auto__)
{return (currentFrame < 1460);
} else
{return and__3941__auto__;
}
})())
{return 9;
} else
{if("\uFDD0:else")
{return 0;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});
symlog.cljs.app.__GT_KeyFrames = (function __GT_KeyFrames(){
return (new symlog.cljs.app.KeyFrames());
});
goog.provide('symlog.cljs.app.STAGE');

/**
* @constructor
*/
symlog.cljs.app.STAGE = (function (){
})
symlog.cljs.app.STAGE.cljs$lang$type = true;
symlog.cljs.app.STAGE.cljs$lang$ctorStr = "symlog.cljs.app/STAGE";
symlog.cljs.app.STAGE.cljs$lang$ctorPrWriter = (function (this__2564__auto__,writer__2565__auto__,opt__2566__auto__){
return cljs.core._write.call(null,writer__2565__auto__,"symlog.cljs.app/STAGE");
});
symlog.cljs.app.STAGE.prototype.init = (function (){
var self__ = this;
var this$ = this;
this$.keynum = null;
this$.frameList = cljs.core.apply.call(null,cljs.core.array,cljs.core.range.call(null,0,symlog.cljs.app.keyframes.count));
this$.frameList.forEach((function (elem,idx,arr){
var img = (new Image());
img.src = [cljs.core.str("temp/"),cljs.core.str(elem),cljs.core.str(".png")].join('');
return img.onload = (function (){
return (this$[elem] = img);
});
}));
return this$;
});
symlog.cljs.app.STAGE.prototype.paint = (function (keyframe){
var self__ = this;
var this$ = this;
if(!(cljs.core._EQ_.call(null,keyframe,this$.keynum)))
{this$.keynum = keyframe;
symlog.cljs.app.context.clearRect(0,0,symlog.cljs.app.canvas.width,symlog.cljs.app.canvas.height);
return symlog.cljs.app.context.drawImage((this$[keyframe]),0,0);
} else
{return null;
}
});
symlog.cljs.app.__GT_STAGE = (function __GT_STAGE(){
return (new symlog.cljs.app.STAGE());
});
symlog.cljs.app.animate = (function animate(){
if(cljs.core.not.call(null,symlog.cljs.app.video.ended))
{var timeIdx = symlog.cljs.app.video.currentTime;
symlog.cljs.app.timeField.value = symlog.cljs.app.time_index_to_string.call(null,timeIdx,symlog.cljs.app.FPS);
symlog.cljs.app.stage.paint(symlog.cljs.app.keyframes.get((timeIdx * symlog.cljs.app.FPS)));
return window.requestAnimationFrame(animate);
} else
{return null;
}
});
symlog.cljs.app.jump = (function jump(){
if(cljs.core.not.call(null,symlog.cljs.app.video.ended))
{symlog.cljs.app.timeField.value = symlog.cljs.app.time_index_to_string.call(null,symlog.cljs.app.video.currentTime,symlog.cljs.app.FPS);
return symlog.cljs.app.stage.paint(symlog.cljs.app.keyframes.get((symlog.cljs.app.video.currentTime * symlog.cljs.app.FPS)));
} else
{return null;
}
});
symlog.cljs.app.init = (function init(){
symlog.cljs.app.keyframes = (new symlog.cljs.app.KeyFrames()).init();
symlog.cljs.app.stage = (new symlog.cljs.app.STAGE()).init();
symlog.cljs.app.video = goog.dom.getElement("video");
symlog.cljs.app.canvas = goog.dom.getElement("canvas");
symlog.cljs.app.context = symlog.cljs.app.canvas.getContext("2d");
symlog.cljs.app.width = symlog.cljs.app.video.width;
symlog.cljs.app.height = symlog.cljs.app.video.height;
symlog.cljs.app.vidx = Math.round(((symlog.cljs.app.canvas.width - symlog.cljs.app.video.width) / 2));
symlog.cljs.app.vidy = Math.round(((symlog.cljs.app.canvas.height - symlog.cljs.app.video.height) / 2));
symlog.cljs.app.FPS = 15;
symlog.cljs.app.timeField = goog.dom.getElement("timeIndexCell");
goog.events.listen(goog.dom.getElement("playButton"),symlog.cljs.dom.click,(function (evt){
symlog.cljs.app.video.play();
symlog.cljs.app.reqId = window.requestAnimationFrame(symlog.cljs.app.animate);
}));
goog.events.listen(goog.dom.getElement("pauseButton"),symlog.cljs.dom.click,(function (evt){
symlog.cljs.app.video.pause();
return window.cancelAnimationFrame(symlog.cljs.app.reqId);
}));
goog.events.listen(goog.dom.getElement("skipForwardButton"),symlog.cljs.dom.click,(function (evt){
symlog.cljs.app.video.pause();
symlog.cljs.app.video.currentTime = (symlog.cljs.app.video.currentTime + (parseInt(goog.dom.getElement("forwardStepCountField").value) / symlog.cljs.app.FPS));
return symlog.cljs.app.jump.call(null);
}));
goog.events.listen(goog.dom.getElement("skipBackwardButton"),symlog.cljs.dom.click,(function (evt){
symlog.cljs.app.video.pause();
symlog.cljs.app.video.currentTime = (symlog.cljs.app.video.currentTime - (parseInt(goog.dom.getElement("backwardStepCountField").value) / symlog.cljs.app.FPS));
return symlog.cljs.app.jump.call(null);
}));
return goog.events.listen(goog.dom.getElement("autoReturnCheckbox"),symlog.cljs.dom.click,(function (evt){
if(cljs.core.truth_(goog.dom.getElement("autoReturnCheckbox").checked))
{return goog.dom.getElement("timeReturnField").value = [cljs.core.str(symlog.cljs.app.video.currentTime)].join('');
} else
{return goog.dom.getElement("timeReturnField").value = null;
}
}));
});
symlog.cljs.app.time_index_to_string = (function time_index_to_string(timevalue,FPS){
var hours = cljs.core.rem.call(null,Math.floor((timevalue / 3600)),24);
var minutes = cljs.core.rem.call(null,Math.floor((timevalue / 60)),60);
var seconds = Math.floor(cljs.core.rem.call(null,timevalue,60));
var frames = Math.floor((cljs.core.rem.call(null,timevalue,1) * FPS).toFixed(3));
return [cljs.core.str((((hours < 10))?[cljs.core.str("0"),cljs.core.str(hours),cljs.core.str(":")].join(''):[cljs.core.str(hours),cljs.core.str(":")].join(''))),cljs.core.str((((minutes < 10))?[cljs.core.str("0"),cljs.core.str(minutes),cljs.core.str(":")].join(''):[cljs.core.str(minutes),cljs.core.str(":")].join(''))),cljs.core.str((((seconds < 10))?[cljs.core.str("0"),cljs.core.str(seconds),cljs.core.str(":")].join(''):[cljs.core.str(seconds),cljs.core.str(":")].join(''))),cljs.core.str((((frames < 10))?[cljs.core.str("0"),cljs.core.str(frames)].join(''):[cljs.core.str(frames)].join('')))].join('');
});
