import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header>
            <h1><Link to="/">Math Magicians</Link></h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/calculator">Calculator</Link></li>
                    <li><Link to="/quotes">Quotes</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;