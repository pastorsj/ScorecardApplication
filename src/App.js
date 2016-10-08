import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import logo from './gb.png';
import './App.css';

class App extends Component {
  nav(route) {
    browserHistory.push(route);
  }
  render() {
    return (
      <div>
        <div className="ui secondary pointing menu">
          <div className="header item">
            <Link to="/">
              <img src={logo} className="logo" alt="logo"/>
            </Link>
          </div>
          <a className="item" onClick={this.nav.bind(this, '/round')}>
            Add a Round
          </a>
          <a className="item" onClick={this.nav.bind(this, '/rounds')}>
            View Recent Rounds
          </a>
          <a className="item" onClick={this.nav.bind(this, '/statistics')}>
            View Statistics
          </a>
          <div className="right menu">
            <a className="ui item">
              Logout
            </a>
          </div>
        </div>
        <div className="ui segment">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
