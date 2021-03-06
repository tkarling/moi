angular.module("myApp")
    .service("myService", function($q, $http) {
        this.test = "Hi myService";

        var url = "http://localhost:8686/api";

        var me = {};

        var promises = {};
        promises.name = $http.get(url + "/name").then(function(response) {
            // console.log("name", response);
            me.name = response.data;
        });
        promises.location = $http.get(url + "/location").then(function(response) {
            // console.log("location", response);
            me.location = response.data;
        });
        promises.latestOccupation = $http.get(url + "/occupations/latest").then(function(response) {
            // console.log("location", response);
            me.latestOccupation = response.data;
        });

        this.getMyInfo = function() {
            return $q.all([promises.name, promises.location, promises.latestOccupation]).then(function() {
                return me;
            });
        };

        this.setMyName = function(name) {
            return $http.put(url + "/name/" + name);
        };

        this.setMyLocation = function(location) {
            return $http.put(url + "/location/" + location);
        };

        this.getMyHobbies = function(sort) {
            var sendUrl = url + "/hobbies?order=" + sort;
            // console.log("getMyHobbies: sendUrl", sendUrl);
            return $http.get(sendUrl).then(function(response) {
                return response.data;
            });
        };

        this.addHobby = function(newHobby, sort) {
            var sendUrl = url + "/hobbies?order=" + sort;
            // console.log("addHobby: sendUrl", sendUrl);
            return $http.post(sendUrl, {
                hobby: newHobby
            }).then(function(response) {
                return response.data;
            });
        };

        this.getMyOccupations = function(sort) {
            var sendUrl = url + "/occupations?order=" + sort;
            // console.log("getMyOccupations: sendUrl", sendUrl);
            return $http.get(sendUrl).then(function(response) {
                return response.data;
            });
        };

        this.addOccupation = function(newOccupation, sort) {
            var sendUrl = url + "/occupations?order=" + sort;
            // console.log("addHobby: sendUrl", sendUrl);
            return $http.post(sendUrl, {
                occupation: newOccupation
            }).then(function(response) {
                return response.data;
            });
        };

        this.setLatestOccupation = function(occupation) {
            return $http.put(url + "/occupations/latest/" + occupation).then(function(response) {
            	return response.data;
            })
        };

        this.getMySkills = function(skillLevel) {
            var sendUrl = (skillLevel === "all") ? url + "/skills" : url + "/skills?experience=" + skillLevel;
            // console.log("getMySkills: sendUrl", sendUrl);
            return $http.get(sendUrl).then(function(response) {
                // console.log("this.getMySkills", response.data);
                return response.data;
            });
        };

        this.addSkill = function(newSkill) {
            // console.log("this.addSkill", newSkill);
            return $http.post(url + "/skills", newSkill).then(function(response) {
                // console.log("this.addSkill", response);
                return response.data;
            });
        };

    });
