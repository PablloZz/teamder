import React from "react"
import Profile from "./Profile"
import { useSelector } from "react-redux"

const ProfileRequestContainer = props => {
  return <Profile {...props} />
}

const ProfileContainer = () => {
  const { description, posts, currentPostText } = useSelector(
    state => state.profilePage
  )
  const { auth } = useSelector(state => state)
  
  return (
    <ProfileRequestContainer
      userData={auth}
      description={description}
      posts={posts}
      currentPostText={currentPostText}
    />
  )

}

export default ProfileContainer
