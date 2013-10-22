(ns symlog.cljs.threads.functions)

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


(defn getSceneArray [ message ]
  (let [ req (js.XMLHttpRequest.) ]
     (. req open "GET" message true )
     (set! (. req -responseType) "text")
     (set! (. req -onload) 
           (fn []
             (let [ arr (.split (. req -response) "/ / /") ] 
               (js.postMessage (js-obj "imagearr" arr)))))
     (. req send nil)

))
