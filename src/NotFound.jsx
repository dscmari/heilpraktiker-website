import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <div>
            <Link to='/'>Home</Link>
            </div>
            <div>
            <Link to='/leistungen'>Leistungen</Link>
            </div>
           
         
        </div>
    )
}

export default NotFound;