(ns sbx)

(def worker (symlog.cljs.app.frameBuffer.create-thread
           symlog.cljs.app.frameBuffer.frame->buffer
           symlog.cljs.app.frameBuffer.getImage))

(symlog.cljs.app.frameBuffer.fillFrameBuffer
 "http://localhost/img/frames/"
 symlog.cljs.app.buffer
 worker
 1489)

(symlog.cljs.app.paintImage (aget symlog.cljs.app.buffer 86))
