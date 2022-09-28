/* eslint-disable camelcase */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/my_appointment_redux/my_appointment';
import './css/appointment.css';

const Appointments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const data = useSelector((state) => state.my_appointment);

  return (
    <div className="my-appointment-container mt-5 mx-3">

      <div className="px-5 pb-2 text-center appointment-heading">
        <h2>My Appointments</h2>
      </div>

      <div className="my-appointment-box py-3">
        {

          data.map((el) => (
            <div className="my-appointment-card card m-2" key={el.docId}>
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
              <button type="submit" className="delete-appointment text-white">DELETE</button>
            </div>

          ))
        }

      </div>

    </div>
  );
};

export default Appointments;
