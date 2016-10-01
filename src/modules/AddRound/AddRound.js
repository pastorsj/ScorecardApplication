import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import './AddRound.css';

class AddRound extends Component {
  nav(route) {
    browserHistory.push(route);
  }
  render() {
    return (
      <div>
        Add a new round here
      </div>
    );
  }
}

export default AddRound;