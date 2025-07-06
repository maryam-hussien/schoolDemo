import "./card.css";
import img from "../../../assets/Images/1249636d803793f0d04ae77ab50097c7.jpg"; // Fallback image
import  { useState } from "react";

const Card = ({ student }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handlePresent = (e) => {
    console.log(`${student.name} is Present`);
  };

  const handleAbsent = () => {
    console.log(`${student.name} is Absent`);
  };
  const handleToggleVisibility = () => {
    setIsVisible(!isVisible); 
  };
  if (!isVisible) return null; // Return null if the card should not be visible

  return (
    <div className="attendcard fs-5 fw-light " onClick={handleToggleVisibility}>
      <div className="attendcarddate text-secondary">21-6-2024</div>
      <div className="mainInfo d-flex flex-wrap">
        <img src={student.photo || img} alt={student.name} className="student-photo" />
        <div className="m-auto attendcardData">
          <div><span>Name:</span> {student.name}</div>
          <div className="id"><span>ID:</span> {student.id}</div>
        </div>
      </div>
      <div className="d-flex flex-wrap attendcardbtns">
        {/* Adding onClick handlers to buttons */}
        <button className="btn attendcardbtn " onClick={handlePresent} style={{backgroundColor:'#6a8d6a'}}>Present</button>
        <button className="btn attendcardbtn" onClick={handleAbsent}style={{backgroundColor:'#9e3e3e'}}>Absent</button>
      </div>
    </div>
  );
};

export default Card;
