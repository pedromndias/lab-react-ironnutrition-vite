
const FoodBox = (props) => {
    const {food: {name, calories, image, servings, id}, deleteFood} = props
  return (
    <div className="card">
        <p>{name}</p>

        <img src={image} height={60} alt="food"/>

        <p>Calories: {calories}</p>
        <p>Servings {servings}</p>

        <p>
            <b>Total Calories: {servings*calories} </b> kcal
        </p>

        <button onClick={() => deleteFood(id)}>Delete</button>
    </div>
  )
}

export default FoodBox