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
symlog.cljs.app.handlers.narrator.skipButton = symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorSkipButton");
symlog.cljs.app.handlers.narrator.skipTouchArea = symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorSkipTouchArea");
symlog.cljs.app.handlers.narrator.video = symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorVid");
symlog.cljs.app.handlers.narrator.container = symlog.cljs.app.dom.elements.call(null,"\uFDD0:narratorDiv");
symlog.cljs.app.handlers.narrator.nodeList = null;
symlog.cljs.app.handlers.narrator.state = cljs.core.atom.call(null,0);
symlog.cljs.app.handlers.narrator.listener = null;
symlog.cljs.app.handlers.narrator.scenes = symlog.cljs.app.sequencers.narrator.sequencer.scenes;
symlog.cljs.app.handlers.narrator.sequencer = symlog.cljs.app.sequencers.narrator.sequencer;
symlog.cljs.app.handlers.narrator.controller = symlog.cljs.app.controller.main;
goog.events.listen(symlog.cljs.app.handlers.narrator.playTouchArea,"click",symlog.cljs.app.handlers.narrator.touchHandler,true,symlog.cljs.app.handlers.narrator.ctxt);
var seq__37931 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.scenes);
var chunk__37932 = null;
var count__37933 = 0;
var i__37934 = 0;
while(true){
if((i__37934 < count__37933))
{var v = cljs.core._nth.call(null,chunk__37932,i__37934);
var handler_37935 = (new symlog.cljs.app.handlers.narrator.tocLabelHandler());
v.handler = handler_37935;
goog.events.listen(v.call(null,"\uFDD0:playbutton"),"click",symlog.cljs.app.handlers.narrator.tocPlayButtonHandler);
goog.events.listen(v.call(null,"\uFDD0:playlabel"),"click",v.handler.fire);
{
var G__37936 = seq__37931;
var G__37937 = chunk__37932;
var G__37938 = count__37933;
var G__37939 = (i__37934 + 1);
seq__37931 = G__37936;
chunk__37932 = G__37937;
count__37933 = G__37938;
i__37934 = G__37939;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37931);
if(temp__4092__auto__)
{var seq__37931__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37931__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__37931__$1);
{
var G__37940 = cljs.core.chunk_rest.call(null,seq__37931__$1);
var G__37941 = c__2754__auto__;
var G__37942 = cljs.core.count.call(null,c__2754__auto__);
var G__37943 = 0;
seq__37931 = G__37940;
chunk__37932 = G__37941;
count__37933 = G__37942;
i__37934 = G__37943;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__37931__$1);
var handler_37944 = (new symlog.cljs.app.handlers.narrator.tocLabelHandler());
v.handler = handler_37944;
goog.events.listen(v.call(null,"\uFDD0:playbutton"),"click",symlog.cljs.app.handlers.narrator.tocPlayButtonHandler);
goog.events.listen(v.call(null,"\uFDD0:playlabel"),"click",v.handler.fire);
{
var G__37945 = cljs.core.next.call(null,seq__37931__$1);
var G__37946 = null;
var G__37947 = 0;
var G__37948 = 0;
seq__37931 = G__37945;
chunk__37932 = G__37946;
count__37933 = G__37947;
i__37934 = G__37948;
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
symlog.cljs.app.handlers.narrator.tocPlayButtonHandler = (function tocPlayButtonHandler(evt){
symlog.cljs.app.handlers.narrator.controller.stop();
if(cljs.core._EQ_.call(null,1,cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.state)))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.state,0);
symlog.cljs.app.handlers.narrator.playButton.style.opacity = 0;
symlog.cljs.app.handlers.narrator.disableButton.style.opacity = 0;
var seq__37954_37958 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.nodeList);
var chunk__37955_37959 = null;
var count__37956_37960 = 0;
var i__37957_37961 = 0;
while(true){
if((i__37957_37961 < count__37956_37960))
{var v_37962 = cljs.core._nth.call(null,chunk__37955_37959,i__37957_37961);
goog.events.unlisten(v_37962,"click",symlog.cljs.app.handlers.narrator.TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__37963 = seq__37954_37958;
var G__37964 = chunk__37955_37959;
var G__37965 = count__37956_37960;
var G__37966 = (i__37957_37961 + 1);
seq__37954_37958 = G__37963;
chunk__37955_37959 = G__37964;
count__37956_37960 = G__37965;
i__37957_37961 = G__37966;
continue;
}
} else
{var temp__4092__auto___37967 = cljs.core.seq.call(null,seq__37954_37958);
if(temp__4092__auto___37967)
{var seq__37954_37968__$1 = temp__4092__auto___37967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37954_37968__$1))
{var c__2754__auto___37969 = cljs.core.chunk_first.call(null,seq__37954_37968__$1);
{
var G__37970 = cljs.core.chunk_rest.call(null,seq__37954_37968__$1);
var G__37971 = c__2754__auto___37969;
var G__37972 = cljs.core.count.call(null,c__2754__auto___37969);
var G__37973 = 0;
seq__37954_37958 = G__37970;
chunk__37955_37959 = G__37971;
count__37956_37960 = G__37972;
i__37957_37961 = G__37973;
continue;
}
} else
{var v_37974 = cljs.core.first.call(null,seq__37954_37968__$1);
goog.events.unlisten(v_37974,"click",symlog.cljs.app.handlers.narrator.TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__37975 = cljs.core.next.call(null,seq__37954_37968__$1);
var G__37976 = null;
var G__37977 = 0;
var G__37978 = 0;
seq__37954_37958 = G__37975;
chunk__37955_37959 = G__37976;
count__37956_37960 = G__37977;
i__37957_37961 = G__37978;
continue;
}
}
} else
{}
}
break;
}
goog.events.unlistenByKey(symlog.cljs.app.handlers.narrator.listener);
} else
{}
symlog.cljs.app.handlers.narrator.controller.reset(parseInt(evt.currentTarget.parentNode.attributes.tidx.value));
cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.controller.step,parseInt(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__37949_SHARP_){
return goog.string.isNumeric(p1__37949_SHARP_);
}),evt.currentTarget.parentNode.id))));
return symlog.cljs.app.handlers.narrator.controller.play();
});
symlog.cljs.app.handlers.narrator.tocLabelHandler = (function tocLabelHandler(){
var this$ = this;
this$.state = cljs.core.atom.call(null,0);
this$.fire = (function (evt){
var scene = symlog.cljs.app.handlers.narrator.scenes.call(null,parseInt(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__37979_SHARP_){
return goog.string.isNumeric(p1__37979_SHARP_);
}),evt.currentTarget.parentNode.id))));
if(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,this$.state)))
{cljs.core.reset_BANG_.call(null,this$.state,1);
scene.call(null,"\uFDD0:playbutton").style.display = "none";
scene.call(null,"\uFDD0:playlabel").style.opacity = .5;
return cljs.core.reset_BANG_.call(null,scene.call(null,"\uFDD0:enabled"),false);
} else
{cljs.core.reset_BANG_.call(null,this$.state,0);
scene.call(null,"\uFDD0:playbutton").style.display = "inline";
scene.call(null,"\uFDD0:playlabel").style.opacity = 1;
return cljs.core.reset_BANG_.call(null,scene.call(null,"\uFDD0:enabled"),true);
}
});
return this$;
});
symlog.cljs.app.handlers.narrator.touchHandler = (function touchHandler(evt){
if(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.state)))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.sequencer.rested)))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.sequencer.enabled)))
{symlog.cljs.app.handlers.narrator.video.style.opacity = .5;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.sequencer.enabled,false);
var seq__38012_38044 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.scenes);
var chunk__38013_38045 = null;
var count__38014_38046 = 0;
var i__38015_38047 = 0;
while(true){
if((i__38015_38047 < count__38014_38046))
{var v_38048 = cljs.core._nth.call(null,chunk__38013_38045,i__38015_38047);
v_38048.call(null,"\uFDD0:playbutton").style.display = "none";
v_38048.call(null,"\uFDD0:playlabel").style.opacity = .5;
cljs.core.reset_BANG_.call(null,v_38048.call(null,"\uFDD0:enabled"),false);
cljs.core.reset_BANG_.call(null,v_38048.handler.state,1);
{
var G__38049 = seq__38012_38044;
var G__38050 = chunk__38013_38045;
var G__38051 = count__38014_38046;
var G__38052 = (i__38015_38047 + 1);
seq__38012_38044 = G__38049;
chunk__38013_38045 = G__38050;
count__38014_38046 = G__38051;
i__38015_38047 = G__38052;
continue;
}
} else
{var temp__4092__auto___38053 = cljs.core.seq.call(null,seq__38012_38044);
if(temp__4092__auto___38053)
{var seq__38012_38054__$1 = temp__4092__auto___38053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38012_38054__$1))
{var c__2754__auto___38055 = cljs.core.chunk_first.call(null,seq__38012_38054__$1);
{
var G__38056 = cljs.core.chunk_rest.call(null,seq__38012_38054__$1);
var G__38057 = c__2754__auto___38055;
var G__38058 = cljs.core.count.call(null,c__2754__auto___38055);
var G__38059 = 0;
seq__38012_38044 = G__38056;
chunk__38013_38045 = G__38057;
count__38014_38046 = G__38058;
i__38015_38047 = G__38059;
continue;
}
} else
{var v_38060 = cljs.core.first.call(null,seq__38012_38054__$1);
v_38060.call(null,"\uFDD0:playbutton").style.display = "none";
v_38060.call(null,"\uFDD0:playlabel").style.opacity = .5;
cljs.core.reset_BANG_.call(null,v_38060.call(null,"\uFDD0:enabled"),false);
cljs.core.reset_BANG_.call(null,v_38060.handler.state,1);
{
var G__38061 = cljs.core.next.call(null,seq__38012_38054__$1);
var G__38062 = null;
var G__38063 = 0;
var G__38064 = 0;
seq__38012_38044 = G__38061;
chunk__38013_38045 = G__38062;
count__38014_38046 = G__38063;
i__38015_38047 = G__38064;
continue;
}
}
} else
{}
}
break;
}
} else
{symlog.cljs.app.handlers.narrator.video.style.opacity = 1;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.sequencer.enabled,true);
var seq__38016_38065 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.scenes);
var chunk__38017_38066 = null;
var count__38018_38067 = 0;
var i__38019_38068 = 0;
while(true){
if((i__38019_38068 < count__38018_38067))
{var v_38069 = cljs.core._nth.call(null,chunk__38017_38066,i__38019_38068);
v_38069.call(null,"\uFDD0:playbutton").style.display = "inline";
v_38069.call(null,"\uFDD0:playlabel").style.opacity = 1;
cljs.core.reset_BANG_.call(null,v_38069.call(null,"\uFDD0:enabled"),true);
cljs.core.reset_BANG_.call(null,v_38069.handler.state,0);
{
var G__38070 = seq__38016_38065;
var G__38071 = chunk__38017_38066;
var G__38072 = count__38018_38067;
var G__38073 = (i__38019_38068 + 1);
seq__38016_38065 = G__38070;
chunk__38017_38066 = G__38071;
count__38018_38067 = G__38072;
i__38019_38068 = G__38073;
continue;
}
} else
{var temp__4092__auto___38074 = cljs.core.seq.call(null,seq__38016_38065);
if(temp__4092__auto___38074)
{var seq__38016_38075__$1 = temp__4092__auto___38074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38016_38075__$1))
{var c__2754__auto___38076 = cljs.core.chunk_first.call(null,seq__38016_38075__$1);
{
var G__38077 = cljs.core.chunk_rest.call(null,seq__38016_38075__$1);
var G__38078 = c__2754__auto___38076;
var G__38079 = cljs.core.count.call(null,c__2754__auto___38076);
var G__38080 = 0;
seq__38016_38065 = G__38077;
chunk__38017_38066 = G__38078;
count__38018_38067 = G__38079;
i__38019_38068 = G__38080;
continue;
}
} else
{var v_38081 = cljs.core.first.call(null,seq__38016_38075__$1);
v_38081.call(null,"\uFDD0:playbutton").style.display = "inline";
v_38081.call(null,"\uFDD0:playlabel").style.opacity = 1;
cljs.core.reset_BANG_.call(null,v_38081.call(null,"\uFDD0:enabled"),true);
cljs.core.reset_BANG_.call(null,v_38081.handler.state,0);
{
var G__38082 = cljs.core.next.call(null,seq__38016_38075__$1);
var G__38083 = null;
var G__38084 = 0;
var G__38085 = 0;
seq__38016_38065 = G__38082;
chunk__38017_38066 = G__38083;
count__38018_38067 = G__38084;
i__38019_38068 = G__38085;
continue;
}
}
} else
{}
}
break;
}
}
} else
{symlog.cljs.app.handlers.narrator.sequencer.pause();
symlog.cljs.app.handlers.narrator.playButton.style.opacity = 1;
symlog.cljs.app.handlers.narrator.disableButton.style.opacity = 1;
symlog.cljs.app.handlers.narrator.skipButton.style.opacity = 1;
symlog.cljs.app.handlers.narrator.nodeList = symlog.cljs.util.nodelist__GT_coll.call(null,goog.dom.getElementsByClass("toc",symlog.cljs.app.handlers.narrator.scenes.call(null,cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.sequencer.scene)).call(null,"\uFDD0:toc")));
var seq__38020_38086 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.nodeList);
var chunk__38021_38087 = null;
var count__38022_38088 = 0;
var i__38023_38089 = 0;
while(true){
if((i__38023_38089 < count__38022_38088))
{var v_38090 = cljs.core._nth.call(null,chunk__38021_38087,i__38023_38089);
goog.events.listenOnce(v_38090,"click",symlog.cljs.app.handlers.narrator.TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__38091 = seq__38020_38086;
var G__38092 = chunk__38021_38087;
var G__38093 = count__38022_38088;
var G__38094 = (i__38023_38089 + 1);
seq__38020_38086 = G__38091;
chunk__38021_38087 = G__38092;
count__38022_38088 = G__38093;
i__38023_38089 = G__38094;
continue;
}
} else
{var temp__4092__auto___38095 = cljs.core.seq.call(null,seq__38020_38086);
if(temp__4092__auto___38095)
{var seq__38020_38096__$1 = temp__4092__auto___38095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38020_38096__$1))
{var c__2754__auto___38097 = cljs.core.chunk_first.call(null,seq__38020_38096__$1);
{
var G__38098 = cljs.core.chunk_rest.call(null,seq__38020_38096__$1);
var G__38099 = c__2754__auto___38097;
var G__38100 = cljs.core.count.call(null,c__2754__auto___38097);
var G__38101 = 0;
seq__38020_38086 = G__38098;
chunk__38021_38087 = G__38099;
count__38022_38088 = G__38100;
i__38023_38089 = G__38101;
continue;
}
} else
{var v_38102 = cljs.core.first.call(null,seq__38020_38096__$1);
goog.events.listenOnce(v_38102,"click",symlog.cljs.app.handlers.narrator.TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__38103 = cljs.core.next.call(null,seq__38020_38096__$1);
var G__38104 = null;
var G__38105 = 0;
var G__38106 = 0;
seq__38020_38086 = G__38103;
chunk__38021_38087 = G__38104;
count__38022_38088 = G__38105;
i__38023_38089 = G__38106;
continue;
}
}
} else
{}
}
break;
}
symlog.cljs.app.handlers.narrator.scenes.call(null,cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.sequencer.scene)).call(null,"\uFDD0:toc").style.display = "inline";
symlog.cljs.app.handlers.narrator.listener = goog.events.listen(symlog.cljs.app.handlers.narrator.disableTouchArea,"click",(function (){
symlog.cljs.app.handlers.narrator.playButton.style.opacity = 0;
symlog.cljs.app.handlers.narrator.disableButton.style.opacity = 0;
symlog.cljs.app.handlers.narrator.scenes.call(null,cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.sequencer.scene)).call(null,"\uFDD0:toc").style.display = "none";
symlog.cljs.app.handlers.narrator.video.style.opacity = 0;
symlog.cljs.app.handlers.narrator.container.style.top = "9px";
symlog.cljs.app.handlers.narrator.container.style.left = "310px";
symlog.cljs.app.handlers.narrator.container.style.height = "90px";
symlog.cljs.app.handlers.narrator.container.style.width = "90px";
symlog.cljs.app.handlers.narrator.video.style.opacity = .5;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.video.sequencer.rested,true);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.video.sequencer.enabled,false);
symlog.cljs.app.handlers.narrator.video.sequencer.stop();
var seq__38024_38107 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.scenes);
var chunk__38025_38108 = null;
var count__38026_38109 = 0;
var i__38027_38110 = 0;
while(true){
if((i__38027_38110 < count__38026_38109))
{var v_38111 = cljs.core._nth.call(null,chunk__38025_38108,i__38027_38110);
v_38111.call(null,"\uFDD0:playbutton").style.display = "none";
v_38111.call(null,"\uFDD0:playlabel").style.opacity = .5;
cljs.core.reset_BANG_.call(null,v_38111.handler.state,1);
cljs.core.reset_BANG_.call(null,v_38111.call(null,"\uFDD0:enabled"),false);
{
var G__38112 = seq__38024_38107;
var G__38113 = chunk__38025_38108;
var G__38114 = count__38026_38109;
var G__38115 = (i__38027_38110 + 1);
seq__38024_38107 = G__38112;
chunk__38025_38108 = G__38113;
count__38026_38109 = G__38114;
i__38027_38110 = G__38115;
continue;
}
} else
{var temp__4092__auto___38116 = cljs.core.seq.call(null,seq__38024_38107);
if(temp__4092__auto___38116)
{var seq__38024_38117__$1 = temp__4092__auto___38116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38024_38117__$1))
{var c__2754__auto___38118 = cljs.core.chunk_first.call(null,seq__38024_38117__$1);
{
var G__38119 = cljs.core.chunk_rest.call(null,seq__38024_38117__$1);
var G__38120 = c__2754__auto___38118;
var G__38121 = cljs.core.count.call(null,c__2754__auto___38118);
var G__38122 = 0;
seq__38024_38107 = G__38119;
chunk__38025_38108 = G__38120;
count__38026_38109 = G__38121;
i__38027_38110 = G__38122;
continue;
}
} else
{var v_38123 = cljs.core.first.call(null,seq__38024_38117__$1);
v_38123.call(null,"\uFDD0:playbutton").style.display = "none";
v_38123.call(null,"\uFDD0:playlabel").style.opacity = .5;
cljs.core.reset_BANG_.call(null,v_38123.handler.state,1);
cljs.core.reset_BANG_.call(null,v_38123.call(null,"\uFDD0:enabled"),false);
{
var G__38124 = cljs.core.next.call(null,seq__38024_38117__$1);
var G__38125 = null;
var G__38126 = 0;
var G__38127 = 0;
seq__38024_38107 = G__38124;
chunk__38025_38108 = G__38125;
count__38026_38109 = G__38126;
i__38027_38110 = G__38127;
continue;
}
}
} else
{}
}
break;
}
symlog.cljs.app.handlers.narrator.controller.donext("narrator");
goog.events.unlistenByKey(symlog.cljs.app.handlers.narrator.listener);
var seq__38028 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.nodeList);
var chunk__38029 = null;
var count__38030 = 0;
var i__38031 = 0;
while(true){
if((i__38031 < count__38030))
{var v = cljs.core._nth.call(null,chunk__38029,i__38031);
goog.events.unlisten(v,"click",symlog.cljs.app.handlers.narrator.TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__38128 = seq__38028;
var G__38129 = chunk__38029;
var G__38130 = count__38030;
var G__38131 = (i__38031 + 1);
seq__38028 = G__38128;
chunk__38029 = G__38129;
count__38030 = G__38130;
i__38031 = G__38131;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38028);
if(temp__4092__auto__)
{var seq__38028__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38028__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__38028__$1);
{
var G__38132 = cljs.core.chunk_rest.call(null,seq__38028__$1);
var G__38133 = c__2754__auto__;
var G__38134 = cljs.core.count.call(null,c__2754__auto__);
var G__38135 = 0;
seq__38028 = G__38132;
chunk__38029 = G__38133;
count__38030 = G__38134;
i__38031 = G__38135;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__38028__$1);
goog.events.unlisten(v,"click",symlog.cljs.app.handlers.narrator.TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__38136 = cljs.core.next.call(null,seq__38028__$1);
var G__38137 = null;
var G__38138 = 0;
var G__38139 = 0;
seq__38028 = G__38136;
chunk__38029 = G__38137;
count__38030 = G__38138;
i__38031 = G__38139;
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
if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.sequencer.rested)))
{if(cljs.core.truth_(cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.sequencer.enabled)))
{symlog.cljs.app.handlers.narrator.video.style.opacity = .2;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.sequencer.enabled,false);
var seq__38032 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.scenes);
var chunk__38033 = null;
var count__38034 = 0;
var i__38035 = 0;
while(true){
if((i__38035 < count__38034))
{var v = cljs.core._nth.call(null,chunk__38033,i__38035);
if(cljs.core.not.call(null,v.call(null,"\uFDD0:id").contains("sub")))
{v.call(null,"\uFDD0:playbutton").style.display = "none";
v.call(null,"\uFDD0:playlabel").style.opacity = .5;
cljs.core.reset_BANG_.call(null,v.call(null,"\uFDD0:enabled"),false);
cljs.core.reset_BANG_.call(null,v.handler.state,1);
} else
{}
{
var G__38140 = seq__38032;
var G__38141 = chunk__38033;
var G__38142 = count__38034;
var G__38143 = (i__38035 + 1);
seq__38032 = G__38140;
chunk__38033 = G__38141;
count__38034 = G__38142;
i__38035 = G__38143;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38032);
if(temp__4092__auto__)
{var seq__38032__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38032__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__38032__$1);
{
var G__38144 = cljs.core.chunk_rest.call(null,seq__38032__$1);
var G__38145 = c__2754__auto__;
var G__38146 = cljs.core.count.call(null,c__2754__auto__);
var G__38147 = 0;
seq__38032 = G__38144;
chunk__38033 = G__38145;
count__38034 = G__38146;
i__38035 = G__38147;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__38032__$1);
if(cljs.core.not.call(null,v.call(null,"\uFDD0:id").contains("sub")))
{v.call(null,"\uFDD0:playbutton").style.display = "none";
v.call(null,"\uFDD0:playlabel").style.opacity = .5;
cljs.core.reset_BANG_.call(null,v.call(null,"\uFDD0:enabled"),false);
cljs.core.reset_BANG_.call(null,v.handler.state,1);
} else
{}
{
var G__38148 = cljs.core.next.call(null,seq__38032__$1);
var G__38149 = null;
var G__38150 = 0;
var G__38151 = 0;
seq__38032 = G__38148;
chunk__38033 = G__38149;
count__38034 = G__38150;
i__38035 = G__38151;
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
var seq__38036 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.scenes);
var chunk__38037 = null;
var count__38038 = 0;
var i__38039 = 0;
while(true){
if((i__38039 < count__38038))
{var v = cljs.core._nth.call(null,chunk__38037,i__38039);
v.call(null,"\uFDD0:playbutton").style.display = "inline";
v.call(null,"\uFDD0:playlabel").style.opacity = 1;
cljs.core.reset_BANG_.call(null,v.call(null,"\uFDD0:enabled"),true);
cljs.core.reset_BANG_.call(null,v.handler.state,0);
{
var G__38152 = seq__38036;
var G__38153 = chunk__38037;
var G__38154 = count__38038;
var G__38155 = (i__38039 + 1);
seq__38036 = G__38152;
chunk__38037 = G__38153;
count__38038 = G__38154;
i__38039 = G__38155;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38036);
if(temp__4092__auto__)
{var seq__38036__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38036__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__38036__$1);
{
var G__38156 = cljs.core.chunk_rest.call(null,seq__38036__$1);
var G__38157 = c__2754__auto__;
var G__38158 = cljs.core.count.call(null,c__2754__auto__);
var G__38159 = 0;
seq__38036 = G__38156;
chunk__38037 = G__38157;
count__38038 = G__38158;
i__38039 = G__38159;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__38036__$1);
v.call(null,"\uFDD0:playbutton").style.display = "inline";
v.call(null,"\uFDD0:playlabel").style.opacity = 1;
cljs.core.reset_BANG_.call(null,v.call(null,"\uFDD0:enabled"),true);
cljs.core.reset_BANG_.call(null,v.handler.state,0);
{
var G__38160 = cljs.core.next.call(null,seq__38036__$1);
var G__38161 = null;
var G__38162 = 0;
var G__38163 = 0;
seq__38036 = G__38160;
chunk__38037 = G__38161;
count__38038 = G__38162;
i__38039 = G__38163;
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
{symlog.cljs.app.handlers.narrator.scenes.call(null,cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.sequencer.scene)).call(null,"\uFDD0:toc").style.display = "none";
symlog.cljs.app.handlers.narrator.playButton.style.opacity = 0;
symlog.cljs.app.handlers.narrator.disableButton.style.opacity = 0;
var seq__38040_38164 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.nodeList);
var chunk__38041_38165 = null;
var count__38042_38166 = 0;
var i__38043_38167 = 0;
while(true){
if((i__38043_38167 < count__38042_38166))
{var v_38168 = cljs.core._nth.call(null,chunk__38041_38165,i__38043_38167);
goog.events.unlisten(v_38168,"click",symlog.cljs.app.handlers.narrator.TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__38169 = seq__38040_38164;
var G__38170 = chunk__38041_38165;
var G__38171 = count__38042_38166;
var G__38172 = (i__38043_38167 + 1);
seq__38040_38164 = G__38169;
chunk__38041_38165 = G__38170;
count__38042_38166 = G__38171;
i__38043_38167 = G__38172;
continue;
}
} else
{var temp__4092__auto___38173 = cljs.core.seq.call(null,seq__38040_38164);
if(temp__4092__auto___38173)
{var seq__38040_38174__$1 = temp__4092__auto___38173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38040_38174__$1))
{var c__2754__auto___38175 = cljs.core.chunk_first.call(null,seq__38040_38174__$1);
{
var G__38176 = cljs.core.chunk_rest.call(null,seq__38040_38174__$1);
var G__38177 = c__2754__auto___38175;
var G__38178 = cljs.core.count.call(null,c__2754__auto___38175);
var G__38179 = 0;
seq__38040_38164 = G__38176;
chunk__38041_38165 = G__38177;
count__38042_38166 = G__38178;
i__38043_38167 = G__38179;
continue;
}
} else
{var v_38180 = cljs.core.first.call(null,seq__38040_38174__$1);
goog.events.unlisten(v_38180,"click",symlog.cljs.app.handlers.narrator.TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__38181 = cljs.core.next.call(null,seq__38040_38174__$1);
var G__38182 = null;
var G__38183 = 0;
var G__38184 = 0;
seq__38040_38164 = G__38181;
chunk__38041_38165 = G__38182;
count__38042_38166 = G__38183;
i__38043_38167 = G__38184;
continue;
}
}
} else
{}
}
break;
}
goog.events.unlistenByKey(symlog.cljs.app.handlers.narrator.listener);
return symlog.cljs.app.handlers.narrator.sequencer.play();
}
} else
{return null;
}
}
});
symlog.cljs.app.handlers.narrator.TOChandler = (function TOChandler(evt){
if(cljs.core._EQ_.call(null,"endButton",evt.target.id))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.handlers.narrator.state,0);
symlog.cljs.app.handlers.narrator.scenes.call(null,cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.sequencer.scene)).call(null,"\uFDD0:toc").style.display = "none";
symlog.cljs.app.handlers.narrator.playButton.style.opacity = 0;
symlog.cljs.app.handlers.narrator.disableButton.style.opacity = 0;
var seq__38193_38201 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.nodeList);
var chunk__38194_38202 = null;
var count__38195_38203 = 0;
var i__38196_38204 = 0;
while(true){
if((i__38196_38204 < count__38195_38203))
{var v_38205 = cljs.core._nth.call(null,chunk__38194_38202,i__38196_38204);
goog.events.unlisten(v_38205,"click",TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__38206 = seq__38193_38201;
var G__38207 = chunk__38194_38202;
var G__38208 = count__38195_38203;
var G__38209 = (i__38196_38204 + 1);
seq__38193_38201 = G__38206;
chunk__38194_38202 = G__38207;
count__38195_38203 = G__38208;
i__38196_38204 = G__38209;
continue;
}
} else
{var temp__4092__auto___38210 = cljs.core.seq.call(null,seq__38193_38201);
if(temp__4092__auto___38210)
{var seq__38193_38211__$1 = temp__4092__auto___38210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38193_38211__$1))
{var c__2754__auto___38212 = cljs.core.chunk_first.call(null,seq__38193_38211__$1);
{
var G__38213 = cljs.core.chunk_rest.call(null,seq__38193_38211__$1);
var G__38214 = c__2754__auto___38212;
var G__38215 = cljs.core.count.call(null,c__2754__auto___38212);
var G__38216 = 0;
seq__38193_38201 = G__38213;
chunk__38194_38202 = G__38214;
count__38195_38203 = G__38215;
i__38196_38204 = G__38216;
continue;
}
} else
{var v_38217 = cljs.core.first.call(null,seq__38193_38211__$1);
goog.events.unlisten(v_38217,"click",TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__38218 = cljs.core.next.call(null,seq__38193_38211__$1);
var G__38219 = null;
var G__38220 = 0;
var G__38221 = 0;
seq__38193_38201 = G__38218;
chunk__38194_38202 = G__38219;
count__38195_38203 = G__38220;
i__38196_38204 = G__38221;
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
symlog.cljs.app.handlers.narrator.scenes.call(null,cljs.core.deref.call(null,symlog.cljs.app.handlers.narrator.sequencer.scene)).call(null,"\uFDD0:toc").style.display = "none";
symlog.cljs.app.handlers.narrator.playButton.style.opacity = 0;
symlog.cljs.app.handlers.narrator.disableButton.style.opacity = 0;
var seq__38197_38222 = cljs.core.seq.call(null,symlog.cljs.app.handlers.narrator.nodeList);
var chunk__38198_38223 = null;
var count__38199_38224 = 0;
var i__38200_38225 = 0;
while(true){
if((i__38200_38225 < count__38199_38224))
{var v_38226 = cljs.core._nth.call(null,chunk__38198_38223,i__38200_38225);
goog.events.unlisten(v_38226,"click",TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__38227 = seq__38197_38222;
var G__38228 = chunk__38198_38223;
var G__38229 = count__38199_38224;
var G__38230 = (i__38200_38225 + 1);
seq__38197_38222 = G__38227;
chunk__38198_38223 = G__38228;
count__38199_38224 = G__38229;
i__38200_38225 = G__38230;
continue;
}
} else
{var temp__4092__auto___38231 = cljs.core.seq.call(null,seq__38197_38222);
if(temp__4092__auto___38231)
{var seq__38197_38232__$1 = temp__4092__auto___38231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38197_38232__$1))
{var c__2754__auto___38233 = cljs.core.chunk_first.call(null,seq__38197_38232__$1);
{
var G__38234 = cljs.core.chunk_rest.call(null,seq__38197_38232__$1);
var G__38235 = c__2754__auto___38233;
var G__38236 = cljs.core.count.call(null,c__2754__auto___38233);
var G__38237 = 0;
seq__38197_38222 = G__38234;
chunk__38198_38223 = G__38235;
count__38199_38224 = G__38236;
i__38200_38225 = G__38237;
continue;
}
} else
{var v_38238 = cljs.core.first.call(null,seq__38197_38232__$1);
goog.events.unlisten(v_38238,"click",TOChandler,true,symlog.cljs.app.handlers.narrator.ctxt);
{
var G__38239 = cljs.core.next.call(null,seq__38197_38232__$1);
var G__38240 = null;
var G__38241 = 0;
var G__38242 = 0;
seq__38197_38222 = G__38239;
chunk__38198_38223 = G__38240;
count__38199_38224 = G__38241;
i__38200_38225 = G__38242;
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
symlog.cljs.app.handlers.narrator.sequencer.setStep(frame);
symlog.cljs.app.handlers.narrator.sequencer.clear();
return symlog.cljs.app.handlers.narrator.sequencer.play();
} else
{return null;
}
}
});
