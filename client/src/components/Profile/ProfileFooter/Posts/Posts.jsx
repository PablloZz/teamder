import React from "react"
import { Button } from "../../../../UI/button/Button"
import { Loader } from "../../../../UI/loader/Loader"
import Textarea from "../../../../UI/textarea/Textarea"
import styles from "./posts.module.css"
import { Post } from "../../../../UI/post/Post"

function Posts({ createPost, ...props }) {
  if (!props.posts) {
    return <Loader />
  }

  return (
    <div className={styles.postsContainerSize}>
      <div className={styles.addPost}>
        <h2 className={styles.postsHeader}>Add Post</h2>
        <Textarea
          value={createPost.currentText}
          onChange={e => createPost.changePostText(e.target.value)}
        />
        <div>
          <label htmlFor="selectFile" className={styles.fileLabel}>
            <i className="fa fa-cloud-upload"></i> Upload file
          </label>
          <input
            type="file"
            id="selectFile"
            onChange={e => createPost.changeFile(e.target.files[0])}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button onClick={createPost.addPost}>Add post</Button>
        </div>
      </div>
      <div>
        <Post {...props} />
      </div>
    </div>
  )
}

export default Posts
