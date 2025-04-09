import React, { useState, useEffect, useRef } from 'react';

const WorkoutPage = () => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [exercises, setExercises] = useState([
    { id: 1, title: 'Squat', isOpen: false, sets: [{ id: 1, lbs: '', reps: '' }], notes: '' },
    { id: 2, title: 'Bench', isOpen: false, sets: [{ id: 1, lbs: '', reps: '' }], notes: '' },
    { id: 3, title: 'Deadlift', isOpen: false, sets: [{ id: 1, lbs: '', reps: '' }], notes: '' },
    { id: 4, title: 'Notes', isOpen: false, notes: '' }
  ]);

  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        setSecondsElapsed(prev => prev + 1);
      }
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  const resetWorkout = () => {
    setSecondsElapsed(0);
    setIsPaused(true);
    setExercises([
      { id: 1, title: 'Squat', isOpen: false, sets: [{ id: 1, lbs: '', reps: '' }], notes: '' },
      { id: 2, title: 'Bench', isOpen: false, sets: [{ id: 1, lbs: '', reps: '' }], notes: '' },
      { id: 3, title: 'Deadlift', isOpen: false, sets: [{ id: 1, lbs: '', reps: '' }], notes: '' },
      { id: 4, title: 'Notes', isOpen: false, notes: '' }
    ]);
  };

  const formatTime = (secs) => {
    const hours = String(Math.floor(secs / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
    const seconds = String(secs % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const togglePause = () => {
    setIsPaused(prev => !prev);
  };

  const toggleExercise = (id) => {
    setExercises(exercises.map(ex =>
      ex.id === id ? { ...ex, isOpen: !ex.isOpen } : ex
    ));
  };

  const addSet = (exerciseId) => {
    setExercises(exercises.map(ex => {
      if (ex.id === exerciseId) {
        const newSetId = ex.sets.length > 0 ? Math.max(...ex.sets.map(s => s.id)) + 1 : 1;
        return {
          ...ex,
          sets: [...ex.sets, { id: newSetId, lbs: '', reps: '' }]
        };
      }
      return ex;
    }));
  };

  const removeSet = (exerciseId, setId) => {
    setExercises(exercises.map(ex => {
      if (ex.id === exerciseId) {
        return {
          ...ex,
          sets: ex.sets.filter(set => set.id !== setId)
        };
      }
      return ex;
    }));
  };

  const updateSet = (exerciseId, setId, field, value) => {
    setExercises(exercises.map(ex => {
      if (ex.id === exerciseId) {
        return {
          ...ex,
          sets: ex.sets.map(set =>
            set.id === setId ? { ...set, [field]: value } : set
          )
        };
      }
      return ex;
    }));
  };

  const updateNotes = (value) => {
    setExercises(exercises.map(ex =>
      ex.id === 4 ? { ...ex, notes: value } : ex
    ));
  };

  const handleFinishWorkout = () => {
    resetWorkout();
  };

  return (
    <div id="workout" className="page" style={{ display: 'block' }}>
      <h1>Workout</h1>
      <div className="workout-page-top-row">
        <h1>
          <span id="workout-timer" style={{ display: 'inline-block', width: '150px', textAlign: 'left' }}>
            {formatTime(secondsElapsed)}
          </span>
          <button id="pause-timer-button" onClick={togglePause}>
            {isPaused ? 'Start' : 'Pause'}
          </button>
        </h1>
        <button className="finish-workout-button" onClick={handleFinishWorkout}>
          Finish
        </button>
      </div>

      <div className="exercises-container">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="exercise-container">
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <h1 style={{ marginRight: 'auto' }}>{exercise.title}</h1>
              <button
                className="dropdown-toggle"
                onClick={() => toggleExercise(exercise.id)}
              >
                {exercise.isOpen ? '▲' : '▼'}
              </button>
            </div>

            <div className={`exercise-selection-container dropdown-panel ${exercise.isOpen ? 'open' : ''}`}
                 style={{ height: exercise.isOpen ? 'auto' : '0' }}>

              {exercise.title === 'Notes' ? (
                <textarea
                  id="notes-textarea"
                  rows="5"
                  cols="50"
                  placeholder="Type your notes here..."
                  value={exercise.notes}
                  onChange={(e) => updateNotes(e.target.value)}
                ></textarea>
              ) : (
                <>
                  <div className="exercise-top-row">
                    <div className="exercise-title-container">
                      <h1>Set</h1>
                    </div>
                    <div className="lbs-reps-remove-container">
                      <div className="lbs-reps-container">
                        <h1>lbs</h1>
                        <h1>Reps</h1>
                      </div>
                    </div>
                  </div>

                  <div className="exercise-sets-container">
                    {exercise.sets.map((set, index) => (
                      <div key={set.id} className="set-row">
                        <div className="set-row-half-one">
                          <h1>{index + 1}</h1>
                        </div>
                        <div className="set-row-half-two">
                          <div className="lbs-reps-input-container">
                            <input
                              className="lbs-input"
                              type="number"
                              min="0"
                              value={set.lbs}
                              onChange={(e) => updateSet(exercise.id, set.id, 'lbs', e.target.value)}
                            />
                            <input
                              className="reps-input"
                              type="number"
                              min="0"
                              value={set.reps}
                              onChange={(e) => updateSet(exercise.id, set.id, 'reps', e.target.value)}
                            />
                          </div>
                          <button
                            className="remove-set-button"
                            onClick={() => removeSet(exercise.id, set.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className="add-set-button"
                    onClick={() => addSet(exercise.id)}
                  >
                    + Add Set
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPage;
