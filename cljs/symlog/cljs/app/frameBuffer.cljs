(ns symlog.cljs.app.frameBuffer)

(def BUFFERURL "http://192.168.1.2/img/frame-buffers/")
(def BUFFSIZE 1000)
(def MAXBUF 16000)
(def buf0 (array))
(def buf1 (array))
(def buf0ready (atom false))
(def buf1ready (atom false))
(def switched->buf0 (atom true))
(def switched->buf1 (atom false))

(defn init []
  
  (def worker
   (symlog.cljs.threads.create-thread
     symlog.cljs.threads.functions.getImageArray
     array->db ))

  (goog.events.listenOnce
   
   (def dbcache (symlog.cljs.idb.Idb. "mainFrames" 1))
   "dbOpen" 
   (fn [ ]
     (. dbcache get "keys"
        (fn [keys]
          (def dbBuffers keys)
          (if-not (= -1 (.indexOf dbBuffers 1000))
            (db->buffer0 1000))
          (if-not (= -1 (.indexOf dbBuffers 2000))
            (db->buffer1 2000))
          (doseq [ x (range 1000 17000 1000) ]
             (if (= -1 (.indexOf dbBuffers x))
               (requestFrameBuffer BUFFERURL worker x)))))))

 )

(defn array->db [ message ]
  (. dbcache put (.. message -data -imagearr)
     (.. message -data -idx))
  (.push dbBuffers (.. message -data -idx))
  (. dbcache put dbBuffers "keys")
  (if (= 1000 (.. message -data -idx))
    (do
      (set! buf0 (.. message -data -imagearr))
      (reset! buf0ready true)))
  (if (= 2000 (.. message -data -idx))
    (do
      (set! buf1 (.. message -data -imagearr))
      (reset! buf1ready true)))
 )

(defn db->buffer0 [ idx ]
  (if-not (> idx MAXBUF)
    (. dbcache get idx
     (fn [ data ]
       (set! buf0 data)
       (reset! buf0ready true)))))

(defn db->buffer1 [ idx ]
  (if-not (> idx MAXBUF)
    (. dbcache get idx
     (fn [ data ]
       (set! buf1 data)
       (reset! buf1ready true)))))

(defn requestFrameBuffer [ url threadRef startIdx]
           (. threadRef postMessage
                 (js-obj "url" url 
                         "idx" startIdx
                         "endpoint" 1000)))

(defn getFrame [frameNum]
  (let [ BUF0END (+ 1 (aget buf0 BUFFSIZE)) ; 1001 
         BUF0START (- (aget buf0 BUFFSIZE) BUFFSIZE ) ; 0;
         BUF1END  (+ 1 (aget buf1 BUFFSIZE)) ; 2001 
         BUF1START (- (aget buf1 BUFFSIZE) BUFFSIZE ) ] ; 1000;
  (cond
   
   (and (< frameNum BUF0END) 
        (>= frameNum BUF0START) 
         @buf0ready )
   (do
        (if-not @switched->buf0
          (do
             (reset! buf1ready false)
             (db->buffer1 (+ BUF0START BUFFSIZE BUFFSIZE))
             (reset! switched->buf0 true)
             (reset! switched->buf1 false)))
        (aget buf0 (- frameNum BUF0START )))
   
   (and (< frameNum BUF1END)
        (>= frameNum BUF1START)
         @buf1ready )
   (do  
        (if-not @switched->buf1
          (do
             (reset! buf0ready false)
             (db->buffer0 (+ BUF1START BUFFSIZE BUFFSIZE))
             (reset! switched->buf1 true)
             (reset! switched->buf0 false)))
          (aget buf1 (- frameNum BUF1START )))

   (and @buf0ready
        @buf1ready
        (or (and (< frameNum BUF0START) (< frameNum BUF1START))
            (and (>= frameNum BUF0END) (>= frameNum BUF1END))))
   (do
        (reset! buf0ready false)
        (reset! buf1ready false)
        (db->buffer0 (+ (* (js.Math.floor (/ frameNum BUFFSIZE)) BUFFSIZE) BUFFSIZE))
        (db->buffer1 (+ (* (js.Math.floor (/ frameNum BUFFSIZE)) BUFFSIZE) (* 2 BUFFSIZE)))
        (reset! switched->buf0 true)
        (reset! switched->buf1 false)
        "wait")
   
   :else
     "wait" 
)))

(defn seekFrame [frame callback]
  (if (or
        (not @buf0ready)
        (< frame (- (aget buf0 BUFFSIZE) BUFFSIZE))
        (> frame (aget buf0 BUFFSIZE)))
      
      (let [ idx (+ (* (js.Math.floor (/ frame BUFFSIZE)) BUFFSIZE) BUFFSIZE) ]
          (reset! buf0ready false)
          (reset! buf1ready false)
          (if-not (> (+ idx BUFFSIZE) MAXBUF)
            (. dbcache get idx
              (fn [ data ]
                (set! buf0 data)
                (reset! buf0ready true)
                (. dbcache get (+ idx BUFFSIZE)
                  (fn [data]
                      (set! buf1 data)
                      (reset! buf1ready true)
                      (callback (getFrame frame))))))
            (. dbcache get idx
              (fn [data]
                (set! buf0 data)
                (reset! buf0ready true)
                (callback (getFrame frame))))))
      (do
        (callback (getFrame frame)))))

