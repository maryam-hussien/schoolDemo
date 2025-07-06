import './home.css';
import Header from '../../layout/NavBar/Header';
import Smarty from '../../features/home/Smarty';
import First from '../../features/home/First';
import Logos from '../../features/home/Logos';
import Test from '../../features/home/Test';
import Core from '../../features/home/Core'
import Footer from '../../layout/Footer/Footer'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const handleLearnMoreClick = () => {
    navigate('/about');
  };

 return (
    <>
      <Header />
      <div className="home">
        <section className="hero-section">
        
          <div className="info-section">
            <h2>Welcome to School Team</h2>
            <p>
              We understand that each of our students is a uniquely talented individual students are facilitated to develop positive relationships.
            </p>
            <button className="learn-more-button" onClick={handleLearnMoreClick}>
              Learn More
            </button>
          </div>
        </section>
      
         <First />
         <Smarty />
         <Core />
         <Logos />
         <Test />
         
        </div>
        <Footer/>
    </>
  );
};

export default Home;
