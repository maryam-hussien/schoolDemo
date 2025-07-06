import { useState } from "react";
import './DashSchedule.css';
import Level from '../../DashComponents/selectedLevel/Level'; // Import the new component
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashSchedule = () => {
  const [level, setLevel] = useState("");
  const [schedule, setSchedule] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // State to track which entry is being edited
  const [formData, setFormData] = useState({
    level: "",
    grade: "",
    timeSlot: "",
    subject: "",
    day: "",
  });

  const handleSubmit = () => {
    const { level, grade, timeSlot, subject, day } = formData;
  if (!level || !grade || !timeSlot || !subject || !day) {
    toast.error('Please fill in all fields before submitting');
    return;
  }
    if (editingIndex !== null) {
      // Update the existing schedule entry
      setSchedule((prevSchedules) => {
        const updatedSchedules = [...prevSchedules];
        updatedSchedules[editingIndex] = formData; // Update the specific entry
        return updatedSchedules;
      });
      toast.success('Schedule updated successfully');
      setEditingIndex(null);
    } else {
      setSchedule((prevSchedules) => [...prevSchedules, formData]);
      toast.success('Schedule added successfully');
    }
  
    // Reset the form fields
    setFormData({
      level: "",
      grade: "",
      timeSlot: "",
      subject: "",
      day: "",
    });
    setLevel(""); // Reset level as well
  };

  const handleEdit = (index) => {
    const entryToEdit = schedule[index];
    setFormData(entryToEdit);
    setEditingIndex(index); // Set the index of the entry being edited
  };

  const handleDelete = (index) => {
    setSchedule((prevSchedules) => prevSchedules.filter((_, i) => i !== index));
    toast.info('Schedule deleted');

  };

  return (
    <div className="manage-schedules">
                  <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />

      <h3 className="text-start mb-4 dashComponentTitle"> Schedules Management Dashboard</h3>

      <Level 
        level={level} 
        setLevel={setLevel} 
        formData={formData} 
        setFormData={setFormData} 
        handleSubmit={handleSubmit} 
        buttonLabel={editingIndex !== null ? "Update Schedule" : "Add Schedule"} // Dynamic button label
        showGrade={true} // Pass true/false to show/hide specific selectors
        showDay={true}
        showTimeSlot={true}
        showSubject={true}
      />

      <h5 className="text-center mt-4 mb-2">Students Schedules </h5>
      {/* Display added schedules */}
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>Level</th>
            <th>Grade</th>
            <th>Day</th>
            <th>Time Slot</th>
            <th>Subject</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schedule.length > 0 ? (
            schedule.map((entry, index) => (
              <tr key={index}>
                <td data-label="Level">{entry.level}</td>
                <td data-label="Grade">{entry.grade}</td>
                <td data-label="Day">{entry.day}</td>
                <td data-label="Time Slot">{entry.timeSlot}</td>
                <td data-label="Subject">{entry.subject}</td>
                <td data-label="Actions">
                  <div className="schedulebtns">
                    <button className="scheduleedit-btn m-auto" 
                      onClick={() => handleEdit(index)}
                    >Edit</button>
                    <button className="scheduledelete-btn m-auto"
                      onClick={() => handleDelete(index)}
                    >Delete</button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No schedules added yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DashSchedule;
