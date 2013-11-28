goog.provide('symlog.cljs.app.dom.actions');
goog.require('cljs.core');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.app.dom.elements');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
goog.require('symlog.cljs.app');
symlog.cljs.app.dom.actions.init = (function init(){
symlog.cljs.app.dom.actions.actions = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:0",symlog.cljs.animation.timing.serialize.call(null,0,(function (){
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").src = symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVidSrc");
return symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideoDisableButton").enabled = false;
})),"\uFDD0:1",symlog.cljs.animation.timing.serialize.call(null,0,(function (){
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorVid").rested = true;
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorVid").enabled = true;
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideoDisableButton").enabled = false;
return symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").enabled = true;
})),"\uFDD0:2",symlog.cljs.animation.timing.serialize.call(null,0,(function (){
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorPlayButton").style.opacity = 0;
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDisableButton").style.opacity = 0;
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorVid").style.opacity = 0;
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorVid").enabled = false;
return symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorVid").parentNode.rested = true;
}),200,(function (){
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDiv").style.top = "9px";
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDiv").style.left = "310px";
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDiv").style.height = "90px";
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDiv").style.width = "90px";
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorVid").style.opacity = .2;
if(cljs.core.truth_(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").disableable))
{symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideoDisableButton").style.opacity = 1;
} else
{}
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideoPlayButton").style.opacity = 1;
return symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").style.opacity = 1;
})),"\uFDD0:3",symlog.cljs.animation.timing.serialize.call(null,0,(function (){
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").className = "faded";
return symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorVid").parentNode.rested = false;
}),0,(new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDiv"),(1000 / 25),.4,3,false,[cljs.core.str("m 355,54 c 76.60172,229.51602 275,234 275,234")].join('')))),"\uFDD0:4",symlog.cljs.animation.timing.serialize.call(null,0,(new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDiv"),(1000 / 25),.3,.666666,true,[cljs.core.str("m 420,218 c 89.31004,103.61767 210,70 210,70")].join(''))),1000,(function (){
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").src = symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:goodcopSrc");
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideoDisableButton").enabled = false;
return symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").className = "faded";
})),"\uFDD0:5",symlog.cljs.animation.timing.serialize.call(null,0,(new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDiv"),(1000 / 25),.3,.5,false,[cljs.core.str("M 420,218 C 355.87705,146.59579 355,54 355,54")].join(''))),0,(function (){
return symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").className = "unfaded";
})),"\uFDD0:6",(new symlog.cljs.animation.timing.serialize(0,(new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDiv"),(1000 / 25),.4,2,true,[cljs.core.str("M 420,218 C 355.87705,146.59579 355,54 355,54")].join(''))),0,(function (){
return symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").className = "faded";
})))], true);
});
