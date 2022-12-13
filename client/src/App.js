import React, { useEffect, useState } from "react"
import "./App.css"
import { Routes, Route, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import HeaderContainer from "./components/Header/HeaderContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import Sidebar from "./components/Sidebar/Sidebar"
import Home from "./components/Home/Home"
import MyTeams from "./components/MyTeams/MyTeams"
import Notifications from "./components/Notifications/Notifications"
import MessagesContainer from "./components/Messages/MessagesContainer"
import UsersContainer from "./components/Users/UsersContainer"
import Signup from "./components/Signup/Signup"
import Signin from "./components/Signin/Signin"
import { useDispatch } from "react-redux"
import { setAuthUserData } from "./redux/auth-reducer"
import UserProfileContainer from "./components/UserProfile/UserProfileContainer"

const App = props => {
  const dispatch = useDispatch()
  const [isLoggedIn, setIsLoggedIn] = useState()
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"))

    if (data) {
      dispatch(setAuthUserData(data))
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
    //eslint-disable-next-line
  }, [])
  
  return (
    <div>
      {isLoggedIn ? (
        <div className="wrapper container">
          <Navbar />
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<ProfileContainer />}>
              <Route path="posts" />
              <Route path="social-media" />
              <Route path="edit-profile" />
            </Route>
            <Route path="profile/:userId" element={<UserProfileContainer />}>
              <Route path="posts" />
              <Route path="social-media" />
            </Route>
            <Route path="messages" element={<MessagesContainer />} />
            <Route path="my-teams" element={<MyTeams />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="users" element={<UsersContainer />} />
          </Routes>
          <HeaderContainer />
          <Sidebar />
        </div>
      ) : (
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      )}
    </div>
  )
}

export default App
