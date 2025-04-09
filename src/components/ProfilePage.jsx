import React from 'react';
import { useOutletContext } from 'react-router-dom';

const ProfilePage = () => {
  const [userData, setUserData] = useOutletContext();

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
        <h2 id="user-name">Hello, <em><span id="data-name">{userData.name || 'User'}!</span></em></h2>
        <p id="explanation-blurb">Curious about why we ask for certain information? Click the <em>ⓘ</em> to find out.</p>
      </div>

      <div id="detailed-info">
        <div className="info-row">
          <h2 className="info-label">Name:</h2>
          <input value={userData.name} onChange={e => updateProfile('name', e.target.value)} />
          <p>ⓘ</p>
        </div>
        <div className="info-row">
          <h2 className="info-label">Sex:</h2>
          <select value={userData.sex} onChange={e => updateProfile('sex', e.target.value)}>
            <option value="">Select</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          <p>ⓘ</p>
        </div>
        <div className="info-row">
          <h2 className="info-label">Age:</h2>
          <input type="number" value={userData.age} onChange={e => updateProfile('age', Number(e.target.value))} />
          <p>ⓘ</p>
        </div>
        <div className="info-row">
          <h2 className="info-label">Height:</h2>
          <input value={userData.height} onChange={e => updateProfile('height', e.target.value)} />
          <p>ⓘ</p>
        </div>
        <div className="info-row">
          <h2 className="info-label">Weight:</h2>
          <input type="number" value={userData.weight} onChange={e => updateProfile('weight', Number(e.target.value))} />
          <p>ⓘ</p>
        </div>
        <div className="info-row">
          <h2 className="info-label">Goal Weight:</h2>
          <input type="number" value={userData.goal_weight} onChange={e => updateProfile('goal_weight', Number(e.target.value))} />
          <p>ⓘ</p>
        </div>
        <div className="info-row">
          <h2 className="info-label">Email:</h2>
          <input value={userData.email} onChange={e => updateProfile('email', e.target.value)} />
          <p>ⓘ</p>
        </div>
        <div className="info-row">
          <h2 className="info-label">Phone:</h2>
          <input value={userData.phone} onChange={e => updateProfile('phone', e.target.value)} />
          <p>ⓘ</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
