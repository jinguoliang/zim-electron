var React = require('react');
var ReactDom = require('react-dom');
var EditFeild = require('./editfeild.js')
var MDPreviewer = require('./mdpreviewer.js')
var markdown = require('markdown').markdown;

var MDEditor = React.createClass({
  getInitialState: function() {
    var mdContent = this.props.content
    var html = markdown.toHTML(mdContent)
    return {
      content:mdContent,
      html: html,
    }
  },
  onChange: function(content) {
    this.props.onChange(content)
    var html = markdown.toHTML(content)
    this.setState({
      content: content,
      html: html,
    })
  },
  render: function () {
    return (<div className="mdeditor">
              <EditFeild  defaultValue={this.state.content} onChange={this.onChange}/>
              <MDPreviewer defaultValue={this.state.html}/>
            </div>)
  }
})

module.exports = MDEditor;
