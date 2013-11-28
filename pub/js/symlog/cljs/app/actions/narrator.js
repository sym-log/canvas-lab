goog.provide('symlog.cljs.app.actions.narrator');
goog.require('cljs.core');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
symlog.cljs.app.actions.narrator.ActionMap = (function ActionMap(this$){
return cljs.core.PersistentHashMap.fromArrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],[cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",250,"\uFDD0:action",(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:seq1FrameBuffer")).slice(0,34),(1000 / 20),(function (){
return this$.playing = null;
})))], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",300,"\uFDD0:action",(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:seq1FrameBuffer")).slice(35,69),(1000 / 20),(function (){
return this$.playing = null;
})))], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",350,"\uFDD0:action",(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:seq1FrameBuffer")).slice(70,104),(1000 / 20),(function (){
return this$.playing = null;
})))], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",400,"\uFDD0:action",(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:seq1FrameBuffer")).slice(105,138),(1000 / 20),(function (){
return this$.playing = null;
})))], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",450,"\uFDD0:action",(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:seq2FrameBuffer")).slice(0,8),(1000 / 20),(function (){
return this$.playing = null;
})))], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",500,"\uFDD0:action",(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:seq2FrameBuffer")).slice(9,17),(1000 / 20),(function (){
return this$.playing = null;
})))], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",550,"\uFDD0:action",(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:seq2FrameBuffer")).slice(18,26),(1000 / 20),(function (){
return this$.playing = null;
})))], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",600,"\uFDD0:action",(function (){
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:context").clearRect(0,0,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:canvas").width,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:canvas").height);
return this$.playing = null;
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",650,"\uFDD0:action",(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:seq2FrameBuffer")).slice(27,55),(1000 / 20),(function (){
return this$.playing = null;
})))], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",750,"\uFDD0:action",(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:seq2FrameBuffer")).slice(56,78),(1000 / 20),(function (){
return this$.playing = null;
})))], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",800,"\uFDD0:action",(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:seq2FrameBuffer")).slice(79,116),(1000 / 20),(function (){
return this$.playing = null;
})))], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",850,"\uFDD0:action",(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:seq2FrameBuffer")).slice(117,161),(1000 / 20),(function (){
return this$.playing = null;
})))], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",900,"\uFDD0:action",(function (){
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:context").clearRect(0,0,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:canvas").width,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:canvas").height);
return this$.playing = null;
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",950,"\uFDD0:action",(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:seq2FrameBuffer")).slice(162,167),(1000 / 20),(function (){
return this$.playing = null;
})))], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",1000,"\uFDD0:action",(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:seq2FrameBuffer")).slice(168,177),(1000 / 20),(function (){
return this$.playing = null;
})))], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",1050,"\uFDD0:action",(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:seq2FrameBuffer")).slice(178,198),(1000 / 20),(function (){
return this$.playing = null;
})))], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",1100,"\uFDD0:action",(function (){
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:context").clearRect(0,0,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:canvas").width,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:canvas").height);
return this$.playing = null;
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",1150,"\uFDD0:action",(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame"),cljs.core.deref.call(null,symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:seq2FrameBuffer")).slice(199,207),(1000 / 20),(function (){
return this$.playing = null;
})))], true)]);
});
