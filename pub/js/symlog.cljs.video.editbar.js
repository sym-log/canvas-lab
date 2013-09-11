goog.provide('symlog.cljs.video.editbar');
goog.require('cljs.core');
symlog.cljs.video.editbar.per_frame_function = (function per_frame_function(ioTarget,videoRef,FPS){
ioTarget.value = symlog.cljs.video.editbar.time_index_to_string.call(null,videoRef.currentTime,FPS);
return symlog.cljs.app.stage.paint(symlog.cljs.app.keyframe.call(null,(videoRef.currentTime * FPS)));
});
symlog.cljs.video.editbar.setup = (function setup(vidWrapper){
goog.events.listen(goog.dom.getElement("playButton"),symlog.cljs.dom.click,(function (evt){
return vidWrapper.start();
}));
goog.events.listen(goog.dom.getElement("pauseButton"),symlog.cljs.dom.click,(function (evt){
return vidWrapper.stop();
}));
goog.events.listen(goog.dom.getElement("skipForwardButton"),symlog.cljs.dom.click,(function (evt){
vidWrapper.stop();
vidWrapper.video.currentTime = (vidWrapper.video.currentTime + (parseInt(goog.dom.getElement("forwardStepCountField").value) / vidWrapper.FPS));
return symlog.cljs.video.editbar.per_frame_function.call(null,goog.dom.getElement("timeIndexCell"),goog.dom.getElement("video"),15);
}));
goog.events.listen(goog.dom.getElement("skipBackwardButton"),symlog.cljs.dom.click,(function (evt){
vidWrapper.stop();
vidWrapper.video.currentTime = (vidWrapper.video.currentTime - (parseInt(goog.dom.getElement("backwardStepCountField").value) / vidWrapper.FPS));
return symlog.cljs.video.editbar.per_frame_function.call(null,goog.dom.getElement("timeIndexCell"),goog.dom.getElement("video"),15);
}));
return goog.events.listen(goog.dom.getElement("autoReturnCheckbox"),symlog.cljs.dom.click,(function (evt){
if(cljs.core.truth_(goog.dom.getElement("autoReturnCheckbox").checked))
{return goog.dom.getElement("timeReturnField").value = [cljs.core.str(vidWrapper.video.currentTime)].join('');
} else
{return goog.dom.getElement("timeReturnField").value = null;
}
}));
});
symlog.cljs.video.editbar.time_index_to_string = (function time_index_to_string(timevalue,FPS){
var hours = cljs.core.rem.call(null,Math.floor((timevalue / 3600)),24);
var minutes = cljs.core.rem.call(null,Math.floor((timevalue / 60)),60);
var seconds = Math.floor(cljs.core.rem.call(null,timevalue,60));
var frames = Math.floor((cljs.core.rem.call(null,timevalue,1) * FPS).toFixed(3));
return [cljs.core.str((((hours < 10))?[cljs.core.str("0"),cljs.core.str(hours),cljs.core.str(":")].join(''):[cljs.core.str(hours),cljs.core.str(":")].join(''))),cljs.core.str((((minutes < 10))?[cljs.core.str("0"),cljs.core.str(minutes),cljs.core.str(":")].join(''):[cljs.core.str(minutes),cljs.core.str(":")].join(''))),cljs.core.str((((seconds < 10))?[cljs.core.str("0"),cljs.core.str(seconds),cljs.core.str(":")].join(''):[cljs.core.str(seconds),cljs.core.str(":")].join(''))),cljs.core.str((((frames < 10))?[cljs.core.str("0"),cljs.core.str(frames)].join(''):[cljs.core.str(frames)].join('')))].join('');
});
