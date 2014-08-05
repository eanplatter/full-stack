var app = angular.module('app');

app.controller('MainController', function($scope, myService) {
	$scope.test = "This is a test";
	$scope.friends = myService.getFriends();
	$scope.omg = function() {
		$scope.friends.then(function(results) {
			console.log(results)
      		return results;
    	})
	};

	$scope.real = $scope.omg();

	$scope.testy = function() {
		console.log($scope.omg());
	};

	$scope.getThoseFriends = function() {
		$scope.friends.then(function(results) {
      	console.log(results);
    })
	};



});