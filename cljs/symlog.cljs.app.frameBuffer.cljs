(ns symlog.cljs.app.frameBuffer)


(def startFrame (atom 0))

(defn frame->buffer [ message ]
  (let [ idx (- (.. message -data -frame) @startFrame) ]

    (set! (.-src (aget symlog.cljs.app.buffer idx)) (.. message -data -image))
    (set! (.-frame (aget symlog.cljs.app.buffer idx))  (.. message -data -frame))
))


(defn fillFrameBuffer [ url buffer workerRef startNum]
  (do
    (reset! startFrame startNum)
    (.forEach buffer (fn [ elem idx arr ]
            (. workerRef postMessage
                 (js-obj "url" (str url (+ idx @startFrame) ".png")
                         "frame" (+ idx @startFrame)))))
))


(defn getImage [ message ]
  (let [req (js.XMLHttpRequest.) ]
    (. req open "GET" (.. message -data -url))
    (set! (. req -responseType) "arraybuffer")
    (set! (. req -onload) (fn [evt]
                            (js.postMessage (js-obj 
                              "image"
                                (. "data:image/png;base64," concat
                                 (js.btoa (js.String.fromCharCode.apply
                                   nil
                                   (js.Uint8Array (. req -response)))))
                              "frame"
                                (.. message -data -frame)))))
                                
    (. req send nil)
))

(defn create-thread [ callback threadFunction ]
; callback = frame->buffer
; threadFunction = getImage

  (let [ worker (js.Worker. (js.URL.createObjectURL
                             (js.Blob. (array (str "onmessage = " threadFunction))
                                       (js-obj "type" "text/javascript")))) ]
    (set! (. worker -onmessage) callback)
    worker)
)

