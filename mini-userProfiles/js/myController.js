angular.module('userProfiles').controller('mainController', function($scope, mainService) {
	// $scope.example = "moi";
	$scope.title = mainService.getTitle();

	$scope.users = mainService.getUsers();
	console.log('$scope.users', $scope.users);
});