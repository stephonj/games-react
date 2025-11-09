import "./../css/GameCard.css";
import { useState } from "react";

const GameCard = (props) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="game-card" onClick={openModal}>
                <div className="game-card-image">
                    <img src={props.image} alt={props.title} />
                </div>
                <h4>{props.title}</h4>
                <p>${props.price}</p>
                <button className="btn">Quick View</button>
            </div>

            {showModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        <div className="modal-body">
                            <div className="modal-image">
                                <img src={props.image} alt={props.title} />
                            </div>
                            <div className="modal-info">
                                <h2>{props.title}</h2>
                                <p><strong>Genre:</strong> {props.genre}</p>
                                <p><strong>Platform:</strong> {props.platform}</p>
                                <p><strong>Release Date:</strong> {props.releaseDate}</p>
                                <p><strong>Price:</strong> ${props.price}</p>
                                <p className="modal-description">{props.description}</p>
                                <div className="modal-buttons">
                                    <button className="btn">Add to Cart</button>
                                    <button className="btn" onClick={closeModal}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GameCard;