(ns symlog.cljs.idb
  (:require [goog.db :as db]
            [goog.events :as events]
 ))

(goog.inherits (defn Idb [dbName dbVersion]
 (this-as this
     (goog.events.EventTarget.call this)                         
     (.addCallback
        (goog.db.openDatabase
           dbName
           dbVersion
           (fn [ ev db tx ]
             (let [ store (.concat dbName ".objects") ] 
               (if-not (.contains (.getObjectStoreNames db) store)
                 (.put (.createObjectStore db store) (array) "keys")))))
        (fn [db]
          (set! (. this -store) (.concat dbName ".objects"))
          (set! (. this -db) db)
          (set! (. this -index) "indices")
          (. this dispatchEvent "dbOpen")))
     
     (set! (. this -put )
       (fn [ val key ]
         (.put
          (.objectStore
           (.createTransaction
             (. this -db)
             (array (. this -store))
             goog.db.Transaction.TransactionMode.READ_WRITE)
           (. this -store))
          val key )))

     (set! (. this -get )
       (fn [ key callback ] ; callback is a function that recieves data as a param
         (.addCallback
           (.get
             (.objectStore
               (.createTransaction
                 (. this -db)
                 (array (. this -store))
                 goog.db.Transaction.TransactionMode.READ)
               (. this -store))
             key)
           callback)))
  this)) goog.events.EventTarget)
