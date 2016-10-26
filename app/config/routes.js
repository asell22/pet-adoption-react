import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home'
import ZipFormContainer from '../components/ZipFormContainer';
import PetForm from '../components/PetForm';
import AnimalContainer from '../components/Animal';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='form' component={PetForm}/>
      <Route path='zip' component={ZipFormContainer}/>
      <Route path='animal' component={AnimalContainer}/>
    </Route>
  </Router>
)

export default routes;
