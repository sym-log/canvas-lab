goog.provide('symlog.cljs.idb');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.db');
goog.inherits(symlog.cljs.idb.Idb = (function Idb(dbName,dbVersion){
var this$ = this;
goog.db.openDatabase(dbName,dbVersion,(function (ev,db,tx){
var store = dbName.concat(".objects");
if(cljs.core.not.call(null,db.getObjectStoreNames().contains(store)))
{return db.createObjectStore(store).put([],"keys");
} else
{return null;
}
})).addCallback((function (db){
this$.store = dbName.concat(".objects");
this$.db = db;
this$.index = "indices";
return this$.dispatchEvent("dbOpen");
}));
this$.put = (function (val,key){
return this$.db.createTransaction([this$.store],goog.db.Transaction.TransactionMode.READ_WRITE).objectStore(this$.store).put(val,key);
});
this$.get = (function (key,callback){
return this$.db.createTransaction([this$.store],goog.db.Transaction.TransactionMode.READ).objectStore(this$.store).get(key).addCallback(callback);
});
return this$;
}),goog.events.EventTarget);
