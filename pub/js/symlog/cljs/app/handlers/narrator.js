goog.provide('symlog.cljs.app.handlers.narrator');
goog.require('cljs.core');
goog.require('symlog.cljs.app.dom');
goog.require('symlog.cljs.app.dom');
symlog.cljs.app.handlers.narrator.FPS = 15;
symlog.cljs.app.handlers.narrator.ctxt = symlog.cljs.app.handlers.narrator;
symlog.cljs.app.handlers.narrator.init = (function init(){
symlog.cljs.app.handlers.narrator.disableButton = symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorDisableButton");
symlog.cljs.app.handlers.narrator.disableTouchArea = symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorDisableTouchArea");
symlog.cljs.app.handlers.narrator.playButton = symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorPlayButton");
symlog.cljs.app.handlers.narrator.playTouchArea = symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorPlayTouchArea");
symlog.cljs.app.handlers.narrator.video = symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorVid");
symlog.cljs.app.handlers.narrator.container = symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorDiv");
symlog.cljs.app.handlers.narrator.nodeList = null;
symlog.cljs.app.handlers.narrator.state = cljs.core.atom.call(null,0);
symlog.cljs.app.handlers.narrator.tocRef = null;
symlog.cljs.app.handlers.narrator.listener = null;
return goog.events.listen(symlog.cljs.app.handlers.narrator.playTouchArea,"click",symlog.cljs.app.handlers.narrator.touchHandler,true,symlog.cljs.app.handlers.narrator.ctxt);
});
symlog.cljs.app.handlers.narrator.touchHandler = (function touchHandler(evt){
if(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.state)))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.video.sequencer.rested)))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.video.sequencer.enabled)))
{symlog.cljs.app.handlers.narrator.video.style.opacity = .2;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.video.sequencer.enabled,false);
} else
{symlog.cljs.app.handlers.narrator.video.style.opacity = 1;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.video.sequencer.enabled,true);
}
} else
{symlog.cljs.app.handlers.narrator.video.sequencer.pause();
symlog.cljs.app.handlers.narrator.playButton.style.opacity = 1;
symlog.cljs.app.handlers.narrator.disableButton.style.opacity = 1;
symlog.cljs.app.handlers.narrator.tocRef = goog.dom.getElement([cljs.core.str("n"),cljs.core.str(symlog.cljs.app.handlers.narrator.video.sequencer.TOCnum)].join(''));
symlog.cljs.app.handlers.narrator.nodeList = symlog.cljs.util.nodelist__GT_coll.call(null,goog.dom.getElementsByClass("toc",symlog.cljs.app.handlers.narrator.tocRef));
var seq__76437_76449 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.nodeList);
var chunk__76438_76450 = null;
var count__76439_76451 = 0;
var i__76440_76452 = 0;
while(true){
if((i__76440_76452 < count__76439_76451))
{var v_76453 = cljs.core._nth.call(null,chunk__76438_76450,i__76440_76452);
goog.events.listenOnce(v_76453,"click",symlog.cljs.app.handlers.narrator.TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__76454 = seq__76437_76449;
var G__76455 = chunk__76438_76450;
var G__76456 = count__76439_76451;
var G__76457 = (i__76440_76452 + 1);
seq__76437_76449 = G__76454;
chunk__76438_76450 = G__76455;
count__76439_76451 = G__76456;
i__76440_76452 = G__76457;
continue;
}
} else
{var temp__4092__auto___76458 = cljs.core.seq.call(null,seq__76437_76449);
if(temp__4092__auto___76458)
{var seq__76437_76459__$1 = temp__4092__auto___76458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76437_76459__$1))
{var c__2754__auto___76460 = cljs.core.chunk_first.call(null,seq__76437_76459__$1);
{
var G__76461 = cljs.core.chunk_rest.call(null,seq__76437_76459__$1);
var G__76462 = c__2754__auto___76460;
var G__76463 = cljs.core.count.call(null,c__2754__auto___76460);
var G__76464 = 0;
seq__76437_76449 = G__76461;
chunk__76438_76450 = G__76462;
count__76439_76451 = G__76463;
i__76440_76452 = G__76464;
continue;
}
} else
{var v_76465 = cljs.core.first.call(null,seq__76437_76459__$1);
goog.events.listenOnce(v_76465,"click",symlog.cljs.app.handlers.narrator.TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__76466 = cljs.core.next.call(null,seq__76437_76459__$1);
var G__76467 = null;
var G__76468 = 0;
var G__76469 = 0;
seq__76437_76449 = G__76466;
chunk__76438_76450 = G__76467;
count__76439_76451 = G__76468;
i__76440_76452 = G__76469;
continue;
}
}
} else
{}
}
break;
}
symlog.cljs.app.handlers.narrator.tocRef.style.display = "inline";
symlog.cljs.app.handlers.narrator.listener = goog.events.listen(symlog.cljs.app.handlers.narrator.disableTouchArea,"click",(function (){
symlog.cljs.app.handlers.narrator.playButton.style.opacity = 0;
symlog.cljs.app.handlers.narrator.disableButton.style.opacity = 0;
symlog.cljs.app.handlers.narrator.tocRef.style.display = "none";
symlog.cljs.app.handlers.narrator.video.style.opacity = 0;
symlog.cljs.app.handlers.narrator.container.style.top = "9px";
symlog.cljs.app.handlers.narrator.container.style.left = "310px";
symlog.cljs.app.handlers.narrator.container.style.height = "90px";
symlog.cljs.app.handlers.narrator.container.style.width = "90px";
symlog.cljs.app.handlers.narrator.video.style.opacity = .2;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.video.sequencer.rested,true);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.video.sequencer.enabled,false);
symlog.cljs.app.handlers.narrator.video.sequencer.stop();
goog.events.unlistenByKey(symlog.cljs.app.handlers.narrator.listener);
var seq__76441 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.nodeList);
var chunk__76442 = null;
var count__76443 = 0;
var i__76444 = 0;
while(true){
if((i__76444 < count__76443))
{var v = cljs.core._nth.call(null,chunk__76442,i__76444);
goog.events.unlisten(v,"click",symlog.cljs.app.handlers.narrator.TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__76470 = seq__76441;
var G__76471 = chunk__76442;
var G__76472 = count__76443;
var G__76473 = (i__76444 + 1);
seq__76441 = G__76470;
chunk__76442 = G__76471;
count__76443 = G__76472;
i__76444 = G__76473;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__76441);
if(temp__4092__auto__)
{var seq__76441__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76441__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__76441__$1);
{
var G__76474 = cljs.core.chunk_rest.call(null,seq__76441__$1);
var G__76475 = c__2754__auto__;
var G__76476 = cljs.core.count.call(null,c__2754__auto__);
var G__76477 = 0;
seq__76441 = G__76474;
chunk__76442 = G__76475;
count__76443 = G__76476;
i__76444 = G__76477;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__76441__$1);
goog.events.unlisten(v,"click",symlog.cljs.app.handlers.narrator.TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__76478 = cljs.core.next.call(null,seq__76441__$1);
var G__76479 = null;
var G__76480 = 0;
var G__76481 = 0;
seq__76441 = G__76478;
chunk__76442 = G__76479;
count__76443 = G__76480;
i__76444 = G__76481;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
}
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.state,1);
} else
{if(cljs.core._EQ_.call(null,1,cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.state)))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.state,0);
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.video.sequencer.rested)))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.video.sequencer.enabled)))
{symlog.cljs.app.handlers.narrator.video.style.opacity = .2;
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.video.sequencer.enabled,false);
} else
{symlog.cljs.app.handlers.narrator.video.style.opacity = 1;
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.video.sequencer.enabled,true);
}
} else
{symlog.cljs.app.handlers.narrator.tocRef.style.display = "none";
symlog.cljs.app.handlers.narrator.playButton.style.opacity = 0;
symlog.cljs.app.handlers.narrator.disableButton.style.opacity = 0;
var seq__76445_76482 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.nodeList);
var chunk__76446_76483 = null;
var count__76447_76484 = 0;
var i__76448_76485 = 0;
while(true){
if((i__76448_76485 < count__76447_76484))
{var v_76486 = cljs.core._nth.call(null,chunk__76446_76483,i__76448_76485);
goog.events.unlisten(v_76486,"click",symlog.cljs.app.handlers.narrator.TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__76487 = seq__76445_76482;
var G__76488 = chunk__76446_76483;
var G__76489 = count__76447_76484;
var G__76490 = (i__76448_76485 + 1);
seq__76445_76482 = G__76487;
chunk__76446_76483 = G__76488;
count__76447_76484 = G__76489;
i__76448_76485 = G__76490;
continue;
}
} else
{var temp__4092__auto___76491 = cljs.core.seq.call(null,seq__76445_76482);
if(temp__4092__auto___76491)
{var seq__76445_76492__$1 = temp__4092__auto___76491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76445_76492__$1))
{var c__2754__auto___76493 = cljs.core.chunk_first.call(null,seq__76445_76492__$1);
{
var G__76494 = cljs.core.chunk_rest.call(null,seq__76445_76492__$1);
var G__76495 = c__2754__auto___76493;
var G__76496 = cljs.core.count.call(null,c__2754__auto___76493);
var G__76497 = 0;
seq__76445_76482 = G__76494;
chunk__76446_76483 = G__76495;
count__76447_76484 = G__76496;
i__76448_76485 = G__76497;
continue;
}
} else
{var v_76498 = cljs.core.first.call(null,seq__76445_76492__$1);
goog.events.unlisten(v_76498,"click",symlog.cljs.app.handlers.narrator.TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__76499 = cljs.core.next.call(null,seq__76445_76492__$1);
var G__76500 = null;
var G__76501 = 0;
var G__76502 = 0;
seq__76445_76482 = G__76499;
chunk__76446_76483 = G__76500;
count__76447_76484 = G__76501;
i__76448_76485 = G__76502;
continue;
}
}
} else
{}
}
break;
}
goog.events.unlistenByKey(symlog.cljs.app.handlers.narrator.listener);
return symlog.cljs.app.handlers.narrator.video.sequencer.play();
}
} else
{return null;
}
}
});
symlog.cljs.app.handlers.narrator.TOChandler = (function TOChandler(evt){
if(cljs.core._EQ_.call(null,"endButton",evt.target.id))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.state,0);
symlog.cljs.app.handlers.narrator.tocRef.style.display = "none";
symlog.cljs.app.handlers.narrator.playButton.style.opacity = 0;
symlog.cljs.app.handlers.narrator.disableButton.style.opacity = 0;
var seq__76511_76519 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.nodeList);
var chunk__76512_76520 = null;
var count__76513_76521 = 0;
var i__76514_76522 = 0;
while(true){
if((i__76514_76522 < count__76513_76521))
{var v_76523 = cljs.core._nth.call(null,chunk__76512_76520,i__76514_76522);
goog.events.unlisten(v_76523,"click",TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__76524 = seq__76511_76519;
var G__76525 = chunk__76512_76520;
var G__76526 = count__76513_76521;
var G__76527 = (i__76514_76522 + 1);
seq__76511_76519 = G__76524;
chunk__76512_76520 = G__76525;
count__76513_76521 = G__76526;
i__76514_76522 = G__76527;
continue;
}
} else
{var temp__4092__auto___76528 = cljs.core.seq.call(null,seq__76511_76519);
if(temp__4092__auto___76528)
{var seq__76511_76529__$1 = temp__4092__auto___76528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76511_76529__$1))
{var c__2754__auto___76530 = cljs.core.chunk_first.call(null,seq__76511_76529__$1);
{
var G__76531 = cljs.core.chunk_rest.call(null,seq__76511_76529__$1);
var G__76532 = c__2754__auto___76530;
var G__76533 = cljs.core.count.call(null,c__2754__auto___76530);
var G__76534 = 0;
seq__76511_76519 = G__76531;
chunk__76512_76520 = G__76532;
count__76513_76521 = G__76533;
i__76514_76522 = G__76534;
continue;
}
} else
{var v_76535 = cljs.core.first.call(null,seq__76511_76529__$1);
goog.events.unlisten(v_76535,"click",TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__76536 = cljs.core.next.call(null,seq__76511_76529__$1);
var G__76537 = null;
var G__76538 = 0;
var G__76539 = 0;
seq__76511_76519 = G__76536;
chunk__76512_76520 = G__76537;
count__76513_76521 = G__76538;
i__76514_76522 = G__76539;
continue;
}
}
} else
{}
}
break;
}
goog.events.unlistenByKey(symlog.cljs.app.handlers.narrator.listener);
return symlog.cljs.app.handlers.narrator.video.sequencer.end();
} else
{if("\uFDD0:else")
{var frame = parseInt(evt.target.attributes.frame.value);
var time = (frame / symlog.cljs.app.handlers.narrator.FPS);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.state,0);
symlog.cljs.app.handlers.narrator.tocRef.style.display = "none";
symlog.cljs.app.handlers.narrator.playButton.style.opacity = 0;
symlog.cljs.app.handlers.narrator.disableButton.style.opacity = 0;
var seq__76515_76540 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.nodeList);
var chunk__76516_76541 = null;
var count__76517_76542 = 0;
var i__76518_76543 = 0;
while(true){
if((i__76518_76543 < count__76517_76542))
{var v_76544 = cljs.core._nth.call(null,chunk__76516_76541,i__76518_76543);
goog.events.unlisten(v_76544,"click",TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__76545 = seq__76515_76540;
var G__76546 = chunk__76516_76541;
var G__76547 = count__76517_76542;
var G__76548 = (i__76518_76543 + 1);
seq__76515_76540 = G__76545;
chunk__76516_76541 = G__76546;
count__76517_76542 = G__76547;
i__76518_76543 = G__76548;
continue;
}
} else
{var temp__4092__auto___76549 = cljs.core.seq.call(null,seq__76515_76540);
if(temp__4092__auto___76549)
{var seq__76515_76550__$1 = temp__4092__auto___76549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76515_76550__$1))
{var c__2754__auto___76551 = cljs.core.chunk_first.call(null,seq__76515_76550__$1);
{
var G__76552 = cljs.core.chunk_rest.call(null,seq__76515_76550__$1);
var G__76553 = c__2754__auto___76551;
var G__76554 = cljs.core.count.call(null,c__2754__auto___76551);
var G__76555 = 0;
seq__76515_76540 = G__76552;
chunk__76516_76541 = G__76553;
count__76517_76542 = G__76554;
i__76518_76543 = G__76555;
continue;
}
} else
{var v_76556 = cljs.core.first.call(null,seq__76515_76550__$1);
goog.events.unlisten(v_76556,"click",TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__76557 = cljs.core.next.call(null,seq__76515_76550__$1);
var G__76558 = null;
var G__76559 = 0;
var G__76560 = 0;
seq__76515_76540 = G__76557;
chunk__76516_76541 = G__76558;
count__76517_76542 = G__76559;
i__76518_76543 = G__76560;
continue;
}
}
} else
{}
}
break;
}
goog.events.unlistenByKey(symlog.cljs.app.handlers.narrator.listener);
symlog.cljs.app.handlers.narrator.video.currentTime = time;
symlog.cljs.app.handlers.narrator.video.sequencer.setStep(frame);
symlog.cljs.app.handlers.narrator.video.sequencer.clear();
return symlog.cljs.app.handlers.narrator.video.sequencer.play();
} else
{return null;
}
}
});
