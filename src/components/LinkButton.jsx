import { Link } from "react-router-dom";

const LinkButton = ({ path, label }) => {
  return (
    <>
      <Link to={path}>{label}</Link>
    </>
  );
};

export default LinkButton;
