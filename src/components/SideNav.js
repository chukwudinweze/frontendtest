import React from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import styles from "./sideNav.module.css";
import GridViewIcon from "@mui/icons-material/GridView";

import HighlightCheckRect from "./HighlightCheckRect";

const SideNav = () => {
  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <Logo />
          <NavItem
            to="/overview"
            icon={GridViewIcon}
            title="Overview"
          ></NavItem>
          <div className={styles.navsections}>
            <NavItem
              to="/starships"
              icon={<HighlightCheckRect color="blue" />}
              title="Starships"
            ></NavItem>
            <NavItem
              to="/people"
              icon={<HighlightCheckRect color="yello" />}
              title="People"
            ></NavItem>
            <NavItem
              to="/specie"
              icon={<HighlightCheckRect color="yello" />}
              title="Specie"
            ></NavItem>
          </div>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
