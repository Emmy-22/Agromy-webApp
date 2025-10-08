import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Edit3, Save, Camera, User } from "react-feather";
import "../styles/Profiles.css";

const Profile = () => {
  const { user } = useAuth(); 
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Name",
    role: "Farmer",
    experience: "8",
    location: "10 Olujoda Ekiti",
    specialization: "Crops",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/cf04e907fb592bf71b0b492977eac0e1d83d6492?width=620",
  });
  const [avatar, setAvatar] = useState('');

  
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '', 
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
        role: user.role || 'Farmer',
        location: user.location || '',
        specialization: user.specialization || '',
        image: user.image || '',
      });
      setAvatar(user.avatar || '');
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedUser = { ...user, ...formData, avatar };
    
    console.log('Profile updated:', updatedUser);
    alert('Profile updated successfully!');
    setIsEditing(false);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) setFormData({ ...formData });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setAvatar(ev.target.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) {
    return <div className="not-logged-in">
      <h1>Agromy</h1>
      Please log in to view your profile.</div>;
  }
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1><User size={32} /> My Profile</h1>
        <button onClick={toggleEdit} className="edit-btn">
          {isEditing ? <Save size={16} /> : <Edit3 size={16} />}
          {isEditing ? 'Save' : 'Edit Profile'}
        </button>
      </div>

      <div className="profile-card">
        <div className="avatar-section">
          <div className="avatar-wrapper">
            {avatar ? (
              <img 
                src={avatar} 
                alt="Avatar" 
                className="avatar" 
              />
            ) : (
              <div className="avatar-placeholder">
                <User size={48} color="#10B981" />
                <span>No Avatar</span>
              </div>
            )}
            <label className="avatar-upload">
              <Camera size={20} />
              <input type="file" accept="image/*" onChange={handleAvatarChange} />
            </label>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!isEditing}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!isEditing || true} 
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={!isEditing}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              disabled={!isEditing}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <input
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              rows={3}
              disabled={!isEditing}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              rows={3}
              disabled={!isEditing}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="specialization">Specialization</label>
            <input
              id="specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              rows={3}
              disabled={!isEditing}
              required
            />
          </div>

          {isEditing && (
            <button type="submit" className="save-btn">
              <Save size={16} /> Save Changes
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
