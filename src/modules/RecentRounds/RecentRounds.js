import React, { Component } from 'react';
import { Link } from 'react-router';
import './RecentRounds.css';

class RecentRounds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rounds: []
    }
  }

  componentWillMount() {
    // $.ajax({
    //     url: 'http://localhost:3000/rounds',
    //     type: 'GET',
    //     success: function(rounds){ 
    //         this.setState({
    //           rounds
    //         })
    //     },
    //     error: function(err) {
    //         alert('An error has occured, please try again', err);
    //     }
    // });
    this.setState({
      rounds: [
        {
          date: "1/1/10",
          course: "Honeywell Golf Course",
          score: 75,
          holes: 18,
          tournament: true
        },
        {
          date: "1/1/12",
          course: "Hulman Links",
          score: 79,
          holes: 18,
          tournament: false
        }
      ]
    })
  }

  render() {
    return (
      <div>
        <table className='ui celled table'>
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
              {
                this.state.rounds.map((round, index) => {
                  return (
                    <tr key={index}>
                      <td>{round.date}</td>
                      <td>{round.course}</td>
                      <td>{round.score}</td>
                      <td>{round.holes}</td>
                      <td>{round.tournament === true ? (<i className="checkmark icon"></i>) : ''}</td>
                    </tr>
                  );
                })
              }
            </tbody>
        </table>
      </div>
    );
  }
}

export default RecentRounds;
