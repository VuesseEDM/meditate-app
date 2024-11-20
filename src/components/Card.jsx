
import { Link } from "react-router-dom";



const Card = ({ title, description, image }) => {


  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      
   
      {image && <img className="card-image" alt={title} src={image} />}

      <Link to={`/dettagli/${title}`} className="card-button">Leggi di più</Link>
    </div>
  );
};

export default Card;