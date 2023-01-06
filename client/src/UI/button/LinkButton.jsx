import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from "./Button.module.css"

const LinkButton = ({children, ...props}) => {
  
  return (
    <NavLink {...props} className={classes.btn}>{children}</NavLink>
  )
}

export default LinkButton