goog.provide('symlog.cljs.svg');
goog.require('cljs.core');
symlog.cljs.svg.create_path = (function create_path(path){
var elem = document.createElementNS("http://www.w3.org/2000/svg","path");
elem.setAttribute("d",path);
return elem;
});
symlog.cljs.svg.path_length = (function path_length(path){
var elem = document.createElementNS("http://www.w3.org/2000/svg","path");
elem.setAttribute("d",path);
return elem.getTotalLength();
});
