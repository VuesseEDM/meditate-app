import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  startTimer,
  stopTimer,
  resetTimer,
  decrementTime,
  setTime,
} from "../redux/timerSlice";

import MusicPlayer from "./MusicPlayer";

import '../style/timer.css';

const Timer = () => {
  const { time, isActive } = useSelector((state) => state.timer);
  const [inputMinutes, setInputMinutes] = useState(Math.floor(time / 60)); // Minuti
  const [inputSeconds, setInputSeconds] = useState(time % 60); // Secondi
  const dispatch = useDispatch();

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        dispatch(decrementTime()); // Decrementa ogni secondo
      }, 1000);
    } else {
      clearInterval(interval);
      if (time === 0) {
        dispatch(resetTimer()); // Resetta quando il timer arriva a 0
      }
    }

    return () => clearInterval(interval);
  }, [isActive, time, dispatch]);

  //  gestisce il cambiamento dei minuti
  const handleMinutesChange = (event) => {
    let newMinutes = Number(event.target.value);
    if (newMinutes >= 0) {
      setInputMinutes(newMinutes);
      const totalTimeInSeconds = (newMinutes * 60) + inputSeconds;
      dispatch(setTime(totalTimeInSeconds)); // Aggiorna il tempo totale
    }
  };

  // gestisce il cambiamento dei secondi
  const handleSecondsChange = (event) => {
    let newSeconds = Number(event.target.value);
    if (newSeconds >= 0 && newSeconds < 60) {
      setInputSeconds(newSeconds);
      const totalTimeInSeconds = (inputMinutes * 60) + newSeconds;
      dispatch(setTime(totalTimeInSeconds)); // Aggiorna il tempo totale
    }
  };

  //  avvia il timer
  const handleStart = () => {
    const totalTimeInSeconds = (inputMinutes * 60) + inputSeconds;
    dispatch(startTimer());
    dispatch(setTime(totalTimeInSeconds)); // Imposta il tempo totale al momento dell'avvio
    setInputMinutes(0); // Azzera i minuti quando il timer parte
    setInputSeconds(0); // Azzera i secondi ...  ... ....
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600); // Calcola le ore
    const minutes = Math.floor((seconds % 3600) / 60); // Calcola i minuti
    const remainingSeconds = seconds % 60; // Calcola i secondi rimanenti

    return (
      <>
        {hours > 0 && (
          <span>
            {hours < 10 ? "0" : ""}
            {hours}
            <span style={{ fontSize: "0.7em" }}>h</span>:
          </span>
        )}
        <span>
          {minutes < 10 ? "0" : ""}
          {minutes}
          <span style={{ fontSize: "0.7em" }}>m</span>:
        </span>
        <span>
          {remainingSeconds < 10 ? "0" : ""}
          {remainingSeconds}
          <span style={{ fontSize: "0.7em" }}>s</span>
        </span>
      </>
    );
  };

  return (
    <div className="timer-container">
      <h1 className="timer">{formatTime(time)}</h1>
  

      <div className="input-container">
      <b>Minuti :</b>
        <input
          type="number"
          value={inputMinutes}
          onChange={handleMinutesChange}
          disabled={isActive} // Disabilita l'input se il timer è attivo
          placeholder="Minuti"
            />
           <b>Secondi :</b>
        <input
          type="number"
          value={inputSeconds}
          onChange={handleSecondsChange}
          disabled={isActive} // Disabilita l'input se il timer è attivo
          placeholder="Secondi"
        />
      </div>

      <div className="button-container">
        <button onClick={handleStart}>Start</button>
        <button onClick={() => dispatch(stopTimer())}>Stop</button>
        <button onClick={() => dispatch(resetTimer())}>Reset</button>
      </div>

      <div className="music-box">
        <MusicPlayer />
      </div>
    </div>
  );
};

export default Timer;