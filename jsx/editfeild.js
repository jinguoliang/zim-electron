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
    this.setState({
      content: event.target.value
    })
  },
  render: function() {
    var content=this.state.content
    return <textarea className="editfeild" defaultValue={content} onChange={this.onChange}></textarea>;
  }
});

module.exports = EditFeild;
