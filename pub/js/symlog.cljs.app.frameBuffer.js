goog.provide('symlog.cljs.app.frameBuffer');
goog.require('cljs.core');
symlog.cljs.app.frameBuffer.BUFFSIZE = 1000;
symlog.cljs.app.frameBuffer.FRAMEURL = "http://192.168.1.3/img/frames/";
symlog.cljs.app.frameBuffer.buf0 = Array.apply(null,(new Array(symlog.cljs.app.frameBuffer.BUFFSIZE))).map(Number.prototype.valueOf,0);
symlog.cljs.app.frameBuffer.buf1 = Array.apply(null,(new Array(symlog.cljs.app.frameBuffer.BUFFSIZE))).map(Number.prototype.valueOf,0);
symlog.cljs.app.frameBuffer.buf2 = Array.apply(null,(new Array(symlog.cljs.app.frameBuffer.BUFFSIZE))).map(Number.prototype.valueOf,0);
symlog.cljs.app.frameBuffer.buf0ready = cljs.core.atom.call(null,false);
symlog.cljs.app.frameBuffer.buf1ready = cljs.core.atom.call(null,false);
symlog.cljs.app.frameBuffer.buf2ready = cljs.core.atom.call(null,false);
symlog.cljs.app.frameBuffer.switched2buf0 = cljs.core.atom.call(null,true);
symlog.cljs.app.frameBuffer.switched2buf1 = cljs.core.atom.call(null,false);
symlog.cljs.app.frameBuffer.switched2buf2 = cljs.core.atom.call(null,false);
symlog.cljs.app.frameBuffer.getImages = (function getImages(message){
var imgarr = Array.apply(null,(new Array(message.data.BUFFSIZE))).map(Number.prototype.valueOf,0);
imgarr.forEach((function (elem,idx,arr){
var req = (new XMLHttpRequest());
req.open("GET",message.data.url.concat((message.data.startFrame + idx),".png"),false);
req.responseType = "arraybuffer";
req.onload = (function (evt){
return (imgarr[idx] = "data:image/png;base64,".concat(btoa(String.fromCharCode.apply(null,(new Uint8Array(req.response))))));
});
return req.send(null);
}));
(imgarr[message.data.BUFFSIZE] = message.data.startFrame);
return postMessage({"imagearr":imgarr});
});
symlog.cljs.app.frameBuffer.frames__GT_buffer0 = (function frames__GT_buffer0(message){
message.data.imagearr.forEach((function (elem,idx,arr){
if(cljs.core._EQ_.call(null,symlog.cljs.app.frameBuffer.BUFFSIZE,idx))
{return (symlog.cljs.app.frameBuffer.buf0[symlog.cljs.app.frameBuffer.BUFFSIZE] = elem);
} else
{if("\uFDD0:else")
{return (symlog.cljs.app.frameBuffer.buf0[idx]).src = elem;
} else
{return null;
}
}
}));
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf0ready,true);
});
symlog.cljs.app.frameBuffer.frames__GT_buffer1 = (function frames__GT_buffer1(message){
message.data.imagearr.forEach((function (elem,idx,arr){
if(cljs.core._EQ_.call(null,symlog.cljs.app.frameBuffer.BUFFSIZE,idx))
{return (symlog.cljs.app.frameBuffer.buf1[symlog.cljs.app.frameBuffer.BUFFSIZE] = elem);
} else
{if("\uFDD0:else")
{return (symlog.cljs.app.frameBuffer.buf1[idx]).src = elem;
} else
{return null;
}
}
}));
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf1ready,true);
});
symlog.cljs.app.frameBuffer.frames__GT_buffer2 = (function frames__GT_buffer2(message){
message.data.imagearr.forEach((function (elem,idx,arr){
if(cljs.core._EQ_.call(null,symlog.cljs.app.frameBuffer.BUFFSIZE,idx))
{return (symlog.cljs.app.frameBuffer.buf2[symlog.cljs.app.frameBuffer.BUFFSIZE] = elem);
} else
{if("\uFDD0:else")
{return (symlog.cljs.app.frameBuffer.buf2[idx]).src = elem;
} else
{return null;
}
}
}));
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf2ready,true);
});
symlog.cljs.app.frameBuffer.requestFrameBuffer = (function requestFrameBuffer(url,threadRef,startFrame){
return threadRef.postMessage({"url":url,"startFrame":startFrame,"BUFFSIZE":symlog.cljs.app.frameBuffer.BUFFSIZE});
});
symlog.cljs.app.frameBuffer.init = (function init(){
symlog.cljs.app.frameBuffer.buf0.forEach((function (elem,idx,arr){
return (arr[idx] = (new Image()));
}));
symlog.cljs.app.frameBuffer.buf1.forEach((function (elem,idx,arr){
return (arr[idx] = (new Image()));
}));
symlog.cljs.app.frameBuffer.buf2.forEach((function (elem,idx,arr){
return (arr[idx] = (new Image()));
}));
symlog.cljs.app.frameBuffer.thread0 = symlog.cljs.threads.create_thread.call(null,symlog.cljs.app.frameBuffer.frames__GT_buffer0,symlog.cljs.app.frameBuffer.getImages);
symlog.cljs.app.frameBuffer.thread1 = symlog.cljs.threads.create_thread.call(null,symlog.cljs.app.frameBuffer.frames__GT_buffer1,symlog.cljs.app.frameBuffer.getImages);
symlog.cljs.app.frameBuffer.thread2 = symlog.cljs.threads.create_thread.call(null,symlog.cljs.app.frameBuffer.frames__GT_buffer2,symlog.cljs.app.frameBuffer.getImages);
symlog.cljs.app.frameBuffer.requestFrameBuffer.call(null,symlog.cljs.app.frameBuffer.FRAMEURL,symlog.cljs.app.frameBuffer.thread0,(0 * symlog.cljs.app.frameBuffer.BUFFSIZE));
symlog.cljs.app.frameBuffer.requestFrameBuffer.call(null,symlog.cljs.app.frameBuffer.FRAMEURL,symlog.cljs.app.frameBuffer.thread1,(1 * symlog.cljs.app.frameBuffer.BUFFSIZE));
return symlog.cljs.app.frameBuffer.requestFrameBuffer.call(null,symlog.cljs.app.frameBuffer.FRAMEURL,symlog.cljs.app.frameBuffer.thread2,(2 * symlog.cljs.app.frameBuffer.BUFFSIZE));
});
symlog.cljs.app.frameBuffer.nextFrame = (function nextFrame(frameNum){
if(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core.deref.call(null,symlog.cljs.app.frameBuffer.buf0ready);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (frameNum < ((symlog.cljs.app.frameBuffer.buf0[symlog.cljs.app.frameBuffer.BUFFSIZE]) + symlog.cljs.app.frameBuffer.BUFFSIZE));
if(and__3941__auto____$1)
{return (frameNum > ((symlog.cljs.app.frameBuffer.buf0[symlog.cljs.app.frameBuffer.BUFFSIZE]) - 1));
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{if(cljs.core.not.call(null,cljs.core.deref.call(null,symlog.cljs.app.frameBuffer.switched2buf0)))
{symlog.cljs.app.frameBuffer.requestFrameBuffer.call(null,symlog.cljs.app.frameBuffer.FRAMEURL,symlog.cljs.app.frameBuffer.thread2,((symlog.cljs.app.frameBuffer.buf0[symlog.cljs.app.frameBuffer.BUFFSIZE]) + (2 * symlog.cljs.app.frameBuffer.BUFFSIZE)));
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.switched2buf0,true);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.switched2buf2,false);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf2ready,false);
} else
{}
return (symlog.cljs.app.frameBuffer.buf0[(frameNum - (symlog.cljs.app.frameBuffer.buf0[symlog.cljs.app.frameBuffer.BUFFSIZE]))]);
} else
{if(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core.deref.call(null,symlog.cljs.app.frameBuffer.buf1ready);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (frameNum < ((symlog.cljs.app.frameBuffer.buf1[symlog.cljs.app.frameBuffer.BUFFSIZE]) + symlog.cljs.app.frameBuffer.BUFFSIZE));
if(and__3941__auto____$1)
{return (frameNum > ((symlog.cljs.app.frameBuffer.buf1[symlog.cljs.app.frameBuffer.BUFFSIZE]) - 1));
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{if(cljs.core.not.call(null,cljs.core.deref.call(null,symlog.cljs.app.frameBuffer.switched2buf1)))
{symlog.cljs.app.frameBuffer.requestFrameBuffer.call(null,symlog.cljs.app.frameBuffer.FRAMEURL,symlog.cljs.app.frameBuffer.thread0,((symlog.cljs.app.frameBuffer.buf1[symlog.cljs.app.frameBuffer.BUFFSIZE]) + (2 * symlog.cljs.app.frameBuffer.BUFFSIZE)));
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.switched2buf1,true);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.switched2buf0,false);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf0ready,false);
} else
{}
return (symlog.cljs.app.frameBuffer.buf1[(frameNum - (symlog.cljs.app.frameBuffer.buf1[symlog.cljs.app.frameBuffer.BUFFSIZE]))]);
} else
{if(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core.deref.call(null,symlog.cljs.app.frameBuffer.buf2ready);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (frameNum < ((symlog.cljs.app.frameBuffer.buf2[symlog.cljs.app.frameBuffer.BUFFSIZE]) + symlog.cljs.app.frameBuffer.BUFFSIZE));
if(and__3941__auto____$1)
{return (frameNum > ((symlog.cljs.app.frameBuffer.buf2[symlog.cljs.app.frameBuffer.BUFFSIZE]) - 1));
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{if(cljs.core.not.call(null,cljs.core.deref.call(null,symlog.cljs.app.frameBuffer.switched2buf2)))
{symlog.cljs.app.frameBuffer.requestFrameBuffer.call(null,symlog.cljs.app.frameBuffer.FRAMEURL,symlog.cljs.app.frameBuffer.thread1,((symlog.cljs.app.frameBuffer.buf2[symlog.cljs.app.frameBuffer.BUFFSIZE]) + (2 * symlog.cljs.app.frameBuffer.BUFFSIZE)));
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.switched2buf2,true);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.switched2buf1,false);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf1ready,false);
} else
{}
return (symlog.cljs.app.frameBuffer.buf2[(frameNum - (symlog.cljs.app.frameBuffer.buf2[symlog.cljs.app.frameBuffer.BUFFSIZE]))]);
} else
{if("\uFDD0:else")
{return "wait";
} else
{return null;
}
}
}
}
});
