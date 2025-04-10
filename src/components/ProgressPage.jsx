import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const ProgressPage = () => {
  const { userData, setUserData } = useOutletContext();

  const [squatMax, setSquatMax] = useState(() => localStorage.getItem('squatMax') || '');
  const [benchMax, setBenchMax] = useState(() => localStorage.getItem('benchMax') || '');
  const [deadliftMax, setDeadliftMax] = useState(() => localStorage.getItem('deadliftMax') || '');

  const [showPRPopup, setShowPRPopup] = useState(false);
  const [prMessage, setPrMessage] = useState('');

  // Save goals to localStorage
  useEffect(() => localStorage.setItem('squatMax', squatMax), [squatMax]);
  useEffect(() => localStorage.setItem('benchMax', benchMax), [benchMax]);
  useEffect(() => localStorage.setItem('deadliftMax', deadliftMax), [deadliftMax]);

  // === Check for PRs on latest workout ===
  useEffect(() => {
    if (!userData?.workoutHistory?.length) return;

    const mostRecent = userData.workoutHistory[userData.workoutHistory.length - 1];
    const getMax = (sets) => Math.max(...sets.map(set => Number(set.lbs) || 0), 0);

    let updated = false;
    const newUserData = { ...userData };
    const newPRs = [];

    const checkAndUpdatePR = (liftName, maxInput, workoutSets, setGoalFn) => {
      const newMax = getMax(workoutSets);
      const currentPR = userData[`pr${liftName}`] ?? 0;
      const goal = Number(maxInput);

      const isNewPR = newMax > currentPR;
      const passedGoal = goal && newMax >= goal;

      if (isNewPR) {
        newUserData[`pr${liftName}`] = newMax;
        updated = true;
        newPRs.push(`${liftName}: ${newMax} lb`);

        if (passedGoal && setGoalFn) {
          setGoalFn('');
          localStorage.removeItem(`${liftName.toLowerCase()}Max`);
        }
      }
    };

    checkAndUpdatePR('Squat', squatMax, mostRecent.squat, setSquatMax);
    checkAndUpdatePR('Bench', benchMax, mostRecent.bench, setBenchMax);
    checkAndUpdatePR('Deadlift', deadliftMax, mostRecent.deadlift, setDeadliftMax);

    if (updated) {
      setUserData(newUserData);
      setPrMessage(`🎉 New PRs!\n\n${newPRs.join('\n')}`);
      setShowPRPopup(true);
    }
  }, [userData]);

  return (
    <div id="progress" className="page">
      <h1>Progress</h1>

      <h2>Goals</h2>
      <div>
        <div className="goal-row">
          <span></span>
          <h3>Current Record</h3>
          <h3>Next Goal</h3>
        </div>

        <div className="goal-row">
          <h3>Squat</h3>
          <p>{userData?.prSquat || 'N/A'} lb</p>
          <input
            className="goal-input"
            type="number"
            value={squatMax}
            onChange={e => setSquatMax(e.target.value)}
          />
        </div>

        <div className="goal-row">
          <h3>Bench</h3>
          <p>{userData?.prBench || 'N/A'} lb</p>
          <input
            className="goal-input"
            type="number"
            value={benchMax}
            onChange={e => setBenchMax(e.target.value)}
          />
        </div>

        <div className="goal-row">
          <h3>Deadlift</h3>
          <p>{userData?.prDeadlift || 'N/A'} lb</p>
          <input
            className="goal-input"
            type="number"
            value={deadliftMax}
            onChange={e => setDeadliftMax(e.target.value)}
          />
        </div>
      </div>

      <h2>History</h2>
      <div className="workout-history">
        {userData?.workoutHistory?.length > 0 ? (
          userData.workoutHistory.map((entry, index) => (
            <button key={index} className="workout-history-row">
              <p>{entry.date}</p>
              <p className="caret">›</p>
            </button>
          ))
        ) : (
          <p style={{ padding: '10px' }}>No workouts logged yet.</p>
        )}
      </div>

      {/*PR Popup */}
      {showPRPopup && (
        <div className="info-popup">
          <div className="popup-content">
            <span className="close-popup" onClick={() => setShowPRPopup(false)}>&times;</span>
            <p style={{ whiteSpace: 'pre-line' }}>{prMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressPage;
