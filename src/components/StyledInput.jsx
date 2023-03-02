import "../assets/css/styledinput.css";

const StyledInput = ({ label, type = "text", inputEvent }) => {
  return (
    <div className="styledInput">
      <label>{label}</label>
      <input type={type} onChange={inputEvent} />
    </div>
  );
};

export default StyledInput;
