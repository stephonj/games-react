const GameDetailsDialog = ({ game, showEdit, showDelete }) => {
    return (
        <div className="dialog-details">
            <div className="dialog-header">
                <h2>{game.title}</h2>
                <div className="edit-delete-links">
                    <button onClick={showEdit} className="icon-btn edit-btn" title="Edit">
                        &#9998;
                    </button>
                    <button onClick={showDelete} className="icon-btn delete-btn" title="Delete">
                        &#x2715;
                    </button>
                </div>
            </div>
            
            <div className="modal-body">
                <div className="modal-image">
                    <img src={game.image} alt={game.title} />
                </div>
                <div className="modal-info">
                    <p><strong>Genre:</strong> {game.genre}</p>
                    <p><strong>Platform:</strong> {game.platform}</p>
                    <p><strong>Release Date:</strong> {game.releaseDate}</p>
                    <p><strong>Price:</strong> ${game.price}</p>
                    <p className="modal-description">{game.description}</p>
                </div>
            </div>
        </div>
    );
};

export default GameDetailsDialog;