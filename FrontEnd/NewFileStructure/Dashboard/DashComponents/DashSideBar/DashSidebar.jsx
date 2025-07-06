
import './DashSidebar.css';
import { Boxes, MegaphoneFill,PersonFill, Book,InfoCircle, CalendarCheckFill,PersonBadge, ClipboardData, Grid3x3GapFill,ArrowBarLeft ,PeopleFill,CardText } from 'react-bootstrap-icons';
import { NavLink ,useNavigate  } from 'react-router-dom';
import Back from '../BackButton/Back';


const DashSidebar = () => {
  const navigate = useNavigate(); 
  const handleLogout = () => {
    // Clear any authentication data (e.g., localStorage, session storage, cookies)
    localStorage.removeItem('authToken'); // Example: removing token from localStorage

    // Redirect to login page
    navigate('/login'); // Change '/login' to your login route
  };
  return (

    <div className="dashSidebar">
      <div className="px-4 py-3">
        <ul className="nav flex-column m-auto">
          <NavLink
            className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4"
            to="main"
          >
            <Boxes style={{ color: "white", fontSize: "19px" }} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4"
            to="profile"
          >
            <PersonFill style={{ color: "white", fontSize: "19px" }} />
            <span>Profile</span>
          </NavLink>
          <NavLink
          className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4"
          to="teacher"
          >
           <PersonBadge size={32} color="green" title="Teacher" />
          <span>Teachers</span>
         </NavLink>
          <NavLink
            className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4"
            to="courses"
          >
            <Book style={{ color: "white", fontSize: "19px" }} />
            <span>Courses</span>
          </NavLink>
       
          <NavLink
            className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4"
            to="students"
          >
            <PeopleFill style={{ color: "white", fontSize: "19px" }} />
            <span>Students</span>
          </NavLink>          
          <NavLink
            className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4"
            to="attendance"
          >
            <CalendarCheckFill style={{ color: "white", fontSize: "19px" }} />
            <span>Attendance</span>
          </NavLink>
          <NavLink
            className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4"
            to="grades"
          >
            <ClipboardData style={{ color: "white", fontSize: "19px" }} />
            <span>Grades</span>
          </NavLink>
          <NavLink
            className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4"
            to="schedule"
          >
            <Grid3x3GapFill style={{ color: "white", fontSize: "19px" }} />
            <span>Schedule</span>
          </NavLink>
                   <NavLink
          className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4"
          to="announcement"
          >
           <MegaphoneFill style={{ color: "white", fontSize: "19px" }} />
          <span>Announcements</span>
         </NavLink>
          <NavLink
          className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4"
          to="about"
          >
          <InfoCircle style={{ color: "white", fontSize: "19px" }} />
          <span>About</span>
         </NavLink>
         <NavLink
          className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4"
          to="review"
          >
          <CardText style={{ color: "white", fontSize: "19px" }} />
          <span>Review</span>
         </NavLink>

         <Back link='/login'
               onClickAction={handleLogout}
               Icon={ArrowBarLeft}
               label='Log Out'
         />
        </ul>
      </div>
    </div>
  );
};

export default DashSidebar;
