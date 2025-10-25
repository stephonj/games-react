import "./../css/GameCard.css";

const GameCard = (props) => {
    return (
        <div className="game-card">
            <div className="game-card-image">
                <img src={props.image} alt={props.title} />
            </div>
            <h4>{props.title}</h4>
            <p>${props.price}</p>
            <button className="btn">Quick View</button>
        </div>
    );
};

export default GameCard;