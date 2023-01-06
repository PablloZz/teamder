import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPosts } from "../redux/profilePageReducer"

export const useDeletePost = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.profilePage)

  const [loading, setLoading] = useState(false)
  const deletePost = (postId) => {
    setLoading(true)
    fetch(`/deletepost/${postId}`, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const newPosts = posts.filter((post) => post._id !== data._id)
        dispatch(setPosts(newPosts))
      })
    setLoading(false)
  }

  return [deletePost, loading]
}
