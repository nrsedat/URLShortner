
/*
 * Main router
 */

var apiController = require('../controllers/controller');

exports.index = function(req, res){
  res.redirect(301, '/index.html');
};

exports.api = function(req, res){
	var action = req.params.fragment1,
	    method = req.method;
	    if(apiController[action]) {
	    	apiController[action](req,res);
	    }else {
	    	res.render('404',{content: 'Oops !!! Requested Api not available!!!'});
	    }
};