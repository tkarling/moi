// var app = angular.module('friendsList');

app.controller('mainController', function($scope) {
    $scope.myTitle = "My Friends";

    $scope.friends = ['Jordyn', 'Ryan', 'Chelsey'];

    $scope.addFriend = function() {
    	if($scope.newFriend) {
	        $scope.friends.push($scope.newFriend);
	        $scope.newFriend = "";    		
    	}
    };

    $scope.deleteFriend = function(friend) {
    	var index = $scope.friends.indexOf(friend);
        $scope.friends.splice(index, 1);
    };


});
