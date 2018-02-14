// Link in Buddies Data
var buddyData = require('../data/friends.js');

function apiRoutes(app) {

  // Display JSON of all possible friends
  app.get('/api/friends', function (req, res) {
    res.json(buddyData);
  });

  // Handle incoming survey results
  app.post('/api/friends', function (req, res) {

    var newBuddy = {
      name: req.body.name,
      photo: req.body.photo,
      scores: []
    };
    var scoresArray = [];
    
    // Parse all score values to make sure they are integers
    for (var i=0; i < req.body.scores.length; i++) {
      scoresArray.push(parseInt(req.body.scores[i]))
    }
    newBuddy.scores = scoresArray;

    // Compare new buddy to buddy list
    var scoreComparisionArray = [];
    for (var i=0; i<buddyData.length; i++) {

      // Check each buddy's scores and sum difference in points
      var currentComparison = 0;
      for (var j=0; j<newBuddy.scores.length; j++) {
        currentComparison += Math.abs(newBuddy.scores[j] - buddyData[i].scores[j]);
      }

      // Push each comparison between buddies to array
      scoreComparisionArray.push(currentComparison);
    }

    // Determine the best match using the postion of best match in the buddyData array
    var bestMatchPosition = 0; // assume its the first person to start
    for (var i=1; i<scoreComparisionArray.length; i++) {
      
      // Lower number in comparison difference means better match
      if (scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]) {
        bestMatchPosition = i;
      }

    }

    // If the 2 buddies have the same comparison, then the NEWEST entry in the buddyData array is chosen
    var bestBuddyMatch = buddyData[bestMatchPosition];

    // Reply with a JSON object of the best match
    res.json(bestBuddyMatch);

    // Push the new friend to the friends data array for storage
    buddyData.push(newBuddy);
    
    });

}

// Export for use in main server.js file
module.exports = apiRoutes;