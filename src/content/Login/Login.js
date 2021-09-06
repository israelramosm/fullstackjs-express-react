/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import axiosCall, { postLogin, postSignup } from '../../util/request';

import './_login.scss';

const Login = () => {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const defaultEmail = 'user@name.com';

  const login = () => {
    if (email === defaultEmail) {
      axiosCall(postSignup({ email, password })).finally(() => {
        axiosCall(
          postLogin({
            email,
            password,
          })
        )
          .then((res) => {
            console.log('Success', res);
          })
          .catch((err) => {
            console.error(err.response.data.message);
            setEmail('');
            setPassword('');
            setError('Invalid username or password');
          });
      });
    } else {
      axiosCall(
        postLogin({
          email,
          password,
        })
      )
        .then((res) => {
          console.log('Success', res);
        })
        .catch((err) => {
          console.error(err.response.data.message);
          setEmail('');
          setPassword('');
          setError('Invalid username or password');
        });
    }
  };

  return (
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
              value={email}
              onChange={({ target }) => {
                setError('');
                setEmail(target.value);
              }}
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
              value={password}
              onChange={({ target }) => {
                setError('');
                setPassword(target.value);
              }}
            />
          </div>
          {error && <div className="login__error mb-3">{error}</div>}
          <div className="form-group d-flex justify-content-center mb-3">
            <button
              type="button"
              className="btn btn-primary login__button"
              onClick={login}
            >
              Login
            </button>
          </div>
          <div className="form-group d-flex justify-content-center">
            <p className="login__test-login">
              You can use&nbsp;
              <strong>{defaultEmail}</strong>
              &nbsp;/&nbsp;
              <strong>password</strong>
              &nbsp;to login
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
};

export default Login;
