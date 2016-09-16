// react
var React = require('react');
var ReactDom = require('react-dom');

var EditFeild = React.createClass({
  getInitialState: function() {
    return {
      content:this.props.content
    }
  },
  onChange: function(event) {
    var content = event.target.value
    this.props.onChange(content)
    this.setState({
      content: content
    })
  },
  render: function() {
    var content=this.state.content
    return <textarea className="editfeild" defaultValue={content} onChange={this.onChange}></textarea>;
  }
});

module.exports = EditFeild;
