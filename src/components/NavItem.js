import React from "react";
import styles from "./NavItem.module.css";
import { Link } from "react-router-dom";

const NavItem = ({ to, Icon, title }) => {
  return (
    <li className={styles.navItem}>
      <Link key={title} className={styles.navlink} exact to={to}>
        {Icon}
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
