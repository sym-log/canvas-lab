goog.provide('symlog.cljs.app.handlers.mainVideo');
goog.require('cljs.core');
goog.require('symlog.cljs.app.elements');
symlog.cljs.app.handlers.mainVideo.init = (function init(){
symlog.cljs.app.handlers.mainVideo.videoDuration = symlog.cljs.app.elements.mainVideo.duration;
symlog.cljs.app.handlers.mainVideo.travelLength = 2000;
symlog.cljs.app.handlers.mainVideo.multiplier = (symlog.cljs.app.handlers.mainVideo.travelLength / symlog.cljs.app.handlers.mainVideo.videoDuration);
symlog.cljs.app.handlers.mainVideo.buttonStartY = 2;
symlog.cljs.app.handlers.mainVideo.buttonEndY = 2000;
symlog.cljs.app.handlers.mainVideo.controllerPath = symlog.cljs.app.elements.controllerTouchArea;
symlog.cljs.app.handlers.mainVideo.video = symlog.cljs.app.elements.mainVideo;
symlog.cljs.app.handlers.mainVideo.playButton = symlog.cljs.app.elements.mainVideoPlayButton;
symlog.cljs.app.handlers.mainVideo.FPS = symlog.cljs.app.elements.FPS;
symlog.cljs.app.handlers.mainVideo.button = symlog.cljs.app.elements.controlButton;
symlog.cljs.app.handlers.mainVideo.buttonHandler = (new symlog.cljs.app.handlers.mainVideo.controlButton(symlog.cljs.app.handlers.mainVideo.button));
symlog.cljs.app.handlers.mainVideo.touchArea = symlog.cljs.app.elements.mainVideoPlayTouchArea;
symlog.cljs.app.handlers.mainVideo.touchHandler = (new symlog.cljs.app.handlers.mainVideo.touchScreen(symlog.cljs.app.handlers.mainVideo.video));
symlog.cljs.app.handlers.mainVideo.buttonHandler = (new symlog.cljs.app.handlers.mainVideo.controlButton(symlog.cljs.app.handlers.mainVideo.button));
symlog.cljs.app.handlers.mainVideo._subseq = symlog.cljs.app.elements.narratorVid.sequencer;
symlog.cljs.app.handlers.mainVideo.buttonOffset = 58;
goog.events.listen(symlog.cljs.app.handlers.mainVideo.video,"timeupdate",(function (evt){
var locY = (symlog.cljs.app.handlers.mainVideo.multiplier * evt.target.currentTime);
if(cljs.core._EQ_.call(null,0,locY))
{return symlog.cljs.app.handlers.mainVideo.button.y.baseVal.value = symlog.cljs.app.handlers.mainVideo.buttonStartY;
} else
{if(cljs.core._EQ_.call(null,symlog.cljs.app.handlers.mainVideo.travelLength,locY))
{return symlog.cljs.app.handlers.mainVideo.button.y.baseVal.value = symlog.cljs.app.handlers.mainVideo.buttonEndY;
} else
{if("\uFDD0:else")
{return symlog.cljs.app.handlers.mainVideo.button.y.baseVal.value = locY;
} else
{return null;
}
}
}
}));
goog.events.listen(symlog.cljs.app.handlers.mainVideo.touchArea,"click",symlog.cljs.app.handlers.mainVideo.touchHandler.fire);
goog.events.listen(symlog.cljs.app.handlers.mainVideo.button,["mousedown","mousemove","mouseup","mouseout"],symlog.cljs.app.handlers.mainVideo.buttonHandler.fire,true);
return goog.events.listen(symlog.cljs.app.handlers.mainVideo.controllerPath,"click",symlog.cljs.app.handlers.mainVideo.controlButtonPath);
});
symlog.cljs.app.handlers.mainVideo.controlButtonPath = (function controlButtonPath(evt){
var locY = ((evt.clientY - symlog.cljs.app.handlers.mainVideo.buttonOffset) - parseInt(evt.target.parentElement.style.top));
symlog.cljs.app.handlers.mainVideo.button.y.baseVal.value = locY;
return symlog.cljs.app.handlers.mainVideo.video.currentTime = (symlog.cljs.app.handlers.mainVideo.videoDuration * (locY / symlog.cljs.app.handlers.mainVideo.travelLength));
});
symlog.cljs.app.handlers.mainVideo.controlButton = (function controlButton(button){
var this$ = this;
this$.fire = (function (evt){
evt.preventDefault();
if(cljs.core._EQ_.call(null,evt.type,"mousedown"))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.handlers.mainVideo._subseq.rested)))
{this$.selected = true;
this$.startY = evt.screenY;
this$.beginY = button.y.baseVal.value;
symlog.cljs.app.controller.main.pause.call(null);
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,symlog.cljs.app.handlers.mainVideo.touchHandler.state),0))
{return goog.events.fireListeners(symlog.cljs.app.handlers.mainVideo.touchArea,"click",false,{"type":"click","target":symlog.cljs.app.handlers.mainVideo.touchArea});
} else
{return null;
}
} else
{return null;
}
} else
{if((function (){var or__3943__auto__ = cljs.core._EQ_.call(null,evt.type,"mouseup");
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,evt.type,"mouseout");
}
})())
{if(cljs.core.truth_(this$.selected))
{var locY = button.y.baseVal.value;
this$.selected = false;
if(cljs.core._EQ_.call(null,locY,symlog.cljs.app.handlers.mainVideo.buttonStartY))
{symlog.cljs.app.handlers.mainVideo.video.currentTime = 0;
} else
{if(cljs.core._EQ_.call(null,locY,symlog.cljs.app.handlers.mainVideo.buttonEndY))
{symlog.cljs.app.handlers.mainVideo.video.currentTime = symlog.cljs.app.handlers.mainVideo.videoDuration;
} else
{if("\uFDD0:else")
{symlog.cljs.app.handlers.mainVideo.video.currentTime = (symlog.cljs.app.handlers.mainVideo.videoDuration * (locY / symlog.cljs.app.handlers.mainVideo.travelLength));
} else
{}
}
}
return symlog.cljs.app.controller.main.reset.call(null,Math.round((symlog.cljs.app.handlers.mainVideo.video.currentTime * symlog.cljs.app.handlers.mainVideo.FPS)));
} else
{return null;
}
} else
{if(cljs.core._EQ_.call(null,evt.type,"mousemove"))
{if(cljs.core.truth_(this$.selected))
{var locY = (this$.beginY + (evt.screenY - this$.startY));
if((locY > symlog.cljs.app.handlers.mainVideo.buttonEndY))
{return button.y.baseVal.value = symlog.cljs.app.handlers.mainVideo.buttonEndY;
} else
{if((locY < symlog.cljs.app.handlers.mainVideo.buttonStartY))
{return button.y.baseVal.value = symlog.cljs.app.handlers.mainVideo.buttonStartY;
} else
{if("\uFDD0:else")
{return button.y.baseVal.value = (this$.beginY + (evt.screenY - this$.startY));
} else
{return null;
}
}
}
} else
{return null;
}
} else
{return null;
}
}
}
});
return this$;
});
symlog.cljs.app.handlers.mainVideo.touchScreen = (function touchScreen(video){
var this$ = this;
this$.state = cljs.core.atom.call(null,0);
this$.fire = (function (evt){
if(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,this$.state)))
{if(cljs.core.not.call(null,cljs.core.deref.call(null,video.sequencer.interrupted)))
{cljs.core.reset_BANG_.call(null,this$.state,1);
video.sequencer.pause();
return symlog.cljs.app.handlers.mainVideo.playButton.style.opacity = 1;
} else
{return null;
}
} else
{if(cljs.core._EQ_.call(null,1,cljs.core.deref.call(null,this$.state)))
{cljs.core.reset_BANG_.call(null,this$.state,0);
symlog.cljs.app.handlers.mainVideo.playButton.style.opacity = 0;
return video.sequencer.play();
} else
{return null;
}
}
});
return this$;
});
