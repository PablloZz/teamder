const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

const initialState = {
  dialogs: [
    { id: 1, avatar: "avatar1", name: "Jan Kowalski" },
    { id: 2, avatar: "avatar2", name: "Tomasz Gajda" },
    { id: 3, avatar: "avatar1", name: "Jan Kowalski" },
    { id: 4, avatar: "avatar2", name: "Tomasz Gajda" },
  ],
  messages: [
    { message: "Hi" },
    { message: "How are you?" },
    { message: "I'm good thanks" },
  ],
  messageText: "",
}

export const messagePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE_TEXT:
      return {
        ...state,
        messageText: action.text,
      }
    case SEND_MESSAGE:
      let newMessage = { message: state.messageText }

      return {
        ...state,
        messages: [...state.messages, newMessage],
        messageText: "",
      }

    default:
      return state
  }
}

export const changeMessageText = (currentValue) => {
  return {
    type: CHANGE_MESSAGE_TEXT,
    text: currentValue,
  }
}

export const sendMessage = () => {
  return {
    type: SEND_MESSAGE,
  }
}