// Profile.js

import React from 'react';
import PropTypes from 'prop-types';
import "./Profile.css";

const Profile = ({ imageSrc, name, role }) => {
  return (
    <div className="profile-container">
      <img
        className="profile-image"
        src={imageSrc}
        alt={name}
      />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-role">{role}</p>
      {/* Add more details as needed */}
    </div>
  );
};

Profile.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default Profile;
