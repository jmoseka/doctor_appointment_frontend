import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo-container">
      <Link
        to="/"
      >
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
      </ul>
    </div>
    <p className="copyright">&copy; Microverse 2022</p>
  </nav>
);

export default Navbar;
