import React from 'react';

const ProfilePage = () => {
  return (
    <div id="profile" className="page" style={{ display: 'block' }}>
      <h1>Profile</h1>
      <div id="basic-info">
        <img src="./profile-icon.png" id="profile-picture" alt="User profile" />
        <h2 id="user-name">Hello, <em><span id="data-name">Jane Doe!</span></em></h2>
      </div>
    </div>
  );
};

export default ProfilePage;