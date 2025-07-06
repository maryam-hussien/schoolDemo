import "./profileSchedule.css"
const ProfileSchedule = () => {
  return (
 <div className=" container mt-3 ProfileScheduleSection">
      
      <table className="table table-bordered table-hover table-responsive ">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Monday</th>
            <th scope="col">Tuesday</th>
            <th scope="col">Wednesday</th>
            <th scope="col">Thursday</th>
            <th scope="col">Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">08:00 - 09:00</th>
            <td>Math</td>
            <td>Physics</td>
            <td>Chemistry</td>
            <td>History</td>
            <td>PE</td>
          </tr>
          <tr>
            <th scope="row">09:00 - 10:00</th>
            <td>English</td>
            <td>Math</td>
            <td>Biology</td>
            <td>English</td>
            <td>Physics</td>
          </tr>
          <tr>
            <th scope="row">10:00 - 11:00</th>
            <td>Chemistry</td>
            <td>Biology</td>
            <td>Math</td>
            <td>PE</td>
            <td>Chemistry</td>
          </tr>
          <tr>
            <th scope="row">11:00 - 12:00</th>
            <td>PE</td>
            <td>History</td>
            <td>Math</td>
            <td>English</td>
            <td>Biology</td>
          </tr>
          <tr>
            <th scope="row">12:00 - 01:00</th>
            <td>Lunch Break</td>
            <td>Lunch Break</td>
            <td>Lunch Break</td>
            <td>Lunch Break</td>
            <td>Lunch Break</td>
          </tr>
          <tr>
            <th scope="row">01:00 - 02:00</th>
            <td>Physics</td>
            <td>Chemistry</td>
            <td>History</td>
            <td>Biology</td>
            <td>English</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProfileSchedule;
