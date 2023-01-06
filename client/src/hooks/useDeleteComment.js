import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPosts } from "../redux/profilePageReducer"

export const useDeleteComment = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.profilePage)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const deleteComment = (postId, commentId) => {
    setLoading(true)
    fetch(`/deletecomment/${postId}/${commentId}`, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
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

  return [deleteComment, error, loading]
}
