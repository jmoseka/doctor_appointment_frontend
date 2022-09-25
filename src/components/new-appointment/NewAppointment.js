import React, { useEffect, useState } from 'react';
import './new_Appointment.css';
import { useDispatch, useSelector } from 'react-redux';
import { reserveAction } from '../../redux/my_appointment_redux/my_appointment';
import { getDoctorsAction } from '../../redux/doctorReduce/doctors';

const NewAppointment = () => {
  const dispatch = useDispatch();
  // const reserveDoctor = useSelector((state) => state.my_appointment);
  const doctors = useSelector((state) => state.doctor);
  const userId = JSON.parse(localStorage.getItem('user'));

  const [doctorId, setDoctorId] = useState('');
  const [city, setCity] = useState('');
  const [dateReserved, setDateReserved] = useState('');

  useEffect(() => {
    dispatch(getDoctorsAction());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      user_id: userId.user.id,
      city,
      date_reserved: dateReserved,
      doctor_id: doctorId,
    };
    dispatch(reserveAction(data));
  };

  return (
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

        <form action="/#" className="form-list" onSubmit={handleSubmit}>
          <div className="details-form">
            <div className="form-group">
              <p className="ms-4 mb-1">City</p>
              <input
                type="text"
                name="city"
                id="city-town"
                className="form-control rounded-pill"
                placeholder="Enter your city"
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <select
              name="availableDoctors"
              id="availableDoctors"
              value={doctorId}
              className="form-user-name"
              onChange={(e) => setDoctorId(e.target.value)}
            >
              {doctors.map((doctor) => (
                <option value={doctor.id} key={doctor.id}>
                  {doctor.name}
                </option>
              ))}
              {/* <option value="Ranjeet"> Dr.Lion Rouge </option>
              <option value="Ranjeet"> Dr.Asiati Magana </option>
              <option value="Ranjeet"> Dr.Jamila Moseka </option>
              <option value="Ranjeet"> Dr.Eric Mahale </option>
              <option value="Ranjeet"> Dr.Mandela </option> */}
            </select>
            <p className="ms-4 mb-1">Date</p>
            <input
              type="date"
              value={dateReserved}
              className="form-user-name"
              onChange={(e) => setDateReserved(e.target.value)}
            />
            <br />
          </div>
          <div className="form-book">
            <input
              type="submit"
              value="Book Now"
              className="form-user-button"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default NewAppointment;
