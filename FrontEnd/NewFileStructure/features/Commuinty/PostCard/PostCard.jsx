import { useState } from "react";
import "./PostCard.css";
import { ChatSquareDots, HeartFill, Heart } from "react-bootstrap-icons";
import image from "../../../assets/images/cat.jpeg";

const PostCard = ({ post }) => {
  // State to track if the post is liked
  const [isLiked, setIsLiked] = useState(false);
  // State to track the number of likes
  const [likes, setLikes] = useState(post.likes);
  // State to track if the comments are visible
  const [areCommentsVisible, setAreCommentsVisible] = useState(false);
  // State to track new comment text
  const [newComment, setNewComment] = useState("");
  // State to track all comments
  const [comments, setComments] = useState(post.comments || []);

  // Handle the like button click
  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1); // Decrease like if already liked
    } else {
      setLikes(likes + 1); // Increase like
    }
    setIsLiked(!isLiked); // Toggle the liked state
  };

  // Handle the comment button click to show/hide comments
  const handleComment = () => {
    setAreCommentsVisible(!areCommentsVisible); // Toggle visibility of comments
  };
  // Handle new comment submission
  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1, // Simple ID generation, replace with unique ID if needed
        commenter: "User", // Hardcoded for now, replace with actual user data
        comment: newComment,
      };
      setComments([...comments, newCommentObj]); // Add new comment to comments list
      setNewComment(""); // Reset the input field
    }
  };

  return (
    <li className="list-group-item PostCard">
      <div className="d-flex justify-content-between align-items-center">
        <div className="socialTopCard">
          <img src={image} alt="none" />
          <div>{post.author}</div>
        </div>
        <div className="text-muted text-end">({post.date})</div>
      </div>
      <hr className="socialdivider"></hr>

      <div className="socialpostsection">
        <p>{post.content}</p>
        {post.image && <img src={image} alt="Post" />}
      </div>
      
      <div className="ActionNumbers">
        <span className="ms-2 socialLikes"> {likes} Likes On This Post</span>
        <span className="ms-2 socialLikes">
          {Array.isArray(post.comments) ? post.comments.length : 0} Comments
        </span>
      </div>
      <hr className="socialdivider"></hr>

      <div className="mt-2 d-flex flex-row ms-2 Postactions">
        <div className="d-flex align-items-center">
          {isLiked ? (
            <HeartFill
              style={{ color: "red", fontSize: "18px", cursor: "pointer" }}
              onClick={handleLike}
            />
          ) : (
            <Heart
              style={{ color: "black", fontSize: "18px", cursor: "pointer" }}
              onClick={handleLike}
            />
          )}
          <span className="ms-2 socialLikes">Likes</span>
        </div>

        <div className="d-flex align-items-center ms-4">
          <ChatSquareDots
            style={{ color: "blue", fontSize: "18px", cursor: "pointer" }}
            onClick={handleComment}
          />
          <span className="ms-2 socialLikes">
            Comments
          </span>
        </div>
      </div>
      <hr className="socialdivider"></hr>
      <div className="comment-section mt-3 mb-1 ">
        <textarea
          className="form-control w-75 me-3"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleAddComment}>
          Add Comment
        </button>
      </div>
      {areCommentsVisible && (
        <ul className="list-unstyled ms-4 mt-2 socialComments">
          {Array.isArray(post.comments) && post.comments.length > 0 ? (
            comments.map((comment) => (
              <li key={comment.id} className="mb-1">
                <strong>{comment.commenter}:</strong> {comment.comment}
              </li>
            ))
          ) : (
            <li>No comments yet</li>
          )}
        </ul>
      )}
    </li>
  );
};

export default PostCard;
