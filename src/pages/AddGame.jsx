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
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // CLIENT-SIDE VALIDATION
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title || formData.title.length < 3) {
      newErrors.title = "Title must be at least 3 characters";
    }

    if (!formData.genre || formData.genre.length < 3) {
      newErrors.genre = "Genre must be at least 3 characters";
    }

    const priceNum = parseFloat(formData.price);
    if (!formData.price || isNaN(priceNum) || priceNum < 0) {
      newErrors.price = "Price must be a positive number";
    }

    if (!formData.platform || formData.platform.length < 1) {
      newErrors.platform = "Platform is required";
    }

    if (!formData.release_date || formData.release_date.length < 4) {
      newErrors.release_date = "Release date must be at least 4 characters";
    }

    if (!formData.description || formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // Validate before submitting
    if (!validateForm()) {
      setMessage("⚠️ Please fix the errors above");
      return;
    }

    setIsSubmitting(true);
    setMessage("Adding game...");

    // Build FormData
    const data = new FormData();
    data.append("title", formData.title);
    data.append("genre", formData.genre);
    data.append("price", formData.price);
    data.append("platform", formData.platform);
    data.append("release_date", formData.release_date);
    data.append("description", formData.description);

    if (image) {
      data.append("img", image);
    }

    try {
      const res = await fetch("https://games-server-hnd4.onrender.com/api/games", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setMessage("✅ Game added successfully!");
        // Reset form
        setFormData({
          title: "",
          genre: "",
          price: "",
          platform: "",
          release_date: "",
          description: "",
        });
        setImage(null);
        setImagePreview("");
        document.getElementById("img-input").value = "";
      } else {
        const err = await res.json();
        setMessage(`❌ Error: ${err.error}`);
      }
    } catch (error) {
      setMessage("⚠️ Failed to connect to server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="add-game" className="main-content">
      <h1>Add New Game</h1>
      <form className="add-game-form" onSubmit={handleSubmit}>
        
        <div className="form-row">
          <div className="form-group">
            <label>Title: *</label>
            <input 
              name="title" 
              value={formData.title} 
              onChange={handleChange}
              placeholder="e.g., The Last of Us"
            />
            {errors.title && <span className="error">{errors.title}</span>}
          </div>

          <div className="form-group">
            <label>Genre: *</label>
            <input 
              name="genre" 
              value={formData.genre} 
              onChange={handleChange}
              placeholder="e.g., Action Adventure"
            />
            {errors.genre && <span className="error">{errors.genre}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Price ($): *</label>
            <input
              type="number"
              step="0.01"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="e.g., 59.99"
            />
            {errors.price && <span className="error">{errors.price}</span>}
          </div>

          <div className="form-group">
            <label>Platform: *</label>
            <input 
              name="platform" 
              value={formData.platform} 
              onChange={handleChange}
              placeholder="e.g., PS5, Xbox Series X"
            />
            {errors.platform && <span className="error">{errors.platform}</span>}
          </div>
        </div>

        <div className="form-group">
          <label>Release Date: *</label>
          <input
            name="release_date"
            value={formData.release_date}
            onChange={handleChange}
            placeholder="e.g., June 19, 2020"
          />
          {errors.release_date && <span className="error">{errors.release_date}</span>}
        </div>

        <div className="form-group">
          <label>Description: *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            placeholder="Enter game description (min 10 characters)"
          />
          <span className="char-count">{formData.description.length} characters</span>
          {errors.description && <span className="error">{errors.description}</span>}
        </div>


        <div className="image-upload-section">
          <div className="form-group">
            <label>Game Cover Image (Optional):</label>
            <input 
              id="img-input"
              type="file" 
              name="img" 
              accept="image/*" 
              onChange={handleImageChange}
            />
          </div>
          
          {imagePreview && (
            <div className="image-preview">
              <p>Preview:</p>
              <img src={imagePreview} alt="Game cover preview" />
            </div>
          )}
        </div>

        <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Game"}
        </button>

        {message && (
          <p className={`form-message ${message.includes('✅') ? 'success' : message.includes('❌') || message.includes('⚠️') ? 'error' : ''}`}>
            {message}
          </p>
        )}
      </form>
    </main>
  );
};

export default AddGame;