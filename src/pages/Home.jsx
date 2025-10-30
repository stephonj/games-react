import "./../css/Home.css";
import FeatureCard from "../components/FeatureCard";
import Slideshow from "../components/Slideshow";

const Home = () => {
    return (
        <main id="home" className="main-content">
            <h1>GamesOnGames</h1>
            
            <Slideshow />
            
            <div className="hero-content">
                <div className="features">
                    <h3>Why GamesOnGames?</h3>
                    <p>Welcome to GamesOnGames, your ultimate destination for discovering, reviewing, and purchasing the hottest video games across all platforms. We specialize in bringing you the latest releases, classic favorites, and hidden gems from every genre. Whether you're into action-packed adventures, immersive RPGs, competitive sports games, or mind-bending puzzles, we've got you covered. Our expert reviews, competitive prices, and passionate community make us the go-to source for gamers who demand the best gaming experiences available today.</p>
                </div>
                <div className="home-features-grid">
                    <FeatureCard 
                        title="Latest Releases" 
                        description="Get the newest games as soon as they drop, with day-one availability and exclusive pre-order bonuses."
                    />
                    <FeatureCard 
                        title="Top Rated Games" 
                        description="Discover critically acclaimed titles and community favorites with our curated selection of must-play games."
                    />
                    <FeatureCard 
                        title="Coming Soon" 
                        description="Stay ahead of the curve with upcoming releases and be the first to know about exciting new gaming experiences."
                    />
                </div>
            </div>
        </main>
    );
};

export default Home;