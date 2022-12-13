import React from "react"
import {NavLink} from "react-router-dom"
import styles from "./NavbarItem.module.css"

const NavbarItem = (props) => {
  return (
    <li className={styles.item}>
      <NavLink to={props.linkValue} className={
        (navData) => navData.isActive ? styles.active : styles.link
      }>{props.itemValue}</NavLink>
    </li>
  )
}


export default NavbarItem;