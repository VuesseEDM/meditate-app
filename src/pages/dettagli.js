import { useParams } from "react-router-dom";
import { benefits } from "../data/benefits";
import { Link } from "react-router-dom";
import "../style/dettagli.css";

const Dettagli = () => {
  const { title } = useParams(); // Recupera il parametro del titolo dalla URL

  const beneficio = benefits.find((benefit) => benefit.title === title); // Trova il beneficio corrispondente al titolo

  return (
    <div className="dettagli-content">
      <h1>Dettagli di {beneficio.title}</h1>
      <img src={beneficio.image} alt={beneficio.title} />
      <p>{beneficio.details}</p>

      <Link to="/" className="btn-home">
        Torna alla Homepage
      </Link>
    </div>
  );
};

export default Dettagli;
