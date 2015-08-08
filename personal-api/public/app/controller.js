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

        $scope.getMyOccupations = function() {
            myService.getMyOccupations($scope.sort.occupations).then(function(data) {
                $scope.occupations = data;
                // console.log("$scope.occupations", $scope.occupations);
            });
        }
        $scope.getMyOccupations("desc");

        $scope.addOccupation = function() {
            // console.log("$scope.addOccupation", $scope.newOccupation);
            myService.addOccupation($scope.newOccupation, $scope.sort.occupations).then(function(data) {
                $scope.occupations = data;
                $scope.newOccupation = "";
            });
        }

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
