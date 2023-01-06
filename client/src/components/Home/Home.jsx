import React from "react"
import styles from "./home.module.css"
import { Loader } from "../../UI/loader/Loader"
import { Post } from "../../UI/post/Post"

const Home = props => {
  if (!props.posts) {
    return <Loader />
  }

  return (
    <main className="main">
      <Post {...props} />
    </main>
  )
}

export default Home
