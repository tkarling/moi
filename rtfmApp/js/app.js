'use strict'
angular.module("myApp", ['ngRoute', 'firebase']);

angular.module("myApp")
    .constant("FB", {
        url: "https://blinding-heat-8535.firebaseio.com/rtfmApp"
    })
    .config(function($routeProvider) {
        $routeProvider
            .when('/threads', {
                templateUrl: "./js/threads/threads.html",
                controller: "ThreadsController"

            })
            .when('/threads/:threadId', {
                templateUrl: "./js/thread/thread.html",
                controller: "ThreadController",
                resolve: {
                    currentThread: function(threadsService, $route) {
                        return threadsService.getThread($route.current.params.threadId);
                    },
                    comments: function(threadsService, $route) {
                        return threadsService.getComments($route.current.params.threadId);
                    }
                }
            })
            .otherwise({
                redirectTo: '/threads'
            })
    });
