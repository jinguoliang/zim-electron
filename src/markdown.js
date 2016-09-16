var fs = require("fs");
var frontMatter = require('hexo-front-matter');

function loadFile(mdName, callback) {
  var file = mdName + ".md";
  fs.readFile(file, "utf-8", function(err, data) {
    if (err) {
      callback(null);  // 出错时返回空
    }
    var d = frontMatter.parse(data);
    callback(d);
  })
}

function saveFile(mdName,data, callback) {
  if (mdName == null || mdName == "") {
    throw error("file path is wrong")
  }
  var file = mdName + ".md";
  fs.writeFile(file, frontMatter.stringify(data), function (err, data) {
    callback && callback(err==null)
  })
}

module.exports.load = loadFile
module.exports.save = saveFile
