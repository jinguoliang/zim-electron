var fs = require("fs");
var frontMatter = require('hexo-front-matter');

var MARKDOWN_EXT = ['md', 'markdown'];

function isFullPath(mdName) {
  console.log('path' + mdName)
  for (var i = 0; i < MARKDOWN_EXT.length; i++) {
    var suffix = MARKDOWN_EXT[i];
    if (mdName.indexOf(suffix, this.length - suffix.length) !== -1) {
      return true;
    }
  }
  return false;
}

function loadFile(mdName, callback) {
  var file = ""
  if (isFullPath(mdName)) {
    file = mdName;
  } else {
    file = mdName + ".md";
  }
  console.log(file);
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
module.exports.MARKDOWN_EXT = MARKDOWN_EXT
