import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import './Statistics.css';

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      averageScore: '',
      gir: '',
      fairwaysHit: '',
      putts: '',
      sandSave: ''
    }
  }

  componentWillMount() {
    this.setState({
      averageScore: 74,
      gir: 40,
      fairwaysHit: 50,
      putts: 20,
      sandSave: 80
    })
  }

  render() {
    return (
      <div>
        <div className="ui five statistics">
          <div className="statistic">
            <div className="value">
              {this.state.averageScore}
            </div>
            <div className="label">
              Average Score
            </div>
          </div>
          <div className="statistic">
            <div className="value">
              {this.state.gir}%
            </div>
            <div className="label">
              Greens in Regulation
            </div>
          </div>
          <div className="statistic">
            <div className="value">
              {this.state.fairwaysHit}%
            </div>
            <div className="label">
              Fairways Hit
            </div>
          </div>
          <div className="statistic">
            <div className="value">
              {this.state.putts}
            </div>
            <div className="label">
              Putts Per Round
            </div>
          </div>
          <div className="statistic">
            <div className="value">
              {this.state.sandSave}%
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