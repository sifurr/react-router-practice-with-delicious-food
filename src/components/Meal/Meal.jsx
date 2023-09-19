import { NavLink } from 'react-router-dom';
import './Meal.css'
const Meal = ({meal}) => {
   
    const {strMeal, strMealThumb, idMeal} = meal;
    return (
        <div className="meal-card">
            <NavLink to={`/meal/${idMeal}`}><h3>{strMeal}</h3></NavLink>
            <p>Id: {idMeal}</p>
            <img src={strMealThumb} alt="" />
        </div>
    );
};

export default Meal;