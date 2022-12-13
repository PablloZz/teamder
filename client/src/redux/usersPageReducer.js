const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const CHANGE_PAGE_NUMBER = "CHANGE-PAGE-NUMBER"
const SET_USERS_COUNT = "SET-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

const initialState = {
  users: [],
  pagesCount: 4,
  usersCount: 0,
  currentPage: 1,
  isFetching: false
}

export const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user._id === action.payload._id) {
            return action.payload
          }
          return user
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user._id === action.payload._id) {
            return action.payload
          }
          return user
        }),
      }
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      }
    case CHANGE_PAGE_NUMBER:
      return {
        ...state,
        currentPage: action.pageNumber,
      }
    case SET_USERS_COUNT:
      return {
        ...state,
        usersCount: action.usersCount,
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    default:
      return state
  }
}

export const follow = payload => {
  return {
    type: FOLLOW,
    payload
  }
}

export const unfollow = payload => {
  return {
    type: UNFOLLOW,
    payload,
  }
}

export const setUsers = users => {
  return {
    type: SET_USERS,
    users,
  }
}

export const setPageNumber = pageNumber => {
  return {
    type: CHANGE_PAGE_NUMBER,
    pageNumber,
  }
}

export const setUsersCount = usersCount => {
  return {
    type: SET_USERS_COUNT,
    usersCount
  }
}

export const setIsFetching = isFetching => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  }
} 