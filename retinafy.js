(function () {
  var root = this
  
  function isArray (obj) {
    return Object.prototype.toString.call(obj) == "[object Array]"
  }
  
  function isNodeList (obj) {
    return Object.prototype.toString.call(obj) == "[object NodeList]"
  }

  function retinafy (img) {
    var imgs = img.jquery || isNodeList(img) || isArray(img) ? img : [img]
      , dpr = ((root.devicePixelRatio || 1) + "").replace(".", "_")

    for (var i = 0; i < imgs.length; ++i) {
      var src = imgs[i].getAttribute("data-src-" + dpr + "x") 
             || imgs[i].getAttribute("data-src-1x")
             || imgs[i].getAttribute("data-src")
      if (src) {
        imgs[i].src = src
      }
    }
    return img
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = retinafy
  } else {
    root.retinafy = retinafy
  }
})()
