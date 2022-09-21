import React from 'react';
import './add_doctor.css';

const AddDoctor = () => (
  <div className="add-doc-container py-5 d-flex justify-content-center">
    <div className="doc-container-form">
      <div className="form-title">
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

            <div className="form-group">
              <p htmlFor="location" className="ms-4 mb-1">Location</p>
              <input type="text" name="location" id="doctor-location" className="form-control rounded-pill" placeholder="Enter your location" required />

            </div>

            <div className="form-group">
              <p htmlFor="bill" className="ms-4 mb-1">Bill</p>
              <input type="number" name="bill" id="doctor-bill" className="form-control rounded-pill" placeholder="Enter your bill" required />

            </div>

            <div className="form-group ms-4 reserve-radio">
              <p className="text-start mb-1">Are you reserved? </p>
              <p className="ms-5 mb-1">
                <input type="radio" name="reserve-yes" className="rounded-pill input-radio" checked required />
                Yes
              </p>
              <p className="ms-5 mb-1">
                <input type="radio" name="reserve-no" className="rounded-pill input-radio" required />
                No
              </p>
            </div>

            <div className="form-group">
              <p htmlFor="description" className="ms-3 mb-1">Description</p>
              <textarea name="description" id="doctor-description" className="form-control" placeholder="Enter a brief description" required />

            </div>
          </div>

          <div className="text-center mt-4">
            <input type="submit" name="submit-item" id="doctor-submit" className="text-center rounded-pill" value="SUBMIT" />

          </div>

        </form>
      </div>
    </div>
  </div>
);

export default AddDoctor;
