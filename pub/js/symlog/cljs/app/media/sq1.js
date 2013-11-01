goog.provide('symlog.cljs.app.sequences.sq1');
goog.require('cljs.core');
goog.require('symlog.cljs.animation.sequencers');
goog.require('symlog.cljs.app');
symlog.cljs.app.sequences.sq1.init = (function init(){
symlog.cljs.app.sequences.sq1.run = (new symlog.cljs.animation.sequencers.toVideo(symlog.cljs.app.elements.call(null,"\uFDD0:narrator"),0,100,15)).fire;
});
