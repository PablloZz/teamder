import React from "react"
import styles from "./navbar.module.css"
import NavbarItem from "./NavbarItem/NavbarItem"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setAuthUserData } from "../../redux/auth-reducer"
import LinkButton from "../../UI/button/LinkButton"

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
          <div className={styles.buttonContainer}>
            <LinkButton location="/create-team">Create a Team</LinkButton>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <LinkButton to="/signin" onClick={logoutHandler}>Log Out</LinkButton>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
