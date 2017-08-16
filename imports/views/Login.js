import React, { Component } from 'react';
import Spinner from '../components/Spinner'
import { browserHistory } from 'react-router';
import { autobind } from 'core-decorators';
import { Session } from 'meteor/session';
import MainLayout from '../layout/MainLayout';
@autobind
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  componentDidMount(){
    if(Session.get("isLoggedIn")){
      browserHistory.push("/");
    }
  }
  signin() {
    this.setState({
      loading: true
    }, () => {
      Meteor.call('signin', (error, result) => {
        this.setState({
          loading: false
        });
        if (!error) {
          Session.setPersistent("requestToken", result.requestToken);
          Session.setPersistent("requestTokenSecret", result.requestTokenSecret);
          window.open("https://api.twitter.com/oauth/authorize?oauth_token="+result.requestToken, '_blank');
        } else {

        }

      });
    });

  }
  render() {
    return (
      <MainLayout>
        <div className="uk-flex uk-flex-center">
          {
            this.state.loading ?
              <Spinner />
              :
              <button onClick={this.signin} className="uk-button uk-button-primary uk-button-large"><i className="fa fa-twitter uk-margin-right-small" aria-hidden="true"></i>Sign in using your Twitter</button>
          }
        </div>
      </ MainLayout>
    );
  }
}

export default Login;