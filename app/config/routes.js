import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main';
import ZipFormContainer from '../components/ZipFormContainer';
import PetForm from '../components/PetForm';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={ZipFormContainer}/>
      <Route path='form' component={PetForm}/>
    </Route>
  </Router>
)

export default routes;
