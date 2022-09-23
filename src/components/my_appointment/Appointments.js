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
    <div className="my-appointment-container">

      <div className="px-5 pb-2">
        <h2>My Appointments</h2>
      </div>

      <div className="my-appointment-box py-5">
        {

          data.map((el) => (
            <div className="my-appointment-card card m-5 p-3" key={el.docId}>
              <h4 className="p-2">
                Doctor
                {el.doctorName}
              </h4>
              <h5 className="p-2">
                Reservation Date:
                {' '}
                {el.dateReserved}
              </h5>
              <h5 className="p-2">
                City:
                {el.cityName}
              </h5>
            </div>

          ))
        }

      </div>

    </div>
  );
};

export default Appointments;
