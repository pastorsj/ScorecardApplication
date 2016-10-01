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
        <table className='hover'>
            <thead>
                <tr>
                <th>Date</th>
                <th>Course</th>
                <th>Score</th>
                <th>Holes</th>
                <th>Tournament?</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1/1/15</td>
                <td>Honeywell Golf Course</td>
                <td>75</td>
                <td>18</td>
                <td><i className='foundicon-checkmark'></i></td>
                </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

export default RecentRounds;
