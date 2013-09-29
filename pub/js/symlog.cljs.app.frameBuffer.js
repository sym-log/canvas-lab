goog.provide('symlog.cljs.app.frameBuffer');
goog.require('cljs.core');
symlog.cljs.app.frameBuffer.BUFFERURL = "http://192.168.1.3/img/frame-buffers/";
symlog.cljs.app.frameBuffer.BUFFSIZE = 1000;
symlog.cljs.app.frameBuffer.buf0 = [];
symlog.cljs.app.frameBuffer.buf1 = [];
symlog.cljs.app.frameBuffer.buf0ready = cljs.core.atom.call(null,false);
symlog.cljs.app.frameBuffer.buf1ready = cljs.core.atom.call(null,false);
symlog.cljs.app.frameBuffer.switched__GT_buf0 = cljs.core.atom.call(null,true);
symlog.cljs.app.frameBuffer.switched__GT_buf1 = cljs.core.atom.call(null,false);
symlog.cljs.app.frameBuffer.getImageArray = (function getImageArray(message){
var req = (new XMLHttpRequest());
req.open("GET",message.data.url.concat(message.data.startFrame,".img"),true);
req.responseType = "text";
req.onload = (function (){
var arr = req.response.split("/ / /");
(arr[arr.length] = message.data.startFrame);
return postMessage({"imagearr":arr});
});
return req.send(null);
});
symlog.cljs.app.frameBuffer.imageArray__GT_buffer0 = (function imageArray__GT_buffer0(message){
symlog.cljs.app.frameBuffer.buf0 = message.data.imagearr;
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf0ready,true);
});
symlog.cljs.app.frameBuffer.imageArray__GT_buffer1 = (function imageArray__GT_buffer1(message){
symlog.cljs.app.frameBuffer.buf1 = message.data.imagearr;
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf1ready,true);
});
symlog.cljs.app.frameBuffer.requestFrameBuffer = (function requestFrameBuffer(url,threadRef,startFrame){
return threadRef.postMessage({"url":url,"startFrame":startFrame});
});
symlog.cljs.app.frameBuffer.init = (function init(){
symlog.cljs.app.frameBuffer.thread0 = symlog.cljs.threads.create_thread.call(null,symlog.cljs.app.frameBuffer.imageArray__GT_buffer0,symlog.cljs.app.frameBuffer.getImageArray);
symlog.cljs.app.frameBuffer.thread1 = symlog.cljs.threads.create_thread.call(null,symlog.cljs.app.frameBuffer.imageArray__GT_buffer1,symlog.cljs.app.frameBuffer.getImageArray);
symlog.cljs.app.frameBuffer.requestFrameBuffer.call(null,symlog.cljs.app.frameBuffer.BUFFERURL,symlog.cljs.app.frameBuffer.thread0,(symlog.cljs.app.frameBuffer.BUFFSIZE * 0));
return symlog.cljs.app.frameBuffer.requestFrameBuffer.call(null,symlog.cljs.app.frameBuffer.BUFFERURL,symlog.cljs.app.frameBuffer.thread1,(symlog.cljs.app.frameBuffer.BUFFSIZE * 1));
});
symlog.cljs.app.frameBuffer.nextFrame = (function nextFrame(frameNum){
if(cljs.core.truth_((function (){var and__3941__auto__ = (frameNum < ((symlog.cljs.app.frameBuffer.buf0[symlog.cljs.app.frameBuffer.BUFFSIZE]) + symlog.cljs.app.frameBuffer.BUFFSIZE));
if(and__3941__auto__)
{var and__3941__auto____$1 = (frameNum > ((symlog.cljs.app.frameBuffer.buf0[symlog.cljs.app.frameBuffer.BUFFSIZE]) - 1));
if(and__3941__auto____$1)
{return cljs.core.deref.call(null,symlog.cljs.app.frameBuffer.buf0ready);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{if(cljs.core.not.call(null,cljs.core.deref.call(null,symlog.cljs.app.frameBuffer.switched__GT_buf0)))
{symlog.cljs.app.frameBuffer.requestFrameBuffer.call(null,symlog.cljs.app.frameBuffer.BUFFERURL,symlog.cljs.app.frameBuffer.thread1,((symlog.cljs.app.frameBuffer.buf0[symlog.cljs.app.frameBuffer.BUFFSIZE]) + symlog.cljs.app.frameBuffer.BUFFSIZE));
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.switched__GT_buf0,true);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.switched__GT_buf1,false);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf1ready,false);
} else
{}
return (symlog.cljs.app.frameBuffer.buf0[(frameNum - (symlog.cljs.app.frameBuffer.buf0[symlog.cljs.app.frameBuffer.BUFFSIZE]))]);
} else
{if(cljs.core.truth_((function (){var and__3941__auto__ = (frameNum < ((symlog.cljs.app.frameBuffer.buf1[symlog.cljs.app.frameBuffer.BUFFSIZE]) + symlog.cljs.app.frameBuffer.BUFFSIZE));
if(and__3941__auto__)
{var and__3941__auto____$1 = (frameNum > ((symlog.cljs.app.frameBuffer.buf1[symlog.cljs.app.frameBuffer.BUFFSIZE]) - 1));
if(and__3941__auto____$1)
{return cljs.core.deref.call(null,symlog.cljs.app.frameBuffer.buf1ready);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{if(cljs.core.not.call(null,cljs.core.deref.call(null,symlog.cljs.app.frameBuffer.switched__GT_buf1)))
{symlog.cljs.app.frameBuffer.requestFrameBuffer.call(null,symlog.cljs.app.frameBuffer.BUFFERURL,symlog.cljs.app.frameBuffer.thread0,((symlog.cljs.app.frameBuffer.buf1[symlog.cljs.app.frameBuffer.BUFFSIZE]) + symlog.cljs.app.frameBuffer.BUFFSIZE));
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.switched__GT_buf1,true);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.switched__GT_buf0,false);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf0ready,false);
} else
{}
return (symlog.cljs.app.frameBuffer.buf1[(frameNum - (symlog.cljs.app.frameBuffer.buf1[symlog.cljs.app.frameBuffer.BUFFSIZE]))]);
} else
{if((function (){var and__3941__auto__ = (frameNum < ((symlog.cljs.app.frameBuffer.buf0[symlog.cljs.app.frameBuffer.BUFFSIZE]) + symlog.cljs.app.frameBuffer.BUFFSIZE));
if(and__3941__auto__)
{var and__3941__auto____$1 = (frameNum > ((symlog.cljs.app.frameBuffer.buf0[symlog.cljs.app.frameBuffer.BUFFSIZE]) - 1));
if(and__3941__auto____$1)
{var and__3941__auto____$2 = (frameNum < ((symlog.cljs.app.frameBuffer.buf1[symlog.cljs.app.frameBuffer.BUFFSIZE]) + symlog.cljs.app.frameBuffer.BUFFSIZE));
if(and__3941__auto____$2)
{return (frameNum > ((symlog.cljs.app.frameBuffer.buf1[symlog.cljs.app.frameBuffer.BUFFSIZE]) - 1));
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})())
{symlog.cljs.app.frameBuffer.requestFrameBuffer.call(null,symlog.cljs.app.frameBuffer.BUFFERURL,symlog.cljs.app.frameBuffer.thread0,Math.floor((frameNum / symlog.cljs.app.frameBuffer.BUFFSIZE)));
symlog.cljs.app.frameBuffer.requestFrameBuffer.call(null,symlog.cljs.app.frameBuffer.BUFFERURL,symlog.cljs.app.frameBuffer.thread1,(Math.floor((frameNum / symlog.cljs.app.frameBuffer.BUFFSIZE)) + symlog.cljs.app.frameBuffer.BUFFSIZE));
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.switched__GT_buf0,true);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.switched__GT_buf1,false);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf0ready,false);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf1ready,false);
return "wait";
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
