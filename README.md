# Local-Trends-in-Twitter

Local-Trends-in-Twitter is a hybrid mobile application which shows current trends (#) ongoing on twitter on the basis of either of two parameters,  
1) User's current location.
2) Desired location given as input by user.  

All trends will be loaded and tweets of a trend will be displayed by tapping that particular trend.  
This app can be installed on any mobile OS (Android,iOS,Windows) by simply selecting the platform while installing from eclipse.

Tools and Technologies: IBM MobileFirst, PHP, JavaScript, HTML5, CSS

# Requirements  
->Download and install eclipse with worklight server.  
->Download Android SDK and set it's path in eclipse.  
->Download and install WAMP.  

Note :- Here Android SDK is used to install the app on an android device, to install on other OS platform, download it's SDK and give it's corresponding path in eclipse.



# Steps to run the project  
-> In 'php files' folder
1) In the twitterapi.php set path of twitteroauth-master to wherever you have kept it.
2) Put the twitterapi.php in www folder of wampserver
3) Try running it on wamp, it should return a json object which has some details of 'Ahmedabad' including its woeid* by default.

->The 'emad project' folder
1) It is the whole project which you can directly open in eclipse.
2) Change the domain name in the adapter.xml to the ip address of your machine.
3) Open server settings in eclipse and change server from localhost to the ip of your machine.  

*woeid -> A WOEID (Where On Earth IDentifier) is a unique 32-bit reference identifier, originally defined by GeoPlanet and now assigned by Yahoo!, that identifies any location on Earth.
