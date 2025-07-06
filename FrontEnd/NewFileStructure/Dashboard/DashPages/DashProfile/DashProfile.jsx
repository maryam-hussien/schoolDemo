import "./DashProfile.css";
import Button from "../../../components/Button/Button";
import { NavLink } from "react-router-dom";

const DashdashProfile = () => {
  return (
    <div className="dashProfile-container">
      <div className="dashProfile-card">
        <div className="dashProfile">
          <h2>Profile Details</h2>
        </div>
        <div className="dashProfile-body">
          <div className="dashProfile-img-container">
            <img
              src="https://via.placeholder.com/150"
              alt="dashProfile"
              className="dashProfile-img"
            />
          </div>
          <div className="dashProfile-info">
            <div className="info-item">
              <strong>Name:</strong>
              <span>John Doe</span>
            </div>
            <div className="info-item">
              <strong>Age:</strong>
              <span>32</span>
            </div>
            <div className="info-item">
              <strong>Contact:</strong>
              <span>+20-01274318900 | johndoe@example.com</span>
            </div>
            <div className="info-item">
              <strong>Address:</strong>
              <span>285 N Broad St, Elizabeth, NJ 07208, USA</span>
            </div>
            <div className="info-item">
              <strong>Certification:</strong>
              <span>Certified JavaScript Developer</span>
            </div>
            <div className="info-item">
              <strong>Work Hours:</strong>
              <span>Mon - Fri, 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
        <div className="dashProfile-actions">
          <NavLink to="/dashboard/edit">
          <Button label="Edit Profile" color="primary" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DashdashProfile;
