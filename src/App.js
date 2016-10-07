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
        <nav className="navbar navbar-default navbar-fixed-top navbar-color-on-scroll" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/">
                <img src={logo} className="navbar-brand logo" alt="logo"/>
              </Link>
            </div>
            <div className="collapse navbar-collapse navbar-left">
              <ul className="nav navbar-nav">
                <li>
                  <button type="button" className="btn rose-bg" onClick={this.nav.bind(this, '/round')}>
                    Add A Round
                  </button>
                </li>
                <li>
                  <button type="button" className="btn rose-bg" onClick={this.nav.bind(this, '/rounds')}>
                    View Recent Rounds
                  </button>
                </li>
                <li>
                  <button type="button" className="btn rose-bg" onClick={this.nav.bind(this, '/statistics')}>
                    View Statistics
                  </button>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse navbar-right">
              <ul className="nav navbar-nav">
                <li><button type="button" className= "btn btn-success">Logout</button></li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
