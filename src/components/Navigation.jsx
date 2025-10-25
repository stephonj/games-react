import {Link} from "react-router-dom";
import "./../css/Navigation.css";

const Navigation = () => {
    return (
        <nav id="main-nav">
            <ul>
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