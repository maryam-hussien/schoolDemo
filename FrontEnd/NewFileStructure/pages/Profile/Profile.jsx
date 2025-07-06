import { useNavigate } from "react-router-dom";
import "./profile.css";
import profileImg from "../../assets/Images/profile.jpg";
import ProfileBar from "../../features/profile/ProfileBar/ProfileBar";
import { Route, Routes } from "react-router-dom";
import ProfileScores from "../../features/profile/ProfileScores/ProfileScores";
import ProfileAttendence from "../../features/profile/ProfileAttendence/ProfileAttendence";
import ProfileShedule from "../../features/profile/ProfileSchedule/ProfileShedule";
import ProfileInfo from "../../features/profile/ProfileInfo/ProfileInfo";
import Header from "../../layout/NavBar/Header";
import Footer from "../../layout/Footer/Footer";

const Profile = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <>
      <Header />
      <div className="profile w-100">
        <div className="profileContinater mb-5 py-3 px-2">
          <div className="profileImgCont mx-auto">
            <img src={profileImg} className="profileImg m-auto" alt="Profile" />
          </div>
          <p className="p-3 mx-auto profilename">Maryam Hussien</p>
          <div className="text-white fw-medium d-flex justify-content-around m-auto bar">
            <ProfileBar />
          </div>
          <Routes>
            <Route path="/" element={<ProfileInfo />} />
            <Route path="info" element={<ProfileInfo />} />
            <Route path="score" element={<ProfileScores />} />
            <Route path="attendence" element={<ProfileAttendence />} />
            <Route path="schedule" element={<ProfileShedule />} />
          </Routes>

          <button
            className="btn btn-danger w-25 profilebtn me-5"
            onClick={() => navigate("/login")} // Navigate to "/" on click
          >
            Log Out
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
