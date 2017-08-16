import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Session } from 'meteor/session';
class Home extends Component {
  componentDidMount(){
    Meteor.call("getStreamHome", Session.get("accessToken"), Session.get("accessTokenSecret"), (error, result) => {
      if(!error){
        console.log(result)
        
      } else {
        console.log(error);
      }
    });
  }
  render() {
    return (
      <div>
        <h4>Tweets</h4>
        <ul className="uk-list uk-list-large uk-list-divider">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
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
// export default connect(mapStateToProps)(MainLayout);

export default connect(mapStateToProps)(Home)