import React, { useState } from 'react';
import './ProfileDetails.css';
import avatar from './Assets/avatar.jpg';
import ProfileForm from './ProfileForm';
import { Link } from 'react-router-dom';

export default function ProfileDetails() {
  const mockData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    id: '12345',
    phoneNumber: '123-456-7890',
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
    <div className="profile-details">
      <div className="flip-card">
        <div className={`flip-card-inner${isEditing ? ' is-editing' : ''}`}>
          <div className="flip-card-front">
            {/* Conditionally render the chosen profile picture or use the default avatar */}
            {isEditing ? (
              <ProfileForm
                initialData={profileData}
                onSave={handleSaveDetails}
                onCancel={handleCancelEdit}
              />
            ) : (
              <img src={profileData.profilePicture || avatar} alt="avatar" style={{ width: '300px', height: '300px' }} />
            )}
          </div>
          <div className="flip-card-back">
            {isEditing ? (
              <ProfileForm
                initialData={profileData}
                onSave={handleSaveDetails}
                onCancel={handleCancelEdit}
              />
            ) : (
              <>
                <h1>{profileData.name}</h1>
                <br></br>
                <br></br>
                <p>Email: {profileData.email}</p>
                <br></br>
                <p>ID: {profileData.id}</p>
                <br></br>
                <p>Phone Number: {profileData.phoneNumber}</p>
                <br></br>
                <button onClick={handleModifyDetails}>Modify Details</button>
                <br></br>
                <div>
               
                <Link to="/"><button>logout</button></Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
