import React from 'react';
import { IoSunnyOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { PiArticleNyTimesDuotone } from "react-icons/pi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes, faClock, faMoon, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const ResourcesData = () => {
    return (
        <>
            <div>
                <IoSunnyOutline />
                <div>
                    <span>8:02:09  AM</span>
                    <span>Realtime Insight</span>
                </div>
                <div>
                    <span>Today:</span>
                    <span>18th November 2023</span>
                </div>
                <button>View Attendance</button>
            </div>

            <div>
                {/* total employees */}
                <div>
                    <div>
                        <span>452</span>
                        <FaUsers />
                    </div>
                    <div>
                        <span>Total Employees</span>
                        <div>
                            <span>2NEW EMPLOYEES ADDED</span>
                        </div>
                    </div>
                </div>


                {/* ON TIME */}
                <div>
                    <div>
                        <span>360</span>
                        <PiArticleNyTimesDuotone />
                    </div>
                    <div>
                        <span>On Time</span>
                        <div>
                            <span>-10% Less than yesterday</span>
                        </div>
                    </div>
                </div>


                {/* Absent */}
                <div>
                    <div>
                        <span>30</span>
                        <FontAwesomeIcon icon={faUserTimes} />
                    
                    </div>
                    <div>
                        <span>Absent</span>
                        <div>
                            <span>+3% Increase than yesterday</span>
                        </div>
                    </div>
                </div>

                {/* Late Arrival */}
                <div>
                    <div>
                        <span>62</span>
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div>
                        <span>Late Arrival</span>
                        <div>
                            <span>+3% Increase than yesterday</span>
                        </div>
                    </div>
                </div>

                {/* Early Departures */}
                <div>
                    <div>
                        <span>6</span>
                        <FontAwesomeIcon icon={faMoon} />
                    </div>
                    <div>
                        <span>Early Departures</span>
                        <div>
                            <span>-10% Less than yesterday</span>
                        </div>
                    </div>
                </div>

                {/* Time off */}
                <div>
                    <div>
                        <span>42</span>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </div>
                    <div>
                        <span>Time-off</span>
                        <div>
                            <span>2% Increase than yesterday</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResourcesData;
