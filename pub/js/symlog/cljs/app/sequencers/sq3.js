goog.provide('symlog.cljs.app.sequences.sq3');
goog.require('cljs.core');
goog.require('symlog.cljs.animation.sequencers');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.sequencers');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
symlog.cljs.app.sequences.sq3.init = (function init(){
symlog.cljs.app.sequences.sq3.seqmap = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:1",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:range",cljs.core.range.call(null,300,350),"\uFDD0:triggered",cljs.core.atom.call(null,false),"\uFDD0:trigger",(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:seq1FrameBuffer")).slice(0,34),(1000 / 20)))], true),"\uFDD0:2",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:range",cljs.core.range.call(null,400,450),"\uFDD0:triggered",cljs.core.atom.call(null,false),"\uFDD0:trigger",(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:seq1FrameBuffer")).slice(35,69),(1000 / 20)))], true),"\uFDD0:3",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:range",cljs.core.range.call(null,500,550),"\uFDD0:triggered",cljs.core.atom.call(null,false),"\uFDD0:trigger",(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:seq1FrameBuffer")).slice(70,104),(1000 / 20)))], true),"\uFDD0:4",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:range",cljs.core.range.call(null,601,650),"\uFDD0:triggered",cljs.core.atom.call(null,false),"\uFDD0:trigger",(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:seq1FrameBuffer")).slice(105,138),(1000 / 20)))], true)], true);
symlog.cljs.app.sequences.sq3.controller = (new symlog.cljs.animation.sequencers.toVideo(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorVid"),300,700,15,symlog.cljs.app.sequences.sq3.seqmap));
});
