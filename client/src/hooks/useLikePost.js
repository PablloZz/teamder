import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPosts } from "../redux/profilePageReducer"

export const useLikePost = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.profilePage)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const likePost = (postId) => {
    setLoading(true)
    fetch("/like", {
      method: "put",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postId }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newPosts = posts.map((post) => {
          if (post._id === data._id) {
            return data
          } else {
            return post
          }
        })
        dispatch(setPosts(newPosts))
      })
      .catch((err) => setError(err))
      .finally(setLoading(false))
  }

  return [likePost, error, loading]
}