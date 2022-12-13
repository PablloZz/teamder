import React from 'react'

function UserSocialMedia(props) {
  console.log(props.medias)
  if (props.medias.length === 0) {
    return <p>This user didn't add any social media link</p>
  }
  return (
    <div>
      {props.medias.map(media => {
        return (
          <p key={media._id} style={{ marginBottom: "16px" }}>
            {media.url}
          </p>
        )
      })}
    </div>
  )
}

export default UserSocialMedia