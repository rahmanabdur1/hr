import React from 'react';

const FamilyDetails = () => {
    return (
        <>
               
               <div>
                  <label>Father Name</label>
                  <input placeholder='Input Your Fathers Name' type='text'/>
                </div>
                   
                <div>
                  <label>Mother Name</label>
                  <input placeholder='Input Your Mother Name' type='text'/>
                </div>

                <div>
                  <label>Fathers Phone Number</label>
                  <input placeholder='Input Your Phone Number' type='text'/>
                </div>
                <div>
                  <label>Mothers Phone Number</label>
                  <input placeholder='Input Your Mother Phone Number' type='text'/>
                </div>
                <div>
                  <label>Present Address</label>
                  <input placeholder='Input Your Present Address' type='text'/>
                </div>

                <div>
                  <label>Permanent Address</label>
                  <input placeholder='Input Your Permanent Address' type='text'/>
                </div>
        </>
    )
};

export default FamilyDetails;