import React from 'react';
import styles from './AttendanceDetails.module.css'
import AttendanceDetailsProfile from './AttendanceDetailsProfile/AttendanceDetailsProfile';
import AttendanceDetailsData from './AttendanceDetailsData/AttendanceDetailsData';
const AttendanceDetails = () => {
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

{/* 
            details profile section */}
            <div>
<AttendanceDetailsProfile/>
            </div>
<div>
    <AttendanceDetailsData/>
</div>
        </div>
    );
};

export default AttendanceDetails;