// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/hits', function(req, res, next) {
//   res.send('hits');
// });

// module.exports = router;
var hits = 0;
myHits = {
  count: function(req, res) {
    res.send(200, {
      hits: hits
    })
  },
  registerNew: function(req, res) {
    hits += 1;
    res.send(200, {
      hits: hits
    })
  }
};
module.exports = myHits;