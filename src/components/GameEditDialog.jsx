import { useState } from "react";

const GameEditDialog = ({ game, closeDialog, updateGame }) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState(game.image);
    const [errors, setErrors] = useState({});

    const uploadImage = (event) => {
        if (event.target.files[0]) {
            setPrevSrc(URL.createObjectURL(event.target.files[0]));
        }
    };

    const validateForm = (formData) => {
        const newErrors = {};
        const title = formData.get("title");
        const genre = formData.get("genre");
        const price = parseFloat(formData.get("price"));
        const platform = formData.get("platform");
        const release_date = formData.get("release_date");
        const description = formData.get("description");

        if (!title || title.length < 1) newErrors.title = "Title required (min 1 char)";
        if (!genre || genre.length < 3) newErrors.genre = "Genre required (min 3 chars)";
        if (isNaN(price) || price < 0 || price > 200) newErrors.price = "Price: $0-$200";
        if (!platform || platform.length < 2) newErrors.platform = "Platform required (min 2 chars)";
        if (!release_date || release_date.length < 4) newErrors.release_date = "Release date required";
        if (!description || description.length < 10 || description.length > 500) {
            newErrors.description = "Description: 10-500 chars";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Updating...");

        const formData = new FormData(event.target);

        if (!validateForm(formData)) {
            setResult("Please fix errors above");
            return;
        }

        try {
            // FIX: Changed from game._id to game.id
            const response = await fetch(
                `https://games-server-hnd4.onrender.com/api/games/${game.id}`,
                {
                    method: "PUT",
                    body: formData,
                }
            );

            if (response.status === 200) {
                const updatedGame = await response.json();
                setResult("✅ Game updated successfully!");
                updateGame({
                    ...game,
                    title: updatedGame.title,
                    genre: updatedGame.genre,
                    price: updatedGame.price.toFixed(2),
                    platform: updatedGame.platform,
                    releaseDate: updatedGame.release_date,
                    description: updatedGame.description,
                    image: `https://games-server-hnd4.onrender.com/${updatedGame.img_name}`,
                });
                setTimeout(() => closeDialog(), 1500);
            } else {
                setResult("❌ Error updating game");
            }
        } catch (error) {
            console.error("Error:", error);
            setResult("❌ Failed to update game");
        }
    };

    return (
        <form className="edit-form" onSubmit={onSubmit}>
            <h2>Edit Game</h2>

            <div className="form-group">
                <label htmlFor="title">Game Title *</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    defaultValue={game.title}
                />
                {errors.title && <span className="error">{errors.title}</span>}
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="genre">Genre *</label>
                    <input
                        type="text"
                        id="genre"
                        name="genre"
                        defaultValue={game.genre}
                    />
                    {errors.genre && <span className="error">{errors.genre}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price ($) *</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        step="0.01"
                        defaultValue={game.price}
                    />
                    {errors.price && <span className="error">{errors.price}</span>}
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="platform">Platform *</label>
                <input
                    type="text"
                    id="platform"
                    name="platform"
                    defaultValue={game.platform}
                />
                {errors.platform && <span className="error">{errors.platform}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="release_date">Release Date *</label>
                <input
                    type="text"
                    id="release_date"
                    name="release_date"
                    defaultValue={game.releaseDate}
                />
                {errors.release_date && <span className="error">{errors.release_date}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea
                    id="description"
                    name="description"
                    rows="4"
                    defaultValue={game.description}
                />
                {errors.description && <span className="error">{errors.description}</span>}
            </div>

            <div className="image-upload-section">
                <div className="image-preview">
                    {prevSrc && <img src={prevSrc} alt="Preview" />}
                </div>
                <div className="form-group">
                    <label htmlFor="img">Upload New Image (Optional)</label>
                    <input
                        type="file"
                        id="img"
                        name="img"
                        accept="image/*"
                        onChange={uploadImage}
                    />
                </div>
            </div>

            <button type="submit" className="btn submit-btn">
                Update Game
            </button>

            {result && (
                <div className={`submit-status ${result.includes('✅') ? 'success' : result.includes('❌') ? 'error' : ''}`}>
                    {result}
                </div>
            )}
        </form>
    );
};

export default GameEditDialog;