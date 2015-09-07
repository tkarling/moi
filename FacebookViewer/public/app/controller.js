angular.module("myApp")
.controller("MyController", function($scope, $http) {
	$scope.test = "MyController test"

	$scope.loginWFB = function() {
		console.log("loginWFB");
		$http.get("http://localhost:3039/auth/facebook").then(function(result) {
			console.log("loginWFB result", result);
		});

	} 

	$scope.getMyInfo = function() {
		console.log("getMyInfo");		
		$http.get("http://localhost:3039/me").then(function(result) {
			console.log("getMyInfo result", result);
			$scope.myInfo = result.data;
		});
	} 

	$scope.loggedIn = false;

});