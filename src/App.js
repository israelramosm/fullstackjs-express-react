import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './content/Login';
import Main from './content/Main';
import LandingPage from './content/LandingPage';

import './app.scss';

const App = () => {
  const username = 'username';
  return (
    <div className="app">
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            Navbar
          </a>
          <div className="d-flex">
            <div className="dropdown dropstart">
              <button
                className="btn btn-primary"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-fill bi-1x" />
              </button>
              <ul
                className="dropdown-menu app__dropdown-menu-aligment"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="/#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-width">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path={`/${username}`} component={Main} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
