import React, { useState } from 'react';
import './add_doctor.css';

const AddDoctor = () => (
  <div className="add-doc-container d-flex justify-content-center">
    <div className="doc-container-form">
      <div className="form-title text-center pb-4">
        <h2>Add doctor</h2>
      </div>

      <div className="form-container d-flex justify-content-center">
        <form className="pb-5">
          <div className="doc-form py-5">
            <div className="form-group">
              <p className="ms-4 mb-1"> Full Name </p>
              <input type="text" name="name" id="doctor-name" className="p-2 form-control rounded-pill" placeholder="Enter your name" required />

            </div>

            <div className="form-group">
              <p className="ms-4 mb-1">Email </p>
              <input type="text" name="email" id="doctor-email" className="form-control rounded-pill" placeholder="Enter your email" required />
            </div>

            {/* End of row 1 */}

            <div className="form-group">
              <p htmlFor="speciality" className="ms-4 mb-1">Speciality</p>
              <input type="text" name="speciality" id="doctor-speciality" className="form-control rounded-pill" placeholder="Enter your speciality" required />

            </div>

            <div className="form-group">
              <p htmlFor="image" className="ms-4 mb-1">Image Link</p>
              <input type="text" name="image" id="doctor-image" className="form-control rounded-pill" placeholder="Enter an image url link" required />
            </div>

            <div className="text-center mt-4">
              <button
                type="submit"
                name="submit-item"
                id="doctor-submit"
                className="text-center rounded-pill"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
