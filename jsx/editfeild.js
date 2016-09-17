// react
var React = require('react');
var ReactDom = require('react-dom');
var clipboardhelper = require('../src/clipboardhelper.js')

var EditFeild = React.createClass({
  getInitialState: function() {
    return {
      content:this.props.defaultValue
    }
  },
  onChange: function(event) {
    var content = event.target.value
    this._onChange(content)
  },
  _onChange: function (content) {
    this.props.onChange(content)
    this.setState({
      content: content
    })
  },
  onPaste: function (event) {
    event.preventDefault()

    clipboardhelper.generateImageMd(function(md) {
      var content = this.state.content + md;
      this._onChange(content)
    }.bind(this));
  },
  render: function() {
    var content=this.state.content
    return <textarea onPaste= {this.onPaste} className="editfeild" value={content} onChange={this.onChange}></textarea>;
  }
});

module.exports = EditFeild;
