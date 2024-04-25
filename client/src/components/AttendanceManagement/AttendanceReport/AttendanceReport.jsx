import React from 'react';
import AttendanceProfiles from './AttendanceProfiles/AttendanceProfiles';
import AttendanceReportData from './AttendanceReportData/AttendanceReportData';
import styles from './AttendanceReport.module.css'
const AttendanceReport = () => {
    return (
        <div>
            {/* navbar info */}
            <div>
                <div>
                    <div>
                        <input placeholder='Search employee' />
                    </div>
                    <span>Leave Application</span>
                </div>
                <div>
                    <span>notification icon</span>
                    <span>profuile</span>
                    <span>Admin</span>
                </div>
            </div>


            { /*Attendance Report section */}
            <div>
                <AttendanceProfiles />
            </div>

            <div>
                <AttendanceReportData />
            </div>
        </div>
    );
};

export default AttendanceReport;