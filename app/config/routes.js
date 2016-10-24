import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main';
import Zip from '../components/Zip';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Zip}/>
    </Route>
  </Router>
)

export default routes;
