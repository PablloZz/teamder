const SET_USER_DATA = "SET-USER-DATA"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const DELETE_USER = "DELETE_USER"

const initialState = {
  _id: null,
  name: null,
  email: null,
  login: null,
  surname: null,
  city: null,
  age: null,
  followers: [],
  following: []
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.userData,
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.user,
      }
    case DELETE_USER:
      return {}
    default:
      return state
  }
}

export const setAuthUserData = (payload) => {
  return {
    type: SET_USER_DATA,
    userData: payload,
  }
}

export const setUserProfile = user => {
  return {
    type: SET_USER_PROFILE,
    user,
  }
}

export const deleteUser = () => {
  return {
    type: DELETE_USER
  }
}