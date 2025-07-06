import {  FaChalkboardTeacher,FaSchool, FaBabyCarriage, FaUserGraduate } from 'react-icons/fa';
import img from '../../assets/images/595ee28c9868540c16d3f047ce98e321.png';
import '../../pages/Home/home.css';
const Smarty =()=> {
 
    return (
    <>
    <section className="smarty-programs">
          <img src={img} alt="Smarty Programs" style={{width:'350px',}} className="logo" />
          <div className='fsmart'>
          <h2>Smarty Programs</h2>
          <div className="program-cards">
            <div className="program-card">
              <FaBabyCarriage className="program-icon" style={{color:'fd7899'}} />
              <h3>Kindergarten</h3>
              <p>Creating a safe and welcoming environment for learning.</p>
            </div>
            <div className="program-card">
              <FaChalkboardTeacher className="program-icon" style={{color:'rgb(255 209 98)'}} />
              <h3>Primary School</h3>
              <p>Encouraging exploration and curiosity through diverse activities.</p>
            </div>
            <div className="program-card">
              <FaSchool className="program-icon"style={{color:'rgb(111 228 211);'}} />
              <h3>Secondary School</h3>
              <p>Preparing students for future academic challenges and life skills.</p>
            </div>
            <div className="program-card">
              <FaUserGraduate className="program-icon" style={{color:'rgb(74 152 159)'}} />
              <h3>Preparatory School</h3>
              <p>Fostering essential skills to excel in the next academic level.</p></div>
          </div>
          </div>
        </section>
    </>
    )
  
}
export default Smarty