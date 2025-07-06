import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { enUS } from 'date-fns/locale'; // Import the locale directly


const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { 'en-US': enUS },
});

// Example attendance data
const attendanceData = [
  { title: '✔️ Present', start: new Date('2024-10-01'), end: new Date('2024-10-01') },
  { title: '❌ Absent', start: new Date('2024-10-02'), end: new Date('2024-10-02') },
  // Add more days as needed
];

const ProfileAttendance = () => {
  return (
    <div className='ProfileScheduleSection m-auto mt-3 px-3 py-3  fs-5 ' >
    <Calendar
      localizer={localizer}
      events={attendanceData}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500  ,backgroundColor: 'white'}}
      views={['month']} // Only show month view
      popup={true}
      eventPropGetter={(event) => ({
        style: { backgroundColor: event.title.includes('✔️') ? 'green' : 'red' }
      })}
    />
    </div>
  );
};

export default ProfileAttendance;
