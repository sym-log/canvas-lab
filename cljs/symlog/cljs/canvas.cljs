(ns symlog.cljs.canvas) 

(defn paintImage [ context canvas image ]  
    (. context clearRect
                  0
                  0
                 (. canvas -width)
                 (. canvas -height))
    (. context drawImage image 0 0)
)

(defn clearCanvas [ context canvas ]
  (this-as this
           (set! (. this -fire) (fn []
                                  (. context clearRect
                                     0
                                     0
                                     (. canvas -width)
                                     (. canvas -height))))
  this))

