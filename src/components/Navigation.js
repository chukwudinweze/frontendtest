import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./Navigation.module.css";

const Navigation = ({ showArrowBack }) => {
  console.log(showArrowBack);
  return (
    <nav className={styles.nav}>
      <button className={showArrowBack ? styles.arrowBack : styles.hidden}>
        <ArrowBackIosIcon />
        Back
      </button>

      <ul className={styles.ul}>
        <li>
          <button className={styles.notification}>
            <NotificationsNoneIcon style={{ color: "#333758" }} />
          </button>
        </li>
        <li className={styles.account}>
          <button>
            <AccountCircleIcon
              style={{ color: "#4F84CF", width: "30px", height: "30px" }}
            />
          </button>
          <p>John Doe</p>
        </li>
        <li>
          <button>
            <MoreHorizIcon style={{ color: "#C4C4C4" }} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
