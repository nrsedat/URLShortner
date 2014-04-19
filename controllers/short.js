var CHARS = 'YkXbiq2MWd9Lsa1t58CfzwE7g6oG4hRQ3cPTe0uHrpSvOVUBnlmUxyADjJNFKZ';

function numToBase62(n) {
    if(n > 62) {
        return numToBase62(Math.floor(n / 62)) + CHARS[n % 62];
    } else {
        return CHARS[n];
    }
}

var getCharaters = function(url){
	return url.replace('http://cn.i/','');
}
var charToNum = function(str) {
	var numArray = [];
	for (var i = 0, len = str.length; i < len; i++) {
	  numArray.push(CHARS.indexOf(chars[i])); 
	}
	return numArray;
}
var arrayToBase10 = function(arr){
	var num = 0;
	for (var i = 0,j=0;i<arr.length;i++){
		num+= (Math.pow(62,j)*(CHARS.indexOf(arr[i])));
		j++;
	}
	return num;
}

exports.getShort = function(int){
	return numToBase62(int);
}

exports.getId = function(url){
	var chars = getCharaters(url);
	return arrayToBase10(chars);
}