import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div>
         <button className="uk-button uk-button-default uk-button-large"><i className="fa fa-twitter uk-margin-right-small" aria-hidden="true"></i>Sign in using your Twitter</button>
      </div>
    );
  }
}

export default Button;