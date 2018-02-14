// Dependencies
var path = require('path');

function htmlRoutes(app) {

  // Display the survey page.
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  // Default to home.html which displays the home page.
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

}

// Export for use in main server.js file
module.exports = htmlRoutes;