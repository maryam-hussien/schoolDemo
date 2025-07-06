import '../../pages/About/about.css'
const Schoolloc =()=> {
  return (
    <>
      <div className="contaier">
        <p>Abou Al Hool Al Seiahi, Nazlet El-Semman, Al Haram, Giza Governorate 12557</p>
      <iframe
  className="map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.149864519135!2d31.138869715067827!3d29.9751227819076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584506784efed1%3A0x961ab3bea72d0739!2segypt%20pyramids%20inn!5e0!3m2!1sen!2seg!4v1657462371337!5m2!1sen!2seg"
  width="600"
  height="450"
  style={{ border: '0' }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"/>
      </div>
    </>
    )
  }
export default Schoolloc