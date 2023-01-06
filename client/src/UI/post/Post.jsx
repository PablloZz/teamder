import { Input } from "../input/Input"
import styles from "./post.module.css"

export function Post(props) {
  return (
    <>
      {props.posts.map(post => (
        <div className={styles.postContainer}>
          <div className={styles.header}>
            <div className={styles["post-author-info"]}>
              <img
                src={post.postedBy.photo}
                alt="user"
                className={styles.userImg}
              />
              <span className={styles.name}>{post.postedBy.name}</span>
            </div>
            {props.userId === post.postedBy._id && (
              <i
                className="fa-solid fa-trash"
                onClick={() => props.deletePost(post._id)}
              ></i>
            )}
          </div>
          <div className={styles.body}>
            <p className={styles["post-description"]}>{post.body}</p>
            <div>
              <img src={post.photo} alt="post" className={styles.postImg} />
              <div className={styles.likes}>
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
              </div>
              {props.showComment ? (
                <form
                  className={styles["comment-form"]}
                  onSubmit={e => {
                    e.preventDefault()
                    props.postComment(e.target[0].value, post._id)
                    e.target[0].value = ""
                  }}
                >
                  <Input
                    placeholder="Write your comment"
                    className={styles.commentInput}
                  />
                </form>
              ) : null}
            </div>
          </div>
          <div className={styles.footer}>
            {post.comments && (
              <div className={styles.comments}>
                {post.comments.map(comment => (
                  <div key={comment._id} className={styles.comment}>
                    <div className={styles["comment-author-info"]}>
                      <img
                        src={comment.postedBy.photo}
                        alt="comment"
                        className={styles.commentImg}
                      />
                      <p>{`${comment.postedBy.name}: ${comment.text}`}</p>
                    </div>
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
      ))}
    </>
  )
}
