//Main Angular Application
var app = angular.module('app', []);
 
app.controller('AppController', function ($scope,$http) {
	$http.get('/urls').success(function(data) {
    		$scope.urls = data;
  	});
  	$scope.shortenUrl = function(){
  		$http.post('/shorten',{url:$scope.longUrl}).success(function(data) {
	    		$scope.shortenedUrl = data.shortUrl;
	    		$http.get('/urls').success(function(data) {
		    		$scope.urls = data;
		  	});
	  	});
  	};
  	$scope.getBackLongUrl = function(){
  		$http.post('/retrieve',{url:$scope.shortUrl}).success(function(data) {
	    		$scope.retreivedUrl = data.longUrl;
	  	});
  	};
});