import React from 'react';
import Sidenav from '../../components/Sidenav/Sidenav';
import { Outlet } from 'react-router-dom';
import styles from './DashboardLayout.module.css'

const DashboardLayout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sidenav}>
            <Sidenav/>
            </div>
            <div className={styles.outlet}>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;