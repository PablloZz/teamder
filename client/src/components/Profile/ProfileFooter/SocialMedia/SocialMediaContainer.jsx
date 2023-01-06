import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setAuthUserData } from "../../../../redux/auth-reducer"
import SocialMedia from "./SocialMedia"

function SocialMediaContainer() {
  const dispatch = useDispatch()
  const { socialMedia } = useSelector((state) => state.auth)

  const [mediaUrl, setMediaUrl] = useState("")

  function postMedia(event) {
    event.preventDefault()

    fetch("/addsocialmedia", {
      method: "put",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: mediaUrl }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data))
        dispatch(setAuthUserData(data))
        setMediaUrl("")
      })
  }

  return (
    <SocialMedia
      postMedia={postMedia}
      url={mediaUrl}
      setUrl={setMediaUrl}
      socialMedia={socialMedia}
    />
  )
}

export default SocialMediaContainer
