import React, { Component } from 'react';

class Home extends Component {
  componentDidMount(){
    
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

export default Home;