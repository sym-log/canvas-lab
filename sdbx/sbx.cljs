(ns sbx)

(doseq [f ((symlog.cljs.app.actions 4) :trigger) ] (. f fire))


(doseq [f [#(js.setTimeout nil 2000) #(js.console.log "hello") ]] (f))


(deftype testobj [value callback delay ] Object
         (init [this] this)
         (fire [this]
           (js.setTimeout (. this -exec) delay))
         (exec [this]
           (js.console.log value)
           (if callback (callback))))

(defn callk [ & args ]
  (js.setTimeout
     (fn [] (js.console.log "hello")
       (js.setTimeout #(js.console.log "goodbye") 2000))
     
     2000))

(defn callk [ one two three four ]
  (js.setTimeout (fn [ ]
                   ( one )
                   (js.setTimeout (fn [] ( three ) four)))))


(callk #(js.console.log "hello") 2000 #(js.console.log "goodbye") 2000)

(defn callk [one two three four five six]
  (js.setTimeout (fn [ ]
                   ( one
                     (js.setTimeout (fn []
                                      ( three
                                        js.setTimeout 



                                        (def mike (goog.async.Deferred.))
                                        

                                        four))) four))

                                    
(callk

 (def mike (goog.async.Deferred.))
 (def mike2 (goog.async.Deferred.))
 (. mike chainDeferred mike2)
 
 (. mike2 addCallback (fn [] (js.setTimeout #(js.console.log "hello") 2000)))

 (. mike2 callback)
 
(callk #(js.console.log "hello") 2000

(def tetsfun [] 
       
(defn call2 [& args ]
  (for  [[a b] (partition 2 args)]
    (

    (js.console.log a b)))

  (def crike ["hello" "goodbye" "hadsf" "asfs"])

  (apply str (take 2 crike))

  (apply #(take 2) crike)

  (for  [[a b] (partition 2 crike)] (js.console.log a b))

(take 2 (iterate str crike)           

         (js.console.log a b)) args))

(call2      #(js.console.log "hello") 2000
            #(js.console.log "goodbye") 2000 )

(deftype test [] Object
         (init [] this
           (add [this])))



(goog.inherits (defn test [ delay func ]
                 (this-as this
                        (goog.events.EventTarget.call this)
                        (set! (. this -fire) (fn []
                                               (if (= 0 delay) 
                                                 ((fn [] ( (func)
                                                           (. this dispatchEvent "done"))))
                                                 ((fn [] ( js.setTimeout
                                                           (fn []
                                                             (func)
                                                             (. this dispatchEvent "done")) delay)))
                                              )))

                 this)        
     ) goog.events.EventTarget)


(def mike (array))
(aset mike 0 (test. 2000 #(js.console.log "hello")))
(aset mike 1 (test. 2000 #(js.console.log "goodbye")))
(goog.events.listenOnce (aget mike 0) "done" (. (aget mike 1) -fire))
(.fire (aget mike 0))



(.fire (aget mike 0))

(defn pipe [ time1 one time2 two time3 three ]
  (let [test1 (test. time1 one )
        test2 (test. time2 two )
        test3 (test. time3 three) ]

    (fn [] (goog.events.listenOnce test1 "done" (. test2 -fire))
           (goog.events.listenOnce test2 "done" (. test3 -fire))
      (. test1 fire))
 ))

(def mike (pipe
           2000
           #(js.console.log "hello")
           2000
           #(js.console.log "goodbye")
           1000
           #(js.console.log "dont")))
(mike)

  (for  [[a b] (partition 2 crike)] (js.console.log a b))

(defn pipe [ & args ]
  args)    

    (fn [] (goog.events.listenOnce test1 "done" (. test2 -fire))
           (goog.events.listenOnce test2 "done" (. test3 -fire))
      (. test1 fire))
 ))

(def mike (pipe
           2000
           #(js.console.log "hello")
           2000
           #(js.console.log "goodbye")
           1000
           #(js.console.log "dont")))
(mike)

(defn pipe2 [& args]
  (let [ funcarr (array)
         count (atom -1) ]
    
    (doseq [[ k v ] (partition 2 (. args -arr)) ] (aset funcarr (swap! count inc) (test. k v)))
    (js->clj funcarr)
  )
 )

(defn pipe2 [& args]
  (let [ funcobj (js-obj)
         count (atom -1) ]
    
    (doseq [[ k v ] (partition 2 (. args -arr)) ] (aset funcobj (swap! count inc) (test. k v)))
    (js->clj funcobj)
  )
 )

(js-obj (symbol vr) "cool")

(defn pipe3 [ arg ]
  (fn []
    (doseq [ [ k v ] arg ] (let [ backidx (.toString (- (js.Number k) 1)) ]
                           (if (= k "0") nil
                               (goog.events.listen (arg backidx)
                                               "done"
                                               (. (arg k) -fire)))))
    (.fire (arg "0"))))

(def mark (pipe3 mike))
(mark)

(mike "0")

(get mike 0)
(js.Number "0")
(doseq [ k mike ] (def mark k))
                                       
                  (fn [] (goog.events.listen (aget arg 0) "done" (. (aget arg 1) -fire))
    (. (aget arg 0) fire)))

(

 
(def mark (js->clj mike))

(def mark (pipe3 mike))

(mark)

(def mike (array "bana" "waka" "juju"))
(. mike join " ")

(. (aget mike 0) -fire)

(aset mike 0 (test. 2000 #(js.console.log "hello")))
(aset mike 1 (test. 2000 #(js.console.log "goodbye")))
(goog.events.listenOnce (aget mike 0) "done" (. (aget mike 1) -fire))
(.fire (aget mike 0))


(goog.events.listenOnce (aget mike 0) "done" (. (aget mike 1) -fire))
(
 (def mark (aget mike 0))

  (def mike (pipe2
           2000
           #(js.console.log "hello")
           2000
           #(js.console.log "goodbye")
           1000
           #(js.console.log "dont")))


(get mike 0)

(get (. mike -arr) 0) 

(def mark (atom 0))
(swap! mark inc)
     
  
(goog.events.listenOnce testfun "done" (. testfun2 -fire))
(. testfun fire)              