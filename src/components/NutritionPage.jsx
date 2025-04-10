import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const NutritionPage = () => {
  const { userData } = useOutletContext(); 


  const calculateCalorieGoal = () => {
    const { weight, goal_weight, age, sex } = userData;
    if (!weight || !goal_weight || !age || !sex) return 2500; // fallback default

    const bmr =
      sex === 'Male'
        ? 10 * weight + 6.25 * 165 + 5 * age + 5
        : 10 * weight + 6.25 * 165 + 5 * age - 161;

    const multiplier = goal_weight < weight ? 0.85 : goal_weight > weight ? 1.15 : 1.0;
    return Math.round(bmr * multiplier);
  };

  const calorieGoal = calculateCalorieGoal();
  const [dayIndex, setDayIndex] = useState(() => Number(localStorage.getItem('dayIndex')) || 1);
  const [streak, setStreak] = useState(() => Number(localStorage.getItem('streak')) || 3);
  const [foodEntries, setFoodEntries] = useState(() => {
    const saved = localStorage.getItem(`day-${dayIndex}`);
    return saved ? JSON.parse(saved) : [];
  });
  const [newFood, setNewFood] = useState({ name: '', calories: '', protein: '', fat: '', carbs: '' });

  useEffect(() => {
    const saved = localStorage.getItem(`day-${dayIndex}`);
    setFoodEntries(saved ? JSON.parse(saved) : []);
  }, [dayIndex]);

  useEffect(() => {
    localStorage.setItem(`day-${dayIndex}`, JSON.stringify(foodEntries));
  }, [foodEntries, dayIndex]);

  const addFood = () => {
    if (!newFood.name || isNaN(newFood.calories)) return;
    setFoodEntries([...foodEntries, { ...newFood, id: Date.now() }]);
    setNewFood({ name: '', calories: '', protein: '', fat: '', carbs: '' });
  };

  const removeFood = (id) => {
    setFoodEntries(foodEntries.filter(food => food.id !== id));
  };

  const finishDay = () => {
    localStorage.setItem(`day-${dayIndex}`, JSON.stringify(foodEntries));
    const newStreak = streak + 1;
    const newDayIndex = dayIndex + 1;
    localStorage.setItem('streak', newStreak);
    localStorage.setItem('dayIndex', newDayIndex);
    setStreak(newStreak);
    setDayIndex(newDayIndex);
    setFoodEntries([]);
  };

  const goToPreviousDay = () => {
    if (dayIndex > 1) {
      const newDay = dayIndex - 1;
      setDayIndex(newDay);
      localStorage.setItem('dayIndex', newDay);
    }
  };

  const goToNextDay = () => {
    const newDay = dayIndex + 1;
    setDayIndex(newDay);
    localStorage.setItem('dayIndex', newDay);
  };

  const calculateTotals = () => {
    return foodEntries.reduce((totals, item) => {
      totals.calories += Number(item.calories) || 0;
      totals.protein += Number(item.protein) || 0;
      totals.fat += Number(item.fat) || 0;
      totals.carbs += Number(item.carbs) || 0;
      return totals;
    }, { calories: 0, protein: 0, fat: 0, carbs: 0 });
  };

  const totals = calculateTotals();
  const remaining = {
    calories: calorieGoal - totals.calories,
    protein: 150 - totals.protein,
    fat: 70 - totals.fat,
    carbs: 300 - totals.carbs,
  };

  return (
    <div id="nutrition" className="page" style={{ display: 'block' }}>
      <h1>Nutrition</h1>

      <div className="workout-page-top-row">
        <h1>🔥 Streak: {streak} days</h1>
        <button className="finish-day-button" onClick={finishDay}>Finish Day</button>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <button className="day-button" onClick={goToPreviousDay}>⬅ Prev</button>
        <strong className="day-label"style={{ margin: '0 16px' }}>Day: {dayIndex}</strong>
        <button className="day-button" onClick={goToNextDay}>Next ➡</button>
      </div>

      <div className="nutrition-container">
        <div className="exercise-container">
          <div className="exercise-top-row">
            <div className="exercise-title-container">
              <h1>Food (Calorie Goal: {calorieGoal})</h1>
            </div>
          </div>

          <div className="exercise-sets-container">
            <div className="set-row" style={{ flexWrap: 'wrap', gap: '8px' }}>
              <input className="nutrition-input ni1" type="text" placeholder="Name" value={newFood.name} onChange={e => setNewFood({ ...newFood, name: e.target.value })} />
              <input className="nutrition-input ni1" type="number" placeholder="Cals" value={newFood.calories} onChange={e => setNewFood({ ...newFood, calories: e.target.value })} />
              <input className="nutrition-input ni2" type="number" placeholder="Protein" value={newFood.protein} onChange={e => setNewFood({ ...newFood, protein: e.target.value })} />
              <input className="nutrition-input ni2" type="number" placeholder="Fat" value={newFood.fat} onChange={e => setNewFood({ ...newFood, fat: e.target.value })} />
              <input className="nutrition-input ni2" type="number" placeholder="Carbs" value={newFood.carbs} onChange={e => setNewFood({ ...newFood, carbs: e.target.value })} />
              <button className="add-food-button" onClick={addFood}>+ Add</button>
            </div>

            {foodEntries.map((food, index) => (
              <div key={food.id} className="food-row" style={{ flexWrap: 'wrap', gap: '8px' }}>
                <div>{index + 1}. {food.name} - {food.calories} cal, {food.protein}p / {food.fat}f / {food.carbs}c</div>
                <button className="remove-set-button" onClick={() => removeFood(food.id)}>Remove</button>
              </div>
            ))}

            <div className="set-row">
              <p><strong>Consumed:</strong> Cals: {totals.calories}, P: {totals.protein}, F: {totals.fat}, C: {totals.carbs}</p>
            </div>
            <div className="set-row">
              <p><strong>Remaining:</strong> Cals: {remaining.calories}, P: {remaining.protein}, F: {remaining.fat}, C: {remaining.carbs}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionPage;
