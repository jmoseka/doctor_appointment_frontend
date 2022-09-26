/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAppointmentAction, fetchData } from '../../redux/my_appointment_redux/my_appointment';
import './css/appointment.css';

const Appointments = () => {
  const [appointment, setAppointment] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const data = useSelector((state) => state.my_appointment);
  localStorage.setItem('my_appointment', JSON.stringify(data));

  // eslint-disable-next-line no-unused-vars
  useEffect(() => { setAppointment(JSON.parse(localStorage.getItem('my_appointment'))); }, [localStorage.getItem('my_appointment')]);
  const listAppoitment = JSON.parse(localStorage.getItem('my_appointment'));

  const deleteAppointment = (e, id) => {
    dispatch(deleteAppointmentAction(id));
    const newArr = listAppoitment.filter((object) => object.appointmentId !== id);
    localStorage.setItem('my_appointment', JSON.stringify(newArr));
    e.target.parentNode.remove();
  };

  let sum = 0;

  const giveIndex = () => {
    sum += 1;
    return sum;
  };

  return (
    <div className="my-appointment-container">

      <div className="px-5 pb-2 text-center appointment-heading">
        <h2>My Appointments</h2>
      </div>

      <div className="my-appointment-box py-3">
        {

          data.map((el) => (
            <div className="my-appointment-card card m-2" key={el.appointmentId}>
              <div className="p-5 d-flex card-box">
                <h4 className="p-2 doc-name">
                  Doctor
                  {` ${el.doctorName}`}
                </h4>
                <h5 className="p-2">
                  <span className="reserve me-2">Reservation Date:</span>
                  {' '}
                  {el.dateReserved}
                </h5>
                <h5 className="p-2">
                  <span className="city me-2">City: </span>
                  {el.cityName}
                </h5>
              </div>
              <button type="submit" id={`${giveIndex() - 1}`} onClick={(e) => deleteAppointment(e, el.appointmentId)} className="delete-appointment">DELETE</button>
            </div>

          ))
        }

      </div>

    </div>
  );
};

export default Appointments;
