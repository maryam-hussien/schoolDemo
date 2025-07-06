import AddPost from "../../features/Commuinty/AddPost/AddPost";
import PostCard from "../../features/Commuinty/PostCard/PostCard";
import postsData from "../../data/socialPostsapi";
import './post.css'
import { useState } from "react";
import Header from "../../layout/NavBar/Header";
import Footer from "../../layout/Footer/Footer";
import { Link } from "react-router-dom";



const Post = () => {
  const [posts, setPosts] = useState(postsData); // Initialize state with imported posts data

  // Handler function to add a new post
  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => [newPost , ...prevPosts]); // Update the posts state with the new post
  };
  return (
    <>
      <Header/>
    <div className="Social p-3">
      <div className="d-flex flex-wrap px-3 SocialDiv">
      <Link to="/review" className="reviewroute">
        <div>Any Reviews?</div>
      </Link>     
        <div className="SocialTitle">Here's Our Network!
         </div>
        <AddPost onAddPost={handleAddPost} />
      <div className="SocialTitle text-center mt-2">POSTS :</div>
      <div >
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          <ul className="list-group">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </ul>
        )}
            </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Post;
