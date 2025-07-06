import { useNavigate } from "react-router-dom";

const Back = ({
  label,
  color,
  font,
  link,
  onClickAction,
  Icon,
  labelColor,
  labelFont,
  labelFontWeight, // New prop for font weight
}) => {
  const navigate = useNavigate(); // Get the navigate function for routing

  const onClick = () => {
    if (onClickAction) {
      onClickAction(); // Call the custom function if provided
    } else if (link) {
      navigate(link); // Navigate to the provided link
    }
  };

  return (
    <div
      className="icon-link icon-link-hover link-opacity-50-hover fw-light "
      style={{ color: color || "red", cursor: "pointer" }} // Default color if not provided
      onClick={onClick}
    >
      <Icon style={{ color: color || "red", fontSize: font || "19px" }} />
      <span
        style={{
          color: labelColor || "red",
          fontSize: labelFont || "17px",
          fontWeight: labelFontWeight || "normal", // Apply the font weight if provided
        }}
      >
        {label || ""}
      </span>
    </div>
  );
};

export default Back;
