import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img from '../../assets/images/730005bd39661bcd3959d4dad27f9d5b-removebg-preview.png';
import imag from '../../assets/images/33f54f271b2de59273f34e582a00e05e.png';
import { NavLink, useNavigate } from 'react-router-dom'; 
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handlehome = () => {
    navigate('/');
  };

  const handlelogin = () => {
    navigate('/login');
  };

  return (
    <div className="header">
      <div className="bheader">
  
        <div className="school-team" onClick={handlehome}>
          <img src={img} alt="nav-brand" className="logo-img" />
          <span className="fw-semibold">SCHOOL TEAM</span>
        </div>

     
        <nav className="navbar navbar-expand-lg">
          <div className="container navbar-container">
            <div className="navt">
              <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                <div className="navyy">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>

              <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink 
                      to="/dashboard" 
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                      onClick={toggleMenu}
                    >
                      Dashboard
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink 
                      to="/announcement" 
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                      onClick={toggleMenu}
                    >
                      Announcement
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink 
                      to="/profile" 
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                      onClick={toggleMenu}
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink 
                      to="/course" 
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                      onClick={toggleMenu}
                    >
                      Courses
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink 
                      to="/community" 
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                      onClick={toggleMenu}
                    >
                      Community
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink 
                      to="/about" 
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                      onClick={toggleMenu}
                    >
                      About Us
                    </NavLink>
                  </li>
                </ul>
              </div>
              
              <div className="login-icon" onClick={handlelogin}>
                <img src={imag} alt="nav-brand" className="nohover" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
