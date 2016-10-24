import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main';
import ZipForm from '../components/ZipForm';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={ZipForm}/>
    </Route>
  </Router>
)

export default routes;
