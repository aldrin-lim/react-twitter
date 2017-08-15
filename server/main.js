import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Promise from 'promise';
import twitterAPI from 'node-twitter-api';
// import Twitter from 'twitter';
Meteor.startup(() => {
  let twitter = new twitterAPI({
    consumerKey: Meteor.settings.API_CONSUMER_KEY,
    consumerSecret: Meteor.settings.API_CONSUMER_SECRET,
    callback: "http://localhost:3000/callback"
  });
  Meteor.methods({
    signin() {
      return new Promise((resolve, reject) => {

        twitter.getRequestToken((error, requestToken, requestTokenSecret, results) => {
          if (error) {
            reject("Error getting OAuth request token : " + error);
          } else {
            //store token and tokenSecret somewhere, you'll need them later; red  irect user
            resolve({ requestToken, requestTokenSecret, results, getAuthUrl: twitter.getAuthUrl(requestToken) });
          }
        });
      });
    },
    auth(requestToken, requestTokenSecret, oauth_verifier) {
      return new Promise((resolve, reject) => {
        console.log(requestToken);
        console.log(requestTokenSecret);
        console.log(oauth_verifier);
        twitter.getAccessToken(requestToken, requestTokenSecret, oauth_verifier, function (error, accessToken, accessTokenSecret, results) {
          if (error) {
            reject("Error getting OAuth ACCESS token : " + error);
          } else {
            //store accessToken and accessTokenSecret somewhere (associated to the user) 
            //Step 4: Verify Credentials belongs here 
            twitter.verifyCredentials(accessToken, accessTokenSecret, {}, function(error, data, response) {
              if (error) {
                reject("Error getting User Data : " + error);
                  //something was wrong with either accessToken or accessTokenSecret 
                  //start over with Step 1 
              } else {
                  resolve({ accessToken, accessTokenSecret, results, user: data });
                  //accessToken and accessTokenSecret can now be used to make api-calls (not yet implemented) 
                  //data contains the user-data described in the official Twitter-API-docs 
                  //you could e.g. display his screen_name 
              }
          });
          }
        });
      });

    }
  });
}); 
