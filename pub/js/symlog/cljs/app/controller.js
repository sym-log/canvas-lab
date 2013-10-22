goog.provide('symlog.cljs.app.controller');
goog.require('cljs.core');
symlog.cljs.app.controller.playNarrator = (function playNarrator(){
return symlog.cljs.app.actors.call(null,"\uFDD0:narrator").play();
});
symlog.cljs.app.controller.pauseNarrator = (function pauseNarrator(){
return symlog.cljs.app.actors.call(null,"\uFDD0:narrator").pause();
});
symlog.cljs.app.controller.playMainVid = (function playMainVid(){
return symlog.cljs.app.actors.call(null,"\uFDD0:mainVideo").play();
});
symlog.cljs.app.controller.pauseMainVid = (function pauseMainVid(){
return symlog.cljs.app.actors.call(null,"\uFDD0:mainVideo").pause();
});
symlog.cljs.app.controller.framecall = (function framecall(){
var frameNum = Math.round((symlog.cljs.app.controller.video.currentTime * symlog.cljs.app.controller.videoFrameRate));
return goog.object.forEach(symlog.cljs.app.controller.actions,(function (elem,idx,obj){
if(cljs.core.truth_(elem.enabled))
{if(!(cljs.core._EQ_.call(null,-1,elem.range.indexOf(frameNum))))
{if(cljs.core.not.call(null,elem.triggered))
{elem.triggered = true;
return elem.trigger.fire();
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
}));
});
