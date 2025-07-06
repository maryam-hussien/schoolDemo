import PropTypes from "prop-types";
import "./Button.css";
const Button = ({ label = "Submit", color = "primary", onClick = () => {}, className = "" }) => {
  return (
    <button
      className={`btn ${color} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
