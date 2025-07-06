import StarRating from "./Star";
import imag from "../../../NewFileStructure/assets/Images/ISO_C++_Logo.svg 1.png";

const CourseCard = ({ course, rating, handleStarClick }) => (
  <div
    className="course-card"
  >
    <div className="imagcourse" style={{ marginBottom: "10px" }}>
      <img src={imag} alt={`${course.title} Thumbnail`} />
    </div>
    <h3 style={{ marginTop: "10px", fontSize: "20px" }}>{course.title}</h3>
    {handleStarClick && (
      <StarRating
        uniqueId={`${course.level}-${course.grade}`}
        currentRating={rating}
        onStarClick={handleStarClick}
      />
    )}
  </div>
);

export default CourseCard;
