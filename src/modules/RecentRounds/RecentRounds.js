import React, { Component } from 'react';
import { Link } from 'react-router';
import './RecentRounds.css';

class RecentRounds extends Component {
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
                  <td>checked</td>
                </tr>
            </tbody>
        </table>
        <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">
          Launch modal
        </button>

        <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div className="modal-body">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default btn-simple" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-info btn-simple">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentRounds;
