import Button from "../../../components/Button/Button";

const DashFormCourse = ({ newCourse, handleCourseInputChange, handleAddCourse, handleImageUpload }) => {
  return (
    <form onSubmit={handleAddCourse} className="add-course-form">
      {/* Course Title */}
      <div className="form-group">
        <input
          type="text"
          name="title"
          value={newCourse.title}
          onChange={handleCourseInputChange}
          placeholder="Course Title"
          required
        />
      </div>

      {/* Course Description */}
      <div className="form-group">
        <textarea
          name="description"
          value={newCourse.description}
          onChange={handleCourseInputChange}
          placeholder="Course Description"
          required
        />
      </div>

      {/* Course Creator */}
      <div className="form-group">
        <input
          type="text"
          name="creator"
          value={newCourse.creator}
          onChange={handleCourseInputChange}
          placeholder="Course Creator"
          required
        />
      </div>

      {/* Level Dropdown */}
      <div className="form-group">
        <select
          name="level"
          value={newCourse.level}
          onChange={handleCourseInputChange}
          required
        >
          <option value="">Select Level</option>
          <option value="Kindergarten">Kindergarten</option>
          <option value="Preparatory">Preparatory</option>
          <option value="Primary">Primary</option>
          <option value="Secondary">Secondary</option>
        </select>
      </div>

      {/* Grade Dropdown */}
      <div className="form-group">
        <select
          name="grade"
          value={newCourse.grade}
          onChange={handleCourseInputChange}
          required
        >
          <option value="">Select Grade</option>
          {[...Array(6).keys()].map((i) => (
            <option key={i} value={i + 1}>
              Grade {i + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Background Color Picker */}
      <div className="form-group">
        <input
          type="color"
          name="backgroundColor"
          value={newCourse.backgroundColor}
          onChange={handleCourseInputChange}
        />
      </div>

      {/* Image Upload */}
      <div className="form-group">
        <input
          type="file"
          name="image"
          onChange={handleImageUpload}
          accept="image/*"
        />
      </div>

      {/* Display Image Preview */}
      {newCourse.image && (
        <div className="image-preview">
          <img
            src={newCourse.image}
            alt="Course Preview"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      )}

      {/* Submit Button */}
      <Button label="Submit" color="secondary" />

    </form>
  );
};

export default DashFormCourse;
