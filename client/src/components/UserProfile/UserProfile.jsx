import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./UserProfile.module.css"
import UserProfileFooter from "./UserProfileFooter/UserProfileFooter"

const UserProfile = props => {
  if (!props.userProfile) {
    return <p>Loading...</p>
  }

  return (
    <main className={styles.main}>
      <div className={styles.border}>
        <div className={styles.profileHeader}>
          <img src={props.userProfile.user.photo} alt="avatar" />
          <div className={styles.flex}>
            <p>{`${props.userProfile.user.name} ${props.userProfile.user.surname}`}</p>
            <p className={styles.login}>@{props.userProfile.user.login}</p>
            <div>
              <span>{`followers ${props.userProfile.user.followers.length}`}</span>
              <span>{`following ${props.userProfile.user.following.length}`}</span>
            </div>
          </div>
        </div>
        <ul className={styles.detailsMenu}>
          <li>{props.userProfile.user.city}</li>
          <li>{props.userProfile.user.age}</li>
        </ul>
        <ul className={styles.menu}>
          <li>
            <NavLink
              to={`/profile/${props.userProfile.user._id}/posts`}
              className={navData =>
                navData.isActive ? styles.active : styles.link
              }
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/profile/${props.userProfile.user._id}/social-media`}
              className={navData =>
                navData.isActive ? styles.active : styles.link
              }
            >
              Social media
            </NavLink>
          </li>
        </ul>
      </div>
      <UserProfileFooter />
    </main>
  )
}

export default UserProfile
