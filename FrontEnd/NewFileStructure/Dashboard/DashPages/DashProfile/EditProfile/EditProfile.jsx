import { useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons"; 
import { useNavigate } from "react-router-dom"; 
import "./EditProfile.css";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "User name",
    email: "mi@xpaytech.co",
    phone: "+20-01274318900",
    address: "285 N Broad St, Elizabeth, NJ 07208, USA",
    profileImage: null,
  });

  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    
    alert("Your changes have been saved successfully!");
  };

  const handleDeleteAccount = () => {
    const confirmed = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (confirmed) {
    
      alert("Your account has been deleted.");
    }
  };
    const goBackToProfile = () => {
    navigate('/dashboard/dashProfile');
  };
  return (
    <div className="edit-profile-container">

      <div className="back-btn" onClick={goBackToProfile} style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
        <ArrowLeft size={24} style={{ marginRight: "8px" }} />
        <span>Back to Profile</span>
      </div>


      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="profileImage">Profile Image:</label>
          <input type="file" id="profileImage" onChange={handleImageChange} />
          {formData.profileImage && (
            <img
              src={formData.profileImage}
              alt="Profile Preview"
              className="image-preview"
            />
          )}
        </div>

        <button type="submit" className="save-btn">
          Save Changes
        </button>

        <button type="button" className="delete-btn" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
