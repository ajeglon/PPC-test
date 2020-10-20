// External dependencies
const express = require('express');
const router = express.Router();

//Global variables
var benificiary = {
    firstname : "Molly",
    lastname : "Smith",
    thirdParty : false,
    dobDay : "0",
    dobMonth : "0",
    dobYear : "0",
}

// Add your routes here - above the module.exports line

// Branching - post the url of the page you want to branch from
router.post('/certificate', function (req, res) {
  // Create a variable using the name of the select of radio button value you want to store
  var install = req.session.data['months']
  //if statemennt to branch based on conditional values
  if (install == "three-months"){
    res.redirect('/certificate-prepayment')
  }
  if (install == "twelve-months"){
    res.redirect('/certificate-how-to-pay-for-twelve-months')
  }
  //else might not be necessary
  else {
    res.redirect('/certificate')
  }

})

module.exports = router;
