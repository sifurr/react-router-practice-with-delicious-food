import { useLoaderData } from "react-router-dom";
import Meal from "../components/Meal/Meal";
import './Seafood.css'

const SeaFood = () => {
    const seaFoods = useLoaderData();
    const meals = seaFoods.meals;
    console.log(meals);
    return (
        <main className="sea-food">
            <h2>Available Sea Food: {seaFoods.meals.length}</h2>
            <div className="sea-food-grid">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </main>
    );
};

export default SeaFood;