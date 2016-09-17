var React = require('react');
var ReactDom = require('react-dom');
var MDEditor = require('./mdeditor.js')
var markdown = require("../src/markdown.js")

var currentMd = "test/data/test_has_front"

ReactDom.render(<h1> loading </h1>, document.getElementById('container'))

console.log(process.cwd())

function onTextChanged(content) {
  var data = {
    title: "hello",
    _content: content
  }

  markdown.save(currentMd, data)
}

markdown.load(currentMd, function(data) {
  document.title = data.title;
  var content = data._content;
  var mdeditor = <MDEditor content={content} onChange={onTextChanged}/>
  ReactDom.render(mdeditor, document.getElementById('container'))
})
