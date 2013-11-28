goog.provide('symlog.cljs.app.sequences.sq1');
goog.require('cljs.core');
goog.require('symlog.cljs.animation.sequencers');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.sequencers');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
symlog.cljs.app.sequences.sq1.init = (function init(){
symlog.cljs.app.sequences.sq1.controller = (new symlog.cljs.animation.sequencers.toVideo(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorVid"),0,100,15,symlog.cljs.app.sequences.sq1.seqmap));
});
