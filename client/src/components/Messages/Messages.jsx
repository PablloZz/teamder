import React from "react"
import styles from "./Messages.module.css"
import Dialogs from "./Dialogs/Dialogs"
import Message from "./Message/Message"

const Messages = (props) => {
  const dialogsElements = props.dialogs.map(d => <Dialogs avatar={d.avatar} name={d.name} />)
  const messages = props.messages.map(m => <Message message={m.message} />)

  const onChangeMessageText = e => {
    let currentText = e.target.value
    props.changeMessageText(currentText)
  }

  const onSendMessage = () => props.sendMessage()

  return (
    <main className={styles.main}>
      <div>
        <h3>People</h3>
      </div>
      <div>
        <div>
          {dialogsElements}
        </div>
        <div></div>
      </div>
      <div>
        <div>
          <h2>Message</h2>
          <textarea value={props.messageText} onChange={onChangeMessageText}></textarea>
          <button onClick={onSendMessage}>Send message</button>
        </div>
        <div>
          {messages}
        </div>
      </div>
    </main>
  );
}

export default Messages
