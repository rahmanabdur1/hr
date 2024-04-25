import React from 'react';
import styles from './LeaveApplication.module.css'
const LeaveApplication = () => {
    return (
        <div className={styles.container}>
            {/* navbar info */}
            <div className={styles.nav_section}>
                <div>
                    <span>Dashboard</span>
                    <span>Leave Application</span>
                </div>
                <div>
                    <span>notification icon</span>
                    <span>profuile</span>
                    <span>Admin</span>
                </div>
            </div>

            {/* profile info */}
            <div>
                <div>
                    <span>img</span>
                    <div>
                        <span>MD. Sohel Rana</span>
                        <span>Grapich Designer</span>
                    </div>
                </div>

                <div className={styles.leave_applicationContent}>
                <div className={styles.input_fields}>
                        <div>
                            <label>Employee ID</label>
                            <input type='text' placeholder='ZTL-001' />
                        </div>
                        <div>
                            <label>Employee ID</label>
                            <input type='text' placeholder='ZTL-001' />
                        </div>
                        <div>
                            <label>Employee ID</label>
                            <input type='text' placeholder='ZTL-001' />
                        </div>
                        <div>
                            <label>Employee ID</label>
                            <input type='text' placeholder='ZTL-001' />
                        </div>
                        <div>
                            <label>Employee ID</label>
                            <input type='text' placeholder='ZTL-001' />
                        </div>
                        <div>
                           drag and drop
                        </div>
                        <div>
                            <label>Employee ID</label>
                            <textarea rows="3" cols=""/>
                        </div>
                       
                    </div>

                    {/* statas and request */}
                    <div className={styles.stutas_request}>
                        <div>
                            <span>Statas</span>
                            <button>New</button>
                        </div>
                        <div>
                            <div>
                                <span>Your Request includes</span>
                            </div>

                            <div className={styles.request}>
                                <div>
                                    <span>Aug 05</span>
                                    <span>Aug 05</span>
                                    <span>Aug 05</span>
                                </div>
                                <div>
                                    <span>All Day</span>
                                    <span>Half</span>
                                    <span></span>
                                </div>
                            </div>

                            <div>
                                <button>Cancel</button>
                                <button>Requst Now</button>
                            </div>
                            <div>
                            <span>Note:</span> Your Leave Request has been Approved By Jabed Akter  18-8-2024
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LeaveApplication;