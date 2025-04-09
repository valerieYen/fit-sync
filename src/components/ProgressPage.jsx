import React from 'react';

const ProgressPage = () => {
  return (
    <div id="progress" className="page">
      <h1>Progress</h1>
      <h2>Goals</h2>
      <div>
        <div class="goal-row">
          <span></span>
          <h3>Current Record</h3>
          <h3>Next Goal</h3>
        </div>
        <div className="goal-row">
          <h3>Squat</h3>
          <p>225lb</p>
          <input></input>
        </div>
        <div className="goal-row">
          <h3>Bench</h3>
          <p>135lb</p>
          <input></input>
        </div>
        <div className="goal-row">
          <h3>Deadlift</h3>
          <p>315lb</p>
          <input></input>
        </div>
      </div>
      <div></div>
      <h2>History</h2>
      <div className="workout-history">
        <button className="workout-history-row">

          <p>Tuesday, April 8, 2025</p>
          <p className='caret'>›</p>
          
        </button>
        <button className="workout-history-row">

          <p>Monday, April 7, 2025</p>
          <p className='caret'>›</p>
          
        </button>
      </div>
    </div>
  );
};

export default ProgressPage;