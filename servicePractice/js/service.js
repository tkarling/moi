myApp.service('myService', function () {
	var value = "Thingie";
	this.getValue = function() {
		return value;
	};

});