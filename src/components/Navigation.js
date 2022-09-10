import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <ArrowBackIosIcon />
        Back
      </div>

      <ul>
        <li>
          <button>
            <NotificationsNoneIcon />
          </button>
        </li>
        <li>
          <button>
            <AccountCircleIcon />
          </button>
          <p>John Doe</p>
        </li>
        <li>
          <button>
            <MoreHorizIcon />
          </button>
          <p>John Doe</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
