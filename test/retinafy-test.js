var test = require("tap").test
  , retinafy = require("../")

test("src is respolved as expected", function (t) {

  function createImg(attrs) {
    var el = {
        tagName: "IMG",
        getAttribute: function (attr) {
          return attrs[attr]
        }
      }
    Object.keys(attrs).forEach(function (attr) {
      el[attr] = attrs[attr]
    })
    return el
  }

  // element, devicePixelRatio, expected src
  var data = [

      [createImg({src: "src.jpg"}), undefined, "src.jpg"]
    , [createImg({src: "src.jpg"}), 1, "src.jpg"]
    , [createImg({src: "src.jpg"}), 1.5, "src.jpg"]
    , [createImg({src: "src.jpg"}), 2, "src.jpg"]

    , [createImg({"data-src": "data-src.jpg"}), undefined, "data-src.jpg"]
    , [createImg({"data-src": "data-src.jpg"}), 1, "data-src.jpg"]
    , [createImg({"data-src": "data-src.jpg"}), 1.5, "data-src.jpg"]
    , [createImg({"data-src": "data-src.jpg"}), 2, "data-src.jpg"]

    , [createImg({src: "src.gif", "data-src": "data-src.jpg"}), undefined, "data-src.jpg"]
    , [createImg({src: "src.gif", "data-src": "data-src.jpg"}), 1, "data-src.jpg"]
    , [createImg({src: "src.gif", "data-src": "data-src.jpg"}), 1.5, "data-src.jpg"]
    , [createImg({src: "src.gif", "data-src": "data-src.jpg"}), 2, "data-src.jpg"]

    , [createImg({src: "src.gif", "data-src-3x": "data-src-3x.jpg"}), undefined, "src.gif"]
    , [createImg({src: "src.gif", "data-src-3x": "data-src-3x.jpg"}), 1, "src.gif"]
    , [createImg({src: "src.gif", "data-src-3x": "data-src-3x.jpg"}), 1.5, "src.gif"]
    , [createImg({src: "src.gif", "data-src-3x": "data-src-3x.jpg"}), 2, "src.gif"]

    , [createImg({"data-src-1x": "data-src-1x.jpg"}), undefined, "data-src-1x.jpg"]
    , [createImg({"data-src-1x": "data-src-1x.jpg"}), 1, "data-src-1x.jpg"]
    , [createImg({"data-src-1x": "data-src-1x.jpg"}), 1.5, "data-src-1x.jpg"]
    , [createImg({"data-src-1x": "data-src-1x.jpg"}), 2, "data-src-1x.jpg"]

    , [createImg({src: "src.gif", "data-src-1x": "data-src-1x.jpg"}), undefined, "data-src-1x.jpg"]
    , [createImg({src: "src.gif", "data-src-1x": "data-src-1x.jpg"}), 1, "data-src-1x.jpg"]
    , [createImg({src: "src.gif", "data-src-1x": "data-src-1x.jpg"}), 1.5, "data-src-1x.jpg"]
    , [createImg({src: "src.gif", "data-src-1x": "data-src-1x.jpg"}), 2, "data-src-1x.jpg"]

    , [createImg({src: "src.gif", "data-src": "data-src.jpg", "data-src-1x": "data-src-1x.jpg"}), undefined, "data-src-1x.jpg"]
    , [createImg({src: "src.gif", "data-src": "data-src.jpg", "data-src-1x": "data-src-1x.jpg"}), 1, "data-src-1x.jpg"]
    , [createImg({src: "src.gif", "data-src": "data-src.jpg", "data-src-1x": "data-src-1x.jpg"}), 1.5, "data-src-1x.jpg"]
    , [createImg({src: "src.gif", "data-src": "data-src.jpg", "data-src-1x": "data-src-1x.jpg"}), 2, "data-src-1x.jpg"]

    , [createImg({src: "src.gif", "data-src-1_5x": "data-src-1_5x.jpg", "data-src-2x": "data-src-2x.jpg"}), undefined, "src.gif"]
    , [createImg({src: "src.gif", "data-src-1_5x": "data-src-1_5x.jpg", "data-src-2x": "data-src-2x.jpg"}), 1, "src.gif"]
    , [createImg({src: "src.gif", "data-src-1_5x": "data-src-1_5x.jpg", "data-src-2x": "data-src-2x.jpg"}), 1.5, "data-src-1_5x.jpg"]
    , [createImg({src: "src.gif", "data-src-1_5x": "data-src-1_5x.jpg", "data-src-2x": "data-src-2x.jpg"}), 2, "data-src-2x.jpg"]
  ]

  t.plan(data.length)

  data.forEach(function (d) {
    global.devicePixelRatio = d[1]
    retinafy(d[0])
    t.equal(d[0].src, d[2])
  })

  t.end()
})
