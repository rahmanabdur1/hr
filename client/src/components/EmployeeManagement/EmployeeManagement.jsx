import React, { useState } from 'react';
import PersonelInfo from './PersonalInfo/PersonelInfo';
import styles from './EmployeeManagement.module.css'
import { GrNext } from 'react-icons/gr';
import Emergency from './Emergency/Emergency';
import FamilyDetails from './FamilyDetails/FamilyDetails';

const EmployeeManagement = () => {
    const [selectedType, setSelectedType] = useState(1); 

    const handleTypeSelect = (type) => {
        setSelectedType(type);
    };

    return (
        <div className={styles.container}>
            <div className={styles.management_content}>
                {/* all types*/}
                <div className={styles.type1} onClick={() => handleTypeSelect(1)} style={{ cursor: 'pointer', marginBottom: '10px', borderBottom: selectedType === 1 ? '2px solid blue' : 'none' }}>
                    <span>1</span>
                    <span>Personal Info</span>
                </div>
                <div className={styles.type1} onClick={() => handleTypeSelect(2)} style={{ cursor: 'pointer', marginBottom: '10px', borderBottom: selectedType === 2 ? '2px solid blue' : 'none' }}>
                    <span>2</span>
                    <span>Family Details</span>
                </div>
                <div className={styles.type1} onClick={() => handleTypeSelect(3)} style={{ cursor: 'pointer', marginBottom: '10px', borderBottom: selectedType === 3 ? '2px solid blue' : 'none' }}>
                    <span>3</span>
                    <span>Emergency Contact</span>
                </div>
            </div>

            {/* text*/}
            <div className={styles.text}>
                <span>Dashboard</span>
                <span><GrNext /></span>
                <span>Leave Type</span>
            </div>


            {/* employee info selected type 1 */}
            <div className={styles.selected_content1} style={{ display: selectedType === 1 ? 'block' : 'none' }}>
               <PersonelInfo/>
            </div>

            {/* employee info selected type 2 */}
            <div className={styles.selected_content2} style={{ display: selectedType === 2 ? 'block' : 'none' }}>
            
               <FamilyDetails/>
            </div>

             {/* employee info selected type 3 */}
            <div className={styles.selected_content3} style={{ display: selectedType === 3? 'block' : 'none' }}>
               <Emergency/>
            </div>
        </div>
    );
};

export default EmployeeManagement;