goog.provide('symlog.cljs.app.sequencers.narrator.sequence');
goog.require('cljs.core');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.app.elements');
goog.require('symlog.cljs.animation.functions');
symlog.cljs.app.sequencers.narrator.sequence.init = (function init(){
symlog.cljs.app.sequencers.narrator.sequence.sequencer = symlog.cljs.app.sequencers.narrator.sequencer;
symlog.cljs.app.elements.narratorVid.sequencer = symlog.cljs.app.sequencers.narrator.sequence.sequencer;
symlog.cljs.app.sequencers.narrator.sequence.animations = cljs.core.vector.call(null,(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.elements.paintFrame,symlog.cljs.app.elements.narratorFrameBuffer.slice(0,32),(1000 / 20))),(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.elements.paintFrame,symlog.cljs.app.elements.narratorFrameBuffer.slice(33,67),(1000 / 20))),(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.elements.paintFrame,symlog.cljs.app.elements.narratorFrameBuffer.slice(68,99),(1000 / 20))),(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.elements.paintFrame,symlog.cljs.app.elements.narratorFrameBuffer.slice(100,130),(1000 / 20))),(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.elements.paintFrame,symlog.cljs.app.elements.narratorFrameBuffer.slice(131,135),(1000 / 20))),(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.elements.paintFrame,symlog.cljs.app.elements.narratorFrameBuffer.slice(136,140),(1000 / 20))),(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.elements.paintFrame,symlog.cljs.app.elements.narratorFrameBuffer.slice(141,144),(1000 / 20))),(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.elements.paintFrame,symlog.cljs.app.elements.narratorFrameBuffer.slice(145,163),(1000 / 20))),(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.elements.paintFrame,symlog.cljs.app.elements.narratorFrameBuffer.slice(164,185),(1000 / 20))),(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.elements.paintFrame,symlog.cljs.app.elements.narratorFrameBuffer.slice(186,228),(1000 / 20))),(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.elements.paintFrame,symlog.cljs.app.elements.narratorFrameBuffer.slice(229,262),(1000 / 20))),(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.elements.paintFrame,symlog.cljs.app.elements.narratorFrameBuffer.slice(263,268),(1000 / 20))),(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.elements.paintFrame,symlog.cljs.app.elements.narratorFrameBuffer.slice(269,278),(1000 / 20))),(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.elements.paintFrame,symlog.cljs.app.elements.narratorFrameBuffer.slice(279,300),(1000 / 20))),(new symlog.cljs.animation.functions.paint_frames(symlog.cljs.app.elements.paintFrame,symlog.cljs.app.elements.narratorFrameBuffer.slice(301,306),(1000 / 20))));
symlog.cljs.app.sequencers.narrator.sequence.seqmap = cljs.core.PersistentHashMap.fromArrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],[cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",927,"\uFDD0:sequence",(function seqmap(){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,0));
return symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,0).fire((function (){
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
}));
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",1352,"\uFDD0:sequence",(function seqmap(){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,1));
return symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,1).fire((function (){
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
}));
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",1989,"\uFDD0:sequence",(function seqmap(){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,2));
return symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,2).fire((function (){
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
}));
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",2456,"\uFDD0:sequence",(function seqmap(){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,3));
return symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,3).fire((function (){
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
}));
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",3448,"\uFDD0:sequence",(function seqmap(){
symlog.cljs.app.elements.paintFrame.clearit.fire();
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",5036,"\uFDD0:sequence",(function seqmap(){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,4));
return symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,4).fire((function (){
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
}));
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",5154,"\uFDD0:sequence",(function seqmap(){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,5));
return symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,5).fire((function (){
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
}));
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",5324,"\uFDD0:sequence",(function seqmap(){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,6));
return symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,6).fire((function (){
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
}));
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",5480,"\uFDD0:sequence",(function seqmap(){
symlog.cljs.app.elements.paintFrame.clearit.fire();
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",5629,"\uFDD0:sequence",(function seqmap(){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,7));
return symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,7).fire((function (){
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
}));
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",5700,"\uFDD0:sequence",(function seqmap(){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,8));
return symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,8).fire((function (){
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
}));
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",5832,"\uFDD0:sequence",(function seqmap(){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,9));
return symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,9).fire((function (){
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
}));
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",6046,"\uFDD0:sequence",(function seqmap(){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,10));
return symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,10).fire((function (){
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
}));
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",6140,"\uFDD0:sequence",(function seqmap(){
symlog.cljs.app.elements.paintFrame.clearit.fire();
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",6673,"\uFDD0:sequence",(function seqmap(){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,11));
return symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,11).fire((function (){
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
}));
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",6752,"\uFDD0:sequence",(function seqmap(){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,12));
return symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,12).fire((function (){
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
}));
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",7153,"\uFDD0:sequence",(function seqmap(){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,13));
return symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,13).fire((function (){
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
}));
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",7410,"\uFDD0:sequence",(function seqmap(){
symlog.cljs.app.elements.paintFrame.clearit.fire();
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",7745,"\uFDD0:sequence",(function seqmap(){
cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,14));
return symlog.cljs.app.sequencers.narrator.sequence.animations.call(null,14).fire((function (){
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
}));
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",8409,"\uFDD0:sequence",(function seqmap(){
symlog.cljs.app.elements.paintFrame.clearit.fire();
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.sequencers.narrator.sequence.sequencer.playing,null);
})], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",15000,"\uFDD0:sequence",(function seqmap(){
return console.log("done");
})], true)]);
});
