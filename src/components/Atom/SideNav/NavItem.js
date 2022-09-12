import React from "react";
import styles from "./NavItem.module.css";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, Icon, title, Checkbox }) => {
  return (
    <li className={styles.navItem}>
      <NavLink
        style={({ isActive }) => ({
          background: !isActive ? "" : "#0a74dc",
        })}
        key={title}
        className={styles.navlink}
        exact
        to={to}
      >
        {Icon ? <Icon style={{ marginRight: "15px" }} /> : Checkbox}
        {title}
      </NavLink>
    </li>
  );
};

export default NavItem;
