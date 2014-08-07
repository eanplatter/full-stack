var app = angular.module('app');

app.service("myService", function($http, $q) {

  this.getFriends = function() {
    console.log("Console.log from the service");

    // return the data
    return $http({
      method: 'GET',
      url: 'http://localhost:9999/friends'
    }).then(success, error); // at first we weren't handling the promise this is
                             // why we need the .then()
  }

  function success(response){   // I created two callback functions to handle the
    console.log(response);      // response or errors for me. there's still some
  }                             // work left to do in the success() callback but
                                // if you look at your console I think you'll start
  function error(response) {    // to get some ideas of what you could do.
    if (response) {
      console.log('there was an error');
    }
  }
});