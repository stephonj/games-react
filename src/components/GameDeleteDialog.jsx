import { useState } from "react";

const GameDeleteDialog = ({ game, closeDialog, hideGame }) => {
    const [result, setResult] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteGame = async () => {
        setIsDeleting(true);
        setResult("Deleting...");

        try {
            // FIX: Changed from game._id to game.id
            const response = await fetch(
                `https://games-server-hnd4.onrender.com/api/games/${game.id}`,
                {
                    method: "DELETE",
                }
            );

            if (response.status === 200) {
                setResult("✅ Game successfully deleted");
                setTimeout(() => {
                    hideGame();
                    closeDialog();
                }, 1000);
            } else {
                setResult("❌ Sorry, we couldn't delete the game");
                setIsDeleting(false);
            }
        } catch (error) {
            console.error("Error:", error);
            setResult("❌ Failed to delete game");
            setIsDeleting(false);
        }
    };

    return (
        <div className="delete-dialog">
            <h2>Delete Game</h2>
            <p className="delete-warning">
                Are you sure you want to delete <strong>{game.title}</strong>?
            </p>
            <p className="delete-subtext">This action cannot be undone.</p>

            <div className="delete-buttons">
                <button 
                    onClick={closeDialog} 
                    className="btn cancel-btn"
                    disabled={isDeleting}
                >
                    Cancel
                </button>
                <button 
                    onClick={deleteGame} 
                    className="btn delete-btn-confirm"
                    disabled={isDeleting}
                >
                    {isDeleting ? "Deleting..." : "Yes, Delete"}
                </button>
            </div>

            {result && (
                <div className={`submit-status ${result.includes('✅') ? 'success' : result.includes('❌') ? 'error' : ''}`}>
                    {result}
                </div>
            )}
        </div>
    );
};

export default GameDeleteDialog;