const Card = ({ date, course, exam, teacher, score, final }) => {
  const isScorePassing = score >= final / 2;

  return (
    <>
      <div className="fw-semibold text-secondary">{date.toDateString()}</div>
      <div className="grades d-flex fw-bold">
        <div className="p-1 d-flex justify-content-center">{course}</div>
        <div className="p-1 d-flex justify-content-center">{exam}</div>
        <div className="p-1 d-flex justify-content-center">{teacher}</div>
        <div
          className="p-1 d-flex justify-content-center"
          style={{ color: isScorePassing ? "green" : "red" }}
        >
          {score}/{final}
        </div>
      </div>
    </>
  );
};

export default Card;
