import { Link } from 'react-router-dom';
import './css/splashscreen.css';

function Splashscreen() {
  return (
    <div className="container-splash d-flex flex-column align-items-center">
      <div className="splash-title container d-flex flex-column align-items-center">
        <p className="display-3">
          <span className="logo-text-style">Find a doctor</span>
          {' '}
          and book online
        </p>
      </div>
      <div className="btn-container d-flex flex-column mt-5 pt-5 align-items-center text-center">
        <Link className="h6 rounded-pill splash-btn" to="/signup">GET STARTED</Link>
        <Link className="h6 rounded-pill splash-btn" to="/signin">LOGIN</Link>
      </div>
    </div>
  );
}

export default Splashscreen;
