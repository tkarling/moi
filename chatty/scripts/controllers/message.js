'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    // $scope.messages = ["m1", "m2", "m3"];
    MessageService.getMessages().then(function(data) {
    	$scope.messages = data;
    });
    $scope.test = "MessageCtrl test";

    $scope.addMessage = function() {
    	console.log("$scope.newMsg", $scope.newMsg);
    	MessageService.addMessage($scope.newMsg).then(function(data) {
    		$scope.messages = data;
    		$scope.newMsg = "";
    	});
    };

  });
