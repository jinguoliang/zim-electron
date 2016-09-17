var React = require('react');
var ReactDom = require('react-dom');

var MDPreviewer = React.createClass({
  createMarkup: function(html){
    return {__html: this.props.defaultValue};
  },

  render: function () {
    return (<div className="mdpreviewer" dangerouslySetInnerHTML={this.createMarkup()}></div>)
  }
})

module.exports = MDPreviewer;
