import { createStore, combineReducers } from "redux"
import { messagePageReducer } from "./messagesPageReducer"
import { profilePageReducer } from "./profilePageReducer"
import { usersPageReducer } from "./usersPageReducer"
import { authReducer } from "./auth-reducer"
import { composeWithDevTools } from "redux-devtools-extension"

let reducers = combineReducers({
  messagesPage: messagePageReducer,
  profilePage: profilePageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
})

let store = createStore(
  reducers,
  composeWithDevTools()
)

window.store = store

export default store
