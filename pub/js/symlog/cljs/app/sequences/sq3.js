goog.provide('symlog.cljs.app.sequences.sq3');
goog.require('cljs.core');
goog.require('symlog.cljs.app.dom.actions');
goog.require('symlog.cljs.animation.sequencers');
goog.require('symlog.cljs.app');
symlog.cljs.app.sequences.sq3.init = (function init(){
symlog.cljs.app.sequences.sq3.fire = (new symlog.cljs.animation.sequencers.toVideo(symlog.cljs.app.elements.call(null,"\uFDD0:mainVideo"),0,500,15,symlog.cljs.app.dom.actions._map.call(null,"\uFDD0:3")));
});
