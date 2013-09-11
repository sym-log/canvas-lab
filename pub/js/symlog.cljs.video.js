goog.provide('symlog.cljs.video');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('goog.events');
symlog.cljs.video.blob2vid = (function blob2vid(blob,vidId){
var vid = goog.dom.getElement(vidId);
(goog.dom.getElement("myVideo").getElementsByTagName("source")[0]).src = goog.global.URL.createObjectURL(blob);
return vid.load();
});
symlog.cljs.video.keyframe = (function keyframe(currentFrame){
if((currentFrame < 50))
{return 0;
} else
{if((function (){var and__3941__auto__ = (currentFrame > 50);
if(and__3941__auto__)
{return (currentFrame < 750);
} else
{return and__3941__auto__;
}
})())
{return 1;
} else
{if("\uFDD0:else")
{return 1;
} else
{return null;
}
}
}
});
symlog.cljs.video.per_frame_function = (function per_frame_function(stage,videoRef,FPS){
return stage.paint(symlog.cljs.video.keyframe.call(null,(videoRef.currentTime * FPS)));
});
goog.provide('symlog.cljs.video.STAGE');

/**
* @constructor
*/
symlog.cljs.video.STAGE = (function (svgRoot){
this.svgRoot = svgRoot;
})
symlog.cljs.video.STAGE.cljs$lang$type = true;
symlog.cljs.video.STAGE.cljs$lang$ctorStr = "symlog.cljs.video/STAGE";
symlog.cljs.video.STAGE.cljs$lang$ctorPrWriter = (function (this__2564__auto__,writer__2565__auto__,opt__2566__auto__){
return cljs.core._write.call(null,writer__2565__auto__,"symlog.cljs.video/STAGE");
});
symlog.cljs.video.STAGE.prototype.init = (function (){
var self__ = this;
var this$ = this;
this$.keynum = 0;
(this$[0] = null);
(this$[1] = self__.svgRoot.getElementById(1));
return this$;
});
symlog.cljs.video.STAGE.prototype.paint = (function (keyframe){
var self__ = this;
var this$ = this;
if(!(cljs.core._EQ_.call(null,keyframe,this$.keynum)))
{this$.keynum = keyframe;
return (this$[keyframe]).setAttribute("display","visible");
} else
{return null;
}
});
symlog.cljs.video.__GT_STAGE = (function __GT_STAGE(svgRoot){
return (new symlog.cljs.video.STAGE(svgRoot));
});
goog.provide('symlog.cljs.video.vidWrapper');

/**
* @constructor
*/
symlog.cljs.video.vidWrapper = (function (video,FPS,per_frame_function){
this.video = video;
this.FPS = FPS;
this.per_frame_function = per_frame_function;
})
symlog.cljs.video.vidWrapper.cljs$lang$type = true;
symlog.cljs.video.vidWrapper.cljs$lang$ctorStr = "symlog.cljs.video/vidWrapper";
symlog.cljs.video.vidWrapper.cljs$lang$ctorPrWriter = (function (this__2564__auto__,writer__2565__auto__,opt__2566__auto__){
return cljs.core._write.call(null,writer__2565__auto__,"symlog.cljs.video/vidWrapper");
});
symlog.cljs.video.vidWrapper.prototype.stop = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.not.call(null,cljs.core.type.call(null,this$.timerRef)))
{this$.timerRef = null;
} else
{}
this$.video.pause();
return clearInterval(this$.timerRef);
});
symlog.cljs.video.vidWrapper.prototype.start = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.truth_(this$.video.ended))
{this$.video.currentTime = 0;
} else
{}
this$.timerRef = setInterval(this$.per_frame_function,(1000 / (this$.FPS + 2)));
return this$.video.play();
});
symlog.cljs.video.__GT_vidWrapper = (function __GT_vidWrapper(video,FPS,per_frame_function){
return (new symlog.cljs.video.vidWrapper(video,FPS,per_frame_function));
});
