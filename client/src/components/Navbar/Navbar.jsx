import React from "react"
import styles from "./Navbar.module.css"
import NavbarItem from "./NavbarItem/NavbarItem"
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";


const Navbar = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutHandler = () => {
    const userData = localStorage.clear("user")
    dispatch(setAuthUserData(userData))
    navigate("/signin")
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.navbarContentPosition}>
        <div>
          <div>
            <h1 className={styles.header}>Teamder</h1>
          </div>
          <ul className={styles.menu}>
            <NavbarItem itemValue={"Home"} linkValue="/home" />
            <NavbarItem itemValue={"Users"} linkValue="/users" />
            <NavbarItem itemValue={"Messages"} linkValue="/messages" />
            <NavbarItem itemValue={"My teams"} linkValue="/my-teams" />
            <NavbarItem
              itemValue={"Notifications"}
              linkValue="/notifications"
            />
            <NavbarItem itemValue={"Profile"} linkValue="/profile/posts" />
          </ul>
          <NavLink
            to="/create-team"
            className={`${styles.btn} ${styles.btnMT}`}
          >
            Create a team
          </NavLink>
        </div>
        <a href="/signin" className={`${styles.btn}`} onClick={logoutHandler}>
          Log out
        </a>
      </div>
    </nav>
  )
};

export default Navbar;
