var React = require("react");
var Name = require("./Name");

var thing = 6 + 6;
var list = [{name: "Eric"}, {name: "Mihir"}, {name: "Christian"}];
var App = React.createClass({
	getInitialState: function() {
		return {
			name: "Daniel",
			arr: [1,2,43]
		}
	},
	nameChange: function(name) {
		// console.log("hello");
		this.setState({
			name: name,
			arr: this.state.arr.concat([5]);
		})
	},
	inputChange: function() {
		this.setState({
			name: his.refs.dan.getDOMNode().value
		})
	},
	render: function() {
		var nameList = list.map(function(item, index) {
			var style = {
				background: "blue",
				fontSize: item.name == "Eric" ? "5rem" : "2rem"
			}
			return (
				<Name key={index} name={item.name} nameChanger={this.nameChange} />
				// <h1 key="{index}" style={style} className="name" onClick={this.nameChange.bind(null, item.name)}>{item.name}</h1>
			)
		}.bind(this))
		return (
			<div>
				{nameList}
				<input ref="name" />
				<button onClick={this.nameChange}>Click Me</button>
				<h1>React Woat! {thing} {this.state.name}</h1>
				<input ref="Dan" />
				<button onClick={this.inputChange}>Change Name</button>
			</div>
		)
	}
})

// function dan() {
// 	console.log("dan");
// }

React.render(<App />, document.getElementById("app"));