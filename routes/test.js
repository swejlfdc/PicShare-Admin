var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Test Console */
router.get('/log', function(req, res, next) {
  res.send('Ready to test console');
  console.log(req.picshare.test());
  res.send('Complete');
});

/* Test Expiration */
router.get('/exp', function(req, res, next) {
    console.log("Enter Expiration");
    /* req.parse.Cloud.run('runAllExpiration', {}).then(function(result) {
      res.send('Result');
    });
    */
    var em = req.picshare.ExpirationManager;
    console.log("Expiration Test Start");
    console.log(em);
    em.runAllExpirationEvent();
    em.runAllExpirationPhoto();
    em.setExpirationPeriodByDay(1);
    res.send("Test");
});

router.get('/searchEvent', function(req, res, next) {
  var pic = req.picshare.eventSearch;
  console.log("Start search event");
  pic.searchByEvent("a", function(result) {
    console.log("Search Event Reuslt");
    console.log(result);
    res.send(result);
  });
});

module.exports = router;
