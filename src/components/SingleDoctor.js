import PropTypes from 'prop-types';
import insta from '../images2/insta-icon-home.png';
import fb from '../images2/fb-icon-home.png';
import twitter from '../images2/twitter-icon-home.png';

const social = [
  { icon: insta },
  { icon: fb },
  { icon: twitter },
];

const SingleDoctor = ({
  name, image, location, description,
}) => (
  <div className="doctors1">
    <div className="image-div">
      <img src={image} alt="Profile of doctor" className="doctors-images" />
    </div>
    <div className="doctor-data">
      <h4>{name}</h4>
      <p>.........................</p>
      <p>
        {description}
      </p>
      <p>{location}</p>
      <div className="social-net">
        {social.map((item) => (
          <a href="/" key={item.icon}>
            <img src={item.icon} alt="social" className="w-8" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

SingleDoctor.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SingleDoctor;
