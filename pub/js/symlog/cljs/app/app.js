goog.provide('symlog.cljs.app');
goog.require('cljs.core');
goog.require('symlog.cljs.animate');
goog.require('symlog.cljs.app.controller');
symlog.cljs.app.sync = symlog.cljs.util.synchronize;
symlog.cljs.app.init = (function init(){
symlog.cljs.app.props.call(null,"\uFDD0:paintFrame").onload = (function (){
return symlog.cljs.canvas.paintImage.call(null,symlog.cljs.app.props.call(null,"\uFDD0:context"),symlog.cljs.app.props.call(null,"\uFDD0:canvas"),symlog.cljs.app.props.call(null,"\uFDD0:paintFrame"));
});
return symlog.cljs.net.getTextArray.call(null,"http://localhost/img/frame-buffers/vid1.scene1.imgs",(function (response){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.props.call(null,"\uFDD0:narratorFrameBuffer"),response.split("/ / /"));
return symlog.cljs.app.init_actions.call(null);
}));
});
symlog.cljs.app.props = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:canvas",goog.dom.getElement("canvas"),"\uFDD0:context",goog.dom.getElement("canvas").getContext("2d"),"\uFDD0:paintFrame",(new Image()),"\uFDD0:goodcopSrc","../video/goodcop.webm","\uFDD0:narratorFrameBuffer",cljs.core.atom.call(null,null)], true);
symlog.cljs.app.actors = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:narrator",goog.dom.getElement("narratorVid"),"\uFDD0:mainVideo",goog.dom.getElement("mainVideo")], true);
symlog.cljs.app.init_actions = (function init_actions(){
symlog.cljs.app.actions = cljs.core.PersistentArrayMap.fromArray([1,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:enabled",true,"\uFDD0:range",cljs.core.range.call(null,0,100),"\uFDD0:triggered",false,"\uFDD0:trigger",symlog.cljs.app.sync.call(null,0,(new symlog.cljs.animate.animate_path(symlog.cljs.app.actors.call(null,"\uFDD0:narrator"),(1000 / 25),.2,4,false,[cljs.core.str("m 265,52 c 9.56472,122.78368 97.77957,193.18726 207.23261,"),cljs.core.str("222.73973 C 508.42367,283.64875 547.29345,294.84793 600,300")].join(''))).fire,0,(function (){
return symlog.cljs.app.controller.playNarrator.call(null);
}))], true),2,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:enabled",true,"\uFDD0:range",cljs.core.range.call(null,0,100),"\uFDD0:triggered",false,"\uFDD0:trigger",symlog.cljs.app.sync.call(null,0,(function (){
return symlog.cljs.app.controller.pauseNarrator.call(null);
}),0,(new symlog.cljs.animate.animate_path(symlog.cljs.app.actors.call(null,"\uFDD0:narrator"),(1000 / 25),.2,.5,true,[cljs.core.str("m 420,210 c 0,0 26.04289,32.69952 71.51328,53.92846 "),cljs.core.str("C 520.5366,277.47869 546.81365,285.37235 600,300")].join(''))).fire,0,(function (){
symlog.cljs.app.actors.call(null,"\uFDD0:mainVideo").src = symlog.cljs.app.props.call(null,"\uFDD0:goodcopSrc");
return symlog.cljs.app.controller.playNarrator.call(null);
}))], true),3,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:enabled",true,"\uFDD0:range",cljs.core.range.call(null,0,100),"\uFDD0:triggered",false,"\uFDD0:trigger",symlog.cljs.app.sync.call(null,0,(function (){
return symlog.cljs.app.controller.pauseNarrator.call(null);
}),0,(new symlog.cljs.animate.animate_path(symlog.cljs.app.actors.call(null,"\uFDD0:narrator"),(1000 / 25),.2,.5,true,[cljs.core.str("m 265,52 c 0,0 9.35,58.01292 47.74129,100.8298 "),cljs.core.str("C 332.33405,174.68113 366.81365,195.37235 420,210")].join(''))).fire,0,(function (){
symlog.cljs.app.actors.call(null,"\uFDD0:mainVideo").style.opacity = 1;
return symlog.cljs.app.controller.playMainVid.call(null);
}))], true),4,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:enabled",true,"\uFDD0:range",cljs.core.range.call(null,0,100),"\uFDD0:triggered",false,"\uFDD0:trigger",symlog.cljs.app.sync.call(null,0,(function (){
symlog.cljs.app.controller.pauseMainVid.call(null);
return symlog.cljs.app.actors.call(null,"\uFDD0:mainVideo").style.opacity = .2;
}),1000,(new symlog.cljs.animate.animate_path(symlog.cljs.app.actors.call(null,"\uFDD0:narrator"),(1000 / 25),.2,2,false,[cljs.core.str("m 265,52 c 0,0 9.35,58.01292 47.74129,100.8298 "),cljs.core.str("C 332.33405,174.68113 366.81365,195.37235 420,210")].join(''))).fire,0,(function (){
return symlog.cljs.app.controller.playNarrator.call(null);
}))], true),5,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:enabled",true,"\uFDD0:range",cljs.core.range.call(null,0,100),"\uFDD0:triggered",false,"\uFDD0:trigger",symlog.cljs.app.sync.call(null,0,(new symlog.cljs.animate.paint_frames(symlog.cljs.app.props.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.props.call(null,"\uFDD0:narratorFrameBuffer")).slice(0,34),(1000 / 25))).fire)], true),6,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:enabled",true,"\uFDD0:range",cljs.core.range.call(null,0,100),"\uFDD0:triggered",false,"\uFDD0:trigger",symlog.cljs.app.sync.call(null,0,(new symlog.cljs.animate.paint_frames(symlog.cljs.app.props.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.props.call(null,"\uFDD0:narratorFrameBuffer")).slice(35,69),(1000 / 25))).fire)], true),7,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:enabled",true,"\uFDD0:range",cljs.core.range.call(null,0,100),"\uFDD0:triggered",false,"\uFDD0:trigger",symlog.cljs.app.sync.call(null,0,(new symlog.cljs.animate.paint_frames(symlog.cljs.app.props.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.props.call(null,"\uFDD0:narratorFrameBuffer")).slice(70,104),(1000 / 25))).fire)], true),8,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:enabled",true,"\uFDD0:range",cljs.core.range.call(null,0,100),"\uFDD0:triggered",false,"\uFDD0:trigger",symlog.cljs.app.sync.call(null,0,(new symlog.cljs.animate.paint_frames(symlog.cljs.app.props.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.props.call(null,"\uFDD0:narratorFrameBuffer")).slice(105,138),(1000 / 25))).fire)], true)], true);
});
