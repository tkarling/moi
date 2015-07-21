angular.module('quotesApp').controller('quotesController', 
	function($scope, quotesService) {
	// $scope.title = "title from controller";
	$scope.title = quotesService.getTitle();

	$scope.quotes = quotesService.getData();

	$scope.addQuote = function () {
		console.log("$scope.newText", $scope.newText);
		quotesService.addData($scope.newText, $scope.newAuthor);
		$scope.newText = "";
		$scope.newAuthor = "";
	} 

	$scope.deleteQuote = function(quote) {
		quotesService.removeData(quote);
	}
});