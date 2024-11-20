import { useState, useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
import Card from "../components/Card";

import "../style/main.css";

import { benefits } from "../data/benefits";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  //simulazione di caricamento
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  // Se il componente è in fase di caricamento, mostriamo il loader
  if (isLoading) {
    return (
      <div className="loader-container">
        <BallTriangle
          height={200}
          width={200}
          color="#00BFFF"
          ariaLabel="loading"
        />
      </div>
    );
  }

  //altrimenti mostriamo ik contenuto
  return (
    <div className="text-content">
      <h1 className="title">La calma è il nuovo potere</h1>
      <p className="description">
        La meditazione è una pratica antica che aiuta a ridurre lo stress,
        migliorare la concentrazione e favorire il benessere mentale e fisico.
        Praticare la meditazione ogni giorno può migliorare la tua qualità della
        vita, aumentando la consapevolezza del presente e aiutandoti a
        sviluppare una mente più calma e serena.
      </p>

      <h2 className="second-title">I Benefici della Meditazione</h2>

      <div className="card-container">
        {benefits.map((benefit, index) => (
          <Card key={index} title={benefit.title} image={benefit.image}></Card>
        ))}
      </div>
    </div>
  );
};

export default Main;
