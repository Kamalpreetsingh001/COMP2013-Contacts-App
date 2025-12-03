import {Link} from "react-router-dom";

export default function HomePage() { 
    return (
        <div>
            <h1>HomePage</h1>
            <a href="/register">go to register page with an ancher</a>
            <br />
           <Link to="/login">Login page</Link>
        </div>
    )
}