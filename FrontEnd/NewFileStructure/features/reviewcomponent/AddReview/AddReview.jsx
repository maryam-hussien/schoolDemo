import { useState } from "react";
import "./AddReview.css";
import SwitchBtn from "../SwitchBtn";

const AddReview = ({ onAddPost }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [isParentMode, setIsParentMode] = useState(false); // Track switch state

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      id: Math.floor(Math.random() * 1000),
      content,
      date: new Date().toISOString().split("T")[0],
      likes: 0,
      comments: [],
      image: image ? URL.createObjectURL(image) : null,
      sharedBy: [],
      isParentMode, // Add parent mode flag to post
    };

    onAddPost(newPost);

    // Clear form inputs
    setContent("");
    setImage(null);
  };

  return (
    <div className="card mb-4 AddPost">
      <div className="card-body">
        <h5 className="card-title mb-4">Add Review</h5>
        <form onSubmit={handleSubmit}>
          <div className="d-flex align-items-start mb-3 flex-wrap mt-1 w-75">
            <div className="flex-grow-1">
              <textarea
                className="form-control border-0"
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="3"
                placeholder="Write your review here..."
                required
              ></textarea>
              <SwitchBtn isOn={isParentMode} setIsOn={setIsParentMode} />
            </div>
          </div>

          <hr className="border border-secondary w-100" />

          <div className="addpostLastSec d-flex justify-content-between align-items-center">
            <button type="submit" className="btn btn-primary">
              Add Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
