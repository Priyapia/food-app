import { useEffect, useState } from "react";
const MealItem = (props) => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    setLoadedMeals(props.data);
  }, [props.data]);

  return (
    <>
      {loadedMeals.map((meal) => {
        return (
          <li className="meal-item" key={meal.id}>
          <img src={meal.image} alt={meal.name} />
          <div>
            <h3>{meal.name}</h3>
            <p className="meal-item-price">{meal.price}</p>
            <p className="meal-item-description">{meal.description}</p>
          </div>
          <p className="meal-item-action">
            <button> Add To Cart </button>
          </p>
        </li>
        )
      })}
    </>
  );
};

export default MealItem;
