import React, { Component } from 'react';
import { setUserData, unsetUserData } from '../actions';
import { connect } from 'react-redux';
import { Session } from 'meteor/session';
import { browserHistory } from 'react-router';
import Spinner from './Spinner';
class Callback extends Component {
  componentDidMount(){
    Meteor.call("auth", Session.get("requestToken"), Session.get("requestTokenSecret"), this.props.location.query.oauth_verifier, (error, result) => {
      if (!error) {
        Session.setPersistent("isLoggedIn", true);
        Session.setPersistent("accessToken", result.accessToken);
        Session.setPersistent("accessTokenSecret", result.accessTokenSecret);
        Session.setPersistent("user", result.user);
        this.props.setUserData(Object.assign({},result.user));
        browserHistory.push("/");
      } else {
        console.log("error")
        Session.setPersistent("isLoggedIn", false);
        alert("Error Signing in. Please Try Again");
        browserHistory.push("/");
      }
    });
  }
  render() {
    return (
      <div className="uk-flext uk-flext-center uk-margin-top">
        <Spinner/>
      </div>
    );
  }
}
/**
 * Redux State as Props
 * @param {*} state 
 */
const mapStateToProps = (state) => {
  return {
    redux: state
  };
};

/**
 * Redux action as Props
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: args => dispatch(setUserData(args))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Callback);
// export default Callback