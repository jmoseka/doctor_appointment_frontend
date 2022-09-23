import React from 'react';
import { useParams } from 'react-router-dom';
import data from './DoctorData';

const DoctorDetails = () => {
  const params = useParams();
  const doctor = data.find((doctor) => doctor.id === Number(params.id));
  const {
    image, name, speciality, email, description, bill,
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
          <tr className="row">
            <th>Speciality</th>
            <td>{speciality}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{email}</td>
          </tr>
          <tr className="row">
            <th>Bill</th>
            <td>{bill}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DoctorDetails;
