import { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  // console.log(foodsJson);
  const [allFoods, setAllFoods] = useState(foodsJson)

  const deleteFood = (id) => {
    // Filter the id out of the array:
    const filteredArray = allFoods.filter (el => el.id !== id)
    // console.log(filteredArray);
    setAllFoods(filteredArray);
  }

  const addNewFood = (newFood) => {
    // console.log("Testing adding new food", newFood);
    setAllFoods([newFood, ...allFoods])
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addNewFood={addNewFood} />
      {allFoods.map(el => {
        return <FoodBox key={el.id} food={el} deleteFood={deleteFood}/>
      })}

    </div>
  );
}

export default App;
