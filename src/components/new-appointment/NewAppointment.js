import React from 'react';
import './new_Appointment.css';

const NewAppointment = () => (
  <div className=" reserveContainer ">
    <div>
      <div className="flex">
        <h4 className="reserveFormHeading">Book Appointment</h4>
      </div>

      <div className="resrve-header">
        <p className="text-doctors">
          We have different doctors from different parts of the world.
          <br />
          If you wish to find out if we have a doctor who is available in your
          city, please use the selector below
        </p>
      </div>

      <form action="/#" className="form-list">
        <div className="details-form">
          <input type="text" value="Name" className="form-user-name" />
          <select name="cities" id="cities" className="form-user-name">
            <option value="Nairobi">Nairobi</option>
            <option value="Delhi">Accra</option>
            <option value="Abuja">Kigali</option>
            <option value="Lusaka">Lusaka</option>
          </select>
          <select
            name="availableDoctors"
            id="availableDoctors"
            className="form-user-name"
          >
            <option value="Ranjeet"> Dr.Lion Rouge </option>
            <option value="Ranjeet"> Dr.Asiati Magana </option>
            <option value="Ranjeet"> Dr.Jamila Moseka </option>
            <option value="Ranjeet"> Dr.Eric Mahale </option>
            <option value="Ranjeet"> Dr.Mandela </option>
          </select>
          <input type="date" value="Date" className="form-user-name" />
          <br />
        </div>
        <div className="form-book">
          <input type="submit" value="Book Now" className="form-user-button" />
        </div>
      </form>
    </div>
  </div>
);

export default NewAppointment;
