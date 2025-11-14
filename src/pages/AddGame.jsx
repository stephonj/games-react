import { useState } from "react";
import "./../css/AddGame.css";

const AddGame = () => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    price: "",
    platform: "",
    release_date: "",
    description: "",
    img: null,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // -------------------------
    // CLIENT-SIDE VALIDATION
    // Matches your Joi schema
    // -------------------------
    if (formData.title.length < 3) {
      return setMessage("Title must be at least 3 characters.");
    }
    if (formData.genre.length < 3) {
      return setMessage("Genre must be at least 3 characters.");
    }
    if (formData.price === "" || Number(formData.price) < 0) {
      return setMessage("Price must be a positive number.");
    }
    if (formData.platform.length < 1) {
      return setMessage("Platform is required.");
    }
    if (formData.release_date.length < 4) {
      return setMessage("Release date must be at least 4 characters.");
    }
    if (formData.description.length < 10) {
      return setMessage("Description must be at least 10 characters.");
    }

    // Build the form data
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const res = await fetch("http://localhost:3001/api/games", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setMessage("✅ Game added successfully!");
        setFormData({
          title: "",
          genre: "",
          price: "",
          platform: "",
          release_date: "",
          description: "",
          img: null,
        });
      } else {
        const err = await res.json();
        setMessage(`❌ Error: ${err.error}`);
      }
    } catch (error) {
      setMessage("⚠️ Failed to connect to server.");
    }
  };

  return (
    <main id="add-game" className="main-content">
      <h1>Add New Game</h1>
      <form className="add-game-form" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input name="title" value={formData.title} onChange={handleChange} required />

        <label>Genre:</label>
        <input name="genre" value={formData.genre} onChange={handleChange} required />

        <label>Price:</label>
        <input
          type="number"
          step="0.01"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label>Platform:</label>
        <input name="platform" value={formData.platform} onChange={handleChange} required />

        <label>Release Date:</label>
        <input
          name="release_date"
          value={formData.release_date}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label>Image:</label>
        <input type="file" name="img" accept="image/*" onChange={handleChange} />

        <button type="submit" className="btn">Add Game</button>
      </form>

      {message && <p className="form-message">{message}</p>}
    </main>
  );
};

export default AddGame;
