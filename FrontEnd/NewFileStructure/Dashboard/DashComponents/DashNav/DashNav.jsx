import "./Dashnav.css";
import img from '../../../../public/assets/730005bd39661bcd3959d4dad27f9d5b.jpg';
import { useNavigate } from "react-router-dom";

const DashNav = () => {
  const navigate = useNavigate(); // Get the navigate function

  const handleClick = () => {
    navigate("/"); // Navigate to the homepage
  };

  return (
    <div className='d-flex topSideBar' onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={img} alt="Brand Logo" className="logo-img" />
      <span className='fw-semibold dashNavTitle'>SCHOOL TEAM</span>
    </div>
  );
}

export default DashNav;
