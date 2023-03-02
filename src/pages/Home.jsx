import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/home.css";
import home_bg from "../assets/images/home-bg.webp";

const Home = () => {
  return (
    <React.Fragment>
      <div className="landing">
        <div className="container">
          <div className="landing_container">
            <div className="landing_left">
              <h3>Hello, Welcome to</h3>
              <h1>PnoyGenius</h1>
              <p>
                PinoyGenius is originated from Pinoy Henyo and it is one of the
                most popular and most iconic game segments of Eat Bulaga!. Since
                its inception in 2004, Pinoy Henyo has become a staple parlor
                game for people of every background, age, gender, socioeconomic
                status, religion, and more.
              </p>
              <Link to="start-game">Start Game</Link>
            </div>
            <div className="landing_right">
              <div className="landing_img">
                <img src={home_bg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about" id="about">
        <div className="container">
          <div className="mainText">
            <h1>About This Game</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
