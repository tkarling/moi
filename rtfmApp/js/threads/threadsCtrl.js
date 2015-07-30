angular.module("myApp")
    .controller("ThreadsController", function($scope, threadsService) {
        // console.log("init controller");

        $scope.threads = threadsService.getThreads();

        $scope.threads.$loaded().then(function(threads) {
            // console.log(threads);
        });

        // $scope.createThread = function(username, title) {
        // 	console.log(username, title, $scope.threads);
        //     $scope.threads.$add({
        //         username: username,
        //         title: title
        //     }).then(function(response) {
        //     	$scope.username = "";
        //     	$scope.newThreadTitle = "";
        //     });
        // };


         $scope.createThread = function(username, title) {
        	console.log(username, title, $scope.threads);
            threadsService.addThread({
                username: username,
                title: title
            }).then(function(response) {
            	$scope.username = "";
            	$scope.newThreadTitle = "";
            });
        };


    });
