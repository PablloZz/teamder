import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditProfileContainer from './EditProfile/EditProfileContainer'
import PostsContainer from './Posts/PostsContainer'
import styles from "./profileFooter.module.css"
import SocialMediaContainer from './SocialMedia/SocialMediaContainer'

function ProfileFooter() {
  return (
    <div className={styles.bottomContent}>
      <Routes>
        <Route path="posts" element={<PostsContainer />} />
        <Route path="social-media" element={<SocialMediaContainer />} />
        <Route path="edit-profile" element={<EditProfileContainer />} />
      </Routes>
    </div>
  )
}

export default ProfileFooter