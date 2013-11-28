goog.provide('symlog.cljs.app.dom.eventHandlers');
goog.require('cljs.core');
goog.require('symlog.cljs.app.dom.elements');
goog.require('symlog.cljs.app.dom.elements');
symlog.cljs.app.dom.eventHandlers.narratorTouchHandler = (function narratorTouchHandler(target){
var this$ = this;
this$.state = cljs.core.atom.call(null,0);
this$.handler = (function (evt){
if(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,this$.state)))
{if(cljs.core.truth_(target.sequencer.rested))
{if(cljs.core.truth_(target.sequencer.enabled))
{target.style.opacity = .2;
target.sequencer.enabled = false;
} else
{target.style.opacity = 1;
target.sequencer.enabled = true;
}
} else
{target.sequencer.pause();
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorPlayButton").style.opacity = 1;
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDisableButton").style.opacity = 1;
this$.listener = goog.events.listen(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDisableTouchArea"),"click",(function (){
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorPlayButton").style.opacity = 0;
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDisableButton").style.opacity = 0;
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorVid").style.opacity = 0;
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDiv").style.top = "9px";
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDiv").style.left = "310px";
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDiv").style.height = "90px";
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDiv").style.width = "90px";
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorVid").style.opacity = .2;
target.sequencer.rested = true;
target.sequencer.enabled = false;
target.sequencer.stop();
return goog.events.unlistenByKey(this$.listener);
}));
}
return cljs.core.reset_BANG_.call(null,this$.state,1);
} else
{if(cljs.core._EQ_.call(null,1,cljs.core.deref.call(null,this$.state)))
{cljs.core.reset_BANG_.call(null,this$.state,0);
if(cljs.core.truth_(target.sequencer.rested))
{if(cljs.core.truth_(target.sequencer.enabled))
{target.style.opacity = .2;
return target.sequencer.enabled = false;
} else
{target.style.opacity = 1;
return target.sequencer.enabled = true;
}
} else
{symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorPlayButton").style.opacity = 0;
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDisableButton").style.opacity = 0;
goog.events.unlistenByKey(this$.listener);
return target.sequencer.play();
}
} else
{return null;
}
}
});
return this$;
});
symlog.cljs.app.dom.eventHandlers.mainVideoTouchHandler = (function mainVideoTouchHandler(target){
var this$ = this;
this$.state = cljs.core.atom.call(null,0);
this$.handler = (function (evt){
if(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,this$.state)))
{if(cljs.core.not.call(null,cljs.core.deref.call(null,target.controller.interrupted)))
{cljs.core.reset_BANG_.call(null,this$.state,1);
target.controller.pause();
target.style.opacity = .2;
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideoPlayButton").style.opacity = 1;
return symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideoPlayButton").style.opacity = 1;
} else
{return null;
}
} else
{if(cljs.core._EQ_.call(null,1,cljs.core.deref.call(null,this$.state)))
{cljs.core.reset_BANG_.call(null,this$.state,0);
target.style.opacity = 1;
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideoPlayButton").style.opacity = 0;
return target.controller.play();
} else
{return null;
}
}
});
return this$;
});
