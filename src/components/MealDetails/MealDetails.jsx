import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import "./MealDetails.css";
import { RotatingLines } from "react-loader-spinner";

const MealDetails = () => {
  const mealDetails = useLoaderData();
  const {
    idMeal,
    strMeal,
    strCategory,
    strInstructions,
    strMealThumb,
    strYoutube,
  } = mealDetails.meals[0];
  console.log(mealDetails);

  const navigation = useNavigation();
  const navigate = useNavigate();

  const handleGoBack = () =>{
    navigate(-1);
  }

  return (
    <div>
      {navigation.state === "loading" ? (
        <div className="spinner">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <div className="meal-details">
          <div>
            <img src={strMealThumb} alt="" />
            <p>Meal Id: {idMeal} </p>
            <p>{strMeal}</p>
            <p>{strCategory}</p>
            <p>{strInstructions}</p>
            <p>
              <a href={strYoutube} target="_blank">
                Video
              </a>
            </p>
            <button onClick={handleGoBack} className="btn-go-back">Go Back</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealDetails;
