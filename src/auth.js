/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

 var request = require('request'); // "Request" library

 var client_id = '804050d007be417eb4201ae03d073609'; // Your client id
 var client_secret = '3bbded439066436999df87fb3dd12bae'; // Your secret
 
 // your application requests authorization
 var authOptions = {
   url: 'https://accounts.spotify.com/api/token',
   headers: {
     'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
   },
   form: {
     grant_type: 'client_credentials'
   },
   json: true
 };
 
 request.post(authOptions, function(error, response, body) {
   if (!error && response.statusCode === 200) {
 
     // use the access token to access the Spotify Web API
     var token = body.access_token;
     var options = {
       url: 'https://api.spotify.com/v1/users/jmperezperez',
       headers: {
         'Authorization': 'Bearer ' + token
       },
       json: true,
     };
     request.get(options, function(error, response, body) {
       console.log(body + token);
       console.log("This is the Bearer token: " + token);
       localStorage.setItem( 'token', token);
       this.loading=false;
     });
   }
 });
 