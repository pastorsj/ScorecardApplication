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
        <div className="ui five column centered grid">
          <div className="row">
            <div className="three wide column"></div>
            <div className="two wide column"></div>
            <div className="six wide column">
              <div className="ui center form">
                <div className="inline fields">
                  <label>Holes Played</label>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input type="radio" name="played" />
                      <label>9 Holes</label>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input type="radio" name="played" checked="checked" />
                      <label>18 Holes</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="two wide column"></div>
            <div className="three wide column"></div>
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
                  <div className="header">Hole 1</div>
                  <div className="meta">
                    <span className="right floated">Red Tees: 300 yards</span>
                    <span className="category">Honeywell Golf Course</span>
                  </div>
                </div>
                <div className="extra content">
                  <div className="left floated">
                    <div className="ui mini input">
                      <input type="text" placeholder="Putts" />
                    </div>
                  </div>
                  <div className="right floated">
                    <div className="ui mini input">
                      <input type="text" placeholder="Score" />
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