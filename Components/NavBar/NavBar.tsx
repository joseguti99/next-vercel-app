import React from "react";
import styles from "./styles.module.css";
import { ActiveLink } from "./ActiveLink";

const NavBar = () => {
  const menuItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Pricing",
      href: "/pricing",
    },
  ];

  return (
    <div>
      <nav className={styles["nav-bar"]}>
        {menuItems
          ? menuItems.map(({text, href}) => 
              <ActiveLink key={ href } text={ text } href={ href } />
            )
          : ""}
      </nav>
    </div>
  );
};

export default NavBar;
