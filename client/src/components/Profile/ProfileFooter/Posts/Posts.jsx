import React from "react"
import PostContainer from "./Post/PostContainer"
import styles from "./Posts.module.css"

function Posts(props) {
  const onChangePostText = text => props.changePostText(text)

  const onAddPost = () => props.addPost()

  const onFileChange = file => props.changeFile(file)

  return (
    <div className={styles.postsContainerSize}>
      <div className={styles.addPost}>
        <h2 className={styles.postsHeader}>Add Post</h2>
        <textarea
          value={props.currentText}
          onChange={e => onChangePostText(e.target.value)}
        />
        <div>
          <label htmlFor="selectFile" className={styles.fileLabel}>
            <i className="fa fa-cloud-upload"></i> Upload file
          </label>
          <input
            type="file"
            id="selectFile"
            onChange={e => onFileChange(e.target.files[0])}
          />
        </div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div>
        <PostContainer />
      </div>
    </div>
  )
}

export default Posts
