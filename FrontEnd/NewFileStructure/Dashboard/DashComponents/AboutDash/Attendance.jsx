

import PropTypes from 'prop-types'; 
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'; 

Chart.register(...registerables);

const AttendanceChart = ({ attendanceData }) => {
    
    const data = {
        labels: attendanceData.map(item => item.day),
        datasets: [
            {
                label: 'Present',
                data: attendanceData.map(item => item.present),
                backgroundColor: '#E7CCCC', // Color for Present
            },
            {
                label: 'Absent',
                data: attendanceData.map(item => item.absent),
                backgroundColor: '#A2D2DF', // Color for Absent
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100, 
            },
        },
    };

    return (
        <div className='attendance-chart'>
            <Bar data={data} options={options} />
        </div>
    );
};

AttendanceChart.propTypes = {
    attendanceData: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.string.isRequired,
            present: PropTypes.number.isRequired,
            absent: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default AttendanceChart;
