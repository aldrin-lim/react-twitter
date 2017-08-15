/**
 * @author Aldrin Lim
 * Main layout for the App
 */

import React, { Component } from 'react';
import Card from '../components/Card';
class MainLayout extends Component {
  render() {
    return (
      <div>
        <nav className="uk-navbar-container" data-uk-navbar>

          <div className="uk-navbar-left">

            <ul className="uk-navbar-nav">
              <li>
                <a href="#">TWITTER FEED</a>
              </li>
            </ul>
          </div>

        </nav>
        <div style={{ height: "100%" }} className="uk-container-expand uk-padding uk-height-large">
          <Card>{this.props.children}</Card>
        </div>
      </div>
    )
  }
}

export default MainLayout;