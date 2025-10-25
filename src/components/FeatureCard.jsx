import "./../css/FeatureCard.css";

const FeatureCard = (props) => {
    return (
        <div className="feature-card">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    );
};

export default FeatureCard;