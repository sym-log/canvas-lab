goog.provide('symlog.cljs.app');
goog.require('cljs.core');
symlog.cljs.app.paintImage = (function paintImage(image){
symlog.cljs.app.context.clearRect(0,0,symlog.cljs.app.canvas.width,symlog.cljs.app.canvas.height);
return symlog.cljs.app.context.drawImage(image,0,0);
});
symlog.cljs.app.animate = (function animate(){
if(cljs.core.not.call(null,symlog.cljs.app.video.ended))
{var timeIdx = symlog.cljs.app.video.currentTime;
symlog.cljs.app.timeField.value = symlog.cljs.app.time_index_to_string.call(null,timeIdx,symlog.cljs.app.FPS);
symlog.cljs.app.stage.paint(symlog.cljs.app.keyframes.get((timeIdx * symlog.cljs.app.FPS)));
return window.requestAnimationFrame(animate);
} else
{return null;
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
symlog.cljs.app.buffer = cljs.core.apply.call(null,cljs.core.array,cljs.core.range.call(null,0,100));
symlog.cljs.app.buffer.forEach((function (elem,idx,arr){
return (arr[idx] = (new Image()));
}));
symlog.cljs.app.video = goog.dom.getElement("video");
symlog.cljs.app.canvas = goog.dom.getElement("canvas");
symlog.cljs.app.context = symlog.cljs.app.canvas.getContext("2d");
symlog.cljs.app.width = symlog.cljs.app.video.width;
symlog.cljs.app.height = symlog.cljs.app.video.height;
symlog.cljs.app.vidx = Math.round(((symlog.cljs.app.canvas.width - symlog.cljs.app.video.width) / 2));
symlog.cljs.app.vidy = Math.round(((symlog.cljs.app.canvas.height - symlog.cljs.app.video.height) / 2));
symlog.cljs.app.FPS = 15;
symlog.cljs.app.timeField = goog.dom.getElement("timeIndexCell");
goog.events.listen(goog.dom.getElement("playButton"),symlog.cljs.dom.click,(function (evt){
symlog.cljs.app.video.play();
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
