goog.provide('symlog.cljs.app.handlers.toc');
goog.require('cljs.core');
goog.require('symlog.cljs.app.elements');
symlog.cljs.app.handlers.toc.containerHeight = 576;
symlog.cljs.app.handlers.toc.scrollDivWidth = 2010;
symlog.cljs.app.handlers.toc.maxUp = ((- symlog.cljs.app.handlers.toc.scrollDivWidth) + symlog.cljs.app.handlers.toc.containerHeight);
symlog.cljs.app.handlers.toc.maxDown = 0;
symlog.cljs.app.handlers.toc.selected = false;
symlog.cljs.app.handlers.toc.locY = null;
symlog.cljs.app.handlers.toc.easeOffset = 30;
symlog.cljs.app.handlers.toc.init = (function init(){
symlog.cljs.app.handlers.toc.target = symlog.cljs.app.elements.tocCanvas;
return goog.events.listen(symlog.cljs.app.handlers.toc.target,["mousedown","mousemove","mouseup","mouseout"],symlog.cljs.app.handlers.toc.TOCScrollHandler);
});
symlog.cljs.app.handlers.toc.TOCScrollHandler = (function TOCScrollHandler(evt){
evt.preventDefault();
if(cljs.core._EQ_.call(null,evt.type,"mousedown"))
{if(!(cljs.core._EQ_.call(null,"buttonTouchArea",evt.target.id)))
{symlog.cljs.app.handlers.toc.selected = true;
symlog.cljs.app.handlers.toc.startY = evt.screenY;
return symlog.cljs.app.handlers.toc.beginY = parseInt(symlog.cljs.app.handlers.toc.target.style.top);
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
{return symlog.cljs.app.handlers.toc.selected = false;
} else
{if(cljs.core._EQ_.call(null,evt.type,"mousemove"))
{if(cljs.core.truth_(symlog.cljs.app.handlers.toc.selected))
{symlog.cljs.app.handlers.toc.locY = (symlog.cljs.app.handlers.toc.beginY + (evt.screenY - symlog.cljs.app.handlers.toc.startY));
if((symlog.cljs.app.handlers.toc.locY < symlog.cljs.app.handlers.toc.maxUp))
{return symlog.cljs.app.handlers.toc.target.style.top = [cljs.core.str(symlog.cljs.app.handlers.toc.maxUP),cljs.core.str("px")].join('');
} else
{if((symlog.cljs.app.handlers.toc.locY > symlog.cljs.app.handlers.toc.maxDown))
{return symlog.cljs.app.handlers.toc.target.style.top = [cljs.core.str(symlog.cljs.app.handlers.toc.maxDown),cljs.core.str("px")].join('');
} else
{if("\uFDD0:else")
{return symlog.cljs.app.handlers.toc.target.style.top = [cljs.core.str(symlog.cljs.app.handlers.toc.locY),cljs.core.str("px")].join('');
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
