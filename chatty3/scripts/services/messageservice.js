'use strict';

angular.module('chattyApp')
    .factory('MessageService', function MessageService($q, $http) {
        var myUrl = "http://localhost:8585";

        return {

            getMessages: function() {
                // var defer = $q.defer();
                // defer.resolve(["m1", "m2", "m3"]);
                // return defer.promise;
                return $http.get(myUrl).then(function(response) {
                    return response.data;
                });
            },

            addMessage: function(msg) {
                console.log("service add msg", msg);
                return $http({
                    method: "POST",
                    url: myUrl,
                    // headers: {
                    //     'Content-Type': "multipart/form-data"
                    // },
                    data: {
                        message: msg
                    }
                }).then(function(response) {
                    console.log(response);
                    return response.data;
                });
            }
        }
    });
