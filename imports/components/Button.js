import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div>
         <button className={"uk-button uk-button-" + this.props.type}>{this.props.children}</button>
      </div>
    );
  }
}

export default Button;