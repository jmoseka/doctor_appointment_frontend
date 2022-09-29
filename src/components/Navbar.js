import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { GiTriangleTarget } from 'react-icons/gi';
import { logout } from '../redux/auth/login';
import localStorages from '../helpers/localStorage';

const Navbar = ({ classValue, toggleMenu }) => {
  const dispatch = useDispatch();
  const hasAccount = localStorages.getUser();
  const name = hasAccount.user === undefined ? '' : hasAccount.user.name;

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  if (classValue === 'hide') {
    return (
      <div className="bars" onClick={() => toggleMenu()} role="presentation"><i className="fa fa-bars" /></div>
    );
  }
  return (
    <nav className={`navbar ${classValue}`}>
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
          {
            name === 'admin'
              ? (
                <div>
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
                      to="/delete_doctor"
                    >
                      Delete a Doctor
                    </NavLink>
                  </li>
                </div>
              )
              : null
          }

          <li className="nav-logout">
            <i className="fa-solid fa-right-from-bracket" />
            <a href="/" className="nav-link text-white" onClick={logOut}>
              LogOut
            </a>
          </li>
        </ul>
      </div>
      <p className="copyright">&copy; Microverse 2022</p>
      <div className="close-btn-container">
        <GiTriangleTarget className="close-arrow" onClick={() => toggleMenu()} />
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  classValue: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
