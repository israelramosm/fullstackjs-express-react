import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid } from 'carbon-components-react';

import Login from './content/Login';
import Main from './content/Main';
import LandingPage from './content/LandingPage';

import './app.scss';

const App = () => {
  const username = 'username';
  return (
    <Grid className="full-width">
      <div className="max-width">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path={`/${username}`} component={Main} />
        </Switch>
      </div>
    </Grid>
  );
};

export default App;
