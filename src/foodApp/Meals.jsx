import React, { useEffect, useState } from "react";
import meal from "./available-meals.json";
import MealItem from "./MealItem";
function Meals() {
  const [loadedMeals, setLoadedMeals] = useState();
  let array = [];
  useEffect(() => {
    for (let i = 0; i < meal.length; i++) {
      // console.log(meal[i].name);
      array.push(meal[i].name);

      const aa = array.map((meal, i) => (
        <p
          key={i}
          style={{
            margin: "10px",
          }}
        >
          {meal}
          <MealItem />
        </p>
      ));
      setLoadedMeals(aa);
    }
  }, []);

  return (
    <>
      <ul id="meals">{loadedMeals}</ul>
    </>
  );
}

export default Meals;
