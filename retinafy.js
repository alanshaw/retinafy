(function () {
  var root = this

  function retinafy(img) {
    var undef
      , imgs = img.length !== undef ? img : [img]
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
}())
