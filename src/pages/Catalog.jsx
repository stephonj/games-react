import "./../css/Catalog.css";
import GameCard from "../components/GameCard";

const Catalog = () => {
    return (
        <main id="catalog" className="main-content">
            <h1>Catalog</h1>
            <div className="catalog-grid">
                <GameCard 
                    title="GTA: San Andreas" 
                    price="19.99"
                    image={process.env.PUBLIC_URL + "/images/gtasanandreas.jpeg"}
                />
                <GameCard 
                    title="Devil May Cry" 
                    price="29.99"
                    image={process.env.PUBLIC_URL + "/images/devilmaycry.jpeg"}
                />
                <GameCard 
                    title="NBA 2K26" 
                    price="69.99"
                    image={process.env.PUBLIC_URL + "/images/2k.jpeg"}
                />
                <GameCard 
                    title="Marvel Ultimate Alliance" 
                    price="39.99"
                    image={process.env.PUBLIC_URL + "/images/marvel.jpeg"}
                />
                <GameCard 
                    title="EA College Football 26" 
                    price="69.99"
                    image={process.env.PUBLIC_URL + "/images/ncaa26.jpeg"}
                />
                <GameCard 
                    title="Elden Ring Nightreign" 
                    price="59.99"
                    image={process.env.PUBLIC_URL + "/images/eldenring.jpeg"}
                />
                <GameCard 
                    title="X-Men Legends" 
                    price="29.99"
                    image={process.env.PUBLIC_URL + "/images/xmen.jpg"}
                />
                <GameCard 
                    title="X-Men Legends 2" 
                    price="34.99"
                    image={process.env.PUBLIC_URL + "/images/xmen2.jpg"}
                />
            </div>
        </main>
    );
};

export default Catalog;