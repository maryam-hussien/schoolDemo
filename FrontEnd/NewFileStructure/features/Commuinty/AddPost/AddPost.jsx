import { useState, useRef } from 'react';
import './AddPost.css';
import { FaImage } from 'react-icons/fa'; 

const AddPost = ({ onAddPost }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null); // Ref to handle file input

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      id: Math.floor(Math.random() * 1000), // Generate a random ID for the post
      content,
      date: new Date().toISOString().split('T')[0], // Current date
      likes: 0,
      comments: [],
      image: image ? URL.createObjectURL(image) : null,
      sharedBy: [],
    };

    // Call the onAddPost function passed from App
    onAddPost(newPost);

    // Clear form inputs
    setContent('');
    setImage(null);
  };

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="card mb-4 AddPost">
      <div className="card-body">
        <h5 className="card-title mb-4 ">Add Post</h5>

        <form onSubmit={handleSubmit}>
          <div className="d-flex align-items-start mb-3 flex-wrap mt-1 w-75"> 
            <img
              src="https://via.placeholder.com/40"
              alt="none"
              className="rounded-circle me-3"
            />
            <div className="flex-grow-1">
              <textarea
                className="form-control border-0 "
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="3"
                placeholder="What's on your mind?"
                required
              ></textarea>
            </div>
          </div>

          {/* Divider */}
          <hr className="border border-secondary w-100" />

          <div className='addpostLastSec'>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                <FaImage
                  onClick={() => fileInputRef.current.click()} // Trigger file input click
                  className="image-icon"
                />
                <input
                  type="file"
                  className="d-none" // Hide the file input
                  id="image"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                />
              </label>
              {image && <p className="mt-2">Image: {image.name}</p>} 
            </div>
            <div>
            <button type="submit" className="btn btn-primary">Add Post</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
