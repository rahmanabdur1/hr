import React from 'react';
import styles from './PersonalInfo.module.css'
const PersonelInfo = () => {
    return (
        <>
           <div>
                  <label>ID</label>
                  <input placeholder='Input Your ID' type='text'/>
                </div>
                <div>
                  <label>Full Name</label>
                  <input placeholder='Input Your Full Name' type='text'/>
                </div>
                
                <div>
                  <label>Date Of Birth</label>
                  <input placeholder='Input Your Date Of Birth' type='text'/>
                </div>
                
                <div>
                  <label>Gender</label>
                  <input placeholder='Input Your ID' type='text'/>
                </div>
                
                <div>
                  <label>Phone</label>
                  <input placeholder='Input Your Phone Number' type='text'/>
                </div>
                   
                <div>
                  <label>Email</label>
                  <input placeholder='Input Your Email Address' type='text'/>
                </div>
        </>
    );
};

export default PersonelInfo;