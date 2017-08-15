import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Promise from 'promise';
import twitterAPI from 'node-twitter-api';
// import Twitter from 'twitter';
Meteor.startup(() => {
  Meteor.methods({
    signin() {   
      return new Promise((resolve,reject) => {
        let twitter = new twitterAPI({
          consumerKey: 'xxxx',
          consumerSecret: 'xxx',
          callback: "http://localhost:3000/callback"
        });
        twitter.getRequestToken(function(error, requestToken, requestTokenSecret, results){
          if (error) {
              console.log(JSON.stringify(error, null, 4) )
              reject("Error getting OAuth request token : " + error);
          } else {
              //store token and tokenSecret somewhere, you'll need them later; red  irect user 
            resolve( { requestToken, requestTokenSecret, results, getAuthUrl: twitter.getAuthUrl(requestToken) } )
          }
        });
        
      })

      
      
    }
  });
}); 
