import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Session } from 'meteor/session';
import { autobind } from 'core-decorators';
import TweetItem from '../../components/TweetItem';
import Spinner from '../../components/Spinner';
import _ from 'lodash';
Meteor._debug = (function (super_meteor_debug) {
  return function (error, info) {
    if (!(info && _.has(info, 'msg')))
      super_meteor_debug(error, info);
  }
})(Meteor._debug);
@autobind
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      streamData: []
    };
  }
  componentDidMount() {
    Meteor.call('stream', Session.get("accessToken"), Session.get("accessTokenSecret"), (error, result) => {
      if (!error) {
        console.log(result)
        this.setState({
          loading: false,
          data: this.state.data.concat(result)
        });
      } else {
        alert("Error fetching data. Reload the page");
        // console.log(error)
        // console.error(error)
      }
    });
    Streamy.on('tweet', (data, s) => {
      this.setState({
        data: _.uniq([data].concat(this.state.data), item => item.id  )
      });
    });
  }
  render() {
    if(this.state.loading){
      return (<Spinner/>);
    }
    return (
      <div>
        <h4>Tweets</h4>
        <ul className="uk-list uk-list-large uk-list-divider">
          {
            this.state.data.map((item, i) => {
              return (
                <li key={i}>
                  <TweetItem time={item.created_at} pic={item.user.profile_image_url} name={item.user.name} screenname={item.user.screen_name} text={item.text}/>
                </li>
              );
            })
          }
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