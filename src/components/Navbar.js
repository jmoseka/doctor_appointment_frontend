import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../redux/auth/login';

const Navbar = () => {
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src="./images/logo.png" className="logo" alt="logo" />
        </Link>
      </div>
      <div className="links-container">
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'active link' : 'link')}
              to="/"
            >
              Doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'active link' : 'link')}
              to="/add_doctor"
            >
              Add Doctor
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'active link' : 'link')}
              to="/appointments"
            >
              Appointments
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'active link' : 'link')}
              to="/new_appointment"
            >
              New Appointment
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'active link' : 'link')}
              to="/delete_doctor"
            >
              Delete a Doctor
            </NavLink>
          </li>

          <li className="nav-logout">
            <a href="/signin" className="nav-link" onClick={logOut}>
              LogOut
            </a>
          </li>
        </ul>
      </div>
      <p className="copyright">&copy; Microverse 2022</p>
    </nav>
  );
};
export default Navbar;
