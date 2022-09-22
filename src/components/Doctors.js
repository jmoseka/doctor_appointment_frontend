import React from 'react';
import './doctors.css';
import Carousel from 'react-multi-carousel';
import data from './DoctorData';
import SingleDoctor from './SingleDoctor';
import 'react-multi-carousel/lib/styles.css';

const Doctors = () => {
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
      <div className="doctors">
        <h1 className="doctor-header">AVAILABLE DOCTORS</h1>
        <p className="doctor-header-para"> Please select a doctor</p>
      </div>
      <div className="doctors-li">
        <Carousel responsive={responsive} className="carousel-container" infinite>
          {data.map((doctor) => (
            <SingleDoctor
              name={doctor.name}
              image={doctor.image}
              id={doctor.id}
              key={doctor.id}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Doctors;
