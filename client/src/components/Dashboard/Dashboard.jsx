import React from 'react';
import ResourcesData from './ResourcesData/ResourcesData';

import { FaCalendarAlt } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";
import ResourcesGraphData from './ResourcesGraphData/ResourcesGraphData';
const Dashboard = () => {
    return (
        <div>
            {/* navbar */}
            <div>
                <div>
                    <div>
                        <input placeholder='Search employee' />
                    </div>
                    <span>Leave Application</span>
                </div>
                <div>
                <CiSearch />
                <IoMdNotificationsOutline />
                <FaCalendarAlt />
                <GrUserManager />
                    <span>notification icon</span>
                    <span>profuile</span>
                    <span>Admin</span>
                </div>
            </div>

            {/* all managemant system resources */}
            <div>
                <ResourcesData />
            </div>

            {/* managemant system resurces graph */}
            <div>
           <ResourcesGraphData/>
            </div>
        </div>
    );
};

export default Dashboard;