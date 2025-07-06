import { useState } from 'react';
import Students from "../../../data/studentsapi";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css"; // Use Bootstrap for styling
import "./Students.css"

// Reusable Select Dropdown Component
const SelectDropdown = ({ label, value, options, onChange }) => (
  <div className="form-group">
    <label className="form-label">{label}</label>
    <select className="form-select" value={value} onChange={onChange}>
      <option value="">Select {label}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

function Student() {
  const [level, setLevel] = useState("");
  const [grade, setGrade] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]); // State to hold filtered students
  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    level: "",
    grade: "",
    dob: "",
    gender: "",
    phoneNumber: "",
    address: "",
    fatherNumber: "",
    motherNumber: "",
    bloodGroup: "",
  }); // State for new student form
  const [editingStudent, setEditingStudent] = useState(null); // State for editing a student

  const levels = [...new Set(Students.map(student => student.level))];
  const grades = [...new Set(Students.map(student => student.grade))].sort((a, b) => a - b);
  const genders = ["Male", "Female", "Other"];

  const filterStudents = () => {
    if (level && grade) {
      setFilteredStudents(
        Students.filter(
          student => student.level === level && student.grade === parseInt(grade)
        )
      );
    } else {
      toast.error("Please select both level and grade.");
    }
  };

  const handleDeleteStudent = (studentId) => {
    toast.info(`Student ID: ${studentId} has been removed`);
    setFilteredStudents(prevStudents =>
      prevStudents.filter(student => student.id !== studentId)
    );
  };

  const handleAddStudent = () => {
    const { id, name, level, grade, dob, gender, phone, address, fatherNumber, motherNumber, bloodGroup } = newStudent;
    if (!id || !name || !level || !grade || !dob || !gender || !phone || !address || !fatherNumber || !motherNumber || !bloodGroup) {
      toast.error("Please fill in all fields for the new student.");
      return;
    }

    if (filteredStudents.some(student => student.id === id)) {
      toast.error("A student with this ID already exists.");
      return;
    }

    setFilteredStudents(prevStudents => [
      ...prevStudents,
      { id, name, level, grade: parseInt(grade), dob, gender, phone, address, fatherNumber, motherNumber, bloodGroup }
    ]);
    toast.success("Student added successfully!");
    setNewStudent({
      id: "",
      name: "",
      level: "",
      grade: "",
      dob: "",
      gender: "",
      phoneNumber: "",
      address: "",
      fatherNumber: "",
      motherNumber: "",
      bloodGroup: "",
    });
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setNewStudent({ ...student });
  };

  const handleUpdateStudent = () => {
    const updatedStudents = filteredStudents.map(student =>
      student.id === editingStudent.id ? { ...newStudent } : student
    );
    setFilteredStudents(updatedStudents);
    setEditingStudent(null);
    toast.success("Student updated successfully!");
    setNewStudent({
      id: "",
      name: "",
      level: "",
      grade: "",
      dob: "",
      gender: "",
      phoneNumber: "",
      address: "",
      fatherNumber: "",
      motherNumber: "",
      bloodGroup: "",
    });
  };

  return (
    <div className="dashAttendance w-100 dashstudents">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />
      <h3 className="text-start mb-4 dashComponentTitle">Students Management Dashboard</h3>

      <form className="filters mb-3 d-flex gap-3 align-items-center" style={{flex:'1'}}>
  <SelectDropdown label="Level" value={level} options={levels} onChange={(e) => setLevel(e.target.value)} />
  <SelectDropdown label="Grade" value={grade} options={grades} onChange={(e) => setGrade(e.target.value)} />
  <button type="button" className="btn-primary" style={{width:"380px",height:'45px',marginTop:'20px'}} onClick={filterStudents}>
    Show Students
  </button>
</form>


      <div>
        <h5 className="text-center mt-4 mb-2">Existing Students</h5>
        <table className="table table-striped table-bordered table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Level</th>
              <th>Grade</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Address</th>
              <th> Father's Number</th>
              <th> Mother's Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.level}</td>
                  <td>{student.grade}</td>
                  <td>{student.dob}</td>
                  <td>{student.gender}</td>
                  <td>{student.phoneNumber}</td>
                  <td>{student.address}</td>
                  <td>{student.fatherNumber}</td>
                  <td>{student.motherNumber}</td>
                  <td>{student.bloodGroup}</td>
                  <td>
                    <button className="btn btn-danger " onClick={() => handleDeleteStudent(student.id)}>
                      Delete
                    </button>
                    <button className="btn btn-primary" onClick={() => handleEditStudent(student)}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="12" className="text-center">No students found for the selected level and grade.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="add-student mt-5">
        <h5 className="text-center mb-3">{editingStudent ? "Edit Student" : "Add New Student"}</h5>
        <form className="d-flex justify-content-center gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="ID"
            value={newStudent.id}
            disabled={!!editingStudent}
            onChange={(e) => setNewStudent({ ...newStudent, id: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          />
          <SelectDropdown label="Level" value={newStudent.level} options={levels} onChange={(e) => setNewStudent({ ...newStudent, level: e.target.value })} />
          <SelectDropdown label="Grade" value={newStudent.grade} options={grades} onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })} />
          <input
            type="date"
            className="form-control"
            value={newStudent.dob}
            onChange={(e) => setNewStudent({ ...newStudent, dob: e.target.value })}
          />
          <SelectDropdown label="Gender" value={newStudent.gender} options={genders} onChange={(e) => setNewStudent({ ...newStudent, gender: e.target.value })} />
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            value={newStudent.phone}
            onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            value={newStudent.address}
            onChange={(e) => setNewStudent({ ...newStudent, address: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Father's Number"
            value={newStudent.fatherNumber}
            onChange={(e) => setNewStudent({ ...newStudent, fatherNumber: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Mother's Number"
            value={newStudent.motherNumber}
            onChange={(e) => setNewStudent({ ...newStudent, motherNumber: e.target.value })}
          />
          {editingStudent ? (
            <button type="button " className="btn btn-warning" onClick={handleUpdateStudent}>Update Student</button>
          ) : (
            <button type="button" className="btn btn-success" onClick={handleAddStudent}>Add Student</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Student;
