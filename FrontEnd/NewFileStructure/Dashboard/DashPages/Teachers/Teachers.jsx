import { useState } from "react";
import TeachersData from "../../../data/TeachersData"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SelectDropdown = ({ label, value, options, onChange }) => (
  <div className="form-group">
    <label className="form-label">{label}</label>
    <select className="form-select"  value={value} onChange={onChange}>
      <option value="">Select {label}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

function Teachers() {
  const [subject, setSubject] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState(TeachersData); // Display all teachers initially
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [newTeacher, setNewTeacher] = useState({
    id: "",
    name: "",
    subject: "",
    phone: "",
    email: "",
  });

  // Extract unique subjects from the Teachers dataset
  const subjects = [...new Set(TeachersData.map(teacher => teacher.subject))];

  const filterTeachers = () => {
    if (subject) {
      const filtered = TeachersData.filter(teacher => teacher.subject === subject);
      setFilteredTeachers(filtered);
    } else {
      toast.error("Please select a subject to filter!");
    }
  };

  const handleDeleteTeacher = (id) => {
    setFilteredTeachers(prev => prev.filter(teacher => teacher.id !== id));
    toast.info("Teacher removed successfully.");
  };

  const handleEditTeacher = (teacher) => {
    setEditingTeacher(teacher);
    setNewTeacher({ ...teacher });
  };

  const handleUpdateTeacher = () => {
    setFilteredTeachers(prev =>
      prev.map(teacher =>
        teacher.id === editingTeacher.id ? { ...newTeacher } : teacher
      )
    );
    setEditingTeacher(null);
    setNewTeacher({
      id: "",
      name: "",
      subject: "",
      phone: "",
      email: "",
    });
    toast.success("Teacher updated successfully!");
  };

  const handleAddTeacher = () => {
    const { id, name, subject, phone, email } = newTeacher;
    if (!id || !name || !subject || !phone || !email) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (filteredTeachers.some(teacher => teacher.id === id)) {
      toast.error("A teacher with this ID already exists.");
      return;
    }

    setFilteredTeachers(prev => [
      ...prev,
      { id, name, subject, phone, email },
    ]);
    setNewTeacher({
      id: "",
      name: "",
      subject: "",
      phone: "",
      email: "",
    });
    toast.success("Teacher added successfully!");
  };

  return (
    <div className="teachersPage w-100 p-3">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />
      <h3 className="dashComponentTitle mb-4">Teachers Management Dashboard</h3>

      <form className="filters mb-3 d-flex gap-3">
        {/* Dropdown for subjects */}
        <SelectDropdown
          label="Subject"
          value={subject}
          options={subjects}
          onChange={(e) => setSubject(e.target.value)}
        />
        <button type="button" className="btn btn-primary" style={{width:"250px",height:'45px',marginTop:'32px'}} onClick={filterTeachers}>
          Show Teachers
        </button>
      </form>

      <div className="teachers-list">
        <h5 className="text-center mt-4 mb-2">Teachers</h5>
        {filteredTeachers.length > 0 ? (
          <table className="table table-striped table-bordered table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.id}</td>
                  <td>{teacher.name}</td>
                  <td>{teacher.subject}</td>
                  <td>{teacher.phone}</td>
                  <td>{teacher.email}</td>
                  <td>
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => handleDeleteTeacher(teacher.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEditTeacher(teacher)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">No teachers found for the selected subject.</p>
        )}
      </div>

      <div className="add-teacher mt-5">
        <h5 className="text-center mb-3">
          {editingTeacher ? "Edit Teacher" : "Add New Teacher"}
        </h5>
        <form className="d-flex justify-content-center gap-3 flex-wrap">
          <input
            type="text"
            className="form-control"
            placeholder="ID"
            value={newTeacher.id}
            disabled={!!editingTeacher}
            onChange={(e) => setNewTeacher({ ...newTeacher, id: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={newTeacher.name}
            onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
          />
          <SelectDropdown
            label="Subject"
            value={newTeacher.subject}
            options={subjects}
            onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            value={newTeacher.phone}
            onChange={(e) => setNewTeacher({ ...newTeacher, phone: e.target.value })}
          />
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={newTeacher.email}
            onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
          />
          {editingTeacher ? (
            <button
              type="button"
              className="btn btn-warning"
              onClick={handleUpdateTeacher}
            >
              Update Teacher
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAddTeacher}
            >
              Add Teacher
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Teachers;
