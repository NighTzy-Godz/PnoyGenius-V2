import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import LinkButton from "../../components/LinkButton";
import Timer from "../../components/Timer";
import Word from "../../components/Word";
import data from "../../data/data";

const ExpressMode = () => {
  const [settings, setSettings] = useState({
    word: "",
    time: 180,
    pause: false,
    start: false,
  });

  useEffect(() => {
    setSettings({ ...settings, word: getGuessWord() });
  }, []);

  const getGuessWord = () => {
    return data[Math.floor(Math.random() * data.length)];
  };

  const handleStart = () => {
    setSettings({ ...settings, start: true });
  };

  const handleStopTime = () => {
    setSettings({ ...settings, time: 0 });
  };

  const handlePause = () => {
    setSettings({ ...settings, pause: !settings.pause });
  };

  const handlePlayAgain = () => {
    setSettings({ ...settings, time: 180, start: false, word: getGuessWord() });
  };

  const handleTimeChange = (time) => {
    setSettings({ ...settings, time });
  };

  const renderButton = () => {
    const { pause, time, start } = settings;
    if (!start)
      return (
        <div id="game_btn" className="d-flex justify-content-center">
          <Button text="Start" buttonEvent={handleStart} />;
        </div>
      );

    if (!time)
      return (
        <div id="game_btn" className="d-flex justify-content-around">
          <Button text="Play Again" buttonEvent={handlePlayAgain} />
          <LinkButton label="Exit Game" path="/start-game" />
        </div>
      );

    return (
      <div id="game_btn" className="d-flex justify-content-around">
        {" "}
        <Button
          text={`${pause ? "Start" : "Pause"}`}
          buttonEvent={handlePause}
        />
        <Button text="Stop Time" buttonEvent={handleStopTime} />
      </div>
    );
  };

  const { word, time, pause, start } = settings;

  return (
    <React.Fragment>
      <div className="game_time">
        <div className="container">
          <Word guessWord={word} />

          <Timer
            time={time}
            pause={pause}
            start={start}
            onTimeChange={handleTimeChange}
          />
          {renderButton()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExpressMode;
