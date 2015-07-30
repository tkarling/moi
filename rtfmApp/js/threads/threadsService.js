angular.module("myApp")
    .service("threadsService", function($firebase, $firebaseArray, $firebaseObject, FB) {
        // console.log("init service");

        var fbRef = new Firebase(FB.url + '/threads');
        var threads = $firebaseArray(fbRef);

        // this.getThreads = function() {
        //     var fbRef = new Firebase(FB.url + '/threads');
        //     return $firebaseArray(fbRef);
        // };

        this.getThreads = function() {
        	return threads;
        }

        this.addThread = function(thread) {
        	return threads.$add(thread);
        };

        // this.getThreadRef = function(threadId) {
        //     return new Firebase(FB.url + '/threads/' + threadId);
        // };

        this.getThread = function(threadId) {
            var fbRef = new Firebase(FB.url + '/threads/' + threadId);
            return $firebaseObject(fbRef);
        };

        this.bindToScopeField = function(scope, fieldname, myObject) {
	        myObject.$bindTo(scope, fieldname);
        };

        // this.getCommentsRef = function(threadId) {
        //     return new Firebase(FB.url + '/threads/' + threadId + '/comments');
        // };

        this.getComments = function(threadId) {
            var fbRef = new Firebase(FB.url + '/threads/' + threadId + '/comments');
            return $firebaseArray(fbRef);
        };

    });
