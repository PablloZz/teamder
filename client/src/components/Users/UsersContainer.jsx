import React, { useEffect } from "react"
import Users from "./Users"
import { useDispatch, useSelector } from "react-redux"
import {
  follow,
  setUsers,
  unfollow,
  setPageNumber,
  setUsersCount,
  setIsFetching,
} from "../../redux/usersPageReducer"
import axios from "axios"
import { setAuthUserData, setUserProfile } from "../../redux/auth-reducer"

const UsersAPIContainer = props => {
  useEffect(() => {
    props.setIsFetching(true)
    axios.get("/users").then(res => {
      props.setUsersCount(res.data.length)
      props.setUsers(res.data)
      props.setIsFetching(false)
    })
  }, [])

  return (
    <>
      {props.isFetching ? <p>Loading</p> : null}
      <Users {...props} />
    </>
  )
}

const UsersContainer = () => {
  const { users, pagesCount, usersCount, currentPage, isFetching } =
    useSelector(state => state.usersPage)
  const { _id } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  const followHandler = followId => {
    fetch("/follow", {
      method: "put",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ followId }),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(follow(data.followingUser))
        dispatch(setAuthUserData(data.user))
      })
      .catch(err => err)
  }
  const unfollowHandler = unfollowId => {
    fetch("/unfollow", {
      method: "put",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ unfollowId }),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(unfollow(data.unfollowingUser))
        dispatch(setAuthUserData(data.user))
      })
      .catch(err => err)
  }
  const setUsersHandler = users => {
    dispatch(setUsers(users))
  }
  const setPageNumberHandler = pageNumber => {
    dispatch(setPageNumber(pageNumber))
  }
  const setUsersCountHandler = usersCount => {
    dispatch(setUsersCount(usersCount))
  }
  const setIsFetchingHandler = isFetching => {
    dispatch(setIsFetching(isFetching))
  }
  return (
    <UsersAPIContainer
      users={users}
      id={_id}
      pagesCount={pagesCount}
      usersCount={usersCount}
      currentPage={currentPage}
      isFetching={isFetching}
      follow={followHandler}
      unfollow={unfollowHandler}
      setUsers={setUsersHandler}
      setPageNumber={setPageNumberHandler}
      setUsersCount={setUsersCountHandler}
      setIsFetching={setIsFetchingHandler}
    />
  )
}
export default UsersContainer
