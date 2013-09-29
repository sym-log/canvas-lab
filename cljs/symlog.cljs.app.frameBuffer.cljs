(ns symlog.cljs.app.frameBuffer)

(def BUFFERURL "http://192.168.1.3/img/frame-buffers/")
(def BUFFSIZE 1000)

(def buf0 (array))
(def buf1 (array))

(def buf0ready (atom false))
(def buf1ready (atom false))

(def switched->buf0 (atom true))
(def switched->buf1 (atom false))

(defn getImageArray [ message ]
  (let [ req (js.XMLHttpRequest.) ]
     (. req open "GET" (.concat (.. message -data -url)
                                (.. message -data -startFrame)
                                ".img")
        true )
     (set! (. req -responseType) "text")
     (set! (. req -onload) 
           (fn []
             (let [ arr (.split (. req -response) "/ / /") ] 
               (aset arr (. arr -length) (.. message -data -startFrame))
               (js.postMessage (js-obj "imagearr" arr)))))
     (. req send nil)

     ))

(defn imageArray->buffer0 [message]
 (set! buf0 (.. message -data -imagearr))
 (reset! buf0ready true)
)

(defn imageArray->buffer1 [message]
 (set! buf1 (.. message -data -imagearr))
 (reset! buf1ready true)
)
  
(defn requestFrameBuffer [ url threadRef startFrame]
           (. threadRef postMessage
                 (js-obj "url" url 
                         "startFrame" startFrame
                          )))


(defn init []
  (def thread0 (symlog.cljs.threads.create-thread imageArray->buffer0 getImageArray))
  (def thread1 (symlog.cljs.threads.create-thread imageArray->buffer1 getImageArray))

  ( requestFrameBuffer BUFFERURL thread0 (* BUFFSIZE 0 ))
  ( requestFrameBuffer BUFFERURL thread1 (* BUFFSIZE 1 ))

)


(defn nextFrame [frameNum]
  (cond
   (and (< frameNum (+ (aget buf0 BUFFSIZE) BUFFSIZE))
        (> frameNum (- (aget buf0 BUFFSIZE) 1))
        @buf0ready )
   
             (do
                (if-not @switched->buf0
                  (do
                    (requestFrameBuffer BUFFERURL
                                        thread1
                                        (+ (aget buf0 BUFFSIZE) BUFFSIZE))
                    (reset! switched->buf0 true)
                    (reset! switched->buf1 false)
                    (reset! buf1ready false)))
                (aget buf0 (- frameNum (aget buf0 BUFFSIZE)))
              )

   (and (< frameNum (+ (aget buf1 BUFFSIZE) BUFFSIZE))
        (> frameNum (- (aget buf1 BUFFSIZE) 1 ))
        @buf1ready)
     (do
          (if-not @switched->buf1
               (do
                 (requestFrameBuffer BUFFERURL
                                     thread0
                                     (+ (aget buf1 BUFFSIZE) BUFFSIZE))
                 (reset! switched->buf1 true)
                 (reset! switched->buf0 false)
                 (reset! buf0ready false)))
            (aget buf1 (- frameNum (aget buf1 BUFFSIZE))))

   (and (< frameNum (+ (aget buf0 BUFFSIZE) BUFFSIZE))
        (> frameNum (- (aget buf0 BUFFSIZE) 1 ))
        (< frameNum (+ (aget buf1 BUFFSIZE) BUFFSIZE))
        (> frameNum (- (aget buf1 BUFFSIZE) 1 )))
   
      (do
        (requestFrameBuffer BUFFERURL thread0 (js.Math.floor (/ frameNum BUFFSIZE)))
        (requestFrameBuffer BUFFERURL thread1 (+ (js.Math.floor (/ frameNum BUFFSIZE)) BUFFSIZE))
        (reset! switched->buf0 true)
        (reset! switched->buf1 false)
        (reset! buf0ready false)
        (reset! buf1ready false)
        "wait")

   :else "wait"  

))
 

