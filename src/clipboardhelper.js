var clipboard = require('electron').clipboard;
var fs = require('fs');

function generateImageMd(func) {
  // 从剪贴板获取图片
  var img = clipboard.readImage()
  // 保存图片到对应目录
  var pngBuffer = img.toPng();
  var file = "test/data/" + new Date().getTime() + ".png";
  fs.writeFile(file, pngBuffer, function(err) {
    if (err) {
      console.log(err)
      func("")
      return;
    }

    // 生成md
    func("\n" + "![hello]("+file+")" + "\n");
  })
}

module.exports.generateImageMd = generateImageMd;
