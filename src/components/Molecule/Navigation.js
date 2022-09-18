import React, { useContext } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navigation.module.css";
import { useNavigate } from "react-router-dom";
import NavContext from "../../store/side-context";

const Navigation = ({ showArrowBack }) => {
  const navCtx = useContext(NavContext);

  const navigate = useNavigate();
  return (
    <nav className={styles.nav}>
      <button
        className={showArrowBack ? styles.arrowBack : styles.hidden}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIosIcon />
        Back
      </button>
      <button
        className={styles.showMenuBar}
        onClick={() => navCtx.toggleSideNav()}
      >
        <MenuIcon />
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
