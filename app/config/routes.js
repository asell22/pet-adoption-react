import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main';
import ZipFormContainer from '../components/ZipFormContainer';
import Form from '../components/Form';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={ZipFormContainer}/>
      <Route path='form' component={Form}/>
    </Route>
  </Router>
)

export default routes;
