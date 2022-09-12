import React from "react";
import Logo from "../Atom/SideNav/Logo";
import NavItem from "../Atom/SideNav/NavItem";
import styles from "./sideNav.module.css";
import GridViewIcon from "@mui/icons-material/GridView";

import HighlightCheckRect from "../Atom/Overview/HighlightCheckRect";

const SideNav = () => {
  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <Logo />
          <NavItem
            to="/overview"
            Icon={GridViewIcon}
            title="Overview"
          ></NavItem>
          <div className={styles.navsections}>
            <NavItem
              to="/starships"
              Checkbox={
                <HighlightCheckRect
                  color="#A9C1FF"
                  width="16px"
                  height="17px"
                  marginRight="20px"
                  marginLeft="20px"
                />
              }
              title="Starships"
            ></NavItem>
            <NavItem
              to="/people"
              Checkbox={
                <HighlightCheckRect
                  color="#FFA9EC"
                  width="16px"
                  height="17px"
                  marginRight="20px"
                />
              }
              title="People"
            ></NavItem>
            <NavItem
              to="/species"
              Checkbox={
                <HighlightCheckRect
                  color="#FDFFA9"
                  width="16px"
                  height="17px"
                  marginRight="20px"
                />
              }
              title="Species"
            ></NavItem>
          </div>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
