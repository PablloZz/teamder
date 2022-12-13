import React from "react"
import styles from "./Dialogs.module.css"

const Dialogs = (props) => {
  return (
    <div>
      {`${props.avatar} ${props.name}`}
    </div>
  )
}

export default Dialogs
