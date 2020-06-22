import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Landing from './components/layout/landing';
import Auth from './components/login/auth';
import Routes from './components/routing/Routes';
import './App.scss';

//Redux-- notre fournisseur de store
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/'>
              <Navbar />
              <Landing />
            </Route>
            <Route exact path='/auth' component={Auth} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
