goog.provide('symlog.cljs.app.sequences.sq2');
goog.require('cljs.core');
goog.require('symlog.cljs.animation.sequencers');
goog.require('symlog.cljs.app');
symlog.cljs.app.sequences.sq2.init = (function init(){
symlog.cljs.app.sequences.sq2.fire = (new symlog.cljs.animation.sequencers.toVideo(symlog.cljs.app.elements.call(null,"\uFDD0:narrator"),100,200,15));
return null;
});
