import React, { memo } from 'react';
import styles from './Emergency.module.css'

const Emergency = memo(() => {
    return (
        <>
             <div>
                  <label>NID</label>
                  <input placeholder='Input Your NID'  type='text'/>
                </div>
                <div>
                  <label>Full Name</label>
                  <input placeholder='Input Your Full Name' type='text'/>
                </div>
                <div>
                  <label>Relation</label>
                  <input placeholder='' type='text'/>
                </div>
                <div>
                  <label>Phone</label>
                  <input placeholder='Input Your Phone Number' type='text'/>
                </div>
                <div>
                  <label>Email</label>
                  <input placeholder='Input Your Email Address' type='email'/>
                </div>
                <div>
                  <label>Address</label>
                  <input placeholder='Input Your Address' type='text'/>
                </div>
        </>
    );
});

export default Emergency;