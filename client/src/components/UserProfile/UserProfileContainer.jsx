import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import UserProfile from "./UserProfile"
import { setUserProfile } from "../../redux/profilePageReducer"

const UserProfileRequestContainer = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`/user/${props.userId}`)
      .then(res => res.json())
      .then(data => {
        dispatch(setUserProfile(data))
      })
  }, [props.userId])

  return <UserProfile userProfile={props.userProfile} />
}

const WithRouter = (props) => {
  const { userId } = useParams()

  return <UserProfileRequestContainer {...props} userId={userId} />
}

const UserProfileContainer = () => {
  const { userProfile } = useSelector(state => state.profilePage)
  
  return <WithRouter userProfile={userProfile} />
}

export default UserProfileContainer
