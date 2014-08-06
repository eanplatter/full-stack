var app = angular.module('app');

app.controller('MainController', function($scope, myService) {
	$scope.test = "This is a test";
	$scope.friends = myService.getFriends()

	$scope.testTheData = function() {
		console.log($scope.friends);
	};




});