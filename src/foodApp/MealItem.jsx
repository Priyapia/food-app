import React from "react";
import meal from "./available-meals.json";
// import image from "../images/mac-and-cheese.jpg";
const MealItem = () => {
  return (
    <>
      <li className="meal-item">
        <article>
          {/* <img src={image} alt="imggg" /> */}
          {meal.map((meal) => (
            <>
              <img src={meal.image} alt={meal.name} />
              <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{meal.price}</p>
                <p className="meal-item-description">{meal.description}</p>
              </div>
              <p className="meal-item-action">
                <button> Add To Cart </button>
              </p>
            </>
          ))}
        </article>
      </li>
    </>
  );
};

export default MealItem;
