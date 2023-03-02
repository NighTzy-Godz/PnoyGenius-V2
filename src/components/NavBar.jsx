import { Link } from "react-router-dom";

import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <section className="mainNav">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="logo">
          <Link to="/">PnoyGenius</Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
