(function () {
  var root = this

  function retinafy (imgs) {
    var isArray = Object.prototype.toString.call(imgs) == "[object Array]" || imgs.jQuery
    imgs = isArray ? imgs : [imgs]

    var dpr = ((root.devicePixelRatio || 1) + "").replace(".", "_")

    for (var i = 0; i < imgs.length; ++i) {
      var src = imgs[i].getAttribute("data-src-" + dpr + "x") 
             || imgs[i].getAttribute("data-src-1x")
             || imgs[i].getAttribute("data-src")
      if (src) {
        imgs[i].src = src
      }
    }
    return imgs.length > 1 ? imgs : isArray ? imgs : imgs[0]
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = retinafy
  } else {
    root.retinafy = retinafy
  }
})()
