/* eslint-disable camelcase */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAppointmentAction, fetchData } from '../../redux/my_appointment_redux/my_appointment';
import './css/appointment.css';

const Appointments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const data = useSelector((state) => state.my_appointment);

  const deleteAppointment = (e, id) => {
    dispatch(deleteAppointmentAction(id));
    e.target.parentNode.remove();
  };

  return (
    <div className="my-appointment-container">

      <div className="px-5 pb-2 text-center appointment-heading mt-5">
        <h2>MY APPOINTMENTS</h2>
      </div>

      {
        data.length === 0
          ? (
            <h2 className="not-found-notice mt-5 text-center">No appointment booked</h2>
          )
          : (
            <div className="my-appointment-box py-3">
              {

  data.map((el) => (
    <div className="my-appointment-card card m-2" key={el.appointmentId}>
      <div className="d-flex card-box flex-column flex-lg-row justify-content-evenly">
        <ul className="columns-appointment">
          <li className="h5 lbl-appoint">
            DOCTOR
          </li>
          <li className="h5">
            {` ${el.doctorName}`}
          </li>
        </ul>

        <ul className="columns-appointment middle-list">
          <li className="h5 lbl-appoint">RESERVATION DATE</li>
          <li className="h5">{el.dateReserved}</li>
        </ul>

        <ul className="columns-appointment">
          <li className="h5 lbl-appoint">CITY</li>
          <li className="h5">{el.cityName}</li>
        </ul>

      </div>
      <button type="submit" onClick={(e) => deleteAppointment(e, el.appointmentId)} className="delete-appointment">CANCEL</button>
    </div>

  ))
          }

            </div>
          )
      }

    </div>
  );
};

export default Appointments;
