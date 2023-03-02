import React from "react";

const Button = ({ text, buttonEvent = () => {} }) => {
  const btnStyle = {
    cursor: "pointer",
  };
  return (
    <React.Fragment>
      <button className="font_reg" style={btnStyle} onClick={buttonEvent}>
        {text}
      </button>
    </React.Fragment>
  );
};

export default Button;
