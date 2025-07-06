import { Route, Routes } from "react-router-dom";
import DashSidebar from "../../DashComponents/DashSideBar/DashSidebar";
import "./DashHome.css";
import Dashcont from "../Dashcont/Dashcont";
import DashProfile from "../DashProfile/DashProfile";
import DashCourses from "../DashCourses/DashCourses";
import DashAttendance from "../DashAttendaane/DashAttendance";
import DashGrades from "../DashGrades/DashGrades";
import DashSchedule from "../DashSchedule/DashSchedule";
import DashNav from "../../DashComponents/DashNav/DashNav";
import EditProfile from "../DashProfile/EditProfile/EditProfile";
import Students from "../DashStudents/Students";
import DashAbout from "../DashAbout/DashAbout";
import Teachers from "../Teachers/Teachers";
import Review from '../DashReview/Review'
import Announcement from "../DashAnnounce/Announcement";
const DashHome = () => {

  return (
    <>
      <DashNav/>
      <div className="d-flex dashHome">
      <DashSidebar />

      <div className="dashboard">
        <Routes>
        <Route path="/" element={<Dashcont />} />
        <Route path="main" element={<Dashcont />} />
          <Route path="profile" element={<DashProfile />} />
          <Route path="courses/*" element={<DashCourses />} />
            <Route path="about" element={<DashAbout />} />
          <Route path="attendance" element={<DashAttendance />} />
          <Route path="grades" element={<DashGrades />} />
          <Route path="schedule" element={<DashSchedule />} />
          <Route path="students" element={<Students/>}/>
          <Route path="teacher" element={<Teachers/>}/>
          <Route path="announcement" element={<Announcement/>}/>
          <Route path="review" element={<Review/>}/>
          <Route path="edit" element={<EditProfile/>} />





        </Routes>
      </div>
    </div>
      </>
  );
};

export default DashHome;
