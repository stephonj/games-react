import "./../css/Catalog.css";
import GameCard from "../components/GameCard";
import { useState, useEffect } from "react";

const Catalog = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch("https://games-server-hnd4.onrender.com/api/games");
                const data = await response.json();
                setGames(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching games:", error);
                setLoading(false);
            }
        };

        fetchGames();
    }, []);

    if (loading) {
        return (
            <main id="catalog" className="main-content">
                <h1>Catalog</h1>
                <p style={{textAlign: 'center', color: '#00d4ff', fontSize: '20px'}}>Loading games...</p>
            </main>
        );
    }

    return (
        <main id="catalog" className="main-content">
            <h1>Catalog</h1>
            <div className="catalog-grid">
                {games.map((game) => (
                    <GameCard 
                        key={game._id}
                        id={game._id}
                        title={game.title} 
                        price={game.price.toFixed(2)}
                        image={`https://games-server-hnd4.onrender.com/${game.img_name}`}
                        genre={game.genre}
                        platform={game.platform}
                        description={game.description}
                        releaseDate={game.release_date}
                    />
                ))}
            </div>
        </main>
    );
};

export default Catalog;