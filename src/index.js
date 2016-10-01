import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import RecentRounds from './modules/RecentRounds/RecentRounds';
import AddRound from './modules/AddRound/AddRound';
import Statistics from './modules/Statistics/Statistics';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path='/rounds' component={RecentRounds}/>
      <Route path='/round' component={AddRound}/>
      <Route path='/statistics' component={Statistics}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
