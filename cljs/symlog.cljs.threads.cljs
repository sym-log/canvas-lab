(ns symlog.cljs.threads)

(defn create-thread [ callback threadFunction ]
; callback = frame->buffer
; threadFunction = getImage

  (let [ worker (js.Worker. (js.URL.createObjectURL
                             (js.Blob. (array (str "onmessage = " threadFunction))
                                       (js-obj "type" "text/javascript")))) ]
    (set! (. worker -onmessage) callback)
    worker)
)

