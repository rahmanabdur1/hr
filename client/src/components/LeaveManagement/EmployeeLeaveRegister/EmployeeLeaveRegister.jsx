import React from 'react';
import styles from './EmployeeLeaveRegister.module.css'
import { GrFilter } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const registerData = [
    { id: 1, applicationDate: '2024-04-15', leaveType: 'Vacation', fromDate: '2024-04-20', toDate: '2024-04-25', enjoyedOffDay: '1', approveDate: '2024-04-16', approvedBy: 'Javed', status: 'Approved' },
    { id: 2, applicationDate: '2024-04-16', leaveType: 'Sick Leave', fromDate: '2024-04-18', toDate: '2024-04-19', enjoyedOffDay: '2', approveDate: '2024-04-17', approvedBy: 'Javed', status: 'Approved' },
];

const EmployeeLeaveRegister = () => {
    return (
        <div className={styles.container}>

            {/* leave register nav section */}
            <div className={styles.nav_section}>
                <div>
                    <span>Dashboard</span>
                     <GrNext/>
                    <span>Leave Application</span>
                </div>
                <div>
                    <span>notification icon</span>
                    <span>profuile</span>
                    <span>Admin</span>
                </div>
            </div>

            {/*  profile content section */}
            <div className={styles.profile}>
                <div className={styles.profile_picture}>
                    profile
                </div>

                <div className={styles.profile_content1}>
                    <div>
                        <span>Name</span>
                        <span>Date of Birth</span>
                        <span>Blood</span>
                    </div>
                    <div>
                        <span>Sohel Rana</span>
                        <span>15-11-2002</span>
                        O+
                    </div>
                </div>

                <div className={styles.profile_content2}>
                    <div>
                        <span>Employee ID</span>
                        <span>Joining Date</span>
                        <span>Status</span>
                    </div>
                    <div>
                        <span>Emp-ZTL-001</span>
                        <span>16-11-2001</span>
                        <button>Active</button>
                    </div>
                </div>
            </div>

            {/* searching, filtering, pagination section */}
            <div>
            <GrFilter/>
            </div>

            {/* all register data  section*/}
            <div>
                <div>
                    <table>
                        <tr>
                            <th>SL</th>
                            <th>Application Date</th>
                            <th>Leave Type</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Enjoyed Off Day</th>
                            <th>Approve Date</th>
                            <th>Approved By</th>
                            <th>Status</th>
                        </tr>
                        {registerData.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.applicationDate}</td>
                                <td>{item.leaveType}</td>
                                <td>{item.fromDate}</td>
                                <td>{item.toDate}</td>
                                <td>{item.enjoyedOffDay}</td>
                                <td>{item.approveDate}</td>
                                <td>{item.approvedBy}</td>
                                <td>{item.status}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>


        </div>
    );
};

export default EmployeeLeaveRegister;