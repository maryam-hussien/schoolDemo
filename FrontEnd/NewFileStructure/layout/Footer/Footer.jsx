import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./footer.css"
import footerImg from "../../assets/images/Cityscapes - Town.png"
import { EnvelopeAt , TelephoneFill, SuitHeartFill  } from 'react-bootstrap-icons';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';




const Footer = () => {
  return (
    <div className="position-static bottom-0 w-100  footerColor pt-2  d-flex flex-column ">
      <div className='d-flex flex-row justify-content-evenly align-items-center footerFont flex-wrap '>
        <div className='d-flex flex-column mx-auto my-3 '>
          <div className='fs-5 fw-medium mb-1'>Contact Details : </div>
          <div className='d-flex flex-column '>
          <div className='text-center  footerText opacity-75 mb-1'> If you have any questions or need assistance, please feel free to contact our team.</div>
          <div className="d-flex align-items-center ">
                <EnvelopeAt style={{ color: '#fddb88', fontSize: '18px' }} />
                <span className="ms-2">info@school.com</span>
              </div>
              <div className="d-flex align-items-center pt-1">
                <TelephoneFill style={{ color: '#fddb88', fontSize: '20px' }} />
                <span className="ms-2">01097315496</span>
              </div>
              
            
          </div>
          <div className="top-navbar">
          <div className="container d-flex flex-column flex-md-row justify-content-end">
            <div className="sicon d-flex flex-column  align-items-left">
            <div className="social-icons d-flex align-items-center">
              <a href="#" className="text-light mx-2">
                <Facebook style={{ color: '#fddb88', fontSize: '20px' }} />
              </a>
              <a href="#" className="text-light mx-2">
                <Twitter style={{ color: '#fddb88', fontSize: '20px' }} />
              </a>
              <a href="#" className="text-light mx-2">
                <Instagram style={{ color: '#fddb88', fontSize: '20px' }} />
              </a>
            </div>
            </div>
            
          </div>
        </div>
        </div>
        <div  className='d-flex flex-column m-auto align-items-center '>
        <div className='fs-5 fw-medium mb-1 '>Pages</div>
        <ul className="list-unstyled">
        <li className='mb-2'>
          <Link to="/teachers" className='fs-6 opacity-75 text-decoration-none text-white'>
            Teachers
          </Link>
        </li>
        <li className='mb-1'>
          <Link to="/courses" className='fs-6 opacity-75 text-decoration-none text-white'>
            Courses
          </Link>
        </li>
        <li className='mb-1'>
          <Link to="/about-us" className='fs-6 opacity-75 text-decoration-none text-white'>
            AboutUs
          </Link>
        </li>
        <li className='mb-1'>
          <Link to="/menu" className='fs-6 opacity-75 text-decoration-none text-white'>
            Menu
          </Link>
        </li>
      </ul>
      </div>
        <div  className='d-flex flex-column m-auto align-items-center '>
        <div className='fs-5 fw-medium mb-1 '>Pages</div>
        <ul className="list-unstyled">
        <li className='mb-2'>
          <Link to="/teachers" className='fs-6 opacity-75 text-decoration-none text-white'>
            Teachers
          </Link>
        </li>
        <li className='mb-1'>
          <Link to="/courses" className='fs-6 opacity-75 text-decoration-none text-white'>
            Courses
          </Link>
        </li>
        <li className='mb-1'>
          <Link to="/about-us" className='fs-6 opacity-75 text-decoration-none text-white'>
            AboutUs
          </Link>
        </li>
        <li className='mb-1'>
          <Link to="/menu" className='fs-6 opacity-75 text-decoration-none text-white'>
            Menu
          </Link>
        </li>
      </ul>
      </div>
        <div>
          <img src={footerImg} className='opacity-75 position-static img-fluid m-auto'/>
        </div>
      </div>
     
      <div className='d-flex flex-row footerSecColor p-1 justify-content-evenly footerFont'>
      <div className='text-start  footerText opacity-75 mt-2 '>
          CopyRight 2024 <span className='yellow'>@</span> All Rights Reserved
      </div>
      <div className='text-center opacity-75'>made with love 
      <SuitHeartFill style={{ color: '#fd7899', fontSize: '20px' ,margin:'2px' }} />
        </div>       
      </div>
      
      </div>
  )
}

export default Footer