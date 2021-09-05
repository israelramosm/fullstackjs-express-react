/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './_login.scss';

const Login = () => (
  <div className="row login">
    <div className="col-md-6 login__form">
      <h2>Login</h2>
      <form>
        <label htmlFor="email" className="form-label">
          Username
        </label>
        <div className="input-group mb-3">
          <input
            name="email"
            id="email"
            type="text"
            className="form-control"
            placeholder="Your Email *"
            aria-label="Your Email"
          />
        </div>
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <div className="input-group mb-3">
          <input
            name="password"
            id="password"
            type="text"
            className="form-control"
            placeholder="Your Pasword *"
            aria-label="Your Password"
          />
        </div>
        <div className="form-group d-flex justify-content-center mb-3">
          <button type="button" className="btn btn-primary login__button">
            Login
          </button>
        </div>
        <div className="form-group d-flex justify-content-center">
          <p className="login__test-login">
            You can use
            <strong> user@name.com - password </strong>
            to login
          </p>
        </div>
        <div className="form-group d-flex justify-content-center">
          <a href="/#" className="login__forget-password">
            Forget Password?
          </a>
        </div>
      </form>
    </div>
  </div>
);

export default Login;
