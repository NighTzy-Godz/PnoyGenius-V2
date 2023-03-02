import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import StyledInput from "../../components/StyledInput";
import Timer from "../../components/Timer";
import Word from "../../components/Word";

import "../../assets/css/game_time.css";
import "../../assets/css/custom_mode.css";

import { validateCustomMode } from "../../utils/validateInput";
import { Link } from "react-router-dom";

const CustomMode = ({}) => {
  const [settings, setSettings] = useState({
    word: "",
    time: 0,
    start: false,
    pause: false,
  });
  const [formWord, setFormWord] = useState("");
  const [timer, setTimer] = useState(0);

  const handleTimeChange = (time) => {
    setSettings({ ...settings, time });
  };

  const handleStart = () => {
    setSettings({ ...settings, start: true });
  };

  const handlePause = () => {
    setSettings({ ...settings, pause: !settings.pause });
  };

  const handleStopTime = () => {
    setSettings({ ...settings, time: 0 });
  };

  const handlePlayAgain = () => {
    setSettings({ ...settings, word: "", time: 0, pause: false, start: false });
    setTimer(0);
    setFormWord("");
  };

  const handleGuessWord = (e) => {
    setFormWord(e.currentTarget.value);
  };

  const handleFormTime = (e) => {
    setTimer(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const err = validateCustomMode(timer, formWord);

    if (err)
      return toast.error(err, { autoClose: 2500, toastId: "Form Toast Error" });

    toast.success("All is set, lets play now!", {
      autoClose: 2500,
      toastId: "Form Toast Success",
    });

    setSettings({ ...settings, word: formWord, time: timer, playing: true });
  };

  const renderForm = () => {
    return (
      <div className="custom_form_container">
        <form
          onSubmit={onSubmit}
          className="animate__animated animate__fadeInDownBig custom_form"
        >
          <StyledInput label="Guess Word" inputEvent={handleGuessWord} />
          <StyledInput
            label="Timer in Seconds"
            type="number"
            inputEvent={handleFormTime}
          />

          <div className="custom_form_cancel">
            <Link to="/start-game">X</Link>
          </div>
          <Button text="Submit" />
        </form>
      </div>
    );
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
        <div id="game_btn" className="d-flex justify-content-center">
          <Button text="Play Again" buttonEvent={handlePlayAgain} />
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

  const renderContent = () => {
    const { pause, time, start, word } = settings;

    if (!word) return renderForm();
    return (
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
    );
  };

  return (
    <div className="custom_game">
      <div className="container">{renderContent()}</div>
    </div>
  );
};

export default CustomMode;
