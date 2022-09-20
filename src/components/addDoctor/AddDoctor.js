import React from 'react';
import './add_doctor.css';

const AddDoctor = () => (
  <div className="add-doc-container">
    <div className="doc-container-form ">
      <div className="form-title">
        <h2>Add doctor</h2>
      </div>

      <div className="form-container d-flex justify-content-center">
        <form className="doc-form p-3">
          <div className="form-group">
            <label htmlFor="name" className="ms-4 mb-1">
              Full Name
              <input type="text" name="name" id="doctor-name" className="form-control rounded-pill" placeholder="Enter your name" required />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="ms-4 mb-1">
              Email
              <input type="text" name="email" id="doctor-email" className="form-control rounded-pill" placeholder="Enter your email" required />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="speciality" className="ms-4 mb-1">
              Speciality
              <input type="text" name="speciality" id="doctor-speciality" className="form-control rounded-pill" placeholder="Enter your speciality" required />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="image" className="ms-4 mb-1">
              Image Link
              <input type="text" name="image" id="doctor-image" className="form-control rounded-pill" placeholder="Enter an image url link" required />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="location" className="ms-4 mb-1">
              Location
              <input type="text" name="location" id="doctor-location" className="form-control rounded-pill" placeholder="Enter your location" required />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="bill" className="ms-4 mb-1">
              Bill
              <input type="number" name="bill" id="doctor-bill" className="form-control rounded-pill" placeholder="Enter your bill" required />
            </label>
          </div>

          <div className="form-group reserve-radio">
            <p>Are you reserved? </p>
            <label htmlFor="reserve-no" className="ms-4 mb-1">
              <input type="radio" name="reserve-yes" className="rounded-pill input-radio" checked required />
              Yes
            </label>
            <label htmlFor="reserve-yes" className="ms-4 mb-1">
              <input type="radio" name="reserve-no" className="rounded-pill input-radio" required />
              No
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="description" className="ms-4 mb-1">
              Description
              <textarea name="description" id="doctor-description" className="form-control" placeholder="Enter a brief description" required />
            </label>
          </div>

        </form>
      </div>
    </div>
  </div>
);

export default AddDoctor;
