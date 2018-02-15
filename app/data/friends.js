// Buddy Data
var buddyData = {
	buddyList:[
		{
			"name": "Bugs Bunny",
			"photo": "https://vignette.wikia.nocookie.net/characters/images/1/15/Bugs.jpg/revision/latest?cb=20110224072532",
			"scores": [
				3,
				4,
				3,
				3,
				4,
				4,
				4,
				1,
				5,
				3
			]
		},
		{
			"name": "Jake Peralta",
			"photo": "https://vignette.wikia.nocookie.net/brooklynnine-nine/images/f/fa/Andy-509.jpg/revision/latest/scale-to-width-down/168?cb=20130516221328",
			"scores": [
				5,
				1,
				1,
				1,
				1,
				1,
				1,
				1,
				1,
				1
			]
		},
		{
			"name": "Amy Santiago",
			"photo": "https://s-media-cache-ak0.pinimg.com/originals/10/f8/b7/10f8b7f0495b2f5eca74ed778f0393a3.jpg",
			"scores": [
				4,
				1,
				4,
				3,
				1,
				5,
				3,
				5,
				3,
				5
			]
		},
		{
			"name": "Charles Boyle",
			"photo": "https://vignette.wikia.nocookie.net/brooklynnine-nine/images/2/28/Joe-509.jpg/revision/latest?cb=20130517205159",
			"scores": [
				3,
				3,
				5,
				5,
				2,
				3,
				4,
				4,
				4,
				3
			]
		},
		{
			"name": "Rosa Diaz",
			"photo": "https://vignette.wikia.nocookie.net/p__/images/7/78/Rosa_Diaz.jpeg/revision/latest?cb=20160329131238&path-prefix=protagonist",
			"scores": [
				2,
				4,
				1,
				2,
				4,
				2,
				5,
				2,
				3,
				1
			]
		}
	],
	
	addNewBuddy: function(buddy) {
		(buddyData.buddyList).push(buddy);
	}
};
  

  
// Export to API Route
module.exports = buddyData;