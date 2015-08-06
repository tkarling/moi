angular.module("myApp")
    .factory("Auth", ["$firebaseAuth", "FB", 
        function($firebaseAuth, FB) {
            var ref = new Firebase(FB.url);
            return $firebaseAuth(ref);
        }
    ])
    .controller("AuthController", function($scope, $location, $firebaseAuth, $firebaseObject, FB) {
        var firebaseRoot = FB.url,
            ref = new Firebase(firebaseRoot),
            authObj = $firebaseAuth(ref);
        // Assign authObj to scope for inline calls in the view
        $scope.authObj = authObj;
        // Use $onAuth listener to keep $scope.authData synced. Also sync scope.user.
        authObj.$onAuth(function(authData) {
            $scope.authData = authData;
            if (authData) { // Set up user object if authData present
                var userRef = new Firebase(firebaseRoot + '/users/' + authData.uid),
                    user = $firebaseObject(userRef);
                user.$loaded().then(function(user) { // Wait for user to be loaded before setting user details
                    user.lastLogin = new Date().toString();
                    user.$save();
                    user.$bindTo($scope, 'user');
                    if (user.birthday) {
                        $scope.birthday = new Date(user.birthday);
                    }
                    // $location.path("/threads");
                });
            }
        });
        $scope.login = function(user) {
            authObj.$authWithPassword(user).then(function(authData) {
                console.log('login authData', authData);
            }, function(error) {
                alert(error);
            });
        };
        $scope.register = function(user) {
            authObj.$createUser(user).then(function(userData) {
                console.log('login userData', userData);
                $scope.login(user);
            }, function(error) {
                alert(error);
            });
        };
        $scope.reset = function(user) {
            authObj.$resetPassword({
                email: user.email
            }).then(function() {
                alert('Success! Password reset email sent.');
            }, function(error) {
                alert('Error! ' + JSON.stringify(error));
            });
        };
        $scope.changePassword = function(email, oldPassword, newPassword, newPasswordConfirmed) {
            if (newPassword !== newPasswordConfirmed) {
                alert('Passwords do not match!');
            } else {
                authObj.$changePassword({
                    email: email,
                    oldPassword: oldPassword,
                    newPassword: newPassword
                }).then(function() {
                    alert('success!');
                }, function(error) {
                    alert('Failure! ' + JSON.stringify(error));
                });
            }
        };
        $scope.googlePlus = function() {
            authObj.$authWithOAuthPopup('google');
        };
        $scope.logout = function() {
        	authObj.$unauth();
        	$location.path("/login");
        }
    });
