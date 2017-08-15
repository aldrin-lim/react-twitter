import React, { Component } from 'react';
import Spinner from '../components/Spinner'
import { autobind } from 'core-decorators';

@autobind
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false
    };
  }
  signin(){
    this.setState({
      loading: true
    }, () => {
      // Meteor.call('signin', (error, result) => {
      //   this.setState({
      //     loading: false
      //   });
      //   console.log(error);
      //   console.log(result)
      //   window.open(result.getAuthUrl, '_blank');
      // });
    });
    
  }
  render() {
    return (
      <div className="uk-flex uk-flex-center">
        {
          this.state.loading ? 
            <Spinner/>
          :
            <button onClick={this.signin} className="uk-button uk-button-primary uk-button-large"><i className="fa fa-twitter uk-margin-right-small" aria-hidden="true"></i>Sign in using your Twitter</button>
        }
      </div>
    );
  }
}

export default Login;