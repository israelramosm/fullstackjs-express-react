import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from '../Dashboard';
import Profile from '../Profile';

const Main = ({ match }) => (
  <div>
    <div>Main</div>
    <Switch>
      <Route path={`${match.url}/profile`}>
        <Profile />
      </Route>
      <Route path={`${match.url}/`}>
        <Dashboard />
      </Route>
    </Switch>
  </div>
);

Main.propTypes = {
  match: PropTypes.shape({ url: PropTypes.string }),
};

Main.defaultProps = {
  match: {},
};

export default Main;
