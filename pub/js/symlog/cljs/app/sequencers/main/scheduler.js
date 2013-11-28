goog.provide('symlog.cljs.app.schedulers.main');
goog.require('cljs.core');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
goog.require('symlog.cljs.animation.functions');
goog.require('symlog.cljs.animation.timing');
goog.require('symlog.cljs.app.dom.elements');
symlog.cljs.app.schedulers.main.Scheduler = (function Scheduler(sequencer,actionMap,subSequences){
var this$ = this;
this$.donext = (function (evt){
if(cljs.core._EQ_.call(null,evt.target.name,"narrator"))
{if(cljs.core.truth_(this$.playing))
{this$.playing = null;
} else
{}
sequencer.interrupted = null;
return goog.events.fireListeners(symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideoPlayTouchArea"),"click",false,{"type":"click","target":symlog.cljs.app.dom.elements.elements.call(null,"\uFDD0:mainVideoPlayTouchArea")});
} else
{return null;
}
});
this$.subSequences = subSequences;
var seq__4873_4883 = cljs.core.seq.call(null,subSequences);
var chunk__4874_4884 = null;
var count__4875_4885 = 0;
var i__4876_4886 = 0;
while(true){
if((i__4876_4886 < count__4875_4885))
{var v_4887 = cljs.core._nth.call(null,chunk__4874_4884,i__4876_4886);
goog.events.listen(v_4887,"stopped",this$.donext);
{
var G__4888 = seq__4873_4883;
var G__4889 = chunk__4874_4884;
var G__4890 = count__4875_4885;
var G__4891 = (i__4876_4886 + 1);
seq__4873_4883 = G__4888;
chunk__4874_4884 = G__4889;
count__4875_4885 = G__4890;
i__4876_4886 = G__4891;
continue;
}
} else
{var temp__4092__auto___4892 = cljs.core.seq.call(null,seq__4873_4883);
if(temp__4092__auto___4892)
{var seq__4873_4893__$1 = temp__4092__auto___4892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4873_4893__$1))
{var c__3110__auto___4894 = cljs.core.chunk_first.call(null,seq__4873_4893__$1);
{
var G__4895 = cljs.core.chunk_rest.call(null,seq__4873_4893__$1);
var G__4896 = c__3110__auto___4894;
var G__4897 = cljs.core.count.call(null,c__3110__auto___4894);
var G__4898 = 0;
seq__4873_4883 = G__4895;
chunk__4874_4884 = G__4896;
count__4875_4885 = G__4897;
i__4876_4886 = G__4898;
continue;
}
} else
{var v_4899 = cljs.core.first.call(null,seq__4873_4893__$1);
goog.events.listen(v_4899,"stopped",this$.donext);
{
var G__4900 = cljs.core.next.call(null,seq__4873_4893__$1);
var G__4901 = null;
var G__4902 = 0;
var G__4903 = 0;
seq__4873_4883 = G__4900;
chunk__4874_4884 = G__4901;
count__4875_4885 = G__4902;
i__4876_4886 = G__4903;
continue;
}
}
} else
{}
}
break;
}
this$.step = cljs.core.atom.call(null,1);
this$.doframe = (function (frameNo){
if((cljs.core.deref.call(null,this$.step) > this$.maxsteps))
{return null;
} else
{if((frameNo >= this$.actions.call(null,cljs.core.deref.call(null,this$.step)).call(null,"\uFDD0:frame")))
{if(cljs.core.not.call(null,this$.playing))
{this$.playing = this$.actions.call(null,cljs.core.deref.call(null,this$.step)).call(null,"\uFDD0:action");
cljs.core.swap_BANG_.call(null,this$.step,cljs.core.inc);
return this$.playing();
} else
{return null;
}
} else
{return null;
}
}
});
this$.pause = (function (){
if(cljs.core.truth_(this$.playing))
{if(cljs.core.truth_(this$.playing.pause))
{return this$.playing.pause();
} else
{return null;
}
} else
{return null;
}
});
this$.play = (function (){
if(cljs.core.truth_(this$.playing.play))
{return this$.playing.play();
} else
{return null;
}
});
this$.stop = (function (){
if(cljs.core.truth_(this$.playing))
{this$.playing.stop();
return this$.playing = null;
} else
{return null;
}
});
this$.interrupt = (function (){
return sequencer.interrupt();
});
this$.resume = (function (){
this$.playing = null;
return sequencer.resume();
});
this$.reset = (function (frame){
var seq__4877 = cljs.core.seq.call(null,this$.actions);
var chunk__4878 = null;
var count__4879 = 0;
var i__4880 = 0;
while(true){
if((i__4880 < count__4879))
{var vec__4881 = cljs.core._nth.call(null,chunk__4878,i__4880);
var k = cljs.core.nth.call(null,vec__4881,0,null);
var v = cljs.core.nth.call(null,vec__4881,1,null);
if((function (){var and__3941__auto__ = (v.call(null,"\uFDD0:frame") <= frame);
if(and__3941__auto__)
{return (frame >= this$.actions.call(null,(k + 1)).call(null,"\uFDD0:frame"));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,this$.step,k);
} else
{}
{
var G__4904 = seq__4877;
var G__4905 = chunk__4878;
var G__4906 = count__4879;
var G__4907 = (i__4880 + 1);
seq__4877 = G__4904;
chunk__4878 = G__4905;
count__4879 = G__4906;
i__4880 = G__4907;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4877);
if(temp__4092__auto__)
{var seq__4877__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4877__$1))
{var c__3110__auto__ = cljs.core.chunk_first.call(null,seq__4877__$1);
{
var G__4908 = cljs.core.chunk_rest.call(null,seq__4877__$1);
var G__4909 = c__3110__auto__;
var G__4910 = cljs.core.count.call(null,c__3110__auto__);
var G__4911 = 0;
seq__4877 = G__4908;
chunk__4878 = G__4909;
count__4879 = G__4910;
i__4880 = G__4911;
continue;
}
} else
{var vec__4882 = cljs.core.first.call(null,seq__4877__$1);
var k = cljs.core.nth.call(null,vec__4882,0,null);
var v = cljs.core.nth.call(null,vec__4882,1,null);
if((function (){var and__3941__auto__ = (v.call(null,"\uFDD0:frame") <= frame);
if(and__3941__auto__)
{return (frame >= this$.actions.call(null,(k + 1)).call(null,"\uFDD0:frame"));
} else
{return and__3941__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,this$.step,k);
} else
{}
{
var G__4912 = cljs.core.next.call(null,seq__4877__$1);
var G__4913 = null;
var G__4914 = 0;
var G__4915 = 0;
seq__4877 = G__4912;
chunk__4878 = G__4913;
count__4879 = G__4914;
i__4880 = G__4915;
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
this$.actions = actionMap.call(null,this$);
this$.maxsteps = cljs.core.count.call(null,cljs.core.keys.call(null,this$.actions));
return this$;
});
