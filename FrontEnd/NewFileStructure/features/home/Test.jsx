import '../../pages/Home/home.css';
import parent1 from '../../assets/images/4eb3c3ef5c0cd7a4b05da47602427c97.jpg';
import parent2 from '../../assets/images/e26a33b95639e3b1621446a42f47faaa.jpg';
import { useNavigate } from 'react-router-dom';
const Test=()=> {
    const navigate = useNavigate();
    const handleTestimonialLearnMoreClick = () => {
        navigate('/post');
      };
    return (
     <>
     <section className="testimonial-section">
          <h2>What <span style={{color:'rgb(10, 80, 91)'}}>Parents</span> Say</h2>
          <div className="testimonial-container">
            <div className="testimonial-card">
            <div className="card-image">
                <img src={parent1} alt="Parent Testimonial" className="testimonial-image" />
                <h4>Ankeila Mokina</h4>
              </div>
              <p>
                As a parent, I have been thoroughly impressed with the quality of education my child receives at this school. The teachers are dedicated, approachable, and genuinely care about the students’ success.
              </p>
              
            </div>
            <div className="testimonial-card">
            <div className="card-image">
                <img src={parent2} alt="Parent Testimonial" className="testimonial-image" />
                <h4>Mick Maxwell</h4>
              </div>
              <p>
                I am absolutely thrilled with the quality of education my child is receiving at this school. The teachers are not only highly qualified, but they also show a genuine passion for helping students to succeed.
              </p>
             

            </div>
          </div>
          <button
                  className="learn-more-text" 
                  onClick={handleTestimonialLearnMoreClick}
                 style={{color:"#0A505B",fontSize:"20px",fontWeight:"bold"}}
                >
                 Learn More
                </button>
        </section>
     </>
    )
  
}
export default Test