import { useState } from "react";

const Card = ({ announcements }) => {
  // Manage show more functionality using state
  const [expanded, setExpanded] = useState(null);
  const maxLength = 140;

  const toggleExpanded = (index) => {
    // Toggle the expanded state for each announcement
    setExpanded(expanded === index ? null : index);
  };

  return (
    <>
      {announcements.map((announcement, index) => (
        <div key={index} className="announcementCard">
          {/* Display the course name */}
          <div className="topcard">
          <h5>{announcement.courseName} course</h5>
          <hr></hr>
          </div>
          

          <p>
            {/* Check if the text exceeds the defined max length */}
            {announcement.text.length > maxLength && expanded !== index
              ? `${announcement.text.slice(0, maxLength)}...`
              : announcement.text}
          </p>

          {/* Show "Show More" only if the text is long enough */}
          {announcement.text.length > maxLength && (
            <button
              className="btn btn-link p-0 text-decoration-none"
              onClick={() => toggleExpanded(index)}
            >
              {expanded === index ? "Show Less" : "Show More"}
            </button>
          )}

          <small className="text-secondary">{announcement.date.toDateString()}</small>
        </div>
      ))}
    </>
  );
};

export default Card;
