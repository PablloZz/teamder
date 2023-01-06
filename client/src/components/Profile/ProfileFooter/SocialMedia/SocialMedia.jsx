import { Loader } from "../../../../UI/loader/Loader"
import styles from "./socialMedia.module.css"
import { Input } from "../../../../UI/input/Input"
import { Button } from "../../../../UI/button/Button"

function SocialMedia(props) {
  console.log(props)
  if (!props.socialMedia) {
    return <Loader />
  }

  return (
    <div>
      <form onSubmit={props.postMedia} className={styles.form}>
        <Input
          value={props.url}
          onChange={(e) => props.setUrl(e.target.value)}
        />
        <Button>Add Media</Button>
      </form>
      <div>
        {props.socialMedia.map((media) => (
          <p key={media._id} className={styles.media}>
            {media.url}
          </p>
        ))}
      </div>
    </div>
  )
}

export default SocialMedia
