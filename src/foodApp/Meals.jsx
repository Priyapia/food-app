import meal from "./available-meals.json";
import MealItem from "./MealItem";

function Meals() {
  return (
    <>
      <div>
        <ul>
          <MealItem data={meal} />
        </ul>
      </div>
    </>
  );
}

export default Meals;
