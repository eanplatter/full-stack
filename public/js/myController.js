var app = angular.module('app');

app.controller('MainController', function($scope, myService) {
	$scope.test = "This is a test";
	$scope.friends = myService.getFriends();
	var omg = function() {
		var theData = 
		$scope.friends.then(function(results) {
			var themFacts = results;
			console.log(results);
			console.log( "facts" + themFacts);
      		return themFacts;
    	});
    	return theData;
	};

	$scope.real = omg();

	$scope.testy = function() {
		console.log($scope.real);
	};

	$scope.getThoseFriends = function() {
		$scope.friends.then(function(results) {
      	console.log(results);
    })
	};



});