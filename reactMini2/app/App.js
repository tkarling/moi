var React = require("react");
var ListContainer = require("./ListContainer")

var App = React.createClass({
	render: function() {
		return (
			<div>
				<ListContainer />
			</div>
		)
	}
});

React.render(
	<App/>, 
	document.getElementById("app")
)