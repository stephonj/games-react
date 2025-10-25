import "./../css/Reviews.css";
import GameCard from "../components/GameCard";

const Reviews = () => {
    return (
        <main id="reviews" className="main-content">
            <h1>Reviews</h1>
            <div className="review-container">
                <div>
                    <h2>Submit A Review</h2>
                    <div className="review-placeholder">
                        <p>Review form will be added in future assignment</p>
                    </div>
                </div>
                <div>
                    <h2>Find Us</h2>
                    <div className="review-placeholder">
                        <p>Map/iframe will be added in future assignment</p>
                    </div>
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