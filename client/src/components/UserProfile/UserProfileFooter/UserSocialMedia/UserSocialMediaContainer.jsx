import React from 'react'
import { useSelector } from 'react-redux'
import UserSocialMedia from './UserSocialMedia'

function UserSocialMediaContainer() {
  const { socialMedia } = useSelector(state => state.profilePage.userProfile.user)
  return (
    <UserSocialMedia medias={socialMedia} />
  )
}

export default UserSocialMediaContainer