import "./../css/Wishlist.css";
import WishlistItem from "../components/WishlistItem";
import {Link} from "react-router-dom";

const Wishlist = () => {
    return (
        <main id="wishlist" className="main-content">
            <h1>My Wishlist</h1>
            <table className="wishlist-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Game Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <WishlistItem 
                        title="College Football 26"
                        price="69.99"
                        image="/images/ncaa26.jpeg"
                    />
                    <WishlistItem 
                        title="NBA 2K26"
                        price="69.99"
                        image="/images/2k.jpeg"
                    />
                    <WishlistItem 
                        title="Marvel Ultimate Alliance 2"
                        price="39.99"
                        image="/images/marvel2.jpg"
                    />
                </tbody>
            </table>
            
            <div className="wishlist-actions">
                <Link to="/catalog" className="btn">Back To Catalog</Link>
                <button className="btn">Checkout</button>
            </div>
        </main>
    );
};

export default Wishlist;