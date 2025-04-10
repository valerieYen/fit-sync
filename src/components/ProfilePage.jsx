import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const ProfilePage = () => {
  const {userData, setUserData} = useOutletContext();
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpText, setPopUpText] = useState("");

  const updateProfile = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleInfoClick = (field) => {
    let infoText = "";
    
    switch(field) {
      case 'name':
        infoText = "We use your name to personalize your experience throughout the app.";
        break;
      case 'sex':
        infoText = "Your biological sex helps us calculate more accurate calorie and nutrition recommendations.";
        break;
      case 'age':
        infoText = "Age is an important factor in determining your metabolic rate and nutritional needs.";
        break;
      case 'height':
        infoText = "Your height is used along with weight to calculate your BMI and other health metrics.";
        break;
      case 'weight':
        infoText = "Current weight helps track your progress and calculate appropriate nutritional plans.";
        break;
      case 'goal_weight':
        infoText = "Your goal weight helps us tailor recommendations to achieve your desired results.";
        break;
      case 'email':
        infoText = "Your email is used for account recovery and important notifications.";
        break;
      case 'phone':
        infoText = "Your phone number is optional and can be used for SMS notifications if you enable them.";
        break;
      default:
        infoText = "This information helps us personalize your experience.";
    }
    setPopUpText(infoText);
    setShowPopUp(true);
  };

  const closePopUp = () => {
    setShowPopUp(false);
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
          <p onClick={() => handleInfoClick('name')} style={{ cursor: 'pointer' }}>ⓘ</p>
        </div>
        <div className="info-row">
          <h2 className="info-label">Sex:</h2>
          <select value={userData.sex} onChange={e => updateProfile('sex', e.target.value)}>
            <option value="">Select</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          <p onClick={() => handleInfoClick('sex')} style={{ cursor: 'pointer' }}>ⓘ</p>
        </div>
        <div className="info-row">
          <h2 className="info-label">Age:</h2>
          <input type="number" value={userData.age} onChange={e => updateProfile('age', Number(e.target.value))} />
          <p onClick={() => handleInfoClick('age')} style={{ cursor: 'pointer' }}>ⓘ</p>
        </div>
        <div className="info-row">
          <h2 className="info-label">Height:</h2>
          <input value={userData.height} onChange={e => updateProfile('height', e.target.value)} />
          <p onClick={() => handleInfoClick('height')} style={{ cursor: 'pointer' }}>ⓘ</p>
        </div>
        <div className="info-row">
          <h2 className="info-label">Weight:</h2>
          <input type="number" value={userData.weight} onChange={e => updateProfile('weight', Number(e.target.value))} />
          <p onClick={() => handleInfoClick('weight')} style={{ cursor: 'pointer' }}>ⓘ</p>
        </div>
        <div className="info-row">
          <h2 className="info-label">Goal Weight:</h2>
          <input type="number" value={userData.goal_weight} onChange={e => updateProfile('goal_weight', Number(e.target.value))} />
          <p onClick={() => handleInfoClick('goal_weight')} style={{ cursor: 'pointer' }}>ⓘ</p>
        </div>
        <div className="info-row">
          <h2 className="info-label">Email:</h2>
          <input value={userData.email} onChange={e => updateProfile('email', e.target.value)} />
          <p onClick={() => handleInfoClick('email')} style={{ cursor: 'pointer' }}>ⓘ</p>
        </div>
      </div>

      {showPopUp && (
        <div className="info-popup">
          <div className="popup-content">
            <span className="close-popup" onClick={closePopUp}>&times;</span>
            <p>{popUpText}</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProfilePage;
