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
            <div className="two widecolumn"></div>
            <div className="six wide column">
              <div className="ui form">
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
            <div className="two widecolumn"></div>
            <div className="three wide column"></div>
          </div>
          <div className="row">
            <div className="three wide column"></div>
            <div className="two widecolumn">
              <button className="ui labeled icon button">
                <i className="pointing left icon"></i>
                Previous Hole
              </button>
            </div>
            <div className="six wide column">
              <div classNAme="ui card">
                <div className="content">
                  <div className="center">
                    <div className="ui input">
                      <input type="text" placeholder="Score 1" />
                    </div>
                  </div>
                </div>
                <div className="extra content">
                  <div className="ui checkbox">
                    <input type="checkbox" name="gir" />
                    <label>Green in Regulation?</label>
                  </div>
                  <div className="ui checkbox">
                    <input type="checkbox" name="fairway" />
                    <label>Fairway Hit?</label>
                  </div>
                  <div className="center">
                    <div className="ui input">
                      <input type="text" placeholder="Putts" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="two widecolumn">
              <button className="ui right labeled icon button">
                <i className="pointing right icon"></i>
                Next Hole
              </button>
            </div>
            <div className="three wide column"></div>
          </div>
          <div className="row">
            <div className="three wide column"></div>
            <div className="two widecolumn"></div>
            <div className="six wide column"></div>
            <div className="two widecolumn">
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