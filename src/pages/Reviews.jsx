import "./../css/Reviews.css";
import GameCard from "../components/GameCard";
import { useState } from "react";

const Reviews = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", "8740a021-d716-4fde-aa42-1d8c89573070");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Review submitted successfully!");
            event.target.reset();
        } else {
            console.error("Error:", data);
            setResult("Error submitting review. Please try again.");
        }
    };

    return (
        <main id="reviews" className="main-content">
            <h1>Reviews</h1>
            <div className="review-container">
                <div>
                    <h2>Submit A Review</h2>
                    <div className="review-form">
                        <form onSubmit={onSubmit}>
                            <p>
                                <label htmlFor="name">Name:</label>
                                <br />
                                <input type="text" name="name" required />
                            </p>

                            <p>
                                <label htmlFor="email">Email:</label>
                                <br />
                                <input type="email" name="email" required />
                            </p>

                            <p>
                                <label htmlFor="message">Review:</label>
                                <br />
                                <textarea name="message" required></textarea>
                            </p>

                            <p>
                                <button type="submit" className="btn">Submit Review</button>
                            </p>

                            <div className="form-result">{result}</div>
                        </form>
                    </div>
                </div>

                <div>
                    <h2>Find Us Here</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6615.936099132783!2d-81.03426492523275!3d33.99335442083909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb2802562b89%3A0x1f5707bd271c887!2sAssembly%20Blossom%20North!5e0!3m2!1sen!2sus!4v1760457010384!5m2!1sen!2sus"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{
                            border: 0,
                            width: "100%",
                            height: "400px",
                            borderRadius: "10px",
                        }}
                        title="GamesOnGames Location"
                    ></iframe>
                </div>
            </div>

            <div>
                <h2>New Games To Review!</h2>
                <div className="related-games">
                    <GameCard
                        title="Marvel Ultimate Alliance 2"
                        price="39.99"
                        image={process.env.PUBLIC_URL +"/images/marvel2.jpg"}
                    />
                    <GameCard
                        title="X-Men Legends"
                        price="29.99"
                        image={process.env.PUBLIC_URL +"/images/xmen.jpg"}
                    />
                    <GameCard
                        title="X-Men Legends 2"
                        price="34.99"
                        image={process.env.PUBLIC_URL +"/images/xmen2.jpg"}
                    />
                </div>
            </div>
        </main>
    );
};

export default Reviews;