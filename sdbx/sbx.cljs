(ns sbx)


(def mike (goog.dom.getElement "narratorDiv"))
(def mike2 (goog.dom.getElement "narratorVid"))

(defn moveum [ elem1  ]
  (set! (. elem1 -className) "activated")
 
 )
 
(defn moveum2 [  elem1 ]
  (set! (. elem1 -className) "deactivated")
 
  )



(moveum mike )

(moveum2 mike )




(set! (. mike -className) "active")



(def req (js.XMLHttpRequest.))
(def  arr (.map (js.Array.apply nil (js.Array. 1000)) js.Number.prototype.valueOf 0))
     
    (. req open "GET" "http://localhost/img/test/output.txt")
    (set! (. req -responseType) "text")

(set! (. req -onload)
      (fn [evt] (def mike (. req -response))))

(. req send nil)

(def stk "hello\" my friend \"")
(def mike3 (.split stk \"))


(def mike2 (. mike split "/ / /"))









(def mike (array 
(aget mike 0)
(js.console.info "hello")


(def buf0 (.map (js.Array.apply nil (js.Array. 100)) js.Number.prototype.valueOf 0))

(def buf1 (array))

  (defn empty-array-with-offset [offset]
    (let [ arr (array) ]
      (aset arr offset 0)
      arr))
  
(def mike (empty-array-with-offset 100))


(goog.array.insertArrayAt (empty-array-with-offset 100)



                          (def mike (js-obj))

                          (aset mike 0 (js.Image.))
                          (aget mike 0)

                          (js* "delete" (aget mike 0))


                          (.forEach mike (fn [elem idx arr] (js.console.log "hello")))

                          (def mike @symlog.cljs.app.frameBuffer.buf0ready)

                          
   (and @symlog.cljs.app.frameBuffer.buf0ready
        (< frameNum (+ (aget buf0 100) 100))
        (> frameNum (aget buf0 100)))
 
   (< 0 (+  (aget symlog.cljs.app.frameBuffer.buf0 100) 100))

   (+ buffer)
   ('buffer)

   (var-get buffer)
   (symlog.cljs.app.frameBuffer -BUFFER-SIZE)