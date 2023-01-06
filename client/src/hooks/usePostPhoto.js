import { useState } from "react"

export function usePostPhoto() {
  const [url, setUrl] = useState("")

  function postPhotoInCloud(photo) {
    const data = new FormData()
    data.append("file", photo)
    data.append("upload_preset", "teamder")
    data.append("cloud_name", "dn4hb36zi")
    fetch("https://api.cloudinary.com/v1_1/dn4hb36zi/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setUrl(data.secure_url))
      .catch(err => console.log(err))
  }

  return [url, postPhotoInCloud]
}
