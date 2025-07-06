import Card from "../gradeCard/Card";

const ProfileScores = () => {

  const exams = [
    { date: new Date('2024-09-30'),exam :'final', course: ' Science',teacher:'Mrs/Maryam', score: '50',finalGrade:'100' },
    { date: new Date('2024-10-05'),exam :'final', course: ' Math',teacher:'Mrs/Maryam', score: '20',finalGrade:'60' },
    { date: new Date('2024-12-10'),exam :'midterm', course: ' Arabic', teacher:'Mrs/Maryam',score: '0',finalGrade:'10' },
  ];

  // Sort exams array by date (ascending order)
  exams.sort((a, b) => a.date - b.date);

  
  return (
    <div className="mt-2">
    
      {exams.map((exam, index) => (
        <div
          key={index}
          className="gradeCard d-flex flex-column mx-auto my-2"
          style={{ backgroundColor:'#cdeef1 ' ,display:'flex', flexWrap:'wrap'}}
        >
        <Card date={exam.date} course={exam.course} exam={exam.exam} teacher={exam.teacher} score={exam.score} final={exam.finalGrade}/>
        </div>
      ))}
    </div>
  );
};

export default ProfileScores;
