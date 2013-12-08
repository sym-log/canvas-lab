goog.provide('symlog.cljs.app.handlers.narrator');
goog.require('cljs.core');
goog.require('symlog.cljs.app.elements');
symlog.cljs.app.handlers.narrator.FPS = symlog.cljs.app.elements.FPS;
symlog.cljs.app.handlers.narrator.ctxt = symlog.cljs.app.handlers.narrator;
symlog.cljs.app.handlers.narrator.init = (function init(){
symlog.cljs.app.handlers.narrator.disableButton = symlog.cljs.app.elements.narratorDisableButton;
symlog.cljs.app.handlers.narrator.disableTouchArea = symlog.cljs.app.elements.narratorDisableTouchArea;
symlog.cljs.app.handlers.narrator.playButton = symlog.cljs.app.elements.narratorPlayButton;
symlog.cljs.app.handlers.narrator.playTouchArea = symlog.cljs.app.elements.narratorPlayTouchArea;
symlog.cljs.app.handlers.narrator.skipButton = symlog.cljs.app.elements.narratorSkipButton;
symlog.cljs.app.handlers.narrator.skipTouchArea = symlog.cljs.app.elements.narratorSkipTouchArea;
symlog.cljs.app.handlers.narrator.video = symlog.cljs.app.elements.narratorVid;
symlog.cljs.app.handlers.narrator.tocsDiv = symlog.cljs.app.elements.narratorTOCsDiv;
symlog.cljs.app.handlers.narrator.container = symlog.cljs.app.elements.narratorDiv;
symlog.cljs.app.handlers.narrator.scenes = symlog.cljs.app.sequencers.narrator.sequencer.scenes;
symlog.cljs.app.handlers.narrator.sequencer = symlog.cljs.app.sequencers.narrator.sequencer;
symlog.cljs.app.handlers.narrator.controller = symlog.cljs.app.controller.main;
symlog.cljs.app.handlers.narrator.videoTouchHandler = (new symlog.cljs.app.handlers.narrator.screenTouchHandler());
goog.events.listen(symlog.cljs.app.handlers.narrator.playTouchArea,"click",symlog.cljs.app.handlers.narrator.videoTouchHandler.fire,true,symlog.cljs.app.handlers.narrator.ctxt);
var seq__65122 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.scenes);
var chunk__65123 = null;
var count__65124 = 0;
var i__65125 = 0;
while(true){
if((i__65125 < count__65124))
{var v = cljs.core._nth.call(null,chunk__65123,i__65125);
var handler_65134 = (new symlog.cljs.app.handlers.narrator.TOCToggleHandler(v));
v.handler = handler_65134;
goog.events.listen(v.call(null,"\uFDD0:playlabel"),"click",(new symlog.cljs.app.handlers.narrator.TOCLabelHandler(v.call(null,"\uFDD0:tIdx"),v)).fire);
goog.events.listen(v.call(null,"\uFDD0:playtoggle"),"click",v.handler.fire);
if((cljs.core.count.call(null,v.call(null,"\uFDD0:tocNodes")) > 0))
{var seq__65126_65135 = cljs.core.seq.call(null,v.call(null,"\uFDD0:tocNodes"));
var chunk__65127_65136 = null;
var count__65128_65137 = 0;
var i__65129_65138 = 0;
while(true){
if((i__65129_65138 < count__65128_65137))
{var x_65139 = cljs.core._nth.call(null,chunk__65127_65136,i__65129_65138);
goog.events.listen(x_65139,"click",(new symlog.cljs.app.handlers.narrator.inlineTOChandler(parseInt(x_65139.attributes.frame.value),symlog.cljs.app.handlers.narrator.FPS,v.call(null,"\uFDD0:toc"))).fire);
{
var G__65140 = seq__65126_65135;
var G__65141 = chunk__65127_65136;
var G__65142 = count__65128_65137;
var G__65143 = (i__65129_65138 + 1);
seq__65126_65135 = G__65140;
chunk__65127_65136 = G__65141;
count__65128_65137 = G__65142;
i__65129_65138 = G__65143;
continue;
}
} else
{var temp__4092__auto___65144 = cljs.core.seq.call(null,seq__65126_65135);
if(temp__4092__auto___65144)
{var seq__65126_65145__$1 = temp__4092__auto___65144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65126_65145__$1))
{var c__2754__auto___65146 = cljs.core.chunk_first.call(null,seq__65126_65145__$1);
{
var G__65147 = cljs.core.chunk_rest.call(null,seq__65126_65145__$1);
var G__65148 = c__2754__auto___65146;
var G__65149 = cljs.core.count.call(null,c__2754__auto___65146);
var G__65150 = 0;
seq__65126_65135 = G__65147;
chunk__65127_65136 = G__65148;
count__65128_65137 = G__65149;
i__65129_65138 = G__65150;
continue;
}
} else
{var x_65151 = cljs.core.first.call(null,seq__65126_65145__$1);
goog.events.listen(x_65151,"click",(new symlog.cljs.app.handlers.narrator.inlineTOChandler(parseInt(x_65151.attributes.frame.value),symlog.cljs.app.handlers.narrator.FPS,v.call(null,"\uFDD0:toc"))).fire);
{
var G__65152 = cljs.core.next.call(null,seq__65126_65145__$1);
var G__65153 = null;
var G__65154 = 0;
var G__65155 = 0;
seq__65126_65135 = G__65152;
chunk__65127_65136 = G__65153;
count__65128_65137 = G__65154;
i__65129_65138 = G__65155;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__65156 = seq__65122;
var G__65157 = chunk__65123;
var G__65158 = count__65124;
var G__65159 = (i__65125 + 1);
seq__65122 = G__65156;
chunk__65123 = G__65157;
count__65124 = G__65158;
i__65125 = G__65159;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__65122);
if(temp__4092__auto__)
{var seq__65122__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65122__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__65122__$1);
{
var G__65160 = cljs.core.chunk_rest.call(null,seq__65122__$1);
var G__65161 = c__2754__auto__;
var G__65162 = cljs.core.count.call(null,c__2754__auto__);
var G__65163 = 0;
seq__65122 = G__65160;
chunk__65123 = G__65161;
count__65124 = G__65162;
i__65125 = G__65163;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__65122__$1);
var handler_65164 = (new symlog.cljs.app.handlers.narrator.TOCToggleHandler(v));
v.handler = handler_65164;
goog.events.listen(v.call(null,"\uFDD0:playlabel"),"click",(new symlog.cljs.app.handlers.narrator.TOCLabelHandler(v.call(null,"\uFDD0:tIdx"),v)).fire);
goog.events.listen(v.call(null,"\uFDD0:playtoggle"),"click",v.handler.fire);
if((cljs.core.count.call(null,v.call(null,"\uFDD0:tocNodes")) > 0))
{var seq__65130_65165 = cljs.core.seq.call(null,v.call(null,"\uFDD0:tocNodes"));
var chunk__65131_65166 = null;
var count__65132_65167 = 0;
var i__65133_65168 = 0;
while(true){
if((i__65133_65168 < count__65132_65167))
{var x_65169 = cljs.core._nth.call(null,chunk__65131_65166,i__65133_65168);
goog.events.listen(x_65169,"click",(new symlog.cljs.app.handlers.narrator.inlineTOChandler(parseInt(x_65169.attributes.frame.value),symlog.cljs.app.handlers.narrator.FPS,v.call(null,"\uFDD0:toc"))).fire);
{
var G__65170 = seq__65130_65165;
var G__65171 = chunk__65131_65166;
var G__65172 = count__65132_65167;
var G__65173 = (i__65133_65168 + 1);
seq__65130_65165 = G__65170;
chunk__65131_65166 = G__65171;
count__65132_65167 = G__65172;
i__65133_65168 = G__65173;
continue;
}
} else
{var temp__4092__auto___65174__$1 = cljs.core.seq.call(null,seq__65130_65165);
if(temp__4092__auto___65174__$1)
{var seq__65130_65175__$1 = temp__4092__auto___65174__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65130_65175__$1))
{var c__2754__auto___65176 = cljs.core.chunk_first.call(null,seq__65130_65175__$1);
{
var G__65177 = cljs.core.chunk_rest.call(null,seq__65130_65175__$1);
var G__65178 = c__2754__auto___65176;
var G__65179 = cljs.core.count.call(null,c__2754__auto___65176);
var G__65180 = 0;
seq__65130_65165 = G__65177;
chunk__65131_65166 = G__65178;
count__65132_65167 = G__65179;
i__65133_65168 = G__65180;
continue;
}
} else
{var x_65181 = cljs.core.first.call(null,seq__65130_65175__$1);
goog.events.listen(x_65181,"click",(new symlog.cljs.app.handlers.narrator.inlineTOChandler(parseInt(x_65181.attributes.frame.value),symlog.cljs.app.handlers.narrator.FPS,v.call(null,"\uFDD0:toc"))).fire);
{
var G__65182 = cljs.core.next.call(null,seq__65130_65175__$1);
var G__65183 = null;
var G__65184 = 0;
var G__65185 = 0;
seq__65130_65165 = G__65182;
chunk__65131_65166 = G__65183;
count__65132_65167 = G__65184;
i__65133_65168 = G__65185;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__65186 = cljs.core.next.call(null,seq__65122__$1);
var G__65187 = null;
var G__65188 = 0;
var G__65189 = 0;
seq__65122 = G__65186;
chunk__65123 = G__65187;
count__65124 = G__65188;
i__65125 = G__65189;
continue;
}
}
} else
{return null;
}
}
break;
}
});
symlog.cljs.app.handlers.narrator.screenTouchHandler = (function screenTouchHandler(){
var this$ = this;
this$.state = cljs.core.atom.call(null,0);
this$.disableButtonListener = cljs.core.atom.call(null,null);
this$.skipButtonListener = cljs.core.atom.call(null,null);
this$.switchOff = (function (){
cljs.core.reset_BANG_.call(null,this$.state,0);
symlog.cljs.app.handlers.narrator.playButton.style.opacity = 0;
symlog.cljs.app.handlers.narrator.disableButton.style.opacity = 0;
symlog.cljs.app.handlers.narrator.skipButton.style.opacity = 0;
symlog.cljs.app.handlers.narrator.tocsDiv.style.display = "none";
symlog.cljs.app.handlers.narrator.scenes.call(null,cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.sequencer.scene)).call(null,"\uFDD0:toc").style.display = "none";
goog.events.unlistenByKey(this$.disableButtonListener);
return goog.events.unlistenByKey(this$.skipButtonListener);
});
this$.fire = (function (evt){
if(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,this$.state)))
{cljs.core.reset_BANG_.call(null,this$.state,1);
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.sequencer.rested)))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.sequencer.enabled)))
{symlog.cljs.app.handlers.narrator.video.style.opacity = .5;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.sequencer.enabled,false);
var seq__65206 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.scenes);
var chunk__65207 = null;
var count__65208 = 0;
var i__65209 = 0;
while(true){
if((i__65209 < count__65208))
{var v = cljs.core._nth.call(null,chunk__65207,i__65209);
v.handler.switchOff();
{
var G__65222 = seq__65206;
var G__65223 = chunk__65207;
var G__65224 = count__65208;
var G__65225 = (i__65209 + 1);
seq__65206 = G__65222;
chunk__65207 = G__65223;
count__65208 = G__65224;
i__65209 = G__65225;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__65206);
if(temp__4092__auto__)
{var seq__65206__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65206__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__65206__$1);
{
var G__65226 = cljs.core.chunk_rest.call(null,seq__65206__$1);
var G__65227 = c__2754__auto__;
var G__65228 = cljs.core.count.call(null,c__2754__auto__);
var G__65229 = 0;
seq__65206 = G__65226;
chunk__65207 = G__65227;
count__65208 = G__65228;
i__65209 = G__65229;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__65206__$1);
v.handler.switchOff();
{
var G__65230 = cljs.core.next.call(null,seq__65206__$1);
var G__65231 = null;
var G__65232 = 0;
var G__65233 = 0;
seq__65206 = G__65230;
chunk__65207 = G__65231;
count__65208 = G__65232;
i__65209 = G__65233;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{symlog.cljs.app.handlers.narrator.video.style.opacity = 1;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.sequencer.enabled,true);
var seq__65210 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.scenes);
var chunk__65211 = null;
var count__65212 = 0;
var i__65213 = 0;
while(true){
if((i__65213 < count__65212))
{var v = cljs.core._nth.call(null,chunk__65211,i__65213);
v.handler.switchOn();
{
var G__65234 = seq__65210;
var G__65235 = chunk__65211;
var G__65236 = count__65212;
var G__65237 = (i__65213 + 1);
seq__65210 = G__65234;
chunk__65211 = G__65235;
count__65212 = G__65236;
i__65213 = G__65237;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__65210);
if(temp__4092__auto__)
{var seq__65210__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65210__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__65210__$1);
{
var G__65238 = cljs.core.chunk_rest.call(null,seq__65210__$1);
var G__65239 = c__2754__auto__;
var G__65240 = cljs.core.count.call(null,c__2754__auto__);
var G__65241 = 0;
seq__65210 = G__65238;
chunk__65211 = G__65239;
count__65212 = G__65240;
i__65213 = G__65241;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__65210__$1);
v.handler.switchOn();
{
var G__65242 = cljs.core.next.call(null,seq__65210__$1);
var G__65243 = null;
var G__65244 = 0;
var G__65245 = 0;
seq__65210 = G__65242;
chunk__65211 = G__65243;
count__65212 = G__65244;
i__65213 = G__65245;
continue;
}
}
} else
{return null;
}
}
break;
}
}
} else
{symlog.cljs.app.handlers.narrator.sequencer.pause();
symlog.cljs.app.handlers.narrator.playButton.style.opacity = 1;
symlog.cljs.app.handlers.narrator.disableButton.style.opacity = 1;
symlog.cljs.app.handlers.narrator.skipButton.style.opacity = 1;
symlog.cljs.app.handlers.narrator.tocsDiv.style.display = "inline";
symlog.cljs.app.handlers.narrator.scenes.call(null,cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.sequencer.scene)).call(null,"\uFDD0:toc").style.display = "inline";
this$.disableButtonListener = goog.events.listenOnce(symlog.cljs.app.handlers.narrator.disableTouchArea,"click",symlog.cljs.app.handlers.narrator.disableButtonHandler);
return this$.skipButtonListener = goog.events.listenOnce(symlog.cljs.app.handlers.narrator.skipTouchArea,"click",symlog.cljs.app.handlers.narrator.skipButtonHandler);
}
} else
{if(cljs.core._EQ_.call(null,1,cljs.core.deref.call(null,this$.state)))
{cljs.core.reset_BANG_.call(null,this$.state,0);
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.sequencer.rested)))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.sequencer.enabled)))
{symlog.cljs.app.handlers.narrator.video.style.opacity = .2;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.sequencer.enabled,false);
var seq__65214 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.scenes);
var chunk__65215 = null;
var count__65216 = 0;
var i__65217 = 0;
while(true){
if((i__65217 < count__65216))
{var v = cljs.core._nth.call(null,chunk__65215,i__65217);
v.handler.switchOff();
{
var G__65246 = seq__65214;
var G__65247 = chunk__65215;
var G__65248 = count__65216;
var G__65249 = (i__65217 + 1);
seq__65214 = G__65246;
chunk__65215 = G__65247;
count__65216 = G__65248;
i__65217 = G__65249;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__65214);
if(temp__4092__auto__)
{var seq__65214__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65214__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__65214__$1);
{
var G__65250 = cljs.core.chunk_rest.call(null,seq__65214__$1);
var G__65251 = c__2754__auto__;
var G__65252 = cljs.core.count.call(null,c__2754__auto__);
var G__65253 = 0;
seq__65214 = G__65250;
chunk__65215 = G__65251;
count__65216 = G__65252;
i__65217 = G__65253;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__65214__$1);
v.handler.switchOff();
{
var G__65254 = cljs.core.next.call(null,seq__65214__$1);
var G__65255 = null;
var G__65256 = 0;
var G__65257 = 0;
seq__65214 = G__65254;
chunk__65215 = G__65255;
count__65216 = G__65256;
i__65217 = G__65257;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{symlog.cljs.app.handlers.narrator.video.style.opacity = 1;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.sequencer.enabled,true);
var seq__65218 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.scenes);
var chunk__65219 = null;
var count__65220 = 0;
var i__65221 = 0;
while(true){
if((i__65221 < count__65220))
{var v = cljs.core._nth.call(null,chunk__65219,i__65221);
v.handler.switchOn();
{
var G__65258 = seq__65218;
var G__65259 = chunk__65219;
var G__65260 = count__65220;
var G__65261 = (i__65221 + 1);
seq__65218 = G__65258;
chunk__65219 = G__65259;
count__65220 = G__65260;
i__65221 = G__65261;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__65218);
if(temp__4092__auto__)
{var seq__65218__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65218__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__65218__$1);
{
var G__65262 = cljs.core.chunk_rest.call(null,seq__65218__$1);
var G__65263 = c__2754__auto__;
var G__65264 = cljs.core.count.call(null,c__2754__auto__);
var G__65265 = 0;
seq__65218 = G__65262;
chunk__65219 = G__65263;
count__65220 = G__65264;
i__65221 = G__65265;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__65218__$1);
v.handler.switchOn();
{
var G__65266 = cljs.core.next.call(null,seq__65218__$1);
var G__65267 = null;
var G__65268 = 0;
var G__65269 = 0;
seq__65218 = G__65266;
chunk__65219 = G__65267;
count__65220 = G__65268;
i__65221 = G__65269;
continue;
}
}
} else
{return null;
}
}
break;
}
}
} else
{symlog.cljs.app.handlers.narrator.tocsDiv.style.display = "none";
symlog.cljs.app.handlers.narrator.scenes.call(null,cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.sequencer.scene)).call(null,"\uFDD0:toc").style.display = "none";
symlog.cljs.app.handlers.narrator.playButton.style.opacity = 0;
symlog.cljs.app.handlers.narrator.disableButton.style.opacity = 0;
symlog.cljs.app.handlers.narrator.skipButton.style.opacity = 0;
goog.events.unlistenByKey(this$.disableButtonListener);
goog.events.unlistenByKey(this$.skipButtonListener);
return symlog.cljs.app.handlers.narrator.sequencer.play();
}
} else
{return null;
}
}
});
return this$;
});
symlog.cljs.app.handlers.narrator.inlineTOChandler = (function inlineTOChandler(frameRef,frameRate,toc){
var this$ = this;
this$.toc = toc;
this$.frame = frameRef;
this$.time = (frameRef / frameRate);
this$.fire = (function (evt){
toc.style.display = "none";
symlog.cljs.app.handlers.narrator.videoTouchHandler.switchOff();
symlog.cljs.app.handlers.narrator.video.currentTime = this$.time;
symlog.cljs.app.handlers.narrator.sequencer.setStep(this$.frame);
symlog.cljs.app.handlers.narrator.sequencer.clear();
return symlog.cljs.app.handlers.narrator.sequencer.play();
});
return this$;
});
symlog.cljs.app.handlers.narrator.disableButtonHandler = (function disableButtonHandler(){
symlog.cljs.app.handlers.narrator.videoTouchHandler.switchOff();
symlog.cljs.app.handlers.narrator.container.style.top = "9px";
symlog.cljs.app.handlers.narrator.container.style.left = "310px";
symlog.cljs.app.handlers.narrator.container.style.height = "90px";
symlog.cljs.app.handlers.narrator.container.style.width = "90px";
symlog.cljs.app.handlers.narrator.video.style.opacity = .5;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.video.sequencer.rested,true);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.video.sequencer.enabled,false);
symlog.cljs.app.handlers.narrator.video.sequencer.stop();
var seq__65274_65278 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.scenes);
var chunk__65275_65279 = null;
var count__65276_65280 = 0;
var i__65277_65281 = 0;
while(true){
if((i__65277_65281 < count__65276_65280))
{var v_65282 = cljs.core._nth.call(null,chunk__65275_65279,i__65277_65281);
v_65282.handler.switchOff();
{
var G__65283 = seq__65274_65278;
var G__65284 = chunk__65275_65279;
var G__65285 = count__65276_65280;
var G__65286 = (i__65277_65281 + 1);
seq__65274_65278 = G__65283;
chunk__65275_65279 = G__65284;
count__65276_65280 = G__65285;
i__65277_65281 = G__65286;
continue;
}
} else
{var temp__4092__auto___65287 = cljs.core.seq.call(null,seq__65274_65278);
if(temp__4092__auto___65287)
{var seq__65274_65288__$1 = temp__4092__auto___65287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65274_65288__$1))
{var c__2754__auto___65289 = cljs.core.chunk_first.call(null,seq__65274_65288__$1);
{
var G__65290 = cljs.core.chunk_rest.call(null,seq__65274_65288__$1);
var G__65291 = c__2754__auto___65289;
var G__65292 = cljs.core.count.call(null,c__2754__auto___65289);
var G__65293 = 0;
seq__65274_65278 = G__65290;
chunk__65275_65279 = G__65291;
count__65276_65280 = G__65292;
i__65277_65281 = G__65293;
continue;
}
} else
{var v_65294 = cljs.core.first.call(null,seq__65274_65288__$1);
v_65294.handler.switchOff();
{
var G__65295 = cljs.core.next.call(null,seq__65274_65288__$1);
var G__65296 = null;
var G__65297 = 0;
var G__65298 = 0;
seq__65274_65278 = G__65295;
chunk__65275_65279 = G__65296;
count__65276_65280 = G__65297;
i__65277_65281 = G__65298;
continue;
}
}
} else
{}
}
break;
}
return symlog.cljs.app.handlers.narrator.controller.donext("narrator");
});
symlog.cljs.app.handlers.narrator.sendHome = (function sendHome(){
symlog.cljs.app.handlers.narrator.container.style.top = "9px";
symlog.cljs.app.handlers.narrator.container.style.left = "310px";
symlog.cljs.app.handlers.narrator.container.style.height = "90px";
symlog.cljs.app.handlers.narrator.container.style.width = "90px";
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.video.sequencer.rested,true);
});
symlog.cljs.app.handlers.narrator.skipButtonHandler = (function skipButtonHandler(){
symlog.cljs.app.handlers.narrator.videoTouchHandler.switchOff();
return symlog.cljs.app.handlers.narrator.video.sequencer.end();
});
symlog.cljs.app.handlers.narrator.TOCLabelHandler = (function TOCLabelHandler(time,scene){
var this$ = this;
this$.fire = (function (evt){
cljs.core.reset_BANG_.call(null,scene.call(null,"\uFDD0:enabled"),true);
symlog.cljs.app.handlers.narrator.controller.stop();
symlog.cljs.app.handlers.narrator.videoTouchHandler.switchOff();
symlog.cljs.app.handlers.narrator.sendHome.call(null);
symlog.cljs.app.handlers.narrator.controller.reset(time);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.controller.step,scene.call(null,"\uFDD0:sceneNo"));
return symlog.cljs.app.handlers.narrator.controller.play();
});
return this$;
});
symlog.cljs.app.handlers.narrator.TOCToggleHandler = (function TOCToggleHandler(scene){
var this$ = this;
this$.state = cljs.core.atom.call(null,0);
this$.fire = (function (evt){
evt.preventDefault();
if(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,this$.state)))
{cljs.core.reset_BANG_.call(null,this$.state,1);
scene.call(null,"\uFDD0:playlink").style.opacity = .2;
return cljs.core.reset_BANG_.call(null,scene.call(null,"\uFDD0:enabled"),false);
} else
{cljs.core.reset_BANG_.call(null,this$.state,0);
scene.call(null,"\uFDD0:playlink").style.opacity = 1;
return cljs.core.reset_BANG_.call(null,scene.call(null,"\uFDD0:enabled"),true);
}
});
this$.switchOff = (function (){
cljs.core.reset_BANG_.call(null,this$.state,1);
scene.call(null,"\uFDD0:playlink").style.opacity = .2;
return cljs.core.reset_BANG_.call(null,scene.call(null,"\uFDD0:enabled"),false);
});
this$.switchOn = (function (){
cljs.core.reset_BANG_.call(null,this$.state,0);
scene.call(null,"\uFDD0:playlink").style.opacity = 1;
return cljs.core.reset_BANG_.call(null,scene.call(null,"\uFDD0:enabled"),true);
});
return this$;
});
