import { Link } from "react-router-dom";
import "../../assets/css/select_mode.css";
import custom_bg from "../../assets/images/custom.png";
import xpress_bg from "../../assets/images/xpress.png";

const SelectMode = () => {
  return (
    <div className="select_mode">
      <div className="container">
        <div className="mainText">
          <h1>Choose Your Game Mode</h1>
        </div>
        <div className="select_mode_container">
          <Link to="/express-mode">
            <div className="img">
              <img src={xpress_bg} alt="" />
            </div>
            <div className="headerText">
              <h3>Express Mode</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis reiciendis minima veritatis esse deserunt dolor id
                magni blanditiis sint voluptatum.
              </p>
            </div>
          </Link>{" "}
          <Link to="/custom-mode">
            <div className="img">
              <img src={custom_bg} alt="" />
            </div>
            <div className="headerText">
              <h3>Custom Mode</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis reiciendis minima veritatis esse deserunt dolor id
                magni blanditiis sint voluptatum.
              </p>
            </div>
          </Link>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

export default SelectMode;
