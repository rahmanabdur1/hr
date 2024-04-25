import { Link, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css"; // Adjust the import path according to your file structure

const MenuLink = ({ item }) => {
  const location = useLocation(); // Get the current location using useLocation hook

  return (
    <Link
      to={item.path}
      className={`${styles.container} ${location.pathname === item.path ? styles.active : ''}`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
