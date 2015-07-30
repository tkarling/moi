angular.module("myApp")
.directive("showTime", function() {
	return {
		restrict: "E",
		template: "<div> The current time is {{time | date: 'medium'}} </div>",
		link: function(scope, element, attrs) {
			console.log("init directive");

			var currentTime = new Date();
			console.log("icurrentTime", currentTime);
			scope.time = currentTime;
		}
	}
});