'use strict'
angular.module("miniRouting", ['ngRoute']);

angular.module("miniRouting").config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "./js/home/homeTmpl.html",
		controller: "HomeController"
	})
	.when("/products/:id", {
		templateUrl: "./js/products/productsTmpl.html",
		controller: "ProductsController"
	})
	.when("/settings", {
		templateUrl: "./js/settings/settingsTmpl.html",
		controller: "SettingsController"
	})
	.otherwise({
      redirectTo: '/'
    })

});