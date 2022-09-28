import './css/no_auth.css';

const NoAuth = () => (
  <div className=" error-container mt-5 pt-5 d-flex align-content-center justify-content-center">
    <div className="err-card text-center d-flex flex-column justify-content-center mt-5 p-5">
      <div className="err-box">
        <p className="display-1 err-title">401</p>
      </div>
      <p className="display-3 not-found">No authorization found.</p>
      <p className="fw-bold h5">SORRY, YOUR REQUEST COULD NOT BE PROCESSED</p>
      <p className="fs-5">To access this page please login as an admin</p>
    </div>
  </div>
);
export default NoAuth;
