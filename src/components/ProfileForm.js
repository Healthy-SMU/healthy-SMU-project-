
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
        <input type="text" name="id" value={formData.id} onChange={handleInputChange} />
      </label>
      <div className="buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default ProfileForm;
