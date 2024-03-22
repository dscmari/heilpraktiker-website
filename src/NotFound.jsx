import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <p>Oops! Dieser Navigationspunkt wurde noch nicht erstellt.</p>
            <p>Erstellte Navigationspunkte:</p>
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