import React from "react";
import { Link } from "react-router-dom";
import { Edit2 } from "react-feather";
import "../styles/Profile.css";

const Profile = () => {
  const profileData = {
    name: "Name",
    role: "Farmer",
    experience: "8",
    location: "10 Olujoda Ekiti",
    specialization: "Crops",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/cf04e907fb592bf71b0b492977eac0e1d83d6492?width=620",
  };

  return (
    <section className="profile-page">
      <div className="profile-shell">
        <header className="profile-hero">
          <div className="profile-title-row">
            <h1 className="profile-heading">Profile</h1>
            <Link
              to="/profile/edit"
              className="profile-edit-button"
              aria-label="Edit profile"
            >
              <Edit2 size={22} />
            </Link>
          </div>

          <div className="profile-identity">
            <div className="profile-portrait">
              <img
                src={profileData.image}
                alt="Profile"
                className="profile-avatar"
              />
            </div>
            <h2 className="profile-name">{profileData.name}</h2>
          </div>
        </header>

        <section className="profile-info-section" aria-labelledby="profile-info-heading">
          <h3 id="profile-info-heading" className="profile-info-title">
            Info
          </h3>
          <div className="profile-info-grid">
            <article className="profile-info-card">
              <span className="profile-info-label">ROLE</span>
              <span className="profile-info-value">{profileData.role}</span>
            </article>

            <article className="profile-info-card">
              <span className="profile-info-label">EXPERIENCE</span>
              <span className="profile-info-value profile-experience-value">
                <span className="profile-experience-amount">
                  {profileData.experience}
                </span>
                <span className="profile-experience-unit">years</span>
              </span>
            </article>

            <article className="profile-info-card">
              <span className="profile-info-label">LOCATION</span>
              <span className="profile-info-value">{profileData.location}</span>
            </article>

            <article className="profile-info-card profile-info-card-accent">
              <span className="profile-info-label">SPECIALIZATION</span>
              <span className="profile-info-value">{profileData.specialization}</span>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Profile;
