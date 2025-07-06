import  { useState } from 'react';
import Level from '../../DashComponents/selectedLevel/Level';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './DashCourses.css';
import courseData from "../../../data/coursresapi";
import DashCardCourse from '../../DashComponents/DashCardCourse/DashCardCourse '; 
import DashFormCourse from '../../DashComponents/DashFormCourse/DashFormCourse'; 

const DashCourses = () => {
  const [level, setLevel] = useState("");
  const [grade, setGrade] = useState("");
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isAddCourseFormVisible, setIsAddCourseFormVisible] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    creator: '',
    level: '',
    grade: '',
    backgroundColor: '#fff',
    image: ''
  });

  // Filter courses based on level and grade
  const filterCourses = () => {
    if (!level || !grade) {
      toast.error("Please select both level and grade to filter the courses.");
      return;
    }
    const gradeNumber = parseInt(grade, 10);
    const filtered = courseData.filter(course => course.level === level && course.grade === gradeNumber);
    setFilteredCourses(filtered);
    if (filtered.length === 0) {
      toast.info("No courses found for the selected level and grade.");
    }
  };

  // Toggle the visibility of the add course form
  const toggleAddCourseForm = () => {
    setIsAddCourseFormVisible(prevState => !prevState);
  };

  // Handle input changes for course
  const handleCourseInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse(prevCourse => ({ ...prevCourse, [name]: value }));
  };

  // Handle form submission to add a new course
  const handleAddCourse = (e) => {
    e.preventDefault();
    setCourses([...courses, newCourse]);
    toast.success("Course added successfully!");
    setNewCourse({ title: '', description: '', creator: '', level: '', grade: '', backgroundColor: '#fff', image: '' });
    toggleAddCourseForm();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCourse(prevCourse => ({ ...prevCourse, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle course edit
  const handleEditCourse = (index) => {
    const courseToEdit = courses[index];
    setNewCourse(courseToEdit);
    toggleAddCourseForm();
  };

  // Handle course deletion
  const handleDeleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
    toast.success("Course deleted successfully!");
  };

  return (
    <div className="dashAttendance w-100">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />
      <h2 className="text-start mb-4 dashComponentTitle">Courses Management Dashboard </h2>

      {/* Level and Grade Filters */}
      <form className="filters mb-3">
        <Level
          level={level}
          setLevel={setLevel}
          formData={{ grade }}
          setFormData={(data) => setGrade(data.grade)}
          showGrade={true}
          handleSubmit={filterCourses}
          buttonLabel="Show Courses"
        />
      </form>
      <button className="dash-btn-add-course" onClick={toggleAddCourseForm}>+</button>
      {/* Show Course Cards */}
      <div className="course-cards-container">
        <h3 className="text-center mb-4">Courses</h3>
        

        {/* Add Course Form */}
        {isAddCourseFormVisible && (
          <DashFormCourse
            newCourse={newCourse}
            handleCourseInputChange={handleCourseInputChange}
            handleAddCourse={handleAddCourse}
            handleImageUpload={handleImageUpload}
          />
        )}

        {/* Display Courses as Cards */}
        <div className="row">
          {(filteredCourses.length > 0 ? filteredCourses : courses).length === 0 ? (
            <div className="col-12 text-center">
              <p>No courses available for the selected level and grade.</p>
            </div>
          ) : (
            (filteredCourses.length > 0 ? filteredCourses : courses).map((course, index) => (
              <DashCardCourse
                key={index}
                course={course}
                index={index}
                handleEditCourse={handleEditCourse}
                handleDeleteCourse={handleDeleteCourse}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DashCourses;
