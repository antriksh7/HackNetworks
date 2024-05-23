import React from 'react';
import './ProfilePage.css'; // Import CSS file for styling
import profileImage from './profile-pic.jpg'; // Import your profile picture

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <img src={profileImage} alt="Profile" className="profile-picture" />
        <h1 className="profile-name">John Doe</h1>
        <p className="profile-bio">Frontend Developer | UX Enthusiast</p>
        <div className="profile-details">
          <p><strong>Email:</strong> john@example.com</p>
          <p><strong>Location:</strong> New York City, USA</p>
          {/* Add more profile details here */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
