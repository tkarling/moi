angular.module("myApp")
    .controller("MyController", function($scope, myService) {
        $scope.test = "Hi MyController";
        $scope.serviceTest = myService.test;
        ///////

        $scope.sort = {
            hobbies: "asc",
            occupations: "asc"
        }
        $scope.skills = {
            skillLevel: "all"
        }

        myService.getMyInfo().then(function(data) {
            $scope.me = data;
        });

        $scope.setMyName = function() {
            myService.setMyName($scope.me.name);
        }

        $scope.setMyLocation = function() {
            myService.setMyLocation($scope.me.location);
        }

        $scope.getMyHobbies = function() {
            myService.getMyHobbies($scope.sort.hobbies).then(function(data) {
                $scope.hobbies = data;
            });
        }
        $scope.getMyHobbies("desc");

        $scope.addHobby = function() {
            // console.log("$scope.addHobby", $scope.newHobby);
            myService.addHobby($scope.newHobby, $scope.sort.hobbies).then(function(data) {
                $scope.hobbies = data;
                $scope.newHobby = "";
            });
        }

        var setOccupations = function(arr) {
            // console.log("BEFORE $scope.occupations", $scope.me, arr);
            $scope.occupations = [];
            for (var i = 0; i < arr.length; i++) {
                $scope.occupations[i] = {
                    title: arr[i]
                };
                if (arr[i] === $scope.me.latestOccupation) {
                    $scope.occupations[i].latest = true;

                }
            }
            // console.log("$scope.occupations", $scope.me.latestOccupation, $scope.occupations);
        }


        $scope.getMyOccupations = function() {
            myService.getMyOccupations($scope.sort.occupations).then(function(data) {
                // $scope.occupations = data;
                setOccupations(data);
                // console.log("$scope.occupations", $scope.occupations);
            });
        }
        $scope.getMyOccupations("desc");

        $scope.addOccupation = function() {
            // console.log("$scope.addOccupation", $scope.newOccupation);
            myService.addOccupation($scope.newOccupation, $scope.sort.occupations).then(function(data) {
                setOccupations(data);
                $scope.newOccupation = "";
            });
        }

        var updateLatestOccupation = function() {
            for (var i = 0; i < $scope.occupations.length; i++) {
                $scope.occupations[i].latest = $scope.occupations[i].title === $scope.me.latestOccupation;
            }
            // console.log("$scope.occupations", $scope.me.latestOccupation, $scope.occupations);
        }

        $scope.setLatestOccupation = function(selectedOccupation) {
            console.log("selectedOccupation", selectedOccupation);
            myService.setLatestOccupation(selectedOccupation).then(function(data) {
                // console.log("$scope.setLatestOccupation", data);
                $scope.me.latestOccupation = data;
                updateLatestOccupation();
                $scope.updatingLatest = false;
            });
        };

        $scope.getMySkills = function() {
            myService.getMySkills($scope.skills.skillLevel).then(function(data) {
                $scope.skills.data = data;
                // console.log("$scope.skills.data", $scope.skills.data);
            });
        };
        $scope.getMySkills();

        $scope.newSkill = {
            experience: "Beginner"
        }
        $scope.addSkill = function() {
            myService.addSkill($scope.newSkill).then(function(data) {
                $scope.skills.data = data;
                $scope.newSkill = {
                    experience: "Beginner"
                }
            });
        }

    });
