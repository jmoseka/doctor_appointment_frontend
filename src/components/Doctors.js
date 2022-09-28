import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './doctors.css';
import Carousel from 'react-multi-carousel';
import SingleDoctor from './SingleDoctor';
import 'react-multi-carousel/lib/styles.css';
import { getDoctorsAction } from '../redux/doctorReduce/doctors';

const Doctors = () => {
  const doctors = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  // const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    dispatch(getDoctorsAction());
  }, [dispatch]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="main-doctor-container">
      {
        doctors.length === 0
          ? (
            <div className="doctors">
              <h1 className="doctor-header">AVAILABLE DOCTORS</h1>
              <h2 className="not-found-notice mt-5">No doctors available</h2>
            </div>
          )

          : (
            <>
              <div className="doctors">
                <h1 className="doctor-header">AVAILABLE DOCTORS</h1>
                <p className="doctor-header-para"> Please select a doctor</p>
              </div>
              <div className="doctors-li">
                <Carousel
                  responsive={responsive}
                  className="carousel-container"
                  infinite
                >
                  {doctors.map((doctor) => (
                    <div key={doctor.id}>
                      <Link to={`/doctor_details/${doctor.id}`}>
                        <SingleDoctor
                          name={doctor.name}
                          image={doctor.image}
                          speciality={doctor.speciality}
                          city={doctor.location}
                          description={doctor.description}
                        />
                      </Link>
                    </div>
                  ))}
                </Carousel>
              </div>
            </>
          )

      }

    </div>
  );
};

export default Doctors;
