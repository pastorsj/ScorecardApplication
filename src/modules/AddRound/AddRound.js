import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import './AddRound.css';

class AddRound extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      numberHoles: 18,
      course: '',
      tees: '',
      par: 0,
      round: [],
      holes: [],
      currentHole: '1'
    }
  }

  componentWillMount() {
    this.setState({
      course: 'Honeywell Golf Course',
      tees: 'Red',
      yardage: '370',
      par: 4,
      location: "Fishers IN"
    })
  }

  holesChanged(numberHoles) {
    this.setState({
      numberHoles
    })
  }

  render() {
    return (
      <div>
        <div className="ui five column centered grid">
          <div className="row">
            <div className="sixteen wide column">
              <div className="ui form">
                <div className="inline fields">
                  <label>Holes Played</label>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input type="radio" 
                        name="played" 
                        value="9" 
                        checked={this.state.numberHoles === 9}
                        onChange={this.holesChanged.bind(this, 9)} />
                      <label>9 Holes</label>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input type="radio" 
                        name="played" 
                        value="18" 
                        checked={this.state.numberHoles === 18}
                        onChange={this.holesChanged.bind(this, 18)} />
                      <label>18 Holes</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ui tiny statistics">
                <div className="statistic">
                  <div className="value">
                    {this.state.course}
                  </div>
                  <div className="label">
                    {this.state.location}
                  </div>
                </div>
                <div className="statistic">
                  <div className="value">
                    {this.state.tees}
                  </div>
                  <div className="label">
                    Tees
                  </div>
                </div>
                <div className="statistic">
                  <div className="value">
                    {this.state.yardage}
                  </div>
                  <div className="label">
                    Yards
                  </div>
                </div>
                <div className="statistic">
                  <div className="label">
                    Par
                  </div>
                  <div className="value">
                    {this.state.par}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="three wide column"></div>
            <div className="two wide column">
              <button className="ui labeled icon button">
                <i className="pointing left icon"></i>
                Previous Hole
              </button>
            </div>
            <div className="six wide column">
              <div className="ui centered raised green card">
                <div className="content">
                  <div className="ui form">
                    <div className="two fields">
                      <div className="field">
                        <label>Hole {this.state.currentHole}</label>
                        <input type="text" placeholder="Score" />
                      </div>
                      <div className="field">
                        <label>Putts</label>
                        <input type="text" placeholder="Putts" />
                      </div>
                    </div>
                  </div>
                  <div className="left floated">
                    <div className="ui checkbox">
                      <input type="checkbox" name="gir" />
                      <label>GIR</label>
                    </div>
                  </div>
                  <div className="right floated">
                    <div className="ui checkbox">
                      <input type="checkbox" name="fairway" />
                      <label>FW</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="two wide column">
              <button className="ui right labeled icon button">
                <i className="pointing right icon"></i>
                Next Hole
              </button>
            </div>
            <div className="three wide column"></div>
          </div>
          <div className="row">
            <div className="three wide column"></div>
            <div className="two wide column"></div>
            <div className="six wide column"></div>
            <div className="two wide column">
              <button className="ui disabled button">
                <i className="save icon"></i>
                Save Round
              </button>
            </div>
            <div className="three wide column"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddRound;