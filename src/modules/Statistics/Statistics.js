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
        <div className="ui five statistics">
          <div className="statistic">
            <div className="value">
              76
            </div>
            <div className="label">
              Average Score
            </div>
          </div>
          <div className="statistic">
            <div className="value">
              45%
            </div>
            <div className="label">
              Greens in Regulation
            </div>
          </div>
          <div className="statistic">
            <div className="value">
              60%
            </div>
            <div className="label">
              Fairways Hit
            </div>
          </div>
          <div className="statistic">
            <div className="value">
              26
            </div>
            <div className="label">
              Putts Per Round
            </div>
          </div>
          <div className="statistic">
            <div className="value">
              25%
            </div>
            <div className="label">
              Sand Save%
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Statistics;