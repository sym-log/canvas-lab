goog.provide('symlog.cljs.app.sequences.sq1');
goog.require('cljs.core');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.sequencers');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.app');
goog.require('symlog.cljs.animation.sequencers');
goog.require('symlog.cljs.animation.timing');
symlog.cljs.app.sequences.sq1.init = (function init(){
symlog.cljs.app.sequences.sq1.controller = (new symlog.cljs.animation.sequencers.toVideo(symlog.cljs.app.elements.call(null,"\uFDD0:narrator"),300,700,15,symlog.cljs.app.sequences.sq1.seqmap));
symlog.cljs.app.sequences.sq1.seqmap = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:1",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:range",cljs.core.range.call(null,300,350),"\uFDD0:triggered",cljs.core.atom.call(null,false),"\uFDD0:trigger",(new symlog.cljs.animation.functions.paint_frames2(symlog.cljs.app.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.elements.call(null,"\uFDD0:seq1FrameBuffer")).slice(0,34),(1000 / 20),symlog.cljs.app.sequences.sq1.controller))], true)], true);
});
