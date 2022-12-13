import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPosts } from "../../../../../redux/profilePageReducer"
import Post from "./Post"

function PostContainer() {
  const dispatch = useDispatch()
  const { posts } = useSelector(state => state.profilePage)
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
        dispatch(setPosts(newPosts))
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
        const newPosts = posts.map(post => {
          if (post._id === data._id) {
            return data
          } else {
            return post
          }
        })
        dispatch(setPosts(newPosts))
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
        dispatch(setPosts(newPosts))
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
        const newPosts = posts.filter(post => post._id !== data._id)
        dispatch(setPosts(newPosts))
      })
  }

  const deleteComment = (postId, commentId) => {
    fetch(`/deletecomment/${postId}/${commentId}`, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
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
        dispatch(setPosts(newPosts))
      })
  }

  return (
    <div>
      <Post
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

export default PostContainer
