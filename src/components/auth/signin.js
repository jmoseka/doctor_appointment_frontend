import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginUserAction } from '../../redux/auth/login';
import './css/sign_in_up.css';

function Signin() {
  const notify = () => {
    toast('Logged in successfully.');
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const user = {
      email,
      password,
    };
    e.preventDefault();
    dispatch(LoginUserAction(user));
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    user.login = true;
    navigate('/');
  };
  return (
    <div className="container-signup d-md-flex">
      <section className="section-logo text-center">
        <div className="logo-title mt-5 mt-md-5 pt-md-5">
          <p className="h3">DOCTORS APPOINTMENT</p>
          <div className="line-hor d-flex justify-content-center">
            <span className="line " />
          </div>
        </div>
        <div className="logo-text hidden mt-5">
          <p className="p-2 logo-content">
            The leading online booking website for doctors anywhere, anytime.
            Take care of your body it will take care of you
          </p>
        </div>
      </section>
      <section className="section-form d-flex flex-column align-items-center mt-4 mt-md-5 pt-md-5">
        <div className="form-title">
          <p className="h3">Log in to your account</p>
        </div>

        <div className="form-container">
          <form className="signup-form" onSubmit={handleSubmit} method="POST">
            <div className="form-group">
              <p className="ms-4 mb-1">Email</p>
              <input
                type="text"
                name="email"
                id="signup-email"
                className="form-control rounded-pill"
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <p className="ms-4 mb-1">Password</p>
              <input
                type="password"
                name="password"
                id="signup-password"
                className="form-control rounded-pill"
                placeholder="Enter your password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="signup-buttons mt-5 text-center">
              <button
                onClick={notify}
                type="submit"
                className="style-btn rounded-pill"
              >
                LOGIN
              </button>
            </div>
          </form>

          <div className="notice-account mt-4">
            <p>
              Dont have an account?
              {' '}
              <span className="login-link">
                <Link to="/signup" id="login-on-signup">
                  Sign up
                </Link>
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signin;
