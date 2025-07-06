import AddReview from "../../features/reviewcomponent/AddReview/AddReview";
import ReviewCard from "../../features/reviewcomponent/Postreview/PostReview";
import postsData from "../../data/socialPostsapi";
import '../Commuinty/post.css'
import { useState } from "react";
import Header from "../../layout/NavBar/Header";
import Footer from "../../layout/Footer/Footer";


const Reviewpage = () => {
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
       <div className="SocialTitle">feel free to tell us your review
         </div>
        <AddReview onAddPost={handleAddPost} />
        
      <div className="SocialTitle text-center mt-2">Reviews :</div>
      <div >
        {posts.length === 0 ? (
          <p>No Reviews yet.</p>
        ) : (
          <ul className="list-group">
            {posts.map((post) => (
              <ReviewCard key={post.id} post={post} />
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

export default Reviewpage;
