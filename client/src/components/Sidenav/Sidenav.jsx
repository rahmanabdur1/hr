import React, { useState } from "react";
import { MdLogout } from "react-icons/md";
import styles from "./Sidenav.module.css";
import MenuLink from "./MenuLink/MenuLink";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaUser, FaUserCheck } from "react-icons/fa";
import { FaUserXmark } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon:<MdOutlineSpaceDashboard />
  },
  {
    title: "Admin",
    icon:<MdOutlineAdminPanelSettings />,
    list: [
      {
        title: "User",
        path: "/user",
      },
      {
        title: "Role",
        path: "/role",
      },
      {
        title: "permission",
        path: "/permission",
      },
    ],
  },
  {
    title: "Employee Management",
    icon:<FaUsers />,
    list: [
      {
        title: 'Employee Info',
        path: '/employee-info'
      }
    ]
  },
  {
    title: "Attendance Management",
    icon:<FaUserCheck />,
    list: [
      {
        title: 'Attendance Details',
        path: '/attendance-details',
      },
      {
        title: 'Attendance Report',
        path: '/attendance-report',
      },
      {
        title: 'Attendance Register',
        path: '/attendance-register',
      }
    ]
  },
  {
    title: 'Leave Management',
   icon:<FaUserXmark />,
    list: [
      {
        title: 'Leave Type',
        path: '/leave-type',
      },
      {
        title: 'Leave Info',
        path: '/leave-info',
      },
      {
        title: 'Leave Application',
        path: '/leave-application',
      },
      {
        title: 'Leave Register',
        path: '/leave-register',
      },
    ]
  },
  {
    title: 'Settings',
    icon:<CiSettings />,
    list: [
      {
        title: 'Integration',
        path: '/integration',
      },
      {
        title: 'Configuration',
        path: '/configuration',
      },
    ]
  }
];

const Sidenav = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (title) => {
    setExpandedCategories(prevState => ({
      ...prevState,
      [title]: !prevState[title]
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.user}>
      <FaUser />
        <div className={styles.userDetail}>
          <span className={styles.userTitle}>ZAIMAH TECHNOLOGIES</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <div className={styles.icon}>
            <span>{cat.icon}</span>
            <Link className={styles.cat} onClick={() => toggleCategory(cat.title)}>
              {cat.title}
            </Link>
            </div>

            {expandedCategories[cat.title] && cat.list && Array.isArray(cat.list) && cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Sidenav;
