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