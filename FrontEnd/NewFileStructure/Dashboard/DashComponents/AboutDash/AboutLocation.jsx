import { useState } from "react";
import Button from "../../../components/Button/Button";


function AddLocation() {
  const initialLocation = "Abou Al Hool Al Seiahi, Nazlet El-Semman, Al Haram, Giza Governorate 12557";
  const initialMapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.149864519135!2d31.138869715067827!3d29.9751227819076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584506784efed1%3A0x961ab3bea72d0739!2segypt%20pyramids%20inn!5e0!3m2!1sen!2seg!4v1657462371337!5m2!1sen!2seg";

  const [location, setLocation] = useState(initialLocation);
  const [mapSrc, setMapSrc] = useState(initialMapSrc);
  const [submittedLocation, setSubmittedLocation] = useState("");
  const [submittedMapSrc, setSubmittedMapSrc] = useState("");

  const handleLocationSubmit = (e) => {
    e.preventDefault(); 
    setSubmittedLocation(location);
    setSubmittedMapSrc(mapSrc);
    console.log("Submitted Location:", location);
    console.log("Submitted Google Map Source:", mapSrc);
  };

  return (
    <>
      <h5 className="card-title">School Location:</h5>
      <div className="card">
        <form onSubmit={handleLocationSubmit}>
          <label>
            Enter School Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
            />
          </label>
          <label>
            Google Map Source (URL):
            <input
              type="text"
              value={mapSrc}
              onChange={(e) => setMapSrc(e.target.value)}
              placeholder="Enter Google Maps embed link"
            />
          </label>
          <Button className="addbtn" label="Submit" color="primary" />
        </form>
      </div>

 
      {submittedLocation && submittedMapSrc && (
        <div className="submitted-info">
          <h6>Submitted Information:</h6>
          <p><strong>Location:</strong> {submittedLocation}</p>
          <p><strong>Google Map Source:</strong></p>
          <iframe
            className="map"
            src={submittedMapSrc}
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </>
  );
}

export default AddLocation;
