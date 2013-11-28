goog.provide('symlog.cljs.app.actions.main');
goog.require('cljs.core');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.app.dom.elements');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
symlog.cljs.app.actions.main.ActionMap = (function ActionMap(this$){
return cljs.core.PersistentArrayMap.fromArray([1,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",0,"\uFDD0:action",(function (){
if(cljs.core.truth_(this$.subSequences.call(null,0).enabled))
{return symlog.cljs.animation.timing.pause.call(null,1000,(function (){
this$.interrupt();
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").className = "faded";
return (new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDiv"),(1000 / 25),.4,3,false,[cljs.core.str("m 355,54 c 76.60172,229.51602 275,234 275,234")].join(''),(function (){
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorVid").sequencer.rested = false;
return this$.subSequences.call(null,0).fire(0,100,(function (){
return symlog.cljs.animation.timing.pause.call(null,300,(function (){
return (new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDiv"),(1000 / 25),.4,.66666,false,[cljs.core.str("M 630,288 C 487.55708,313.5267 420,218 420,218")].join(''),(function (){
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").currentTime = (3 / 15);
return this$.subSequences.call(null,0).fire(100,150,(function (){
return (new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDiv"),(1000 / 25),.3,.5,false,[cljs.core.str("M 420,218 C 355.87705,146.59579 355,54 355,54")].join(''),(function (){
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorVid").sequencer.rested = true;
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").className = "unfaded";
return setTimeout(this$.resume,700);
}))).fire();
}));
}))).fire();
}));
}));
}))).fire();
}));
} else
{return null;
}
})], true),2,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:frame",200,"\uFDD0:action",(function (){
if(cljs.core.truth_(this$.subSequences.call(null,0).enabled))
{this$.interrupt();
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").className = "faded";
return (new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDiv"),(1000 / 25),.4,2,true,[cljs.core.str("M 420,218 C 355.87705,146.59579 355,54 355,54")].join(''),(function (){
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorVid").sequencer.rested = false;
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").currentTime = (2422 / 15);
return this$.subSequences.call(null,0).fire(200,430,(function (){
return (new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDiv"),(1000 / 25),.4,.5,true,[cljs.core.str("M 923,113 C 699.09177,208.04019 420,218 420,218")].join(''),(function (){
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").currentTime = (2430 / 15);
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame").clearit.fire();
return this$.subSequences.call(null,0).fire(450,1350,(function (){
return (new symlog.cljs.animation.functions.animate_path(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorDiv"),(1000 / 25),.4,1,false,[cljs.core.str("M 923,113 C 682.98326,33.262894 355,54 355,54")].join(''),(function (){
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:narratorVid").sequencer.rested = true;
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideo").className = "unfaded";
symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:paintFrame").clearit.fire();
return setTimeout(this$.resume,700);
}))).fire();
}));
}))).fire();
}));
}))).fire();
} else
{return null;
}
})], true)], true);
});
