goog.provide('symlog.cljs.util');
goog.require('cljs.core');
goog.inherits(symlog.cljs.util.sync_prep = (function sync_prep(delay,func){
var this$ = this;
goog.events.EventTarget.call(this$);
this$.fire = (function (){
if(cljs.core._EQ_.call(null,0,delay))
{func.call(null);
return this$.dispatchEvent("done");
} else
{return (function (){
return setTimeout((function (){
func.call(null);
return this$.dispatchEvent("done");
}),delay);
}).call(null);
}
});
return this$;
}),goog.events.EventTarget);
/**
* @param {...*} var_args
*/
symlog.cljs.util.synchronize = (function() { 
var synchronize__delegate = function (args){
var funcobj = {};
var count = cljs.core.atom.call(null,-1);
var seq__3156_3168 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,args.arr));
var chunk__3157_3169 = null;
var count__3158_3170 = 0;
var i__3159_3171 = 0;
while(true){
if((i__3159_3171 < count__3158_3170))
{var vec__3160_3172 = cljs.core._nth.call(null,chunk__3157_3169,i__3159_3171);
var k_3173 = cljs.core.nth.call(null,vec__3160_3172,0,null);
var v_3174 = cljs.core.nth.call(null,vec__3160_3172,1,null);
(funcobj[cljs.core.swap_BANG_.call(null,count,cljs.core.inc)] = (new symlog.cljs.util.sync_prep(k_3173,v_3174)));
{
var G__3175 = seq__3156_3168;
var G__3176 = chunk__3157_3169;
var G__3177 = count__3158_3170;
var G__3178 = (i__3159_3171 + 1);
seq__3156_3168 = G__3175;
chunk__3157_3169 = G__3176;
count__3158_3170 = G__3177;
i__3159_3171 = G__3178;
continue;
}
} else
{var temp__4092__auto___3179 = cljs.core.seq.call(null,seq__3156_3168);
if(temp__4092__auto___3179)
{var seq__3156_3180__$1 = temp__4092__auto___3179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3156_3180__$1))
{var c__2754__auto___3181 = cljs.core.chunk_first.call(null,seq__3156_3180__$1);
{
var G__3182 = cljs.core.chunk_rest.call(null,seq__3156_3180__$1);
var G__3183 = c__2754__auto___3181;
var G__3184 = cljs.core.count.call(null,c__2754__auto___3181);
var G__3185 = 0;
seq__3156_3168 = G__3182;
chunk__3157_3169 = G__3183;
count__3158_3170 = G__3184;
i__3159_3171 = G__3185;
continue;
}
} else
{var vec__3161_3186 = cljs.core.first.call(null,seq__3156_3180__$1);
var k_3187 = cljs.core.nth.call(null,vec__3161_3186,0,null);
var v_3188 = cljs.core.nth.call(null,vec__3161_3186,1,null);
(funcobj[cljs.core.swap_BANG_.call(null,count,cljs.core.inc)] = (new symlog.cljs.util.sync_prep(k_3187,v_3188)));
{
var G__3189 = cljs.core.next.call(null,seq__3156_3180__$1);
var G__3190 = null;
var G__3191 = 0;
var G__3192 = 0;
seq__3156_3168 = G__3189;
chunk__3157_3169 = G__3190;
count__3158_3170 = G__3191;
i__3159_3171 = G__3192;
continue;
}
}
} else
{}
}
break;
}
var arg = cljs.core.js__GT_clj.call(null,funcobj);
return (function (){
var seq__3162_3193 = cljs.core.seq.call(null,arg);
var chunk__3163_3194 = null;
var count__3164_3195 = 0;
var i__3165_3196 = 0;
while(true){
if((i__3165_3196 < count__3164_3195))
{var vec__3166_3197 = cljs.core._nth.call(null,chunk__3163_3194,i__3165_3196);
var k_3198 = cljs.core.nth.call(null,vec__3166_3197,0,null);
var v_3199 = cljs.core.nth.call(null,vec__3166_3197,1,null);
var backidx_3200 = (Number(k_3198) - 1).toString();
if(cljs.core._EQ_.call(null,k_3198,"0"))
{} else
{goog.events.listenOnce(arg.call(null,backidx_3200),"done",arg.call(null,k_3198).fire);
}
{
var G__3201 = seq__3162_3193;
var G__3202 = chunk__3163_3194;
var G__3203 = count__3164_3195;
var G__3204 = (i__3165_3196 + 1);
seq__3162_3193 = G__3201;
chunk__3163_3194 = G__3202;
count__3164_3195 = G__3203;
i__3165_3196 = G__3204;
continue;
}
} else
{var temp__4092__auto___3205 = cljs.core.seq.call(null,seq__3162_3193);
if(temp__4092__auto___3205)
{var seq__3162_3206__$1 = temp__4092__auto___3205;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3162_3206__$1))
{var c__2754__auto___3207 = cljs.core.chunk_first.call(null,seq__3162_3206__$1);
{
var G__3208 = cljs.core.chunk_rest.call(null,seq__3162_3206__$1);
var G__3209 = c__2754__auto___3207;
var G__3210 = cljs.core.count.call(null,c__2754__auto___3207);
var G__3211 = 0;
seq__3162_3193 = G__3208;
chunk__3163_3194 = G__3209;
count__3164_3195 = G__3210;
i__3165_3196 = G__3211;
continue;
}
} else
{var vec__3167_3212 = cljs.core.first.call(null,seq__3162_3206__$1);
var k_3213 = cljs.core.nth.call(null,vec__3167_3212,0,null);
var v_3214 = cljs.core.nth.call(null,vec__3167_3212,1,null);
var backidx_3215 = (Number(k_3213) - 1).toString();
if(cljs.core._EQ_.call(null,k_3213,"0"))
{} else
{goog.events.listenOnce(arg.call(null,backidx_3215),"done",arg.call(null,k_3213).fire);
}
{
var G__3216 = cljs.core.next.call(null,seq__3162_3206__$1);
var G__3217 = null;
var G__3218 = 0;
var G__3219 = 0;
seq__3162_3193 = G__3216;
chunk__3163_3194 = G__3217;
count__3164_3195 = G__3218;
i__3165_3196 = G__3219;
continue;
}
}
} else
{}
}
break;
}
return arg.call(null,"0").fire();
});
};
var synchronize = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return synchronize__delegate.call(this, args);
};
synchronize.cljs$lang$maxFixedArity = 0;
synchronize.cljs$lang$applyTo = (function (arglist__3220){
var args = cljs.core.seq(arglist__3220);
return synchronize__delegate(args);
});
synchronize.cljs$core$IFn$_invoke$arity$variadic = synchronize__delegate;
return synchronize;
})()
;
