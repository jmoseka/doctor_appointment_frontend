import React, { useState, useEffect } from 'react';
import './add_doctor.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createDoctorAction } from '../../redux/doctorReduce/doctors';
import localStorages from '../../helpers/localStorage';

const AddDoctor = () => {
  const hasAccount = localStorages.getUser();
  const role = hasAccount.user.name;
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== 'admin') {
      navigate('/401');
    }
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [location, setLocation] = useState('');
  const [bill, setBill] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  const doctorsName = document.getElementById('doctor-name');
  const doctorsEmail = document.getElementById('doctor-email');
  const doctorsSpeciality = document.getElementById('doctor-speciality');
  const doctorsLocation = document.getElementById('doctor-location');
  const doctorsBill = document.getElementById('doctor-bill');
  const doctorsDescription = document.getElementById('doctor-description');
  const doctorsImage = document.getElementById('doctor-image');

  const handleSubmit = (e) => {
    e.preventDefault();
    const doctor = {
      name,
      email,
      speciality,
      location,
      bill,
      description,
      image,
    };
    dispatch(createDoctorAction(doctor));
    doctorsName.value = '';
    doctorsEmail.value = '';
    doctorsSpeciality.value = '';
    doctorsLocation.value = '';
    doctorsBill.value = '';
    doctorsDescription.value = '';
    doctorsImage.value = '';
  };

  return (
    <div className="add-doc-container d-flex justify-content-center">
      <div className="doc-container-form">
        <div className="form-title text-center pb-4">
          <h2>Add doctor</h2>
        </div>

        <div className="form-container d-flex justify-content-center">
          <form className="pb-5" onSubmit={handleSubmit}>
            <div className="doc-form py-5">
              <div className="form-group">
                <p className="ms-4 mb-1"> Name </p>
                <input
                  type="text"
                  name="name"
                  id="doctor-name"
                  className="p-2 form-control rounded-pill"
                  placeholder="Enter your name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <p className="ms-4 mb-1">Email </p>
                <input
                  type="text"
                  name="email"
                  id="doctor-email"
                  className="form-control rounded-pill"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* End of row 1 */}

              <div className="form-group">
                <p htmlFor="speciality" className="ms-4 mb-1">
                  Speciality
                </p>
                <input
                  type="text"
                  name="speciality"
                  id="doctor-speciality"
                  className="form-control rounded-pill"
                  placeholder="Enter your speciality"
                  required
                  onChange={(e) => setSpeciality(e.target.value)}
                />
              </div>

              <div className="form-group">
                <p htmlFor="image" className="ms-4 mb-1">
                  Image Link
                </p>
                <input
                  type="text"
                  name="image"
                  id="doctor-image"
                  className="form-control rounded-pill"
                  placeholder="Enter an image url link"
                  required
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>

              <div className="form-group">
                <p htmlFor="location" className="ms-4 mb-1">
                  Location
                </p>
                <input
                  type="text"
                  name="location"
                  id="doctor-location"
                  className="form-control rounded-pill"
                  placeholder="Enter your location"
                  required
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="form-group">
                <p htmlFor="bill" className="ms-4 mb-1">
                  Bill
                </p>
                <input
                  type="number"
                  name="bill"
                  id="doctor-bill"
                  className="form-control rounded-pill"
                  placeholder="Enter your bill"
                  required
                  onChange={(e) => setBill(e.target.value)}
                />
              </div>
              <div className="form-group">
                <p htmlFor="description" className="ms-3 mb-1">
                  Description
                </p>
                <textarea
                  name="description"
                  id="doctor-description"
                  className="form-control"
                  placeholder="Enter a brief description"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div className="text-center mt-4">
              <input
                type="submit"
                name="submit-item"
                id="doctor-submit"
                className="text-center rounded-pill"
                value="SUBMIT"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddDoctor;
