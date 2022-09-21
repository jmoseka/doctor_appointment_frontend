import './css/sign_in_up.css';
import { Link } from 'react-router-dom';

function Signup() {
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
          <p className="p-2">
            The leading online booking website
            for doctors anywhere, anytime. Take care of your body it will take care of you

          </p>
        </div>

      </section>
      <section className="section-form d-flex flex-column align-items-center mt-4 mt-md-5 pt-md-3">
        <div className="form-title">
          <p className="h3">Create an account</p>
        </div>

        <div className="form-container">
          <form className="signup-form">
            <div className="form-group">
              <p className="ms-4 mb-1">Full Name</p>
              <input type="text" name="name" id="signup-name" className="form-control rounded-pill" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <p className="ms-4 mb-1">Email</p>
              <input type="text" name="email" id="signup-email" className="form-control rounded-pill" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <p className="ms-4 mb-1">Password</p>
              <input type="password" name="password" id="signup-password" className="form-control rounded-pill" placeholder="Enter your password" required />
            </div>
            <div className="form-group">
              <p className="ms-4 mb-1">Confirm password</p>
              <input type="password" name="password" id="confirm-password" className="form-control rounded-pill" placeholder="Confirm your password" required />
            </div>
          </form>

          <div className="signup-buttons mt-4 text-center">
            <Link className="style-btn rounded-pill" to="/splashscreen">SIGN UP</Link>
          </div>

          <div className="notice-account mt-3">
            <p>
              Already have an account?
              {' '}
              <span><Link className="login-link" id="signup-on-login" to="/signin">Login</Link></span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
