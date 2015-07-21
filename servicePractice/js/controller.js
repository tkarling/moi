myApp.controller('myController', function ($scope, myService) {
	$scope.example = myService.getValue();
});