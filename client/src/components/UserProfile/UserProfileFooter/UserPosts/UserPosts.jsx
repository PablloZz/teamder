import React from "react"
import UserPostContainer from "./UserPost/UserPostContainer"
import styles from "./UserPosts.module.css"

function UserPosts() {

  return (
    <div className={styles.postsContainerSize}>
      <UserPostContainer />
    </div>
  )
}

export default UserPosts
