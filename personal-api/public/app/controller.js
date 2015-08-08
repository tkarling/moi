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

        $scope.getMyHobbies = function() {
            myService.getMyHobbies($scope.sort.hobbies).then(function(data) {
                $scope.hobbies = data;
            });
        }
        $scope.getMyHobbies("desc");

        $scope.getMyOccupations = function() {
            myService.getMyOccupations($scope.sort.occupations).then(function(data) {
                $scope.occupations = data;
                // console.log("$scope.occupations", $scope.occupations);
            });
        }
        $scope.getMyOccupations("desc");

        $scope.getMySkills = function() {
            myService.getMySkills($scope.skills.skillLevel).then(function(data) {
                $scope.skills.data = data;
                // console.log("$scope.skills.data", $scope.skills.data);
            });
        };
        $scope.getMySkills();

    });
