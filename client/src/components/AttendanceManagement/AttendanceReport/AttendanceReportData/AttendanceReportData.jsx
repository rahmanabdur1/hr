import React from 'react';
const attendanceReportData = [
    { id: 1, employee: 'Sohal Rana', designation: 'MD', department: 'Graphic Design', checkIn: '09: 00 AM', checkOut: '04: 00 PM', totalHours: '10 WH', status: 'On Time',action:'Details'  },
    { id: 1, employee: 'Sohal Rana', designation: 'MD', department: 'Graphic Design', checkIn: '09: 00 AM', checkOut: '04: 00 PM', totalHours: '10 WH', status: 'On Time',action:'Details'  },
    { id: 1, employee: 'Sohal Rana', designation: 'MD', department: 'Graphic Design', checkIn: '09: 00 AM', checkOut: '04: 00 PM', totalHours: '10 WH', status: 'On Time',action:'Details'  },
    { id: 1, employee: 'Sohal Rana', designation: 'MD', department: 'Graphic Design', checkIn: '09: 00 AM', checkOut: '04: 00 PM', totalHours: '10 WH', status: 'On Time',action:'Details'  },
    { id: 1, employee: 'Sohal Rana', designation: 'MD', department: 'Graphic Design', checkIn: '09: 00 AM', checkOut: '04: 00 PM', totalHours: '10 WH', status: 'On Time',action:'Details'  },
    { id: 1, employee: 'Sohal Rana', designation: 'MD', department: 'Graphic Design', checkIn: '09: 00 AM', checkOut: '04: 00 PM', totalHours: '10 WH', status: 'On Time',action:'Details'  },
    { id: 1, employee: 'Sohal Rana', designation: 'MD', department: 'Graphic Design', checkIn: '09: 00 AM', checkOut: '04: 00 PM', totalHours: '10 WH', status: 'On Time',action:'Details'  },
];
import styles from './AttendanceReportData.module.css'

const AttendanceReportData = () => {
    return (
        <>
              <div>
                <div>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Employee</th>
                            <th>Designation</th>
                            <th>Department</th>
                            <th>Check In</th>
                            <th>Check Out</th>
                            <th>Total Hours</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        {attendanceReportData.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.employee}</td>
                                <td>{item.designation}</td>
                                <td>{item.department}</td>
                                <td>{item.checkIn}</td>
                                <td>{item.checkOut}</td>
                                <td>{item.totalHours}</td>
                                <td>{item.status}</td>
                                <td>{item.action}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>

        </>
    );
};

export default AttendanceReportData;