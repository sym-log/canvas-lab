goog.provide('symlog.cljs.app');
goog.require('cljs.core');
symlog.cljs.app.playing = cljs.core.atom.call(null,false);
symlog.cljs.app.animate = (function animate(){
var timeIdx = symlog.cljs.app.video.currentTime;
var frameNo = Math.round((timeIdx * 15));
var img = symlog.cljs.app.frameBuffer.nextFrame.call(null,frameNo);
if(cljs.core._EQ_.call(null,"wait",img))
{symlog.cljs.app.video.pause();
cljs.core.reset_BANG_.call(null,symlog.cljs.app.playing,false);
return window.requestAnimationFrame(animate);
} else
{if("\uFDD0:else")
{symlog.cljs.app.imageFrame.src = img;
symlog.cljs.app.timeField.value = symlog.cljs.app.time_index_to_string.call(null,timeIdx,symlog.cljs.app.FPS);
if(cljs.core.not.call(null,cljs.core.deref.call(null,symlog.cljs.app.playing)))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.playing,true);
symlog.cljs.app.video.play();
} else
{}
return window.requestAnimationFrame(animate);
} else
{return null;
}
}
});
symlog.cljs.app.jump = (function jump(){
if(cljs.core.not.call(null,symlog.cljs.app.video.ended))
{symlog.cljs.app.timeField.value = symlog.cljs.app.time_index_to_string.call(null,symlog.cljs.app.video.currentTime,symlog.cljs.app.FPS);
return symlog.cljs.app.stage.paint(symlog.cljs.app.keyframes.get((symlog.cljs.app.video.currentTime * symlog.cljs.app.FPS)));
} else
{return null;
}
});
symlog.cljs.app.init = (function init(){
symlog.cljs.app.frameBuffer.init.call(null);
symlog.cljs.app.video = goog.dom.getElement("video");
symlog.cljs.app.imageFrame = goog.dom.getElement("imageFrame");
symlog.cljs.app.width = symlog.cljs.app.video.width;
symlog.cljs.app.height = symlog.cljs.app.video.height;
symlog.cljs.app.FPS = 15;
symlog.cljs.app.timeField = goog.dom.getElement("timeIndexCell");
goog.events.listen(goog.dom.getElement("playButton"),symlog.cljs.dom.click,(function (evt){
symlog.cljs.app.reqId = window.requestAnimationFrame(symlog.cljs.app.animate);
}));
goog.events.listen(goog.dom.getElement("pauseButton"),symlog.cljs.dom.click,(function (evt){
symlog.cljs.app.video.pause();
return window.cancelAnimationFrame(symlog.cljs.app.reqId);
}));
goog.events.listen(goog.dom.getElement("skipForwardButton"),symlog.cljs.dom.click,(function (evt){
symlog.cljs.app.video.pause();
symlog.cljs.app.video.currentTime = (symlog.cljs.app.video.currentTime + (parseInt(goog.dom.getElement("forwardStepCountField").value) / symlog.cljs.app.FPS));
return symlog.cljs.app.jump.call(null);
}));
goog.events.listen(goog.dom.getElement("skipBackwardButton"),symlog.cljs.dom.click,(function (evt){
symlog.cljs.app.video.pause();
symlog.cljs.app.video.currentTime = (symlog.cljs.app.video.currentTime - (parseInt(goog.dom.getElement("backwardStepCountField").value) / symlog.cljs.app.FPS));
return symlog.cljs.app.jump.call(null);
}));
return goog.events.listen(goog.dom.getElement("autoReturnCheckbox"),symlog.cljs.dom.click,(function (evt){
if(cljs.core.truth_(goog.dom.getElement("autoReturnCheckbox").checked))
{return goog.dom.getElement("timeReturnField").value = [cljs.core.str(symlog.cljs.app.video.currentTime)].join('');
} else
{return goog.dom.getElement("timeReturnField").value = null;
}
}));
});
symlog.cljs.app.time_index_to_string = (function time_index_to_string(timevalue,FPS){
var hours = cljs.core.rem.call(null,Math.floor((timevalue / 3600)),24);
var minutes = cljs.core.rem.call(null,Math.floor((timevalue / 60)),60);
var seconds = Math.floor(cljs.core.rem.call(null,timevalue,60));
var frames = Math.floor((cljs.core.rem.call(null,timevalue,1) * FPS).toFixed(3));
return [cljs.core.str((((hours < 10))?[cljs.core.str("0"),cljs.core.str(hours),cljs.core.str(":")].join(''):[cljs.core.str(hours),cljs.core.str(":")].join(''))),cljs.core.str((((minutes < 10))?[cljs.core.str("0"),cljs.core.str(minutes),cljs.core.str(":")].join(''):[cljs.core.str(minutes),cljs.core.str(":")].join(''))),cljs.core.str((((seconds < 10))?[cljs.core.str("0"),cljs.core.str(seconds),cljs.core.str(":")].join(''):[cljs.core.str(seconds),cljs.core.str(":")].join(''))),cljs.core.str((((frames < 10))?[cljs.core.str("0"),cljs.core.str(frames)].join(''):[cljs.core.str(frames)].join('')))].join('');
});
