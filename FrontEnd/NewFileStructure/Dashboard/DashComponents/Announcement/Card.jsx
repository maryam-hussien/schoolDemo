
const Card = ({announce ,key}) => {
  return (
    <div key={key} className="d-announcement-card">

      <div className="cardHead">
    <div><strong>Level:</strong> {announce.level }</div>
    <div><strong>Grade:</strong> {announce.grade ? (announce.grade ): ("none")}</div>
    <div><strong>Subject:</strong> {announce.subject ?  (announce.subject ): ("none")}</div>
      </div>
    <div><strong>Announcement Message:</strong> {announce.message}</div>
    {announce.googleFormLink ? (
        <div>
          <strong>Quiz:</strong>{" "}
          <a
            href={announce.googleFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="quiz-link"
          >
            Open Quiz
          </a>
        </div>
      ) : (
        <div><strong>Quiz:</strong> none</div> // If no link, show "None"
      )}
                  <div ><strong> Date:</strong> {announce.createdDate || "Date not available"}</div>

  </div>
  )
}

export default Card