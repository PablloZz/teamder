import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from "./UserProfileFooter.module.css"
import UserPosts from './UserPosts/UserPosts'
import UserSocialMediaContainer from './UserSocialMedia/UserSocialMediaContainer'

function UserProfileFooter() {
  return (
    <div className={styles.bottomContent}>
      <Routes>
        <Route path="posts" element={<UserPosts />} />
        <Route
          path="social-media"
          element={<UserSocialMediaContainer />}
        />
      </Routes>
    </div>
  )
}

export default UserProfileFooter