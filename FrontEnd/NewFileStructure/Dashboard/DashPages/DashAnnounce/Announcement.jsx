import "./Announces.css";
import { useState } from "react";
import Level from "../../DashComponents/selectedLevel/Level"; // Import the Level component
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import Card from "../../DashComponents/Announcement/Card";

const Announcement = () => {
  const [level, setLevel] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [announceMessage, setAnnounceMessage] = useState("");
  const [googleFormLink, setGoogleFormLink] = useState(""); // Google Form Link
  const [announcements, setAnnouncements] = useState([]); // Array to hold announcements

  const handleAddAnnouncement = () => {
    if (!announceMessage.trim() || !level) {
      toast.error("Please fill level & announcement message!");
      return;
    }

    const newAnnouncement = {
      level,
      grade,
      subject,
      message: announceMessage,
      googleFormLink,
      createdDate: new Date().toISOString(), // Capture the current date and time
    };

    setAnnouncements((prevAnnouncements) => [...prevAnnouncements, newAnnouncement]);
    toast.success("Announcement added successfully!");
    setAnnounceMessage("");
    setLevel("");
    setGrade("");
    setSubject("");
    setGoogleFormLink("");
  };

  return (
    <div className="dashAttendance">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />
      <div className="dashComponentTitle">Announcement Management Dashboard</div>

      <form className="filters mb-3">
        <Level
          level={level}
          setLevel={setLevel}
          formData={{ grade, subject }}
          showGrade={true}
          setFormData={(data) => {
            setGrade(data.grade);
            setSubject(data.subject);
          }}
          handleSubmit={handleAddAnnouncement}
          buttonLabel="Add Announcement"
          showSubject={true}
        />
      </form>

      <label htmlFor="announcement-textarea">Announcement Message:</label>
      <div className="announcement-textarea-container">
        <textarea
          id="announcement-textarea"
          className="announcement-textarea"
          value={announceMessage}
          onChange={(e) => setAnnounceMessage(e.target.value)}
          placeholder="Enter your announcement"
          rows="4"
        ></textarea>

      <div className="google-form-container mt-3">
        <label htmlFor="google-form-link">Google Form Link for Quiz (optional):</label>
        <input
          type="url"
          id="google-form-link"
          className="form-control"
          value={googleFormLink}
          onChange={(e) => setGoogleFormLink(e.target.value)}
          placeholder="Paste the Google Form link here"
        />
        <a
          href="https://forms.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-link mt-2 "
        >
          Create Quiz with Google Forms
        </a>
      </div>
      </div>


      <div className="d-announcecnontainer mt-4">
        <label className="d-announce-title">Existing Announcements:</label>
        {announcements.length > 0 ? (
          announcements.map((ann, index) => (
            <Card announce={ann} key={index} />
          ))
        ) : (
          <div className="d-no-announcements text-secondary">
            No announcements exist
          </div>
        )}
      </div>
    </div>
  );
};

export default Announcement;
