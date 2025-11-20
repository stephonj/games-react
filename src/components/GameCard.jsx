import "./../css/GameCard.css";
import { useState } from "react";
import GameDialog from "./GameDialog";

const GameCard = (props) => {
    const [showDialog, setShowDialog] = useState(false);
    const [game, setGame] = useState(props);
    const [showGame, setShowGame] = useState(true);

    const openDialog = () => {
        setShowDialog(true);
    };

    const closeDialog = () => {
        setShowDialog(false);
    };

    const updateGame = (updatedGame) => {
        setGame(updatedGame);
    };

    const hideGame = () => {
        setShowGame(false);
    };

    if (!showGame) {
        return null;
    }

    return (
        <>
            {showDialog && (
                <GameDialog
                    closeDialog={closeDialog}
                    game={game}
                    updateGame={updateGame}
                    hideGame={hideGame}
                />
            )}

            <div className="game-card" onClick={openDialog}>
                <div className="game-card-image">
                    <img src={game.image} alt={game.title} />
                </div>
                <h4>{game.title}</h4>
                <p>${game.price}</p>
                <button className="btn">View Details</button>
            </div>
        </>
    );
};

export default GameCard;