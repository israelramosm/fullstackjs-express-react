import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Column, Row } from 'carbon-components-react';

import Dashboard from '../Dashboard/Dashboard';

const Main = ({ match }) => (
  <Row>
    <Column>
      <div>Main</div>
      <Route path={`${match.url}/dashboard`}>
        <Dashboard />
      </Route>
    </Column>
  </Row>
);

Main.propTypes = {
  match: PropTypes.shape({ url: PropTypes.string }),
};

Main.defaultProps = {
  match: {},
};

export default Main;
