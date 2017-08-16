import React, { Component } from 'react';
import { timeAgo } from '../util';
class TweetItem extends Component {
  render() {
    return (
      <div className="" data-uk-grid>
        <div className="uk-width-auto" style={{ padding: 0 }}>
          <img  style={{borderRadius: 999, border: "solid 1px #aaa"}} className="uk-float-left uk-inline uk-margin-right-small" width="50" src={this.props.pic} />
        </div>
        <div className="uk-width-expand" style={{ padding: "0 10px" }}>
          <div>
            <span style={{ fontWeight: "bold", marginRight: "10px" }}>{this.props.name}</span><span>@{this.props.screenname}</span> <span>•{ timeAgo(this.props.time) }</span>
          </div>
          <div>
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}

export default TweetItem;