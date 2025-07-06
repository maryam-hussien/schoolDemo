import Header from "../../layout/NavBar/Header";
import Footer from "../../layout/Footer/Footer";
import './announcement.css';
import Card from "../../features/announcement/Card";
import announcements from "../../data/announcement";

const Announcement = () => {
  // Get today's date and calculate the start of the current week (Monday)
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Remove the time part for today

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - 7); // First day of this week (Monday)
  
  const thisWeek = [];
  const earlierThisYear = [];

  // Categorize announcements based on the date
  announcements.forEach((announcement) => {
    const announcementDate = new Date(announcement.date);
    announcementDate.setHours(0, 0, 0, 0); // Remove the time part for the announcement date

    // Check if the announcement is within this week
    if (
      announcementDate >= startOfWeek &&
      announcementDate <= today
    ) {
      thisWeek.push(announcement);
    } else {
      earlierThisYear.push(announcement);
    }
  });

  return (
    <>
      <Header />
      <div className="announcement">
        <h2 className="announcementTitle">Announcements Feed:</h2>

        {/* Render This Week announcements */}
        {thisWeek.length > 0 && (
          <>
            <h4>This Week</h4>
            <Card announcements={thisWeek} />
          </>
        )}

        {/* Render Earlier This Year announcements */}
        {earlierThisYear.length > 0 && (
          <>
            <h4>Earlier This Year</h4>
            <Card announcements={earlierThisYear} />
          </>
        )}

      </div>
      <Footer />
    </>
  );
};

export default Announcement;
