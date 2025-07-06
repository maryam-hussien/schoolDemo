import './about.css'
import Schoolabout from '../../features/About/Schoolabout'
import Schoolhist from '../../features/About/Schoolhist'
import Schoolloc from '../../features/About/Schoolloc'
import Slide from '../../Components/Slider/Slide'
import Header from '../../layout/NavBar/Header'
import Footer  from '../../layout/Footer/Footer'
import Image from '../../features/About/Image'
//import Course from '../../features/Home/Course'
const About = () => {
  return (
    <>
     <Header />
           <div className='about'>
            <Image />
    <h1 className='center'>ABOUT SCHOOL</h1>
    <Schoolabout />
    <h1 className='center'>HISTORY OF SCHOOL</h1>
   <Schoolhist />
   
    <h1 className='center'>SCHOOL LOCATION</h1>
    <Schoolloc />
    <h1 className='center'>OUR TEACHERS</h1>
    <div className='slider'>
    <Slide />
    </div>

    </div>
   <Footer/>
    </>
  )
}
export default About
