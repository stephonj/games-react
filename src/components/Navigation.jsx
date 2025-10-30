import {Link} from "react-router-dom";
import {useState} from "react";
import "./../css/Navigation.css";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav id="main-nav">
            <button onClick={toggleMenu} id="toggle-nav">
                {menuOpen ? "✕" : "☰"}
            </button>
            
            <ul className={menuOpen ? "" : "hide-small"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catalog">Catalog</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
