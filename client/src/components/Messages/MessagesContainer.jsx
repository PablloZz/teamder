import React from "react"
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeMessageText, sendMessage } from "../../redux/messagesPageReducer"
import Messages from "./Messages"

// const MessagesContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           let state = store.getState().messagesPage

//           const changeMessageText = text => store.dispatch(changeMessageTextActionCreator(text))
//           const sendMessage = () => store.dispatch(sendMessageActionCreator())

//           return (
//             <Messages
//               changeMessageText={changeMessageText}
//               sendMessage={sendMessage}
//               dialogs={state.dialogs}
//               messages={state.messages}
//               messageText={state.messageText}
//             />
//           )
//         }
//       }
//     </StoreContext.Consumer>
//   )
// }

const MessagesContainer = () => {
  const { dialogs, messages, messageText } = useSelector(
    state => state.messagesPage
  )
  const dispatch = useDispatch()

  const changeMessageTextHandler = useCallback(text => {
    dispatch(changeMessageText(text))
    // eslint-disable-next-line
  }, [])
  const sendMessageHandler = useCallback(text => {
    dispatch(sendMessage(text))
    // eslint-disable-next-line
  }, [])

  return (
    <Messages
      dialogs={dialogs}
      messages={messages}
      messageText={messageText}
      changeMessageText={changeMessageTextHandler}
      sendMessage={sendMessageHandler}
    />
  )
}

export default MessagesContainer
