(ns symlog.cljs.app.frameBuffer)

(def BUFFSIZE 1000)
(def FRAMEURL "http://192.168.1.3/img/frames/")

(def buf0 (.map (js.Array.apply nil (js.Array. BUFFSIZE)) js.Number.prototype.valueOf 0))

(def buf1 (.map (js.Array.apply nil (js.Array. BUFFSIZE)) js.Number.prototype.valueOf 0))

(def buf2 (.map (js.Array.apply nil (js.Array. BUFFSIZE)) js.Number.prototype.valueOf 0))


(def buf0ready (atom false))
(def buf1ready (atom false))
(def buf2ready (atom false))

(def switched2buf0 (atom true))
(def switched2buf1 (atom false))
(def switched2buf2 (atom false))
     

(defn getImages [ message ]
(let [ imgarr (.map (js.Array.apply nil (js.Array. (.. message -data -BUFFSIZE))) js.Number.prototype.valueOf 0) ]
  
  (.forEach imgarr
            ( fn [ elem idx arr ]
              (let [ req (js.XMLHttpRequest.) ]
                (. req open "GET" (.concat (.. message -data -url)
                                           (+ (.. message -data -startFrame) idx)
                                           ".png") false)
                (set! (. req -responseType) "arraybuffer")
                (set! (. req -onload)
                      (fn [evt]
                        (do
                          (aset imgarr idx
                                    (. "data:image/png;base64," concat
                                       (js.btoa (js.String.fromCharCode.apply
                                                 nil
                                                 (js.Uint8Array. (. req -response)))))))))
                (. req send nil))))
  (aset imgarr (.. message -data -BUFFSIZE) (.. message -data -startFrame))
  (js.postMessage (js-obj "imagearr" imgarr ))
))


(defn frames->buffer0 [message]
  (.forEach (.. message -data -imagearr)
            (fn [elem idx arr]
              (cond
               (= BUFFSIZE idx) (aset buf0 BUFFSIZE elem)
               :else (set! (.-src (aget buf0 idx)) elem))))

 (reset! buf0ready true)
)

(defn frames->buffer1 [message]
  (.forEach (.. message -data -imagearr)
            (fn [elem idx arr]
              (cond
               (= BUFFSIZE idx) (aset buf1 BUFFSIZE elem)
               :else (set! (.-src (aget buf1 idx)) elem))))

 (reset! buf1ready true)
)

(defn frames->buffer2 [message]
    (.forEach (.. message -data -imagearr)
            (fn [elem idx arr]
              (cond
               (= BUFFSIZE idx) (aset buf2 BUFFSIZE elem)
               :else (set! (.-src (aget buf2 idx)) elem))))

    (reset! buf2ready true)
)

 

(defn requestFrameBuffer [ url threadRef startFrame]
           (. threadRef postMessage
                 (js-obj "url" url 
                         "startFrame" startFrame
                         "BUFFSIZE" BUFFSIZE
                          )))

(defn init []
  (.forEach buf0 (fn [elem idx arr] (aset arr idx (js.Image.))))
  (.forEach buf1 (fn [elem idx arr] (aset arr idx (js.Image.))))
  (.forEach buf2 (fn [elem idx arr] (aset arr idx (js.Image.))))
  (def thread0 (symlog.cljs.threads.create-thread frames->buffer0 getImages))
  (def thread1 (symlog.cljs.threads.create-thread frames->buffer1 getImages))
  (def thread2 (symlog.cljs.threads.create-thread frames->buffer2 getImages))
  ( requestFrameBuffer
         FRAMEURL
         thread0
         (* 0 BUFFSIZE))

  ( requestFrameBuffer
         FRAMEURL
         thread1
         (* 1 BUFFSIZE ))

  ( requestFrameBuffer
         FRAMEURL
         thread2
         (* 2 BUFFSIZE))
  
)


(defn nextFrame [frameNum]
  
  (cond
   (and @buf0ready
        (< frameNum (+ (aget buf0 BUFFSIZE) BUFFSIZE))
        (> frameNum (- (aget buf0 BUFFSIZE) 1)))
             (do
                (if-not @switched2buf0
                  (do
                    (requestFrameBuffer FRAMEURL
                                        thread2
                                        (+ (aget buf0 BUFFSIZE) (* 2 BUFFSIZE)))
                    (reset! switched2buf0 true)
                    (reset! switched2buf2 false)
                    (reset! buf2ready false)))
                (aget buf0 (- frameNum (aget buf0 BUFFSIZE)))
              )

   (and @buf1ready
        (< frameNum (+ (aget buf1 BUFFSIZE) BUFFSIZE))
        (> frameNum (- (aget buf1 BUFFSIZE) 1 )))
          (do
            (if-not @switched2buf1
               (do
                 (requestFrameBuffer FRAMEURL
                                     thread0
                                     (+ (aget buf1 BUFFSIZE) (* 2 BUFFSIZE)))
                 (reset! switched2buf1 true)
                 (reset! switched2buf0 false)
                 (reset! buf0ready false)))
             (aget buf1 (- frameNum (aget buf1 BUFFSIZE))))


   (and @buf2ready
        (< frameNum (+ (aget buf2 BUFFSIZE) BUFFSIZE))
        (> frameNum (- (aget buf2 BUFFSIZE) 1)))
            (do
                (if-not @switched2buf2
                  (do
                    (requestFrameBuffer FRAMEURL
                                        thread1
                                        (+ (aget buf2 BUFFSIZE) (* 2 BUFFSIZE)))
                    (reset! switched2buf2 true)
                    (reset! switched2buf1 false)
                    (reset! buf1ready false)))
                (aget buf2 (- frameNum (aget buf2 BUFFSIZE ))))

   :else "wait"  

))
 

