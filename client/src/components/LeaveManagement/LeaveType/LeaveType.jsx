import React, { useState } from 'react';
import styles from './LeaveType.module.css'
import { GrNext } from "react-icons/gr";

const LeaveType = () => {
    const [selectedType, setSelectedType] = useState(1);

    const handleTypeSelect = (type) => {
        setSelectedType(type);
    };

    return (
        <div className={styles.container}>
            {/* leave type and information */}

            <div className={styles.leave_content}>
                {/* all types*/}
                <div className={styles.type1} onClick={() => handleTypeSelect(1)}>
                    <span>1</span>
                    <span>Leave Type</span>
                </div>
                <div className={styles.type2} onClick={() => handleTypeSelect(2)}>
                    <span>2</span>
                    <span>Leave Information</span>
                </div>
            </div>

            <div className={styles.text}>
                <span>Dashboard</span>
                <span><GrNext /></span>
                <span>Leave Type</span>
            </div>

            {/* leave selected type 1 */}
            <div className={styles.selected_content1} style={{ display: selectedType === 1 ? 'block' : 'none' }}>
                <div className={styles.content1}>
                    <div>
                        <label>ID</label>
                    </div>
                    <div>
                        <input placeholder='1LJH' />
                    </div>
                </div>
                <div className={styles.content2}>
                    <div>
                        <label>Name</label>
                    </div>
                    <div className={styles.input2}>
                        <input placeholder='Select Leave Type' />
                    </div>
                </div>
            </div>

            {/* leave selected type 2 */}
            <div className={styles.selected_content2} style={{ display: selectedType === 2 ? 'block' : 'none' }}>
                <div className={styles.content1}>
                    <div>
                        <span>Fiscal year</span>
                    </div>
                    <div>
                    <input placeholder='1LJH' />
                    </div>
                </div>
                <div className={styles.content2}>
                    <div>
                        <span>To</span>
                    </div>
                    <div>
                        <input placeholder='Select Leave Type' />
                    </div>
                </div>
                <div className={styles.content3}>
                    <div>
                        <span>Leave Type</span>
                    </div>
                    <div>
                        <input placeholder='Select Leave Type' />
                    </div>
                </div>
                <div className={styles.content4}>
                    <div>
                        <span>Number Of Day</span>
                    </div>
                    <div>
                        <input placeholder='5 days' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaveType;
