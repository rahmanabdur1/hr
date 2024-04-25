import React from 'react';
const attendanceDetailsData = [
    {  date: 'Friday 27 jan, 2024 (Today)',  timeIn: '09 : 00 AM', timeOut: '05 : 00PM',  arriveLate: '----', leaveEarly: '----', absent:'----', paidAbsent:'----', workPlace:'Offline', totalHours:'06: 00' },
    {  date: 'Friday 27 jan, 2024 ',  timeIn: '09 : 00 AM', timeOut: '05 : 00PM',  arriveLate: '----', leaveEarly: '----', absent:'----', paidAbsent:'----', workPlace:'Offline', totalHours:'06: 00' },
    {  date: 'Friday 27 jan, 2024 ',  timeIn: '09 : 00 AM', timeOut: '05 : 00PM',  arriveLate: '----', leaveEarly: '----', absent:'----', paidAbsent:'----', workPlace:'Home', totalHours:'06: 00' },
    {  date: 'Friday 27 jan, 2024 ',  timeIn: '09 : 00 AM', timeOut: '05 : 00PM',  arriveLate: '----', leaveEarly: '----', absent:'----', paidAbsent:'----', workPlace:'Offline', totalHours:'06: 00' },
    {  date: 'Friday 27 jan, 2024 ',  timeIn: '09 : 00 AM', timeOut: '05 : 00PM',  arriveLate: '----', leaveEarly: '----', absent:'----', paidAbsent:'----', workPlace:'Offline', totalHours:'06: 00' },
    {  date: 'Friday 27 jan, 2024 ',  timeIn: '09 : 00 AM', timeOut: '05 : 00PM',  arriveLate: '----', leaveEarly: '----', absent:'----', paidAbsent:'----', workPlace:'Home', totalHours:'06: 00' },
    {  date: 'Friday 27 jan, 2024 ',  timeIn: '09 : 00 AM', timeOut: '05 : 00PM',  arriveLate: '----', leaveEarly: '----', absent:'----', paidAbsent:'----', workPlace:'Offline', totalHours:'06: 00' },

    // Add more data as needed
];

const AttendanceDetailsData = () => {
    return (
        <>
              <div>
                <div>
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Time In</th>
                            <th>Time Out</th>
                            <th>Arrive Late</th>
                            <th>leave Early</th>
                            <th>Absent</th>
                            <th>Paid Absent</th>
                            <th>Work Place</th>
                            <th>Total Hours</th>
                        </tr>
                        {attendanceDetailsData.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.date}</td>
                                <td>{item.timeIn}</td>
                                <td>{item.timeOut}</td>
                                <td>{item.arriveLate}</td>
                                <td>{item.leaveEarly}</td>
                                <td>{item.absent}</td>
                                <td>{item.paidAbsent}</td>
                                <td>{item.workPlace}</td>
                                <td>{item.totalHours}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>

        </>
    );
};

export default AttendanceDetailsData;