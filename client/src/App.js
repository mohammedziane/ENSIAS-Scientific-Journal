import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Landing from './components/layout/landing';
import Auth from './components/login/auth';
import Routes from './components/routing/Routes';
//Redux-- notre fournisseur de store
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';
//Action Load user
import loadUser from './actions-services/auth/LoadUser';

const App = () => {
  /*
  useEffect(() => {
    store.dispatch(loadUser());
  }, []); // [] :  Cela veut dire que notre Effect ne depend d'aucune valeur  des accessoire ou de l'etat,
  // donc il n'a donc jamais besoin de se réexécuté
*/
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
