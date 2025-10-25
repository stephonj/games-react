import "./../css/WishlistItem.css";

const WishlistItem = (props) => {
    return (
        <tr>
            <td>
                <div className="wishlist-image">
                    <img src={props.image} alt={props.title} />
                </div>
            </td>
            <td>{props.title}</td>
            <td>${props.price}</td>
            <td><button className="btn">Remove Game</button></td>
        </tr>
    );
};

export default WishlistItem;