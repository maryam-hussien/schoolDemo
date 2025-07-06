import { NavLink } from 'react-router-dom';
import './ProfileBar.css';

const ProfileBar = () => {
  return (
    <>
      <NavLink 
        to="/profile/info" 
        className={({ isActive }) => 
          isActive ? "text-white text-decoration-none active" : "text-white text-decoration-none"
        }
      >
        Info
      </NavLink>

      <NavLink 
        to="/profile/schedule" 
        className={({ isActive }) => 
          isActive ? "text-white text-decoration-none active" : "text-white text-decoration-none"
        }
      >
        Schedule
      </NavLink>

      <NavLink 
        to="/profile/attendence" 
        className={({ isActive }) => 
          isActive ? "text-white text-decoration-none active" : "text-white text-decoration-none"
        }
      >
        Attendance
      </NavLink>

      <NavLink 
        to="/profile/score" 
        className={({ isActive }) => 
          isActive ? "text-white text-decoration-none active" : "text-white text-decoration-none"
        }
      >
        Scores
      </NavLink>


    </>
  );
}

export default ProfileBar;
