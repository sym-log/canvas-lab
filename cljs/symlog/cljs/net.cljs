(ns symlog.cljs.net)

(defn getTextArray [ url callbackOnResponse]  
  (let [ req (js.XMLHttpRequest.) ]
     (. req open "GET" url true )
     (set! (. req -responseType) "text")
     (set! (. req -onload) #(callbackOnResponse (. req -response)))
     (. req send nil))
)
