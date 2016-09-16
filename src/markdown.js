var fs = require("fs");
var frontMatter = require('hexo-front-matter');

function loadFile(mdName, callback) {
  var file = mdName + ".md";
  console.log(file)
  fs.readFile(file, "utf-8", function(err, data) {
    if (err) {
      console.log(err)
      callback(null);  // 出错时返回空
    }
    var d = frontMatter.parse(data);
    callback(d);
  })
}

module.exports.load = loadFile
