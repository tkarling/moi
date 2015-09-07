var React - require("react");

var Name = React.createClass({
	render: function() {
		return {
			<h1 onClick={this.props.nameChanger.bind(null, this.props.name)}>{this.props.name}</h1>
		}
	}
})

module.exports = Name;