import { useState } from "react"
import {v4 as uuidv4} from "uuid"

const AddFoodForm = ({addNewFood}) => {

    const [formGlobal, setFormGlobal ] = useState({
        name: "",
        image: "",
        calories: 0,
        servings: 0
    })

    const handleFormChange = (e) => {
        // console.log(e.target);
        setFormGlobal( {
            ...formGlobal,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const newFood = JSON.parse(JSON.stringify(formGlobal))
        newFood.id = uuidv4()
        addNewFood(newFood)

        setFormGlobal({
            name: "",
            image: "",
            calories: 0,
            servings: 0
        })

    }


  return (
    <div className="card">
        <div>AddFoodForm</div>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" value={formGlobal.name} onChange={handleFormChange}/>
            <br />
            
            <label htmlFor="image">Image: </label>
            <input type="text" name="image" id="image" value={formGlobal.image} onChange={handleFormChange}/>
            <br />

            <label htmlFor="calories">Calories: </label>
            <input type="number" name="calories" id="calories" value={formGlobal.calories} onChange={handleFormChange}/>
            <br />

            <label htmlFor="servings">Servings: </label>
            <input type="number" name="servings" id="servings" value={formGlobal.servings} onChange={handleFormChange}/>
            <br />

            <button type="submit">Create</button>
        </form>
    </div>
  )
}

export default AddFoodForm