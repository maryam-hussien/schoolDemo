
import school1 from '../../assets/images/download (1).png';
import school2 from '../../assets/images/download (2).png';
import school3 from '../../assets/images/download3.jpg';
import school4 from '../../assets/images/download (4).jpg';
import '../../pages/Home/home.css';

const Logos=()=> {

    return (
   <>
   <section className='logos'>
    <h2>Schools <span style={{color:"rgb(10, 80, 91)"}}>Uses Our</span> Website</h2>
   <img src={school1} className='img1' />
   <img src={school2}   className='img1' />
   <img src={school3}   className='img1' />
   <img src={school4}   className='img1' />
   </section>
   
   </>
    )

}
export default Logos