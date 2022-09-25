import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteDoctorAction,
  getDoctorsAction,
} from '../../redux/doctorReduce/doctors';
import './delete_doctor.css';

const DeleteDoctor = () => {
  const doctors = useSelector((state) => state.doctor);
  const [successNotice, setSuccessNotice] = useState(false);

  const dispatch = useDispatch();
  const deleteDoctor = (id) => {
    dispatch(deleteDoctorAction(id));
    setSuccessNotice(true);
  };

  useEffect(() => {
    dispatch(getDoctorsAction());
  }, [dispatch]);

  return (
    <div className="delete-container">
      {doctors.map((item) => (
        <div key={item.id} className="delete-details">
          <img src={item.image} alt="doctor" className="delete-image" />
          <p className="delete-name">{item.name}</p>
          <button
            type="button"
            onClick={() => deleteDoctor(item.id)}
            className="delete-button"
          >
            Delete
          </button>
        </div>
      ))}
      {successNotice && (
        <p className="text-center text-sky-500 text-lg mt-4">
          Doctor deleted succesfully!
        </p>
      )}
    </div>
  );
};

export default DeleteDoctor;
