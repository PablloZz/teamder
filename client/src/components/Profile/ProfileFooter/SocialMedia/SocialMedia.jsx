import React from "react"

function SocialMedia(props) {
  if(!props.socialMedia) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <form
        onSubmit={props.handlePostMedia}
        style={{
          display: "flex",
          width: "60%",
          justifyContent: "space-between",
          paddingBottom: "16px",
          marginBottom: "16px",
          borderBottom: "1px solid #3A444C"
        }}
      >
        <input value={props.url} onChange={e => props.setUrl(e.target.value)} />
        <button style={{ marginLeft: "16px" }}>Add Media</button>
      </form>
      <div>
        {props.socialMedia.map(media => {
          return (
            <p key={media._id} style={{marginBottom: "16px"}}>{media.url}</p>
          )
        })}
      </div>
    </div>
  )
}

export default SocialMedia
