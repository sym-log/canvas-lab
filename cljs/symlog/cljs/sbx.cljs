(ns sbx
  (:use [symlog.cljs.app.dom :only [elements]]))

(comment






  
(def mike (goog.dom.getElementsByClass "n1"))
  
(defn clickCheck [target]
  (this-as this
           
     (set! (. this -timer) nil)
     (set! (. this -enabled) true)      
     (set! (. this -fire)       
           (fn [evt]
             (cond
               (. this -timer) (. this doubleClick)
               :else
                 (do
                   (set! (. this -timer)
                      (js.setTimeout (. this -singleClick) 300))))))

     (set! (. this -doubleClick)
           (fn []
             (js.clearTimeout (. this -timer))
             (set! (. this -timer) nil)
             (if (. this -enabled)
               nil
               (do
                 (set! (.. target -style -opacity) 1)
                 (set! (. this -enabled) true)))))

     (set! (. this -singleClick)
           (fn []
             (if (. this -enabled)
               (do
                 (set! (.. target -style -opacity) .3)
                 (set! (. this -enabled) false))
               (do
                 (set! (.. target -style -opacity) 1)
                 (set! (. this -enabled) true)))
             (set! (. this -timer) nil)))

     this))


(def mike (goog.dom.getElement "intro"))
(goog.events.listen
 mike
 "click"
 (.-fire (clickCheck. mike))
 true)

  (def cow (js.setTimeout #(js.console.log "hello")))

(js.clearTimeout cow)




)