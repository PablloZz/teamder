import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useDeleteComment } from "../../hooks/useDeleteComment"
import { useLikePost } from "../../hooks/useLikePost"
import { usePostComment } from "../../hooks/usePostComment"
import { useUnlikePost } from "../../hooks/useUnlikePost"
import { setPosts } from "../../redux/profilePageReducer"
import { Error } from "../../UI/error/Error"
import Home from "./Home"

function HomeContainer() {
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.profilePage)
  const { _id } = useSelector((state) => state.auth)

  const [showComment, setShowComment] = useState(false)

  const [likePost, likeError] = useLikePost()
  const [unlikePost, unlikeError] = useUnlikePost()
  const [deleteComment, deleteCommentError] = useDeleteComment()
  const [postComment, postCommentError] = usePostComment()

  const toggleComment = () =>
    setShowComment((prevShowComment) => !prevShowComment)

  useEffect(() => {
    fetch("/followingposts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(setPosts(data)))
  }, [])

  if ((likeError || unlikeError || deleteCommentError || postCommentError)) {
    return <Error />
  }

  return (
    <Home
      posts={posts}
      userId={_id}
      likePost={likePost}
      unlikePost={unlikePost}
      toggleComment={toggleComment}
      showComment={showComment}
      postComment={postComment}
      deleteComment={deleteComment}
    />
  )
}

export default HomeContainer
