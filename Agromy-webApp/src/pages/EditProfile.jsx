import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Camera } from "react-feather";
import "../styles/EditProfile.css";

const Profile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "First Last",
    email: "name@email.com",
    role: "Farmer",
    location: "10 olujoda, Ekiti State",
    specialization: "Crops",
    experience: "8",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/profile");
  };

  const handleBack = () => {
    navigate("/profile");
  };

  return (
    <section className="edit-profile-page">
      <div className="edit-profile-shell">
        <header className="edit-top-bar">
          <button type="button" className="edit-back-button" onClick={handleBack}>
            <ArrowLeft size={22} />
          </button>
          <h1 className="edit-heading">Edit</h1>
        </header>

        <div className="edit-layout">
          <div className="edit-avatar-panel">
            <div className="edit-avatar-placeholder" aria-hidden="true">
              <Camera size={38} color="#EBF5EF" />
            </div>
            <span className="edit-avatar-label">Profile image</span>
          </div>

          <form className="edit-form" onSubmit={handleSubmit}>
            <div className="edit-form-grid">
              <label className="edit-form-field">
                <span className="edit-field-label">NAME</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="edit-field-input"
                />
              </label>

              <label className="edit-form-field">
                <span className="edit-field-label">EMAIL</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="edit-field-input"
                />
              </label>

              <label className="edit-form-field">
                <span className="edit-field-label">ROLE</span>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="edit-field-input"
                />
              </label>

              <label className="edit-form-field">
                <span className="edit-field-label">Location</span>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="edit-field-input"
                />
              </label>

              <label className="edit-form-field">
                <span className="edit-field-label">Specialization</span>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className="edit-field-input"
                />
              </label>

              <label className="edit-form-field">
                <span className="edit-field-label">EXPERIENCE</span>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="edit-field-input"
                  min="0"
                />
              </label>
            </div>

            <button type="submit" className="edit-submit-button">
              Save
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
