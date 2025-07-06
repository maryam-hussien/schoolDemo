import AddAboutSchool from "../../DashComponents/AboutDash/AboutAdd";
import AddLocation from "../../DashComponents/AboutDash/AboutLocation";
import AddHistory from "../../DashComponents/AboutDash/AddHist";
import "./DashAbout.css";

function DashAbout() {
  return (
    <div className="dashAbout">
      <div className="dashComponentTitle ">About Management Dashboard</div>
      <div className="aboutcards">
        <div className="card">
          <AddAboutSchool />
        </div>
        <div className="card">
          <AddLocation />
        </div>
        <div className="card">
          <AddHistory />
        </div>
      </div>
    </div>
  );
}

export default DashAbout;
