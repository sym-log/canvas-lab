goog.provide('symlog.cljs.app.dom.actions');
goog.require('cljs.core');
goog.require('symlog.cljs.app.dom.elements');
goog.require('symlog.cljs.app.dom.elements');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.app');
symlog.cljs.app.dom.actions.init = (function init(){
symlog.cljs.app.dom.actions._map = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:1",(new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narrator"),(1000 / 25),.3,4,false,[cljs.core.str("m 265,52 c 9.56472,122.78368 97.77957,193.18726 207.23261,"),cljs.core.str("222.73973 C 508.42367,283.64875 547.29345,294.84793 600,300")].join(''))),"\uFDD0:2",symlog.cljs.animation.timing.serialize.call(null,0,(new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narrator"),(1000 / 25),.3,.5,true,[cljs.core.str("m 420,210 c 0,0 26.04289,32.69952 71.51328,53.92846 "),cljs.core.str("C 520.5366,277.47869 546.81365,285.37235 600,300")].join(''))),1000,(function (){
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").src = symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:goodcopSrc");
return symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").className = "faded";
})),"\uFDD0:3",symlog.cljs.animation.timing.serialize.call(null,0,(new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narrator"),(1000 / 25),.5,.5,true,[cljs.core.str("m 265,52 c 0,0 9.35,58.01292 47.74129,100.8298 "),cljs.core.str("C 332.33405,174.68113 366.81365,195.37235 420,210")].join(''))),0,(function (){
return symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").className = "unfaded";
})),"\uFDD0:4",(new symlog.cljs.animation.timing.serialize(0,(new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narrator"),(1000 / 25),.4,2,false,[cljs.core.str("m 265,52 c 0,0 9.35,58.01292 47.74129,100.8298 "),cljs.core.str("C 332.33405,174.68113 366.81365,195.37235 420,210")].join(''))),0,(function (){
return symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").className = "faded";
})))], true);
});
