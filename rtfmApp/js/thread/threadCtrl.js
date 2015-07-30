angular.module("myApp")
    .controller("ThreadController", function($scope, currentThread, comments, threadsService) {
        // console.log("init ThreadController");

        // currentThread.$bindTo($scope, "thread");
        threadsService.bindToScopeField($scope, "thread", currentThread);

        $scope.comments = comments;

        $scope.createComment = function(username, text) {
            $scope.comments.$add({
                username: username,
                text: text
            });
            $scope.username = "";
            $scope.newCommentText = "";
        };
    });
