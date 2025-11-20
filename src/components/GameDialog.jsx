import "./../css/GameDialog.css";
import { useState } from "react";
import GameDetailsDialog from "./GameDetailsDialog";
import GameEditDialog from "./GameEditDialog";
import GameDeleteDialog from "./GameDeleteDialog";

const GameDialog = (props) => {
    const [showContent, setShowContent] = useState("details");

    const showEdit = (e) => {
        e.preventDefault();
        setShowContent("edit");
    };

    const showDelete = (e) => {
        e.preventDefault();
        setShowContent("delete");
    };

    return (
        <div className="modal-overlay" onClick={props.closeDialog}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={props.closeDialog}>&times;</button>
                
                {showContent === "details" ? (
                    <GameDetailsDialog
                        game={props.game}
                        showEdit={showEdit}
                        showDelete={showDelete}
                    />
                ) : showContent === "edit" ? (
                    <GameEditDialog
                        game={props.game}
                        closeDialog={props.closeDialog}
                        updateGame={props.updateGame}
                    />
                ) : (
                    <GameDeleteDialog
                        game={props.game}
                        closeDialog={props.closeDialog}
                        hideGame={props.hideGame}
                    />
                )}
            </div>
        </div>
    );
};

export default GameDialog;