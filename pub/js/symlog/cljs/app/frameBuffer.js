goog.provide('symlog.cljs.app.frameBuffer');
goog.require('cljs.core');
symlog.cljs.app.frameBuffer.BUFFERURL = "http://192.168.1.2/img/frame-buffers/";
symlog.cljs.app.frameBuffer.BUFFSIZE = 1000;
symlog.cljs.app.frameBuffer.MAXBUF = 16000;
symlog.cljs.app.frameBuffer.buf0 = [];
symlog.cljs.app.frameBuffer.buf1 = [];
symlog.cljs.app.frameBuffer.buf0ready = cljs.core.atom.call(null,false);
symlog.cljs.app.frameBuffer.buf1ready = cljs.core.atom.call(null,false);
symlog.cljs.app.frameBuffer.switched__GT_buf0 = cljs.core.atom.call(null,true);
symlog.cljs.app.frameBuffer.switched__GT_buf1 = cljs.core.atom.call(null,false);
symlog.cljs.app.frameBuffer.init = (function init(){
symlog.cljs.app.frameBuffer.worker = symlog.cljs.threads.create_thread.call(null,symlog.cljs.threads.functions.getImageArray,symlog.cljs.app.frameBuffer.array__GT_db);
return goog.events.listenOnce(symlog.cljs.app.frameBuffer.dbcache = (new symlog.cljs.idb.Idb("mainFrames",1)),"dbOpen",(function (){
return symlog.cljs.app.frameBuffer.dbcache.get("keys",(function (keys){
symlog.cljs.app.frameBuffer.dbBuffers = keys;
if(!(cljs.core._EQ_.call(null,-1,symlog.cljs.app.frameBuffer.dbBuffers.indexOf(1000))))
{symlog.cljs.app.frameBuffer.db__GT_buffer0.call(null,1000);
} else
{}
if(!(cljs.core._EQ_.call(null,-1,symlog.cljs.app.frameBuffer.dbBuffers.indexOf(2000))))
{symlog.cljs.app.frameBuffer.db__GT_buffer1.call(null,2000);
} else
{}
var seq__29787 = cljs.core.seq.call(null,cljs.core.range.call(null,1000,17000,1000));
var chunk__29788 = null;
var count__29789 = 0;
var i__29790 = 0;
while(true){
if((i__29790 < count__29789))
{var x = cljs.core._nth.call(null,chunk__29788,i__29790);
if(cljs.core._EQ_.call(null,-1,symlog.cljs.app.frameBuffer.dbBuffers.indexOf(x)))
{symlog.cljs.app.frameBuffer.requestFrameBuffer.call(null,symlog.cljs.app.frameBuffer.BUFFERURL,symlog.cljs.app.frameBuffer.worker,x);
} else
{}
{
var G__29791 = seq__29787;
var G__29792 = chunk__29788;
var G__29793 = count__29789;
var G__29794 = (i__29790 + 1);
seq__29787 = G__29791;
chunk__29788 = G__29792;
count__29789 = G__29793;
i__29790 = G__29794;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29787);
if(temp__4092__auto__)
{var seq__29787__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29787__$1))
{var c__2754__auto__ = cljs.core.chunk_first.call(null,seq__29787__$1);
{
var G__29795 = cljs.core.chunk_rest.call(null,seq__29787__$1);
var G__29796 = c__2754__auto__;
var G__29797 = cljs.core.count.call(null,c__2754__auto__);
var G__29798 = 0;
seq__29787 = G__29795;
chunk__29788 = G__29796;
count__29789 = G__29797;
i__29790 = G__29798;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__29787__$1);
if(cljs.core._EQ_.call(null,-1,symlog.cljs.app.frameBuffer.dbBuffers.indexOf(x)))
{symlog.cljs.app.frameBuffer.requestFrameBuffer.call(null,symlog.cljs.app.frameBuffer.BUFFERURL,symlog.cljs.app.frameBuffer.worker,x);
} else
{}
{
var G__29799 = cljs.core.next.call(null,seq__29787__$1);
var G__29800 = null;
var G__29801 = 0;
var G__29802 = 0;
seq__29787 = G__29799;
chunk__29788 = G__29800;
count__29789 = G__29801;
i__29790 = G__29802;
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
}));
});
symlog.cljs.app.frameBuffer.array__GT_db = (function array__GT_db(message){
symlog.cljs.app.frameBuffer.dbcache.put(message.data.imagearr,message.data.idx);
symlog.cljs.app.frameBuffer.dbBuffers.push(message.data.idx);
symlog.cljs.app.frameBuffer.dbcache.put(symlog.cljs.app.frameBuffer.dbBuffers,"keys");
if(cljs.core._EQ_.call(null,1000,message.data.idx))
{symlog.cljs.app.frameBuffer.buf0 = message.data.imagearr;
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf0ready,true);
} else
{}
if(cljs.core._EQ_.call(null,2000,message.data.idx))
{symlog.cljs.app.frameBuffer.buf1 = message.data.imagearr;
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf1ready,true);
} else
{return null;
}
});
symlog.cljs.app.frameBuffer.db__GT_buffer0 = (function db__GT_buffer0(idx){
if(!((idx > symlog.cljs.app.frameBuffer.MAXBUF)))
{return symlog.cljs.app.frameBuffer.dbcache.get(idx,(function (data){
symlog.cljs.app.frameBuffer.buf0 = data;
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf0ready,true);
}));
} else
{return null;
}
});
symlog.cljs.app.frameBuffer.db__GT_buffer1 = (function db__GT_buffer1(idx){
if(!((idx > symlog.cljs.app.frameBuffer.MAXBUF)))
{return symlog.cljs.app.frameBuffer.dbcache.get(idx,(function (data){
symlog.cljs.app.frameBuffer.buf1 = data;
return cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf1ready,true);
}));
} else
{return null;
}
});
symlog.cljs.app.frameBuffer.requestFrameBuffer = (function requestFrameBuffer(url,threadRef,startIdx){
return threadRef.postMessage({"url":url,"idx":startIdx,"endpoint":1000});
});
symlog.cljs.app.frameBuffer.nextFrame = (function nextFrame(frameNum){
var BUF0END = (1 + (symlog.cljs.app.frameBuffer.buf0[symlog.cljs.app.frameBuffer.BUFFSIZE]));
var BUF0START = ((symlog.cljs.app.frameBuffer.buf0[symlog.cljs.app.frameBuffer.BUFFSIZE]) - symlog.cljs.app.frameBuffer.BUFFSIZE);
var BUF1END = (1 + (symlog.cljs.app.frameBuffer.buf1[symlog.cljs.app.frameBuffer.BUFFSIZE]));
var BUF1START = ((symlog.cljs.app.frameBuffer.buf1[symlog.cljs.app.frameBuffer.BUFFSIZE]) - symlog.cljs.app.frameBuffer.BUFFSIZE);
if(cljs.core.truth_((function (){var and__3941__auto__ = (frameNum < BUF0END);
if(and__3941__auto__)
{var and__3941__auto____$1 = (frameNum > BUF0START);
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
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf1ready,false);
symlog.cljs.app.frameBuffer.db__GT_buffer1.call(null,((BUF0START + symlog.cljs.app.frameBuffer.BUFFSIZE) + symlog.cljs.app.frameBuffer.BUFFSIZE));
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.switched__GT_buf0,true);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.switched__GT_buf1,false);
} else
{}
return (symlog.cljs.app.frameBuffer.buf0[((frameNum - BUF0START) - 1)]);
} else
{if(cljs.core.truth_((function (){var and__3941__auto__ = (frameNum < BUF1END);
if(and__3941__auto__)
{var and__3941__auto____$1 = (frameNum > BUF1START);
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
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf0ready,false);
symlog.cljs.app.frameBuffer.db__GT_buffer0.call(null,((BUF1START + symlog.cljs.app.frameBuffer.BUFFSIZE) + symlog.cljs.app.frameBuffer.BUFFSIZE));
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.switched__GT_buf1,true);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.switched__GT_buf0,false);
} else
{}
return (symlog.cljs.app.frameBuffer.buf1[((frameNum - BUF1START) - 1)]);
} else
{if(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core.deref.call(null,symlog.cljs.app.frameBuffer.buf0ready);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = cljs.core.deref.call(null,symlog.cljs.app.frameBuffer.buf1ready);
if(cljs.core.truth_(and__3941__auto____$1))
{var or__3943__auto__ = (function (){var and__3941__auto____$2 = (frameNum < BUF0START);
if(and__3941__auto____$2)
{return (frameNum < BUF1START);
} else
{return and__3941__auto____$2;
}
})();
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var and__3941__auto____$2 = (frameNum > BUF0END);
if(and__3941__auto____$2)
{return (frameNum > BUF1END);
} else
{return and__3941__auto____$2;
}
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf0ready,false);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.buf1ready,false);
symlog.cljs.app.frameBuffer.db__GT_buffer0.call(null,((Math.floor((frameNum / symlog.cljs.app.frameBuffer.BUFFSIZE)) * symlog.cljs.app.frameBuffer.BUFFSIZE) + symlog.cljs.app.frameBuffer.BUFFSIZE));
symlog.cljs.app.frameBuffer.db__GT_buffer1.call(null,((Math.floor((frameNum / symlog.cljs.app.frameBuffer.BUFFSIZE)) * symlog.cljs.app.frameBuffer.BUFFSIZE) + (2 * symlog.cljs.app.frameBuffer.BUFFSIZE)));
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.switched__GT_buf0,true);
cljs.core.reset_BANG_.call(null,symlog.cljs.app.frameBuffer.switched__GT_buf1,false);
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
