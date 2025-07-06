
const DashCardCourse = ({ course, index, handleEditCourse, handleDeleteCourse }) => {
  return (
    <div className="col-md-4" key={index}>
      <div className="card" style={{ backgroundColor: course.backgroundColor }}>
        <img src={course.image} alt={course.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">{course.description}</p>
          <button className="btn btn-warning" onClick={() => handleEditCourse(index)}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => handleDeleteCourse(index)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashCardCourse;
