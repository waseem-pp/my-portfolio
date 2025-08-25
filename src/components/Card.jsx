
import "./Card.css";

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
