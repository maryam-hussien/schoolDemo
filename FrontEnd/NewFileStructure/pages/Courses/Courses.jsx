import { useState } from "react";
import courses from "../../../public/data/coursresapi";
import "./courses.css";
import Header from "../../layout/NavBar/Header";
import Footer from "../../layout/Footer/Footer";
import Filter from "../../features/Courses/Filter";
import CourseCard from "../../features/Courses/coursecard";
import Pagination from "../../features/Courses/Pagenation";

const CoursesPage = () => {
  const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [ratings, setRatings] = useState({});
  const itemsPerPage = 7;

  const filteredCourses = (courses || []).filter((course) => {
    if (filter === "more") {
      return course.creator === "Mr. John" && course.title?.toLowerCase().includes(searchQuery.toLowerCase());
    }
    const matchesLevel = filter ? course.level?.toLowerCase() === filter.toLowerCase() : true;
    const matchesSearch = course.title?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const displayedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleStarClick = (uniqueId, rating) => {
    setRatings((prev) => ({ ...prev, [uniqueId]: rating }));
  };

  return (
    <>
      <Header />
      <div className="courses">
        <div className="fsection">
          <h1>My Courses</h1>
          <div className="nav-links">
            <a
              href="#"
              onClick={() => setFilter("")} 
              className={!filter ? "active" : ""}
            >
              All Courses
            </a>
            <a
              href="#"
              className={filter === "more" ? "active" : ""}
              onClick={() => setFilter("more")}
            >
              My Courses
            </a>
          </div>
        </div>
        <Filter
          filter={filter}
          setFilter={setFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
       <div className="course-grid">
  {displayedCourses.length > 0 ? (
    displayedCourses.map((course) => (
      <CourseCard
        key={`${course.level}-${course.grade}`}
        course={course}
        rating={filter === "more" ? ratings[`${course.level}-${course.grade}`] || 0 : null} // Only pass rating for "My Courses"
        handleStarClick={filter === "more" ? handleStarClick : null} // Pass the handler only for "My Courses"
      />
    ))
  ) : (
    <p>No courses available.</p>
  )}
</div>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <Footer />
    </>
  );
};

export default CoursesPage;