'use strict'
angular.module("myApp", ['ngRoute', 'firebase']);

angular.module("myApp")
    .constant("FB", {
        url: "https://blinding-heat-8535.firebaseio.com/rtfmApp"
    })
    .run(["$rootScope", "$location", function($rootScope, $location) {
        $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
            // We can catch the error thrown when the $requireAuth promise is rejected
            // and redirect the user back to the home page
            console.log("hello");
            if (error === "AUTH_REQUIRED") {
                $location.path("/login");
            }
        });
    }])
    .config(function($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: "./js/auth/auth.html",
                controller: "AuthController",
                resolve: {
                    // controller will not be loaded until $waitForAuth resolves
                    // Auth refers to our $firebaseAuth wrapper in the example above
                    "currentAuth": function(Auth) {
                        // $waitForAuth returns a promise so the resolve waits for it to complete
                        return Auth.$waitForAuth();
                    }

                }
            })
            .when('/threads', {
                templateUrl: "./js/threads/threads.html",
                controller: "ThreadsController",
                resolve: {
                    // controller will not be loaded until $requireAuth resolves
                    // Auth refers to our $firebaseAuth wrapper in the example above
                    "currentAuth": ["Auth", function(Auth) {
                        // $requireAuth returns a promise so the resolve waits for it to complete
                        // If the promise is rejected, it will throw a $stateChangeError (see above)
                        return Auth.$requireAuth();
                    }]
                }

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
                        },
                        // controller will not be loaded until $requireAuth resolves
                        // Auth refers to our $firebaseAuth wrapper in the example above
                    "currentAuth": ["Auth", function(Auth) {
                        // $requireAuth returns a promise so the resolve waits for it to complete
                        // If the promise is rejected, it will throw a $stateChangeError (see above)
                        return Auth.$requireAuth();
                    }]
                }
            })
            .otherwise({
                redirectTo: '/login'
            })
    });
