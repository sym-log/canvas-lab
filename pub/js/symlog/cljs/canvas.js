goog.provide('symlog.cljs.canvas');
goog.require('cljs.core');
symlog.cljs.canvas.paintImage = (function paintImage(context,canvas,image){
context.clearRect(0,0,canvas.width,canvas.height);
return context.drawImage(image,0,0);
});
