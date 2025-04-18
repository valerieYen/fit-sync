import { useState, useEffect } from 'react';

const NutritionPage = () => {
  const dailyGoals = { calories: 2500, protein: 150, fat: 70, carbs: 300 };
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
      setDayIndex(dayIndex - 1);
    }
  };

  const goToNextDay = () => {
    setDayIndex(dayIndex + 1);
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
    calories: dailyGoals.calories - totals.calories,
    protein: dailyGoals.protein - totals.protein,
    fat: dailyGoals.fat - totals.fat,
    carbs: dailyGoals.carbs - totals.carbs,
  };

  return (
    <div id="nutrition" className="page" style={{ display: 'block' }}>
      <h1>Nutrition</h1>

      <div className="workout-page-top-row">
        <h1>🔥 Streak: {streak} days</h1>
        <button className="finish-workout-button" onClick={finishDay}>Finish Day</button>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <button onClick={goToPreviousDay}>⬅ Prev</button>
        <strong style={{ margin: '0 16px' }}>Day: {dayIndex}</strong>
        <button onClick={goToNextDay}>Next ➡</button>
      </div>

      <div className="exercises-container">
        <div className="exercise-container">
          <div className="exercise-top-row">
            <div className="exercise-title-container">
              <h1>Food</h1>
            </div>
          </div>

          <div className="exercise-sets-container">
            <div className="set-row" style={{ flexWrap: 'wrap', gap: '8px' }}>
              <input style={{ width: '100px' }} type="text" placeholder="Name" value={newFood.name} onChange={e => setNewFood({ ...newFood, name: e.target.value })} />
              <input style={{ width: '80px' }} type="number" placeholder="Cals" value={newFood.calories} onChange={e => setNewFood({ ...newFood, calories: e.target.value })} />
              <input style={{ width: '80px' }} type="number" placeholder="P" value={newFood.protein} onChange={e => setNewFood({ ...newFood, protein: e.target.value })} />
              <input style={{ width: '80px' }} type="number" placeholder="F" value={newFood.fat} onChange={e => setNewFood({ ...newFood, fat: e.target.value })} />
              <input style={{ width: '80px' }} type="number" placeholder="C" value={newFood.carbs} onChange={e => setNewFood({ ...newFood, carbs: e.target.value })} />
              <button className="add-set-button" onClick={addFood}>+ Add</button>
            </div>

            {foodEntries.map((food, index) => (
              <div key={food.id} className="set-row" style={{ flexWrap: 'wrap', gap: '8px' }}>
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
