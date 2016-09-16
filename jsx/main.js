var React = require('react');
var ReactDom = require('react-dom');
var EditFeild = require('./editfeild.js')
var markdown = require("../src/markdown.js")

ReactDom.render(<h1> loading </h1>, document.getElementById('container'))

console.log(process.cwd())
markdown.load("test/data/test_has_front", function(data) {
  document.title = data.title;
  var content = data._content;
  ReactDom.render(<EditFeild content={content}/>, document.getElementById('container'))
})
