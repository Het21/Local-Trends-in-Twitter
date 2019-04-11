<?php
session_start();
//require_once("D:/emad project/twitteroauth-master/autoload.php"); //Path to twitteroauth library you downloaded in step 3
require_once 'D:/emad project/twitteroauth-master/autoload.php';
use Abraham\TwitterOAuth\TwitterOAuth;

if (isset($_GET['type'])) {
	$type = $_GET['type'];
} else {
    $type = "woeid";
}
if (isset($_GET['lat']) && isset($_GET['long'])) {
	$lat=$_GET['lat'];
	$longi=$_GET['long'];
} else {
    $lat=23.101013;
	$longi=72.574896;
}
if (isset($_GET['id'])) {
    $woeid=$_GET['id'];
} else {
    $woeid=2295402;
}
$consumerkey = "bQXQ6PHQbd6wymSg4tY3ai3TK";
$consumersecret = "fpozReLyXfdiRuaANBXW7HpiD2xuoFMtiMpQGPkGu1PB5Uh9mq"; 
$accesstoken = "964854892560113664-eKfopYEdNcxBP6BLuPccu3BKDlToOoj"; 
$accesstokensecret = "IjIMfB4JFHzSk851wwwJXkulhiymglp9qqeDdPtk0x6fX"; 

function getToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}

$connection = getToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);

if ($type == "trends"){
	$tweets = $connection->get("trends/place",["id" => $woeid]);
}
else{
	$tweets = $connection->get("trends/closest",["lat" => $lat,"long" => $longi]);
}

echo json_encode($tweets);
//echo $tweets; //testing remove for production   
?>