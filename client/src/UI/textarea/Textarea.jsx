import React from "react"
import styles from "./Textarea.module.css"

function Textarea(props) {
  return <textarea {...props} className={styles.textarea} />
}

export default Textarea
