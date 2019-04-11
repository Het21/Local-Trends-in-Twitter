
/* JavaScript content from js/main.js in folder common */
function wlCommonInit(){
	if(navigator.geolocation){
		alert("OK");
	}else{
		alert("Not OK");
	}
}
var myindi;
function GetLocation() {
	console.log('in function geo');
	myindi = new WL.BusyIndicator('myind', {
		text : "Loading"
	});
	console.log('after busy');
	myindi.show();
    var geocoder = new google.maps.Geocoder();
    var address = document.getElementById("address").value;
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var lat = results[0].geometry.location.lat();
            var longi = results[0].geometry.location.lng();     
            console.log('before call fun in getlocation');
    	    callfun(lat,longi);
    	    console.log('after call fun in getlocation');
        } else {
            alert("Request failed.")
        }
    });
}
function gett(){
	console.log('in function');
	myindi = new WL.BusyIndicator('myind', {
		text : "Loading"
	});
	console.log('after busy');
	myindi.show();
	navigator.geolocation.getCurrentPosition(
	// Returns the device's current position as a Position object.

	// Success
	function onSuccess(position) {
		console.log('in geo success');
		lat = position.coords.latitude;
	    longi = position.coords.longitude;
	    console.log('before call fun');
	    callfun(lat,longi);
	    console.log('after call fun');
	},
	// (Optional) Failure
	function onError(error) {
		myindi.hide();
		console.log('in geo fail');
		alert('Failed because: ' + error.message);
	},
	{ 
		enableHighAccuracy: true,
		timeout:30000
	});
	console.log('after geo');
}

function callfun(lat,longi){
	console.log('in call fun function lat : '+lat+" long:"+longi);	
	var invocationData={
			adapter:'trendsadapter',
			procedure:'getWoeid',
			parameters:[lat,longi]
		};
		var options={
				onSuccess:feedSuccess,
				onFailure:feedFail
		};
		WL.Client.invokeProcedure(invocationData,options);
}
function feedSuccess(result){
	console.log('in call fun success');
	var arr = result.invocationResult.array;
	var woeid = arr[0].woeid;
	var invocationData={
			adapter:'trendsadapter',
			procedure:'getTrends',
			parameters:[woeid]
		};
		var options={
				onSuccess:feedSuccess2,
				onFailure:feedFail2
		};
		WL.Client.invokeProcedure(invocationData,options);
}
function feedSuccess2(result){
	console.log('in feed success2');
	var arr = result.invocationResult.array[0].trends;
	$('#mydisplay').empty();
	for (i = 0 ; i<arr.length; i++){
		var single = arr[i];
		var ndata = "";
		ndata += "<div class='ndiv'>";
		ndata += "<a href='"+single.url+"'>"+single.name+"</a>";
		ndata +="<br><br>";
		ndata += "</div>";
		$('#mydisplay').append(ndata);
	}
	myindi.hide();
	window.location.assign("#dispPage");
}
function feedFail(error){
	myindi.hide();
	console.log('in feed fail' + JSON.stringify(error));
	alert("Unable to connect to woeid API! Please check your internet connection and try again!");
}
function feedFail2(){
	myindi.hide();
	console.log('in feed fail2');
	alert("Unable to connect to trends API! Please check your internet connection and try again!");
}
/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the IBM MobileFirst Platform runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}