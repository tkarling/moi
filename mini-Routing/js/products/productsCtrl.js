angular.module("miniRouting")
.controller("ProductsController", function($scope, $routeParams, productService) {
	$scope.test = "ProductsController test"

	$scope.pageId = $routeParams.id;

	if($scope.pageId === "shoes") {
		$scope.productData = productService.shoeData;
	} else {
		$scope.productData = productService.sockData;		
	}

});