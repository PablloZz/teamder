import React, { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteUser, setAuthUserData } from "../../../../redux/auth-reducer"
import EditProfile from "./EditProfile"
import { useNavigate } from "react-router-dom"

function EditProfileContainer() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { _id } = useSelector(
    state => state.auth
  )

  const [changeInfo, setChangeInfo] = useState({
    login: "",
    email: "",
    name: "",
    surname: "",
    password: "",
    city: "",
    age: "",
    picture: "",
  })
  const [url, setUrl] = useState("")

  useEffect(() => {
    if (url) {
      sendUpdatedData("photo", "photo", url)
    }
  }, [url])

  const changeInfoHandler = event => {
    const { name, value, files, type } = event.target

    setChangeInfo(prevChangeInfo => {
      return {
        ...prevChangeInfo,
        [name]: type === "file" ? files[0] : value,
      }
    })
  }

  const postPhoto = () => {
    const data = new FormData()
    data.append("file", changeInfo.picture)
    data.append("upload_preset", "teamder")
    data.append("cloud_name", "dn4hb36zi")
    fetch("https://api.cloudinary.com/v1_1/dn4hb36zi/upload", {
      method: "post",
      body: data,
    })
      .then(res => res.json())
      .then(data => {
        setUrl(data.secure_url)
      })
  }

  const sendUpdatedData = (requsetType, dataType, data) => {
    const url = `/changeprofile${requsetType}`
    fetch(url, {
      method: "put",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ [dataType]: data }),
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("user", JSON.stringify(data))
        dispatch(setAuthUserData(data))
      })
  }

  const updateData = event => {
    event.preventDefault()

    if (changeInfo.picture) {
      postPhoto()
    }
    if (changeInfo.login) {
      sendUpdatedData("login", "login", changeInfo.login)
    }
    if (changeInfo.email) {
      sendUpdatedData("email", "email", changeInfo.email)
    }
    if (changeInfo.password) {
      sendUpdatedData("password", "password", changeInfo.password)
    }
    if (changeInfo.name) {
      sendUpdatedData("name", "name", changeInfo.name)
    }
    if (changeInfo.surname) {
      sendUpdatedData("surname", "surname", changeInfo.surname)
    }
    if (changeInfo.age) {
      sendUpdatedData("age", "age", changeInfo.age)
    }
    if (changeInfo.city) {
      sendUpdatedData("city", "city", changeInfo.city)
    }
  }

  const deleteAccount = () => {
    fetch(`/deleteaccount/${_id}`, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        dispatch(deleteUser())
        localStorage.clear()
      })
      navigate("/signup")
  }

  return (
    <EditProfile
      changeInfo={changeInfo}
      changeInfoHandler={changeInfoHandler}
      updateData={updateData}
      deleteAccount={deleteAccount}
    />
  )
}

export default EditProfileContainer
