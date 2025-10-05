import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera } from 'react-feather';
import '../styles/EditProfile.css';

const EditProfile = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: 'First Last',
    email: 'name@email.com',
    role: 'Farmer',
    location: '10 olujoda, Ekiti State',
    specialization: 'Crops',
    experience: '8'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  const handleBack = () => {
    navigate('/profile');
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-header">
        <button className="back-button" onClick={handleBack}>
          <ArrowLeft size={24} />
        </button>
        <h1 className="edit-title">Edit</h1>
      </div>

      <div className="edit-profile-form">
        <div className="profile-image-section">
          <div className="profile-image-placeholder">
            <Camera size={40} color="#5A7184" />
          </div>
          <span className="profile-image-label">Profile image</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">NAME</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">EMAIL</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">ROLE</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Specialization</label>
            <input
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">EXPERIENCE</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
