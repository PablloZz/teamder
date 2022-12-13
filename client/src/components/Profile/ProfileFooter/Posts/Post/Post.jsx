import React from "react"
import styles from "./Post.module.css"

function Post(props) {
  if (!props.posts) {
    return <p>Loading...</p>
  }
  
  return (
    <>
      {props.posts.map((post) => (
        <div className={styles.postContainer}>
          <img
            src={post.postedBy.photo}
            alt="user"
            className={styles.userImg}
          />
          <div>
            <div className={styles.header}>
              <p className={styles.name}>{post.postedBy.name}</p>
              {props.userId === post.postedBy._id && (
                <i
                  className="fa-solid fa-trash"
                  onClick={() => props.deletePost(post._id)}
                ></i>
              )}
            </div>
            <p className={styles.body}>{post.body}</p>
            <div>
              <img src={post.photo} alt="post" />
              <p className={styles.likes}>
                <span>{post.likes.length}</span>
                {post.likes.includes(props.userId) ? (
                  <i
                    className="fa-solid fa-heart"
                    onClick={() => props.unlikePost(post._id)}
                    style={{ color: "red" }}
                  ></i>
                ) : (
                  <i
                    className="fa-regular fa-heart"
                    onClick={() => props.likePost(post._id)}
                  ></i>
                )}
                <i
                  className="fa-regular fa-comment"
                  onClick={() => props.toggleComment()}
                ></i>
              </p>
              {props.showComment ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    props.postComment(e.target[0].value, post._id)
                    e.target[0].value = ""
                  }}
                >
                  <input
                    placeholder="Write your comment"
                    className={styles.commentInput}
                  />
                </form>
              ) : null}
              {post.comments && (
                <div className={styles.comments}>
                  {post.comments.map((comment) => (
                    <div key={comment._id} className={styles.comment}>
                      <img
                        src={comment.postedBy.photo}
                        alt="comment"
                        className={styles.commentImg}
                      />
                      <p>{`${comment.postedBy.name}: ${comment.text}`}</p>
                      {comment.postedBy._id === props.userId && (
                        <i
                          className="fa-solid fa-trash"
                          onClick={() =>
                            props.deleteComment(post._id, comment._id)
                          }
                        ></i>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Post
