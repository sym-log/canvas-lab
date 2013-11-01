goog.provide('symlog.cljs.app.sequences.sq4');
goog.require('cljs.core');
goog.require('symlog.cljs.app.dom.actions');
goog.require('symlog.cljs.animation.sequencers');
goog.require('symlog.cljs.app');
symlog.cljs.app.sequences.sq4.init = (function init(){
symlog.cljs.app.sequences.sq4.fire = (new symlog.cljs.animation.sequencers.toVideo(symlog.cljs.app.elements.call(null,"\uFDD0:narrator"),300,500,15,(function (){
symlog.cljs.app.elements.call(null,"\uFDD0:mainVideo").className = "faded";
return symlog.cljs.app.dom.actions._map.call(null,"\uFDD0:4").call(null);
})));
});
