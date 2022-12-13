import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUserPosts } from "../../../../../redux/profilePageReducer"
import UserPost from "./UserPost"

function UserPostContainer() {
  const dispatch = useDispatch()
  const { posts } = useSelector(state => state.profilePage.userProfile)
  const { _id } = useSelector(state => state.auth)

  const [showComment, setShowComment] = useState(false)

  const toggleComment = () =>
    setShowComment(prevShowComment => !prevShowComment)

  const likePost = postId => {
    fetch("/like", {
      method: "put",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postId }),
    })
      .then(res => res.json())
      .then(data => {
        const newPosts = posts.map(post => {
          if (post._id === data._id) {
            return data
          } else {
            return post
          }
        })
        dispatch(setUserPosts(newPosts))
      })
  }

  const unlikePost = postId => {
    fetch("/unlike", {
      method: "put",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postId }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        const newPosts = posts.map(post => {
          if (post._id === data._id) {
            return data
          } else {
            return post
          }
        })
        dispatch(setUserPosts(newPosts))
      })
  }

  const postComment = (text, postId) => {
    fetch("/comment", {
      method: "put",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, postId }),
    })
      .then(res => res.json())
      .then(data => {
        const newPosts = posts.map(post => {
          if (post._id === data._id) {
            return data
          } else {
            return post
          }
        })
        dispatch(setUserPosts(newPosts))
      })
  }

  const deletePost = postId => {
    fetch(`/deletepost/${postId}`, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const newPosts = posts.filter(post => post._id !== data._id)
        dispatch(setUserPosts(newPosts))
      })
  }

  const deleteComment = (postId, commentId) => {
    fetch(`/deletecomment/${postId}/${commentId}`, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        const newPosts = posts.map(post => {
          if (post._id === data._id) {
            return data
          } else {
            return post
          }
        })
        dispatch(setUserPosts(newPosts))
      })
  }


  if (posts.length === 0) {
    return <p>This user hasn't any post yet</p>
  }
  return (
    <div>
      <UserPost
        showComment={showComment}
        userId={_id}
        posts={posts}
        likePost={likePost}
        unlikePost={unlikePost}
        postComment={postComment}
        toggleComment={toggleComment}
        deletePost={deletePost}
        deleteComment={deleteComment}
      />
    </div>
  )
}

export default UserPostContainer
