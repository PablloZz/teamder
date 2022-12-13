import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./Profile.module.css"
import ProfileFooter from "./ProfileFooter/ProfileFooter"

const Profile = props => {
  if (!props.userData) {
    return <p>Loading...</p>
  }

  return (
    <main className={styles.main}>
      <div className={styles.border}>
        <div className={styles.profileHeader}>
          <img src={props.userData.photo} alt="avatar" />
          <div className={styles.flex}>
            <p>{`${props.userData.name} ${props.userData.surname}`}</p>
            <p className={styles.login}>@{props.userData.login}</p>
            <div>
              <span>{`followers ${props.userData.followers.length}`}</span>
              <span>{`following ${props.userData.following.length}`}</span>
            </div>
          </div>
        </div>
        <div>
          <p className={styles.description}>{props.description}</p>
        </div>
        <ul className={styles.detailsMenu}>
          <li>{props.userData.city}</li>
          <li>{props.userData.age}</li>
        </ul>
        <ul className={styles.menu}>
          <li>
            <NavLink
              to="/profile/posts"
              className={navData =>
                navData.isActive ? styles.active : styles.link
              }
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile/social-media"
              className={navData =>
                navData.isActive ? styles.active : styles.link
              }
            >
              Social media
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile/edit-profile"
              className={navData =>
                navData.isActive ? styles.active : styles.link
              }
            >
              Edit profile
            </NavLink>
          </li>
        </ul>
      </div>
      <ProfileFooter />
    </main>
  )
}

export default Profile
