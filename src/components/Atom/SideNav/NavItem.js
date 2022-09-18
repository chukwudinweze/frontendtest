import React, { useContext } from "react";
import styles from "./NavItem.module.css";
import { NavLink } from "react-router-dom";
import NavContext from "../../../store/side-context";

const NavItem = ({ to, Icon, title, Checkbox }) => {
  const navCtx = useContext(NavContext);
  return (
    <li className={styles.navItem} onClick={() => navCtx.toggleSideNav()}>
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
