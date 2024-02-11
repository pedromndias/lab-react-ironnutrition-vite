import { useState } from "react";
import FoodBox from "./FoodBox";
import foodsJson from "../foods.json";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

const FoodList = () => {
    // console.log(foodsJson);
  const [allFoods, setAllFoods] = useState(foodsJson)
  const [isFormShowing, setIsFormShowing] = useState(false)
  const [searchInput, setSearchInput] = useState("")

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

  let searchedContent = allFoods.filter(el => el.name.toLowerCase().includes(searchInput.toLowerCase()))

  return (
    <div>
        <h1>LAB | React IronNutrition</h1>
        <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
        <button onClick={() => {setIsFormShowing(!isFormShowing) }}>{isFormShowing ? "Hide Form" : "Show Form"}</button>
        {isFormShowing && <AddFoodForm addNewFood={addNewFood} />}
        {allFoods.length === 0 && <p>No Food Yet</p>}
        {searchedContent.map(el => {
            return <FoodBox key={el.id} food={el} deleteFood={deleteFood}/>
        })}
        {searchedContent.length === 0 && <div>
            <p>Nothing to see here</p>
            <img src="https://cdn-icons-png.flaticon.com/512/32/32211.png" alt="empty"/>      
        </div>}
    </div>
  )
}

export default FoodList