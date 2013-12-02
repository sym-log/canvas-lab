goog.provide('symlog.cljs.app.handlers.mainVideo');
goog.require('cljs.core');
goog.require('symlog.cljs.app.dom');
goog.require('symlog.cljs.app.dom');
symlog.cljs.app.handlers.mainVideo.init = (function init(){
symlog.cljs.app.handlers.mainVideo.videoDuration = symlog.cljs.app.dom.elements.call(null,"\uFDD0:mainVideo").duration;
symlog.cljs.app.handlers.mainVideo.travelLength = 532;
symlog.cljs.app.handlers.mainVideo.multiplier = (symlog.cljs.app.handlers.mainVideo.travelLength / symlog.cljs.app.handlers.mainVideo.videoDuration);
symlog.cljs.app.handlers.mainVideo.buttonStartY = 2;
symlog.cljs.app.handlers.mainVideo.buttonEndY = 534;
symlog.cljs.app.handlers.mainVideo.video = symlog.cljs.app.dom.elements.call(null,"\uFDD0:mainVideo");
symlog.cljs.app.handlers.mainVideo.playButton = symlog.cljs.app.dom.elements.call(null,"\uFDD0:mainVideoPlayButton");
symlog.cljs.app.handlers.mainVideo.FPS = symlog.cljs.app.dom.elements.call(null,"\uFDD0:FPS");
symlog.cljs.app.handlers.mainVideo.button = symlog.cljs.app.dom.elements.call(null,"\uFDD0:controlButton");
symlog.cljs.app.handlers.mainVideo.buttonHandler = (new symlog.cljs.app.handlers.mainVideo.controlButton(symlog.cljs.app.handlers.mainVideo.button));
symlog.cljs.app.handlers.mainVideo.touchArea = symlog.cljs.app.dom.elements.call(null,"\uFDD0:mainVideoPlayTouchArea");
symlog.cljs.app.handlers.mainVideo.touchHandler = (new symlog.cljs.app.handlers.mainVideo.touchScreen(symlog.cljs.app.handlers.mainVideo.video));
symlog.cljs.app.handlers.mainVideo._subseq = symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorVid").sequencer;
goog.events.listen(symlog.cljs.app.handlers.mainVideo.video,"timeupdate",(function (evt){
var locY = (symlog.cljs.app.handlers.mainVideo.multiplier * evt.target.currentTime);
if(cljs.core._EQ_.call(null,0,locY))
{return symlog.cljs.app.handlers.mainVideo.button.style.top = [cljs.core.str(symlog.cljs.app.handlers.mainVideo.buttonStartY),cljs.core.str("px")].join('');
} else
{if(cljs.core._EQ_.call(null,symlog.cljs.app.handlers.mainVideo.travelLength,locY))
{return symlog.cljs.app.handlers.mainVideo.button.style.top = [cljs.core.str(symlog.cljs.app.handlers.mainVideo.buttonEndY),cljs.core.str("px")].join('');
} else
{if("\uFDD0:else")
{return symlog.cljs.app.handlers.mainVideo.button.style.top = [cljs.core.str(locY),cljs.core.str("px")].join('');
} else
{return null;
}
}
}
}));
goog.events.listen(symlog.cljs.app.handlers.mainVideo.button,["mousedown","mousemove","mouseup","mouseout"],symlog.cljs.app.handlers.mainVideo.buttonHandler.fire);
return goog.events.listen(symlog.cljs.app.handlers.mainVideo.touchArea,"click",symlog.cljs.app.handlers.mainVideo.touchHandler.handler,false);
});
symlog.cljs.app.handlers.mainVideo.controlButton = (function controlButton(button){
var this$ = this;
this$.fire = (function (evt){
evt.preventDefault();
if(cljs.core._EQ_.call(null,evt.type,"mousedown"))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.handlers.mainVideo._subseq.rested)))
{this$.selected = true;
this$.startY = evt.screenY;
this$.beginY = parseInt(button.style.top);
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
{var locY = parseInt(button.style.top);
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
{return button.style.top = [cljs.core.str(symlog.cljs.app.handlers.mainVideo.buttonEndY),cljs.core.str("px")].join('');
} else
{if((locY < symlog.cljs.app.handlers.mainVideo.buttonStartY))
{return button.style.top = [cljs.core.str(symlog.cljs.app.handlers.mainVideo.buttonStartY),cljs.core.str("px")].join('');
} else
{if("\uFDD0:else")
{return button.style.top = [cljs.core.str((this$.beginY + (evt.screenY - this$.startY))),cljs.core.str("px")].join('');
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
this$.handler = (function (evt){
if(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,this$.state)))
{if(cljs.core.not.call(null,cljs.core.deref.call(null,video.sequencer.interrupted)))
{cljs.core.reset_BANG_.call(null,this$.state,1);
video.sequencer.pause();
video.style.opacity = .3;
return symlog.cljs.app.handlers.mainVideo.playButton.style.opacity = 1;
} else
{return null;
}
} else
{if(cljs.core._EQ_.call(null,1,cljs.core.deref.call(null,this$.state)))
{cljs.core.reset_BANG_.call(null,this$.state,0);
video.style.opacity = 1;
symlog.cljs.app.handlers.mainVideo.playButton.style.opacity = 0;
return video.sequencer.play();
} else
{return null;
}
}
});
return this$;
});
