import React, { useState } from 'react';
import './ProfileDetails.css';
import avatar from './Assets/avatar.jpg';
import ProfileForm from './ProfileForm';



export default function ProfileDetails() {

  const mockData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    id: '12345',
  };

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(mockData);

  const handleModifyDetails = () => {
    setIsEditing(true);
  };

  const handleSaveDetails = (newData) => {
    setProfileData(newData);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="flip-card">
      
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={avatar} alt="avatar" style={{ width: '300px', height: '300px' }} />
        </div>
        <div className="flip-card-back">
       
          {isEditing ? (
            <ProfileForm
              initialData={profileData}
              onSave={handleSaveDetails}
              onCancel={handleCancelEdit}
            />
          ) : (
            <div className='font'>
              <h1>{profileData.name}</h1>
              <p>Email: {profileData.email}</p>
              <p>ID: {profileData.id}</p>
              <button onClick={handleModifyDetails}>Modify Details</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}