import { useState } from 'react';
import studentScores from "../../../data//scoresapi"; // Assuming this is where your student data is stored
import Level from '../../DashComponents/selectedLevel/Level'; // Import the Level component
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./DashGrades.css";

function DashGrades() {
  const [level, setLevel] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState(""); // State for selected subject
  const [filteredStudents, setFilteredStudents] = useState([]); 

  // Initialize scores as an object where each student ID points to an object of subjects and scores
  const [scores, setScores] = useState({});

  const filterStudents = () => {
    
    if (level && grade) {
      const filtered = studentScores.filter(student => 
        student.level === level && student.grade === parseInt(grade) && 
        (!subject || student.subject === subject) // Filter by subject if provided
      );    
      setFilteredStudents(filtered);
    } else {
      toast.error("Please select both level and grade.");
    }
  };

  const handleScoreChange = (id, subject, value) => {
    setScores((prevScores) => {
      const updatedScores = {
        ...prevScores,
        [id]: {
          ...prevScores[id], // Keep previous scores for this student
          [subject]: value, // Store score directly under the subject key
        },
      };
      console.log("Updated Scores for ID:", id, "Subject:", subject, "Value:", value); // Log the change
      console.log("Scores State After Update:", updatedScores); // Log updated scores state
      return updatedScores;
    });
  };

  const handleSubmitScores = (studentId) => {
    const student = filteredStudents.find((s) => s.id === studentId);
  
    // Validate the score for the selected student and subject
    const score = scores[studentId]?.[student.subject];
    if (score === undefined || score === "" || score < 0 || score > 100) {
      toast.error(`Please enter a valid score for ${student.name} in ${student.subject}.`);
      return;
    }
  
    // Proceed to submit scores if valid
    toast.success(`Score submitted successfully for ${student.name} in ${student.subject}!`);
  
  
  };
  

  return (
    <div className="dashAttendance w-100">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />

      <h3 className=" mb-4 dashComponentTitle"> Grades Management Dashboard</h3>

      <form className="filters mb-3">
        <Level 
          level={level} 
          setLevel={setLevel} 
          formData={{ grade, subject }} // Include subject in formData if needed
          setFormData={(data) => {
            setGrade(data.grade);
            setSubject(data.subject); // Assuming you have a way to set the subject
            console.log("Form Data Set - Grade:", data.grade, "Subject:", data.subject); // Log form data set
          }} 
          showGrade={true} 
          handleSubmit={filterStudents}
          buttonLabel='Show Students'
          showSubject={true}
        />
      </form>

      <div className="dashAttendance">
        <h5 className="text-center mt-4 mb-2">Existing Students</h5>
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Level</th>
              <th>Grade</th>
              <th>Subject</th>
              <th>Score</th>
              <th>Actions</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student, index) => (
                <tr key={`${student.id}-${index}`}> 
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.level}</td>
                  <td>{student.grade}</td>
                  <td>{student.subject}</td> {/* Displaying Subject */}
                  <td>
                    <input 
                      type="number" 
                      value={scores[student.id]?.[student.subject] || ""} // Access score using ID and subject
                      onChange={(e) => handleScoreChange(student.id, student.subject, e.target.value)} // Pass subject in handleScoreChange
                      min="0" 
                      max="100" 
                    /> 
                    <span className='text-danger'>/100</span>
                  </td>
                  <td>
                    <button className="btn btn-success me-2" onClick={() => handleSubmitScores(student.id)}>
                      Submit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">No students found for the selected level, grade, and subject.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashGrades;
