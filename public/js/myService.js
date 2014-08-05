var app = angular.module('app');

app.service("myService", function($http) {

	this.getFriends = function() {
		console.log("Im in the service");
		return $http({
			method: 'GET',
			url: 'http://localhost:9999/friends'
		}).then(function(results) {
			return results.data;
		});
	}

});