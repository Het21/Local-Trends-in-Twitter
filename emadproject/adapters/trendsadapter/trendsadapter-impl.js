function getWoeid(lat,longi) {
	path = "twitterapi.php?type=woeid&lat="+lat+"&long="+longi;

	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : path
	};


	return WL.Server.invokeHttp(input);
}
function getTrends(id) {
	path = "twitterapi.php?type=trends&id="+id;

	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : path
	};


	return WL.Server.invokeHttp(input);
}