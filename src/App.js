import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from './content/Login';
import Main from './content/Main';
import LandingPage from './content/LandingPage';
import axiosCall, { getLogout } from './util/request';

import './app.scss';

const App = () => {
  // const history = useHistory();
  const { username } = useSelector((state) => state.app);

  const logoutHandler = () => {
    axiosCall(getLogout())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
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
                <i className="bi bi-person-fill bi-2x" />
              </button>
              <ul
                className="dropdown-menu app__dropdown-menu-aligment"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link to="/login" className="dropdown-item">
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#"
                    className="dropdown-item"
                    onClick={logoutHandler}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
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
