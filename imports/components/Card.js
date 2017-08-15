import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="uk-card uk-card-default uk-card-body uk-margin uk uk-height-1-1 card_container">
        {this.props.children}
      </div>
    );
  }
}

export default Card;