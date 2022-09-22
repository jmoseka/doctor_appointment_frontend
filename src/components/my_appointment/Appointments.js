import React from 'react';
import './css/appointment.css';

const Appointments = () => (
  <div className="my-appointment-container">

    <div className="px-5 pb-2">
      <h2>My Appointments</h2>
    </div>

    <div className="my-appointment-box py-5">

      <div className="my-appointment-card card m-5 p-3">
        <h4 className="p-2">Doctor. James Colwell</h4>
        <h5 className="p-2">Date: 13th August</h5>
        <h5 className="p-2">City: Kampala </h5>
      </div>

    </div>

  </div>
);

export default Appointments;
