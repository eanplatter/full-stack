var app = angular.module('app');

app.controller('MainController', function($scope, myService) {
	// testing angular data binding.
	$scope.test = "This is a test";

	// pulling data from service.
	$scope.friends = myService.getFriends();

	//  putting the promise on the data from the service... I think? 
	//	it's obviously not working, as I am getting info before the promise finishes. I think.
	$scope.formatData = $scope.friends.then(function(res) {
		return res;
		console.log(res);
	});

	// ng-click in index runs these logs
	$scope.testTheData = function() {
		console.log($scope.friends);
		console.log($scope.formatData);
	};
});