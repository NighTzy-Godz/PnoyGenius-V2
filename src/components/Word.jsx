import { useEffect, useRef, useState } from "react";
import "../assets/css/guess_word.css";

import { getScreenSize, font_size_map } from "../utils/formatGuessWord";

const Word = ({ guessWord }) => {
  const [configuredSize, setConfiguredSize] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.addEventListener("resize", handleResize);
    }, 1000);

    setConfiguredSize(font_size_map[getScreenSize(windowWidth)]);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(timer);
    };
  }, [windowWidth]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const getFontSize = () => {
    try {
      if (guessWord.length < 8) return configuredSize.short;
      if (guessWord.length >= 17) return configuredSize.long;
      return configuredSize.default;
    } catch (ex) {
      return null;
    }
  };

  const fontSize = Math.floor(parseInt(getFontSize() / guessWord.length));

  return (
    <div className="guess_word" lang="en" style={{ fontSize: fontSize + "px" }}>
      <h1>{guessWord}</h1>
    </div>
  );
};

export default Word;
