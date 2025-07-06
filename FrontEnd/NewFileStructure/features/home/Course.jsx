import '../../pages/Home/home.css';
import { useNavigate } from 'react-router-dom';
import animationImage from '../../assets/images/dbe952cfcd79ece5d17cb134ba35b587.jpg';
import digitalSkillsImage from '../../assets/images/f1c71ed1586390fe809406f5b31038d7.jpg';
import aiImage from '../../assets/images/1c6921a6de046156b675b130f60868dd.jpg';
const Course=()=>  {
    const navigate = useNavigate();
    const handlecourseLearnMoreClick = () => {
        navigate('/course');
      };
    return (
     <>
       <section className="coursesection">
  <h2>Discover Our <span style={{color:"rgb(10, 80, 91)"}}>Best</span> Courses</h2>
  <div className="course-cards">
    <div className="coursecard" style={{ backgroundColor: 'rgb(235 169 105)' }}>
      <img src={animationImage} alt="Animation" className="courseimage" />
      <h3 className="coursetitle">
        Animation 
      </h3>
      <p>Learn the art of animation with our comprehensive course.</p>
    </div>

    <div className="coursecard" style={{ backgroundColor: '#0097E6' }}>
      <img src={digitalSkillsImage} alt="Digital Skills" className="courseimage" />
      <h3 className="coursetitle">
        Digital Skills 
      </h3>
      <p>Master essential digital skills in this tech-driven world.</p>
    </div>

    <div className="coursecard" style={{ backgroundColor: 'rgb(103 181 92)' }}>
      <img src={aiImage} alt="AI" className="courseimage" />
      <h3 className="coursetitle">
        AI 
      </h3>
      <p>Delve into the world of AI with cutting-edge concepts.</p>
    </div>
  </div>
  <button
                  className="learn-more-text" 
                  onClick={handlecourseLearnMoreClick}
                 style={{color:"#0A505B",fontSize:"20px",fontWeight:"bold",marginTop:"30px"}}
                >
                 More Courses
                </button>
</section>
     </>
    )
  
}
export default Course