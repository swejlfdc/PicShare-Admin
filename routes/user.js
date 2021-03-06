var express = require('express');
var router = express.Router();


/* GET Hello World page. */
router.get('/', function(req, res) {
	var data = {
		username: req.user.username || "Harry Potter",
		users: [],
		photos: []
	};
    res.render('user', data);
});

/* JSON request: show all users info */
router.get('/getAllUsers', function(req, res) {
	var userSearch = req.picshare.userSearch;
    userSearch.getAllUsers(function(result) {
    	res.send(result);
    });
});

/* JSON request: show user info searched by name */
router.get('/searchByUser', function(req, res) {
	var userSearch = req.picshare.userSearch;
    userSearch.searchByUser(req.param("search"), function(result) {
    	res.send(result);
    });
});

/* JSON request: show photos accroding to specified user */
router.get('/fetchUserPhotos', function(req, res) {
	var userSearch = req.picshare.userSearch;
    userSearch.fetchUserPhotos(req.param("user"), function(result) {
    	for(var i = 0; i < result.length; ++i) {
    		result[i].image = result[i].image.url();
    	}
    	res.send(result);
    });
});

module.exports = router;
