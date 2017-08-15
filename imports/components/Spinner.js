import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    return (
       <div className="uk-flex uk-flex-center"><i className="fa fa-refresh fa-spin fa-3x fa-fw"></i></div>
    );
  }
}

export default Spinner;