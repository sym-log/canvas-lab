(ns symlog.cljs.video.editbar)


;This is a convenience utility.  Insert the HTML/CSS and JS commented at the
                                        ;bottom of this file into your web browser.


(defn per-frame-function [ ioTarget videoRef FPS ]
  "this is just an example of a function that could be passed to a vidWrapper instance to be executed
   at each frame of the subject video"
  (do
    (set! (. ioTarget -value ) (time-index-to-string
                                (.-currentTime videoRef ) FPS))
    (. symlog.cljs.app.stage paint (symlog.cljs.app.keyframe ( * (. videoRef -currentTime) FPS))))

 )

(defn setup [ vidWrapper ]
  
  (goog.events.listen (goog.dom.getElement "playButton")
                       symlog.cljs.dom.click
                      (fn [evt] (. vidWrapper start)))
  
  (goog.events.listen (goog.dom.getElement "pauseButton")
                       symlog.cljs.dom.click
                      (fn [evt] (. vidWrapper stop)))

  (goog.events.listen (goog.dom.getElement "skipForwardButton")
                       symlog.cljs.dom.click
                       ( fn [evt]
                         ( do
                           (. vidWrapper stop)
                           (set! (.. vidWrapper -video -currentTime)
                                 (+ (.. vidWrapper -video -currentTime)
                                    (/ (js.parseInt (.-value
                                          (goog.dom.getElement "forwardStepCountField")))
                                       (. vidWrapper -FPS))))
                           (per-frame-function 
                                               (goog.dom.getElement "timeIndexCell")
                                               (goog.dom.getElement "video")
                                               15))))

  (goog.events.listen (goog.dom.getElement "skipBackwardButton")
                       symlog.cljs.dom.click
                       ( fn [evt]
                         ( do
                           (. vidWrapper stop)
                           (set! (.. vidWrapper -video -currentTime)
                                 (- (.. vidWrapper -video -currentTime)
                                    (/ (js.parseInt (.-value
                                          (goog.dom.getElement "backwardStepCountField")))
                                       (. vidWrapper -FPS))))
                            (per-frame-function 
                                               (goog.dom.getElement "timeIndexCell")
                                               (goog.dom.getElement "video")
                                               15))))

  (goog.events.listen (goog.dom.getElement "autoReturnCheckbox")
                      symlog.cljs.dom.click
                     (fn [evt] (if (.-checked (goog.dom.getElement "autoReturnCheckbox"))
                                 (set! (.-value (goog.dom.getElement "timeReturnField"))
                                       (str (.. vidWrapper -video -currentTime)))
                                 (set! (.-value (goog.dom.getElement "timeReturnField")) nil)
                                 )))

)


(defn time-index-to-string [timevalue FPS]
  "this function takes a time value from video.currenTime and the frames per second of the video

   it returns a formatted string giving the time index of the video, the right-most value being the
   current frame"
  
   (let [ hours (rem (.floor js/Math (/ timevalue 3600 )) 24)
          minutes (rem (.floor js/Math (/ timevalue 60 )) 60)
          seconds (.floor js/Math (rem timevalue 60))
          frames (.floor js/Math (.toFixed (* (rem timevalue 1) FPS) 3))  ]
      ( str
      ( if (< hours 10) (str "0" hours ":") ( str hours ":"))
      ( if (< minutes 10) (str "0" minutes ":") (str minutes ":"))
      ( if (< seconds 10) (str "0" seconds ":") (str seconds ":"))
      ( if (< frames 10) (str "0" frames) (str frames)))
))




;<style>
;#editControlPanelDiv {
;position:absolute;
;margin-left:0px;
;margin-top:230px;
;top:50%;
;z-index:100;
;
;}
;
;#timeIndexCell {
;width:70px;
;}
;
;#backwardStepCountField {
;width:50px;
;}
;
;#forwardStepCountField {
;width:50px;
;}
;
;#timeReturnField {
;width:50px;
;}


; <div id='editControlPanelDiv'>
;   <table id='controlTable' >
;     <tr> 
;      <td style="color:white">Time: </td>
;      <td><input id='timeIndexCell' type="text"></input></td>
;      <td><button id='skipBackwardButton'><< </button>
;      <td><input id='backwardStepCountField' type="text"></input></td>
;      <td><button id='playButton'> > </button>
;      <td><button id='pauseButton'> || </button>
;      <td><input id='forwardStepCountField' type="text"></input></td>
;      <td><button id='skipForwardButton'> >> </button></td>
;      <td><input id='timeReturnField' type="text"></input></td>
;      <td><input type="checkbox" id='autoReturnCheckbox'> </td>
;    </tr>
;   </table>    
;
;  </div> 

;  <script type="text/javascript">
;        if ( goog.dom.getElement("autoReturnCheckbox").checked) 
;           { goog.dom.getElement("video").currentTime = 
;                parseInt(goog.dom.getElement("timeReturnField").value) }
;  </script>  
