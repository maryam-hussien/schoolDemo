import { useState } from "react";
import Button from "../../../components/Button/Button";
import './review.css';

function Review() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      name,
      review,
      profilePhoto: profilePhoto ? URL.createObjectURL(profilePhoto) : null, 
    };

    setReviews((prevReviews) => [...prevReviews, newReview]);
    setName("");
    setReview("");
    setProfilePhoto(null);
  };

  return (
    <>
      <div className="dashAbout">
        <div className="dashComponentTitle "> Review Management Dashboard</div>
        <div className="card">
          <form onSubmit={handleReviewSubmit}>
            <label>
              Parent Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter parent name"
              />
            </label>
            <label>Review Message:</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Enter your review"
              rows="4"
              style={{ width: '90%' }}
            ></textarea>
            <label>
              Upload Profile Photo:
              <input
                className="input1"
                type="file"
                accept="image/*"
                onChange={(e) => setProfilePhoto(e.target.files[0])}
              />
            </label>
            <Button className="addbtn" label="Submit" color="primary" />
          </form>
        </div>

        <div className="reviewCards">
          {reviews.map((review, index) => (
            <div key={index} className="reviewCard">
              {review.profilePhoto && (
                <img
                  src={review.profilePhoto}
                  alt={`${review.name}'s profile`}
                  className="profilePhoto"
                />
              )}
              <h4>{review.name}</h4>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Review;
