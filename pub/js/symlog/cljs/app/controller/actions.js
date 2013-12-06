goog.provide('symlog.cljs.app.controller.actions');
goog.require('cljs.core');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.app.dom');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom');
symlog.cljs.app.controller.actions.init = (function init(controller){
symlog.cljs.app.controller.actions.sequencers = cljs.core.vector.call(null,symlog.cljs.app.sequencers.narrator.sequencer);
symlog.cljs.app.controller.actions.controller = controller;
symlog.cljs.app.controller.actions.animations = cljs.core.vector.call(null,(new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorDiv"),(1000 / 25),.4,3,false,[cljs.core.str("m 355,54 c 76.60172,229.51602 275,234 275,234")].join(''))),(new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorDiv"),(1000 / 25),.4,.66666,false,[cljs.core.str("M 630,288 C 487.55708,313.5267 420,218 420,218")].join(''))),(new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorDiv"),(1000 / 25),.3,.5,false,[cljs.core.str("M 420,218 C 355.87705,146.59579 355,54 355,54")].join(''))),(new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorDiv"),(1000 / 25),.4,2,true,[cljs.core.str("M 420,218 C 355.87705,146.59579 355,54 355,54")].join(''))),(new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorDiv"),(1000 / 25),.4,.5,true,[cljs.core.str("M 923,113 C 699.09177,208.04019 420,218 420,218")].join(''))),(new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorDiv"),(1000 / 25),.4,1,false,[cljs.core.str("M 923,113 C 682.98326,33.262894 355,54 355,54")].join(''))),(new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorDiv"),(1000 / 25),.4,1,true,[cljs.core.str("M 923,113 C 682.98326,33.262894 355,54 355,54")].join(''))));
symlog.cljs.app.controller.actions.dom = cljs.core.PersistentArrayMap.fromArray([0,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",0,"\uFDD0:sequence",(function dom(){
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.controller.actions.sequencers.call(null,0).scenes.call(null,0).call(null,"\uFDD0:enabled"))))
{controller.interrupt();
controller.target.style.opacity = .3;
cljs.core.reset_BANG_.call(null,controller.playing,symlog.cljs.app.controller.actions.animations.call(null,0));
return symlog.cljs.app.controller.actions.animations.call(null,0).fire((function (){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.actions.sequencers.call(null,0).rested,false);
return symlog.cljs.app.controller.actions.sequencers.call(null,0).fire(0,(function (){
return controller.doframe(0);
}));
}));
} else
{cljs.core.reset_BANG_.call(null,controller.step,1);
return controller.doframe(0);
}
})], true),1,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",0,"\uFDD0:sequence",(function dom(){
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.controller.actions.sequencers.call(null,0).scenes.call(null,1).call(null,"\uFDD0:enabled"))))
{controller.target.currentTime = (3 / 15);
return symlog.cljs.animation.timing.pause.call(null,300,(function (){
return symlog.cljs.app.controller.actions.animations.call(null,1).fire((function (){
return symlog.cljs.app.controller.actions.sequencers.call(null,0).fire(1,(function (){
return symlog.cljs.animation.timing.pause.call(null,300,(function (){
return symlog.cljs.app.controller.actions.animations.call(null,2).fire((function (){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.actions.sequencers.call(null,0).rested,true);
controller.target.style.opacity = 1;
cljs.core.reset_BANG_.call(null,controller.playing,null);
return setTimeout(controller.resume,700);
}));
}));
}));
}));
}));
} else
{requestAnimationFrame(controller.cycler);
return controller.target.play();
}
})], true),2,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",2420,"\uFDD0:sequence",(function dom(){
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.controller.actions.sequencers.call(null,0).scenes.call(null,2).call(null,"\uFDD0:enabled"))))
{controller.interrupt();
controller.target.style.opacity = .3;
return symlog.cljs.animation.timing.pause.call(null,1000,(function (){
return symlog.cljs.app.controller.actions.animations.call(null,3).fire((function (){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.actions.sequencers.call(null,0).rested,false);
return symlog.cljs.app.controller.actions.sequencers.call(null,0).fire(2,(function (){
return symlog.cljs.app.controller.actions.animations.call(null,4).fire((function (){
controller.target.currentTime = (2430 / 15);
symlog.cljs.app.dom.elements.call(null,"\uFDD0:paintFrame").clearit.fire();
cljs.core.reset_BANG_.call(null,controller.playing,null);
return controller.doframe(2430);
}));
}));
}));
}));
} else
{controller.target.style.opacity = 1;
cljs.core.reset_BANG_.call(null,controller.playing,null);
requestAnimationFrame(controller.cycler);
return controller.target.play();
}
})], true),3,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",2430,"\uFDD0:sequence",(function dom(){
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.controller.actions.sequencers.call(null,0).scenes.call(null,3).call(null,"\uFDD0:enabled"))))
{controller.interrupt();
controller.target.style.opacity = 1;
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.controller.actions.sequencers.call(null,0).rested)))
{return symlog.cljs.app.controller.actions.animations.call(null,6).fire((function (){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.actions.sequencers.call(null,0).rested,false);
return symlog.cljs.app.controller.actions.sequencers.call(null,0).fire(3,(function (){
return symlog.cljs.app.controller.actions.animations.call(null,5).fire((function (){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.actions.sequencers.call(null,0).rested,true);
controller.target.style.opacity = 1;
cljs.core.reset_BANG_.call(null,controller.playing,null);
return setTimeout(controller.resume,700);
}));
}));
}));
} else
{return symlog.cljs.app.controller.actions.sequencers.call(null,0).fire(3,(function (){
return symlog.cljs.app.controller.actions.animations.call(null,5).fire((function (){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.actions.sequencers.call(null,0).rested,true);
controller.target.style.opacity = 1;
cljs.core.reset_BANG_.call(null,controller.playing,null);
return setTimeout(controller.resume,700);
}));
}));
}
} else
{requestAnimationFrame(controller.cycler);
return controller.target.play();
}
})], true),4,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",4285,"\uFDD0:sequence",(function dom(){
controller.interrupt();
symlog.cljs.app.dom.elements.call(null,"\uFDD0:paintFrame").src = (cljs.core.deref.call(null,symlog.cljs.app.dom.elements.call(null,"\uFDD0:mainVidOverlays"))[0]);
symlog.cljs.app.dom.elements.call(null,"\uFDD0:liesScore").innerHTML = "1";
symlog.cljs.app.dom.elements.call(null,"\uFDD0:unlawfulsScore").innerHTML = "1";
if(cljs.core.not.call(null,cljs.core.deref.call(null,symlog.cljs.app.controller.actions.sequencers.call(null,0).scenes.call(null,4).call(null,"\uFDD0:enabled"))))
{return symlog.cljs.animation.timing.pause.call(null,500,(function (){
cljs.core.reset_BANG_.call(null,controller.playing,null);
return controller.resume();
}));
} else
{return symlog.cljs.animation.timing.pause.call(null,500,(function (){
return symlog.cljs.app.controller.actions.animations.call(null,3).fire((function (){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.actions.sequencers.call(null,0).rested,false);
return symlog.cljs.app.controller.actions.sequencers.call(null,0).fire(4,(function (){
return symlog.cljs.app.controller.actions.animations.call(null,2).fire((function (){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.controller.actions.sequencers.call(null,0).rested,true);
cljs.core.reset_BANG_.call(null,controller.playing,null);
return setTimeout(controller.resume,700);
}));
}));
}));
}));
}
})], true),5,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",15000,"\uFDD0:sequence",(function dom(){
return console.log("ended");
})], true)], true);
});
