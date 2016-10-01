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
        <div className="top-bar rose-bg">
          <div className="top-bar-title">
            <Link to="/">
              <img src={logo} className="logo" alt="logo"/>
            </Link>
          </div>
          <div>
            <div className="top-bar-left">
              <ul className="menu">
                <li>
                  <button type="button" className="button rose-bg" onClick={this.nav.bind(this, '/round')}>
                    Add A Round
                  </button>
                </li>
                <li>
                  <button type="button" className="button rose-bg" onClick={this.nav.bind(this, '/rounds')}>
                    View Recent Rounds
                  </button>
                </li>
                <li>
                  <button type="button" className="button rose-bg" onClick={this.nav.bind(this, '/statistics')}>
                    View Statistics
                  </button>
                </li>
              </ul>
            </div>
            <div className="top-bar-right">
              <ul className="menu">
                <li><button type="button" className= "button">Logout</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
