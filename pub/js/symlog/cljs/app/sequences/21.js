goog.provide('symlog.cljs.app.sequences.sq21');
goog.require('cljs.core');
goog.require('symlog.cljs.animation.sequencers');
goog.require('symlog.cljs.app');
goog.require('symlog.cljs.app');
goog.require('symlog.cljs.animation.sequencers');
goog.require('symlog.cljs.animation.functions');
symlog.cljs.app.sequences.sq21.init = (function init(){
symlog.cljs.app.sequences.sq21.actionlist = cljs.core.PersistentArrayMap.fromArray([1,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:enabled",cljs.core.atom.call(null,true),"\uFDD0:range",cljs.core.range.call(null,0,100),"\uFDD0:triggered",cljs.core.atom.call(null,false),"\uFDD0:trigger",symlog.cljs.app.sequences.sq21.synchronize.call(null,0,(new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.elements.call(null,"\uFDD0:narrator"),(1000 / 25),.3,4,false,[cljs.core.str("m 265,52 c 9.56472,122.78368 97.77957,193.18726 207.23261,"),cljs.core.str("222.73973 C 508.42367,283.64875 547.29345,294.84793 600,300")].join(''))).fire,0,(function (){
return symlog.cljs.app.elements.call(null,"\uFDD0:narrator").play();
}))], true),2,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:enabled",cljs.core.atom.call(null,true),"\uFDD0:range",cljs.core.range.call(null,101,200),"\uFDD0:triggered",cljs.core.atom.call(null,false),"\uFDD0:trigger",symlog.cljs.app.sequences.sq21.synchronize.call(null,0,(function (){
return symlog.cljs.app.elements.call(null,"\uFDD0:narrator").pause();
}),0,(new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.elements.call(null,"\uFDD0:narrator"),(1000 / 25),.3,.5,true,[cljs.core.str("m 420,210 c 0,0 26.04289,32.69952 71.51328,53.92846 "),cljs.core.str("C 520.5366,277.47869 546.81365,285.37235 600,300")].join(''))).fire,500,(function (){
symlog.cljs.app.elements.call(null,"\uFDD0:mainVideo").src = symlog.cljs.app.elements.call(null,"\uFDD0:goodcopSrc");
symlog.cljs.app.elements.call(null,"\uFDD0:mainVideo").className = "faded";
return symlog.cljs.app.elements.call(null,"\uFDD0:narrator").play();
}))], true),3,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:enabled",cljs.core.atom.call(null,true),"\uFDD0:range",cljs.core.range.call(null,201,300),"\uFDD0:triggered",cljs.core.atom.call(null,false),"\uFDD0:trigger",symlog.cljs.app.sequences.sq21.synchronize.call(null,0,(function (){
return symlog.cljs.app.elements.call(null,"\uFDD0:narrator").pause();
}),0,(new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.elements.call(null,"\uFDD0:narrator"),(1000 / 25),.5,.5,true,[cljs.core.str("m 265,52 c 0,0 9.35,58.01292 47.74129,100.8298 "),cljs.core.str("C 332.33405,174.68113 366.81365,195.37235 420,210")].join(''))).fire,500,(function (){
symlog.cljs.app.elements.call(null,"\uFDD0:mainVideo").className = "unfaded";
return symlog.cljs.app.elements.call(null,"\uFDD0:mainVideo").play();
}))], true)], true);
});
