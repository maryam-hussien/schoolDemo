import './DashCont.css';
import { Person, PersonAdd, People, CurrencyDollar } from 'react-bootstrap-icons';
import AttendanceChart from '../../DashComponents/AboutDash/Attendance'; 
import { useNavigate} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Dashcont = () => {
    const navigate = useNavigate();

    const attendanceData = [
        { day: 'Mon', present: 75, absent: 25 },
        { day: 'Tue', present: 50, absent: 50 },
        { day: 'Wed', present: 55, absent: 45 },
        { day: 'Thu', present: 70, absent: 30 },
        { day: 'Fri', present: 60, absent: 40 },
    ];

 
    const handleAddStudent = () => {
        navigate('/dashboard/students'); 
    };

    const teacherList = [
        { name: 'Morris Johnson', class: 'Class 6', subject: 'English', email: 'morrisjohnson@gmail.com' },
        { name: 'Jane Cooper', class: 'Class 5', subject: 'Music', email: 'janecooper@gmail.com' }
    ];

    const studentList = [
        { name: 'Tom Smith', class: 'Class 4', subject: 'Mathematics', email: 'tomsmith@gmail.com' },
        { name: 'Lucy Williams', class: 'Class 3', subject: 'Science', email: 'lucywilliams@gmail.com' }
    ];

    const renderTable = (list) => (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Subject</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.class}</td>
                        <td>{item.subject}</td>
                        <td>{item.email}</td>
                        <td>...</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="dashboard-contain">
            <h1 >Dashboard</h1>
            <div className="stat-cards">
                <div className="stat-card student-card" style={{ backgroundColor: "#A2D2DF" }}>
                    <div className="icon-container student-icon-bg d-flex align-items-center">
                        <People className="stat-icon" style={{ fontSize: '55px', color: 'black' }} />
                        <div className="stat-dash" style={{ width: '2px', height: '70px', backgroundColor: 'black', margin: '0 10px' }}></div>
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">Number of Students</div>
                        <div className="stat-number">2468</div>
                    </div>
                </div>
                <div className="stat-card teacher-card" style={{ backgroundColor: "#E7CCCC" }}>
                    <div className="icon-container teacher-icon-bg d-flex align-items-center">
                        <PersonAdd className="stat-icon" style={{ fontSize: '55px', color: 'black' }} />
                        <div className="stat-dash" style={{ width: '2px', height: '70px', backgroundColor: 'black', margin: '0 10px' }}></div>
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">Number of Teachers</div>
                        <div className="stat-number">245</div>
                    </div>
                </div>
                <div className="stat-card employee-card" style={{ backgroundColor: "rgb(223, 197, 212)" }}>
                    <div className="icon-container employee-icon-bg d-flex align-items-center">
                        <Person className="stat-icon" style={{ fontSize: '55px', color: 'black' }} />
                        <div className="stat-dash" style={{ width: '2px', height: '70px', backgroundColor: 'black', margin: '0 10px' }}></div>
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">Number of Employees</div>
                        <div className="stat-number">508</div>
                    </div>
                </div>
                <div className="stat-card revenue-card" style={{ backgroundColor: "#D9EDBF" }}>
                    <div className="icon-container revenue-icon-bg d-flex align-items-center">
                        <CurrencyDollar className="stat-icon" style={{ fontSize: '50px', color: 'black' }} />
                        <div className="stat-dash" style={{ width: '1px', height: '70px', backgroundColor: 'black', margin: '0 10px' }}></div>
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">Total Revenue</div>
                        <div className="stat-number">$2,32,468</div>
                    </div>
                </div>
            </div>

            <div className="main-dashboard">
                <div className="chart-section">
                    <div className="chart-card">
                        <h4>Students</h4>
                        <div className="circular-chart-container">
                            <div className="circular-chart"></div>
                        </div>
                        <div className="chart-legend">
                            <span className='boy'>Boys: 205</span>
                            <span className='girl'>Girls: 170</span>
                        </div>
                    </div>

                    <div className="table-card">
                        <div className='teach' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h4>Teacher List</h4>
                            <NavLink 
            to="/dashboard/teacher" 
            style={{ textDecoration: 'none' }}
        >
            <PersonAdd style={{ fontSize: '25px', color: 'black', cursor: 'pointer' }} />
        </NavLink>
                        </div>
                        <div className="table-responsive">
                            {renderTable(teacherList)}
                        </div>
                    </div>
                </div>
              
                  </div>
                <div className="chart-section">
                    <div className="chart-card">
                        <h1 style={{ textAlign: "left", marginBottom: "10px", marginLeft: '10px', fontSize: '24px', marginTop: '10px' }}>Attendance</h1>
                        <AttendanceChart attendanceData={attendanceData} />
                    </div>
                    <div className="table-card">
                        <div className='teach' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h4>Student List</h4>
                            <PersonAdd style={{ fontSize: '25px', color: 'black', cursor: 'pointer' }} onClick={handleAddStudent} />
                        </div>
                        <div className="table-responsive">
                            {renderTable(studentList)}
                        </div>
                    </div>
                </div>
               
            </div>
      
    );
};

export default Dashcont;
