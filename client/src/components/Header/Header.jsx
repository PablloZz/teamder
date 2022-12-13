import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.headersPosition}>
        <h1>Back</h1>
        {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
        <h1>My profile</h1>
      </div>
    </header>
  )
};

export default Header;
