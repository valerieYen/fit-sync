import React from 'react';

const ProfilePage = ({ userData, setUserData }) => {
  const updateProfile = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  return (
    <div id="profile" className="page">
      <h1>Profile</h1>
      <div id="basic-info">
        <img src="./user-icon.png" id="profile-picture" alt="User profile" />
        <h2 id="user-name">Hello, <em><span id="data-name">Jane Doe!</span></em></h2>
        <p id="explanation-blurb">Curious about why we ask for certain information? Click the <em>ⓘ</em> to find out.</p>
      </div>

      <div id="detailed-info">
        <div className="info-row">
            <h2 className="info-label">Sex: </h2>
            <select>
                <option>Female</option>
                <option>Male</option>
            </select>
            <p>ⓘ</p>
        </div>
        <div className="info-row">
            <h2 className="info-label">Age: </h2>
            <input></input>
            <p>ⓘ</p>
        </div>
        <div className="info-row">
            <h2 className="info-label">Height: </h2>
            <input></input>
            <p>ⓘ</p>
        </div>
        <div className="info-row">
            <h2 className="info-label">Weight: </h2>
            <input></input>
            <p>ⓘ</p>
        </div>
        <div className="info-row">
            <h2 className="info-label">Email: </h2>
            <input></input>
            <p>ⓘ</p>
        </div>
        <div className="info-row">
            <h2 className="info-label">Phone: </h2>
            <input></input>
            <p>ⓘ</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;