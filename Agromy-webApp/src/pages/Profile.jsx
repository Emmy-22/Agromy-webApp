import React from 'react';
import { Link } from 'react-router-dom';
import { Edit2 } from 'react-feather';
import '../styles/Profile.css';

const Profile = () => {
  const profileData = {
    name: 'Name',
    role: 'Farmer',
    experience: '8',
    location: '10 Olujoda Ekiti',
    specialization: 'Crops',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/cf04e907fb592bf71b0b492977eac0e1d83d6492?width=620'
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="profile-title">Profile</h1>
      </div>

      <div className="profile-content">
        <div className="profile-image-wrapper">
          <img 
            src={profileData.image} 
            alt="Profile" 
            className="profile-image"
          />
        </div>

        <h2 className="profile-name">{profileData.name}</h2>

        <h3 className="info-heading">Info</h3>

        <div className="info-grid">
          <div className="info-card">
            <span className="info-label">ROLE</span>
            <span className="info-value">{profileData.role}</span>
          </div>

          <div className="info-card">
            <span className="info-label">EXPERIENCE</span>
            <span className="info-value">
              <span className="experience-number">{profileData.experience}</span> years
            </span>
          </div>

          <div className="info-card">
            <span className="info-label">LOCATION</span>
            <span className="info-value">{profileData.location}</span>
          </div>

          <div className="info-card">
            <span className="info-label">SPECIALIZATION</span>
            <span className="info-value">{profileData.specialization}</span>
          </div>
        </div>

        <Link to="/profile/edit" className="edit-button">
          <Edit2 size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Profile;
