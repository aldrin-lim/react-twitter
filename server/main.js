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
            console.log(JSON.stringify(error, null, 4))
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
        twitter.getAccessToken(requestToken, requestTokenSecret, oauth_verifier, function (error, accessToken, accessTokenSecret, results) {
          if (error) {
            reject("Error getting OAuth ACCESS token : " + error);
          } else {
            //store accessToken and accessTokenSecret somewhere (associated to the user) 
            //Step 4: Verify Credentials belongs here 
            resolve({ accessToken, accessTokenSecret, results });
          }
        });
      });

    }
  });
}); 
