import React, { useState } from "react";

const NavContext = React.createContext({
  sideNav: false,
  toggleSideNav: () => {},
  hideSideNav: () => {},
});

export const NavContextProvider = (props) => {
  const [sideNav, setSideNav] = useState(false);

  const ShowAndHideSideBar = () => {
    setSideNav(!sideNav);
  };
  const hideSideBarNav = () => {
    setSideNav(false);
  };

  const contextValue = {
    sideNav: sideNav,
    toggleSideNav: ShowAndHideSideBar,
    hideSideNav: hideSideBarNav,
  };
  return (
    <NavContext.Provider value={contextValue}>
      {props.children}
    </NavContext.Provider>
  );
};

export default NavContext;
