/*
* Main controller
*
*/
var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment'),
    connection = mongoose.connect('mongodb://localhost/test'),
    shortIt = require('./short'),
    urlSchema = mongoose.Schema({
    		longUrl: String
    		,shortUrl: String
    }),
    Urls = mongoose.model('Urls', urlSchema);
    	
    autoIncrement.initialize(connection);
    urlSchema.plugin(autoIncrement.plugin, 'Urls');


exports.shorten = function(req,res){
	var b = req.body;
	var newUrl = new Urls({
		longUrl: b.url
    		,shortUrl: b.url
	});
	newUrl.save(function(err,doc){
		var shortUrl = 'http://cn.i/'+ shortIt.getShort(doc.id);
		Urls.update(doc, { shortUrl: shortUrl}, {}, function(err,docs){
			res.send({ shortUrl: shortUrl});
		});
	});
}

exports.retrieve = function(req,res){
	var b = req.body;
	Urls.findOne({shortUrl: b.url}, function(err, doc){
		res.send(doc);
	});
}

exports.urls = function(req,res){
	Urls.find({},function(error,docs){
		res.send(docs);
	});
}