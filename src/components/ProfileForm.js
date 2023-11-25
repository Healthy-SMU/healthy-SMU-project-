
// ProfileForm.js
import React, { useState, useEffect } from 'react';
import './ProfileForm.css'


const ProfileForm = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: '',
    }));
  };

  return (
    <div className="profile-form">
      <h1>Edit Profile</h1>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <label>
        ID:
        <input type="text" name="id" value={formData.id} onChange={handleInputChange} disabled />
      </label>
      <label>
        Phone Number:
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
      </label>
      <label>
        Profile Picture:
        {formData.profilePicture && (
          <img
            src={formData.profilePicture}
            alt="profile"
            style={{ width: '50px', height: '50px', borderRadius: '50%', marginTop: '10px' }}
          />
        )}
        <div className="file-input-wrapper">
          <input type="file" accept="image/*" onChange={handleImageUpload} className="file-input" />
          <div className="file-input-button">Choose Picture</div>
        </div>
        {formData.profilePicture && (
          <button className="delete-image-button" onClick={handleDeleteImage}>
            Delete Picture
          </button>
        )}
      </label>
      <div className="buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default ProfileForm;
