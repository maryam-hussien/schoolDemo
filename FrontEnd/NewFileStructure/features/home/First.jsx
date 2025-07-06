import Slider from 'react-slick';
import { FaSchool, FaCertificate, FaBookOpen } from 'react-icons/fa';
import { MdStars, MdLibraryBooks } from 'react-icons/md';
import { BiMedal } from 'react-icons/bi';
import '../../pages/Home/home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const First = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4, 
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
        <h1 style={{textAlign:'center',marginTop:'50px',display:'flex',alignItems:'center',justifyContent:'center'}}>Discover Our <span style={{color:' #0A505B',marginLeft:'8px',marginRight:'8px'}}>High</span> Quality</h1>
        <div className='all'>
            <Slider {...settings}>
                <div className="feature-card">
                    <FaSchool className="feature-icon" />
                    <h3>Our School</h3>
                    <p>We take pride in our famous teaching traditions & achievements.</p>
                </div>
                <div className="feature-card">
                    <MdStars className="feature-icon" />
                    <h3>Why Choose Us?</h3>
                    <p>Our school ranked among the top 10 best schools for children aged 13-19.</p>
                </div>
                <div className="feature-card">
                    <FaBookOpen className="feature-icon" />
                    <h3>Activities</h3>
                    <p>We have arranged a wide range of activities for our students.</p>
                </div>
                <div className="feature-card">
                    <FaCertificate className="feature-icon" />
                    <h3>Certifications</h3>
                    <p>We have had the honor of becoming the Best School for Science in 2017.</p>
                </div>
                <div className="feature-card">
                    <BiMedal className="feature-icon" />
                    <h3>Reputation</h3>
                    <p>We have a good reputation for friendly teaching & learning environment.</p>
                </div>
                <div className="feature-card">
                    <MdLibraryBooks className="feature-icon" />
                    <h3>Courses</h3>
                    <p>We have the most modern library for the referencing needs of students.</p>
                </div>
            </Slider>
        </div>
        </>
    );
}

export default First;
