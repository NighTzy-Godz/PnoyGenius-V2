import { useEffect } from "react";
import formatTimer from "../utils/formatTime";
import "../assets/css/timer.css";

const Timer = ({ start, pause, time, onTimeChange }) => {
  useEffect(() => {
    if (!start || !time || pause) return;

    const timerId = setInterval(() => {
      console.log(time);
      const count = time - 1;
      onTimeChange(count >= 0 ? count : 0);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  });

  const formattedTime = formatTimer(time);

  return (
    <div className="timer">
      <h1 className={`${time < 21 ? "danger" : ""}`}>{`${
        !time ? "Time's Up!" : formattedTime
      }`}</h1>
    </div>
  );
};

export default Timer;
