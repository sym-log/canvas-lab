(require '[cljs.closure :as cljsc])
(defn compile-project []
  (cljsc/build
   "cljs"
   { :optimizations :whitespace :pretty-print true  :output-to "pub/js/index.js" :output-dir "pub/js" }))