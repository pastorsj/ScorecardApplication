import React, { Component } from 'react';
import './RecentRounds.css';
import api from '../../api';
import ReactSemanticDatatable from '../ReactSemanticDatatable/CustomDatatable';
import { Icon } from 'semantic-ui-react';

class RecentRounds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rounds: [],
      data: []
    }
  }

  componentDidMount() {
    api.get('rounds')
      .then((res) => {
        console.log(res);[]
      })
      .catch((err) => {
        console.error(err);
      })
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
    }, () => {
      this.formData()
    })
  }

  formData() {
    const rounds = this.state.rounds;
    let data = []
    rounds.forEach((round) => {
      const entry = [round.date, round.course, round.score, round.holes, round.tournament ? (<Icon name='checked' centered />) : (<Icon name='x' />)];
      data.push(entry);
    });
    this.setState({
      data
    })
  }

  render() {
    return (
      <ReactSemanticDatatable
        headers={['Date', 'Course', 'Score', 'Holes', 'Tournament']}
        data={this.state.data}
        searchOn={['Date', 'Course', 'Score']}
        sortOn={['Date', 'Course', 'Score', 'Holes', 'Tournamet']}
        pagination={true}
      />
    );
  }
}

export default RecentRounds;
