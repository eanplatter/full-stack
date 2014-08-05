var family = [{
		name: "Kimberly",
		age: 30,
		relationship: "Wife"
	}, 
	{
		name: "McKinnon",
		age: 11,
		relationship: "Son"
	},
	{
		name: "Titus",
		age: 8,
		relationship: "Son"
	},
	{
		name: "Tristan",
		age: 1,
		relationship: "Son"
}];

var friends = [{
		name: "Brock",
		age: 23,
		metIn: 2008
	}, 
	{
		name: "Peter",
		age: 23,
		metIn: 2007
	},
	{
		name: "Steeze",
		age: 22,
		metIn: 2006
	},
	{
		name: "Kastendeik",
		age: 25,
		meIn: 2010
}];

var activities = ["JavaScripts", "Games", "Laughing"];

var ean = {
	height: "5'10",
	age: 24,
	favoriteMovie: 'amovie',
	favoriteArtist: 'idk',
	favoriteFood: 'pizza'
};

module.exports.getFamily = function() {
	return family;
};
module.exports.addFamilyMember = function(newName, newAge, newRelationship) {
	family.push({name: newName, age: newAge, relationship: newRelationship })
};

module.exports.getFriends = function() {
  return friends;
};
module.exports.addFriend = function(newName, newAge, newMetIn){
  friends.push({name: newName, age: newAge, metIn: newMetIn});
};

module.exports.getActivities = function() {
	return activities;
};

module.exports.addActivities = function(newActivity) {
	activities.push(newActivity);
};

module.exports.getMe = function() {
	return ean;
}














