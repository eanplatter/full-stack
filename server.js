var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var myFamily = require('./server-assets/myData.js');
var myFriends = require('./server-assets/myData.js');
var activities = require('./server-assets/myData.js');
var ean = require('./server-assets/myData.js');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

myFamily.getFamily();
myFamily.addFamilyMember();
myFriends.getFriends();
myFriends.addFriend();
activities.getActivities();
ean.getMe();

app.get('/', function(request, response) {
	response.status(200).json();
});

app.get('/friends', function(request, response) {
	response.status(200).json(myFriends.getFriends());
});

app.get('/family', function(request, response) {
	response.status(200).json(myFamily.getFamily());
});

app.get('/activities', function(request, response) {
	response.status(200).json(activities.getActivities());
});

app.get('/ean', function(request, response) {
	response.status(200).json(ean.getMe());
});

app.listen(9999);
