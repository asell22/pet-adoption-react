import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home'
import ZipContainer from '../components/ZipContainer';
import PetForm from '../components/PetForm';
import AnimalContainer from '../components/AnimalContainer';
import BreedContainer from '../components/BreedContainer';
import SizeContainer from '../components/SizeContainer';
import AgeContainer from '../components/AgeContainer';
import Gender from '../components/Gender';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='form' component={PetForm}/>
      <Route path='zip' component={ZipContainer}/>
      <Route path='animal' component={AnimalContainer}/>
      <Route path='breed' component={BreedContainer}/>
      <Route path='size' component={SizeContainer}/>
      <Route path='age' component={AgeContainer}/>
      <Route path='gender' component={Gender}/>

    </Route>
  </Router>
)

export default routes;
