import coreValue1 from '../../assets/images/4488f2b7aa2c953fbadd15fc51ce62bf.jpg';
import coreValue2 from '../../assets/images/1249636d803793f0d04ae77ab50097c7.jpg';
import coreValue3 from '../../assets/images/ai-generated-8659303_1280.jpg';
import coreValue4 from '../../assets/images/child-2835430_1280.jpg';
import '../../pages/Home/home.css';
const  Core =()=>  {

    return (
     <>
      <section className="core-values-section ">
      <h2>Our <span style={{color:'rgb(10, 80, 91)'}}>Core</span> Values</h2>
  <div className="core-values-grid ">
    <div className="core-value-card">
      <img src={coreValue1} alt="Learning & Fun" className="core-value-image" />
      <div className="core-value-text">
        <h3>Learning & Fun</h3>
        <p>We promote an environment where children learn through fun and engaging activities.</p>
      </div>
    </div>
    <div className="core-value-card">
      <img src={coreValue2} alt="Healthy Meals" className="core-value-image" />
      <div className="core-value-text">
        <h3>Healthy Meals</h3>
        <p>Our menu is curated to ensure children receive balanced and nutritious meals every day.</p>
      </div>
    </div>
    <div className="core-value-card">
      <img src={coreValue3} alt="Children Safety" className="core-value-image" />
      <div className="core-value-text">
        <h3>Children Safety</h3>
        <p>We maintain a safe and secure environment for all children in our school.</p>
      </div>
    </div>
    <div className="core-value-card">
      <img src={coreValue4} alt="Cute Environment" className="core-value-image" />
      <div className="core-value-text">
        <h3>Cute Environment</h3>
        <p>Our classrooms are designed to be engaging, colorful, and welcoming to every child.</p>
      </div>
    </div>
  </div>
</section>
     </>
    )
  }
export default Core