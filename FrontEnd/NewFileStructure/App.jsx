import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home/Home';
import About from './pages/About/About'
import Authentication from './pages/Authentication/Authentication'
import Courses from "./pages/Courses/Courses";
import Post from "./pages/Commuinty/Post";
import DashHome from "./Dashboard/DashPages/DashHome/DashHome"
import Profile from "./pages/Profile/Profile"
import Announcement from "./pages/announcement/Announcement";
import Reviewpage from "./pages/Review/Reviewpage";
function App() {

  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/login" element={<Authentication />} />
          <Route path='/community' element={<Post/> }/>
          <Route path='/profile/*' element={<Profile/>}/>
          <Route path='/review' element={<Reviewpage/>}/>
          <Route path='/announcement' element={<Announcement/>}/>
          <Route path='/dashboard/*' element={<DashHome/>}/>

      </Routes>
    </Router>
  );
}

export default App;
