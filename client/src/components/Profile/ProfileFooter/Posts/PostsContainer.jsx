import React, { useState } from "react"
import {
  changePostText,
  newPost,
  setPosts,
} from "../../../../redux/profilePageReducer"
import { useDispatch, useSelector } from "react-redux"
import Posts from "./Posts"
import { useEffect } from "react"
import { usePostPhoto } from "../../../../hooks/usePostPhoto"
import { useLikePost } from "../../../../hooks/useLikePost"
import { useUnlikePost } from "../../../../hooks/useUnlikePost"
import { usePostComment } from "../../../../hooks/usePostComment"
import { useDeleteComment } from "../../../../hooks/useDeleteComment"
import { useDeletePost } from "../../../../hooks/useDeletePost"

const PostsContainer = () => {
  const dispatch = useDispatch()

  const { posts } = useSelector(state => state.profilePage)
  const { _id } = useSelector(state => state.auth)

  const [likePost] = useLikePost()
  const [unlikePost] = useUnlikePost()
  const [postComment] = usePostComment()
  const [deleteComment] = useDeleteComment()
  const [deletePost] = useDeletePost()
  const [showComment, setShowComment] = useState(false)

  function toggleComment() {
    setShowComment(prevShowComment => !prevShowComment)
  }

  const { currentPostText } = useSelector(state => state.profilePage)
  const [url, postPhoto] = usePostPhoto()
  const [picture, setPicture] = useState("")

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

  function changePostTextHandler(text) {
    dispatch(changePostText(text))
  }

  function changeFileHandler(picture) {
    setPicture(picture)
  }

  return (
    <Posts
      createPost={{
        currentText: currentPostText,
        changePostText: changePostTextHandler,
        changeFile: changeFileHandler,
        addPost: () => postPhoto(picture)
      }}
      posts={posts}
      userId={_id}
      likePost={likePost}
      unlikePost={unlikePost}
      postComment={postComment}
      deleteComment={deleteComment}
      deletePost={deletePost}
      showComment={showComment}
      toggleComment={toggleComment}
    />
  )
}

export default PostsContainer
