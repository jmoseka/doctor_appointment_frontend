import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getDoctorsAction } from '../redux/doctorReduce/doctors';

const DoctorDetails = () => {
  const doctors = useSelector((state) => state.doctor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctorsAction());
  }, [dispatch]);

  const params = useParams();
  const doctor = doctors.find((doctor) => doctor.id === Number(params.id));
  const {
    name, speciality, email, image, description, bill,
  } = doctor;

  return (
    <div id="RouterNavLink" className="doctor-container">
      <div className="image-container">
        <img src={image} alt="Profile of doctor" className="single-image" />
      </div>
      <div className="details">
        <h4 className="detail-name">{name}</h4>
        <p>{description}</p>
        <table>
          <tr className="col">
            <th>Speciality</th>
            <td>{speciality}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{email}</td>
          </tr>
          <tr className="col">
            <th>Bill</th>
            <td>{bill}</td>
          </tr>
        </table>
        <Link to="/new_appointment" className="btn-details btn mt-4 text-center">Book Appointment</Link>
      </div>
    </div>
  );
};

export default DoctorDetails;
