(ns symlog.cljs.canvas) 

(defn paintImage [ context canvas image ]  
    (. context clearRect
                  0
                  0
                 (. canvas -width)
                 (. canvas -height))
    (. context drawImage image 0 0)
)

