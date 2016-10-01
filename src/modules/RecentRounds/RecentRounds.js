import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import './RecentRounds.css';

class RecentRounds extends Component {
  nav(route) {
    browserHistory.push(route);
  }
  render() {
    return (
      <div>
        Here are your recent rounds
      </div>
    );
  }
}

export default RecentRounds;
