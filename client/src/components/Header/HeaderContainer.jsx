import axios from "axios"
import React from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Header from "./Header"
import { setAuthUserData, setUserProfile } from "../../redux/auth-reducer"
import styles from "./Header.module.css"
import { useCallback } from "react"

const HeaderDataContainer = props => {
  useEffect(() => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then(res => {
        const { id, email, login } = res.data.data
        if (res.data.resultCode === 0) {
          props.setAuthUserData( id, email, login )
        }
        axios
          .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
          .then(res => {
            props.setUserProfile(res.data)
          })
      })
    // eslint-disable-next-line
  }, [])

  return <Header {...props} />
}

const HeaderContainer = () => {
  const { isAuth, login, user, userData } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const setAuthUserDataHandler = useCallback((id, email, login) => {
    dispatch(setAuthUserData(id, email, login))
    // eslint-disable-next-line
  }, [])

  const setUserProfileHandler = useCallback(user => {
    dispatch(setUserProfile(user))
    // eslint-disable-next-line
  }, [])

  return (
    <HeaderDataContainer
      isAuth={isAuth}
      login={login}
      user={user}
      userData={userData}
      setAuthUserData={setAuthUserDataHandler}
      setUserProfile={setUserProfileHandler}
    />
  )
}

export default HeaderContainer