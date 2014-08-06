var app = angular.module('app');

app.service("myService", function($http, $q) {

	this.getFriends = function() {
		console.log("Console.log from the service");

		// return the data
		return $http({
			method: 'GET',
			url: 'http://localhost:9999/friends'
		});
	}
});