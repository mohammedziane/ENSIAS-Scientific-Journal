import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Landing from './components/layout/landing';
import Dashbord from './components/profile/dashbord';
import Newnav from './components/profile/newNavbar';
import Auth from './components/login/auth';
import './App.scss';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Navbar />
            <Landing />
          </Route>
          <Route exact path='/auth'>
            <Auth />
          </Route>
          <Route exact path='/dashbord'>
            <Newnav />
            <Dashbord />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
