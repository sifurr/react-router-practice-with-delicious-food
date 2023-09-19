import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
             <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
            {
                error.statusText || error.message                
            }           
        </div>
    );
};

export default ErrorPage;