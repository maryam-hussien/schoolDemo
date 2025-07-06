import './Level.css'; // Create a CSS file for styling if needed
import Button from "../../../components/Button/Button";


const Level = ({ 
  level, 
  setLevel, 
  formData, 
  setFormData, 
  handleSubmit, 
  buttonLabel, 
  showGrade, 
  showDay, 
  showTimeSlot, 
  showSubject 
}) => {
  const handleLevelChange = (e) => {
    const selectedLevel = e.target.value;
    setLevel(selectedLevel);
    setFormData({ ...formData, level: selectedLevel, grade: "" }); // Reset grade when level changes
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Determine grade options based on selected level
  const getGradeOptions = () => {
    switch (level) {
      case "Kindergarten":
        return ["1", "2"]; // Only levels 1 and 2
      case "Primary":
        return ["1", "2", "3", "4", "5", "6"]; // Levels 1 to 6
      case "Preparatory":
      case "Secondary":
        return ["1", "2", "3"]; // Levels 1 to 3
      default:
        return []; // No options if no level is selected
    }
  };
  const handleSubmitWrapper = (event) => {
    event.preventDefault(); // Prevent default form submission (page reload)
    handleSubmit(); // Call the handleSubmit passed as a prop (it can contain any custom logic)
  };

  return (
    <div className="form-row">
      {/* Level Selection */}
      <select
        name="level"
        className="form-control"
        value={level}
        onChange={handleLevelChange}
        required
      >
        <option value="">Select Level</option>
        <option value="Kindergarten">Kindergarten</option>
        <option value="Primary">Primary</option>
        <option value="Preparatory">Preparatory</option>
        <option value="Secondary">Secondary</option>
      </select>

      {/* Grade Selection */}
      {showGrade  && (
        <select
          name="grade"
          className="form-control"
          value={formData.grade}
          onChange={handleChange}
          required
        >
          <option value="">Select Grade</option>
          {getGradeOptions().map((grade, index) => (
            <option key={index} value={grade}>
              {grade}
            </option>
          ))}
        </select>
      )}

      {/* Day Selection */}
      {showDay && (
        <select
          name="day"
          className="form-control"
          value={formData.day}
          onChange={handleChange}
          required
        >
          <option value="">Select Day</option>
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>
      )}

      {/* Time Slot Selection */}
      {showTimeSlot && (
        <select
          name="timeSlot"
          className="form-control"
          value={formData.timeSlot}
          onChange={handleChange}
          required
        >
          <option value="">Select Time Slot</option>
          {["08:00 - 09:00", "09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 01:00", "01:00 - 02:00"].map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      )}

      {/* Subject Selection */}
      {showSubject && (
        <select
          name="subject"
          className="form-control"
          value={formData.subject}
          onChange={handleChange}
          required
        >
          <option value="">Select Subject</option>
          {["Math", "Physics", "Chemistry", "History", "Biology", "English", "PE", "Art"].map((subject, index) => (
            <option key={index} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      )}

      {/* Add Schedule Button */}
      <Button label={buttonLabel} color="primary" onClick={handleSubmitWrapper} />
    </div>
  );
};

export default Level;
