import React, { useState } from "react"
import {
  changePostText,
  newPost,
  setPosts,
} from "../../../../redux/profilePageReducer"
import { useDispatch, useSelector } from "react-redux"
import Posts from "./Posts"
import { useEffect } from "react"

const PostsContainer = () => {
  const dispatch = useDispatch()

  const { currentPostText } = useSelector(state => state.profilePage)
  const [file, setFile] = useState("")
  const [url, setUrl] = useState("")

  useEffect(() => {
    fetch("/myposts", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        dispatch(setPosts(data.posts))
      })
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (url) {
      fetch("/createpost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        body: JSON.stringify({ body: currentPostText, pic: url }),
      })
        .then(res => res.json())
        .then(data => {
          dispatch(newPost(data.post))
        })
        .catch(err => console.log(err))
    }
    //eslint-disable-next-line
  }, [url])

  const sendData = () => {
    const data = new FormData()
    data.append("file", file)
    data.append("upload_preset", "teamder")
    data.append("cloud_name", "dn4hb36zi")

    fetch("https://api.cloudinary.com/v1_1/dn4hb36zi/image/upload", {
      method: "post",
      body: data,
    })
      .then(res => res.json())
      .then(data => setUrl(data.url))
      .catch(err => console.log(err))
  }

  const changePostTextHandler = text => dispatch(changePostText(text))

  const changeFileHandler = file => setFile(file)

  
  return (
    <Posts
      currentText={currentPostText}
      changePostText={changePostTextHandler}
      changeFile={changeFileHandler}
      addPost={sendData}
    />
  )
}

export default PostsContainer
