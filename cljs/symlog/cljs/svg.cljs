(ns symlog.cljs.svg )

(defn create-path [path]
      (let [ elem (js.document.createElementNS "http://www.w3.org/2000/svg" "path") ]
        (.setAttribute elem "d" path)
        elem)
)

(defn path-length [path]
     (let [ elem (js.document.createElementNS "http://www.w3.org/2000/svg" "path") ]
       (.setAttribute elem "d" path)
       (. elem getTotalLength)
))
  