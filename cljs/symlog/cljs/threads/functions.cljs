(ns symlog.cljs.threads.functions)

(defn getImageArray [ message ]
  
  (let [ req (js.XMLHttpRequest.) ]
     (. req open "GET" (.concat (.. message -data -url)
                                (.. message -data -idx)
                                ".imgs")
        true )
     (set! (. req -responseType) "text")
     (set! (. req -onload) 
           (fn []
             (let [ arr (.split (. req -response) "/ / /") ] 
               (aset arr (.. message -data -endpoint) (.. message -data -idx))
               (js.postMessage (js-obj "imagearr" arr "idx" (.. message -data -idx))))))
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
