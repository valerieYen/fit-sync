import React, { useState } from "react";

function Choices() {

    const [exerciseChoice, setExerciseChoice] = useState("");
    const [unitChoice, setUnitChoice] = useState("");
    const [showInfo, setShowInfo] = useState(false);

    function handleChange(e) {
        setExerciseChoice(e.target.value);
    }

    function handleUnitChange(e) {
        setUnitChoice(e.target.value);
    }

    function printInfo() {
        setShowInfo(true);
    }

    return(
        <div className="Choices SubPage">
            <div className="Spacer"></div>
            
            <h1>-Choices Example-</h1>

            <h3>Exercise Choice:</h3>
            <label>
                <input
                    type="radio"
                    value="Squat"
                    checked={exerciseChoice === "Squat"}
                    onChange={handleChange}
                />
                Squat
            </label>
            <label>
                <input
                    type="radio"
                    value="Bench"
                    checked={exerciseChoice === "Bench"}
                    onChange={handleChange}
                />
                Bench
            </label>
            <label>
                <input
                    type="radio"
                    value="Deadlift"
                    checked={exerciseChoice === "Deadlift"}
                    onChange={handleChange}
                />
                Deadlift
            </label>

            <h3>Drop down</h3>
            <select value={unitChoice} onChange={handleUnitChange}>
                <option value="">Select unit of measurement:</option>
                <option value="lb">lb</option>
                <option value="kg">kg</option>
                
            </select>
            <div>
                <button onClick={() => {printInfo()}}>Print something based on your choices:</button>
            </div>
            
            
            {
                showInfo &&
                <div>
                    <p>Your exercise choice is: {exerciseChoice}</p>
                    <p>Your unit of measurement: {unitChoice}</p>
                </div>
            }
            
        </div>
    );
}

export default Choices;