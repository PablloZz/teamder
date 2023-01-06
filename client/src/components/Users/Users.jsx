import React from "react"
import styles from "./Users.module.css"
import { NavLink } from "react-router-dom"
import { Button } from "../../UI/button/Button"

function Users(props) {
  if (!props.users.length) {
    return <p style={{color: "white"}}>Loading...</p>
  }

  return (
    <main className="main">
      <div className={styles.usersContainer}>
        {props.users.map((user) => {
          let button

          if (user.followers.includes(props.id)) {
            button = (
              <Button
                onClick={() => props.unfollow(user._id)}
                style={{ textTransform: "capitalize" }}
              >
                Unfollow
              </Button>
            )
          } else {
            button = (
              <Button
                onClick={() => props.follow(user._id)}
                style={{ textTransform: "capitalize" }}
              >
                Follow
              </Button>
            )
          }
          return (
            <div key={user._id} className={styles.userContainer}>
              <NavLink
                to={
                  props.id === user._id
                    ? "/profile/posts"
                    : `/profile/${user._id}/posts`
                }
              >
                <img src={user.photo} alt="avatar" className={styles.image} />
              </NavLink>
              <div>
                <div>
                  <h4>
                    {user.name} @{user.login}
                  </h4>
                  <div className={styles.buttonContainer}>
                    {props.id === user._id ? null : button}
                  </div>
                </div>
                <div>
                  <p>{user.city}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Users

// import React from "react"

// const Users = (props) => {
//   console.log(props)
//   let pagesCount = Math.ceil(props.usersCount / props.pagesCount)
//   const pages = []

//   for (let i = 1; i <= pagesCount; i++) {
//     pages.push(i)
//   }

//   const pagesButtons = pages.map((p) => {
//     return (
//       <span
//         className={props.currentPage === p ? styles.activePage : null}
//         onClick={(e) => props.onPageChange(p)}
//       >
//         {p}
//       </span>
//     )
//   })

//   return (
//     <main className={styles.main}>
//       {props.users.map((u) => {
//         return (
//           <div key={u.id}>
//             <NavLink to={`/profile/${u.id}`}>
//               <img
//                 src={u.img ? u.img : userAvatar}
//                 alt="avatar"
//                 className={styles.image}
//               />
//             </NavLink>
//             <div>
//               <div>
//                 <h4>{u.name}</h4>
//                 {u.isFollowed ? (
//                   <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
//                 ) : (
//                   <button onClick={() => props.follow(u.id)}>Follow</button>
//                 )}
//               </div>
//               <div>
//                 {/* <p>{u.address.city}</p> */}
//                 <p>{`${u.email}, ${u.phone}`}</p>
//               </div>
//             </div>
//           </div>
//         )
//       })}
//       <div>{pagesButtons}</div>
//     </main>
//   )
// }

// export default Users

// // import React from "react"
// // import styles from "./Users.module.css"
// // import userAvatar from "../../Images/user-without-img.png"
// // import { NavLink } from "react-router-dom"

// // const Users = props => {
// //   let pagesCount = Math.ceil(props.usersCount / props.pagesCount)
// //   const pages = []

// //   for (let i = 1; i <= pagesCount; i++) {
// //     pages.push(i)
// //   }

// //   const pagesButtons = pages.map(p => {
// //     return (
// //       <span
// //         className={props.currentPage === p ? styles.activePage : null}
// //         onClick={(e) => props.onPageChange(p)}
// //       >
// //         {p}
// //       </span>
// //     )
// //   })

// //   return (
// //     <main className={styles.main}>
// //       {props.users.map( u => {
// //         return (
// //           <div key={u.id}>
// //             <NavLink to={`/profile/${u.id}`}>
// //               <img
// //                 src={u.img ? u.img : userAvatar}
// //                 alt="avatar"
// //                 className={styles.image}
// //               />
// //             </NavLink>
// //             <div>
// //               <div>
// //                 <h4>{u.name}</h4>
// //                 {u.isFollowed ? (
// //                   <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
// //                 ) : (
// //                   <button onClick={() => props.follow(u.id)}>Follow</button>
// //                 )}
// //               </div>
// //               <div>
// //                 <p>{u.address.city}</p>
// //                 <p>{`${u.email}, ${u.phone}`}</p>
// //               </div>
// //             </div>
// //           </div>
// //         )
// //       })}
// //       <div>{pagesButtons}</div>
// //     </main>
// //   )
// // }

// // export default Users
