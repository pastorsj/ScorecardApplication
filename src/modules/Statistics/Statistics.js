import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import './Statistics.css';

class Statistics extends Component {
  nav(route) {
    browserHistory.push(route);
  }
  render() {
    return (
      <div>
        Here are your statistics
      </div>
    );
  }
}

export default Statistics;