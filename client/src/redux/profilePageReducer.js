const CHANGE_POST_TEXT = "CHANGE_POST_TEXT"
const ADD_NEW_POST = "ADD_NEW_POST"
const SET_POSTS = "SET_POSTS"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_USER_POSTS = "SET_USER_POSTS"

const initialState = {
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.`,
  posts: [],
  currentPostText: "",
  userProfile: null,
}

export const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_POST_TEXT:
      return {
        ...state,
        currentPostText: action.text,
      }

    case ADD_NEW_POST:
      return {
        ...state,
        posts: [...state.posts, {...action.payload}],
        currentPostText: "",
      }

    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.profile,
      }

    case SET_USER_POSTS:
      return {
        ...state,
        userProfile: { ...state.userProfile, posts: action.payload },
      }

    default:
      return state
  }
}

export const changePostText = currentValue => ({
  type: CHANGE_POST_TEXT,
  text: currentValue,
})

export const newPost = payload => ({ type: ADD_NEW_POST, payload })

export const setPosts = posts => ({ type: SET_POSTS, posts })

export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })

export const setUserPosts = posts => ({ type: SET_USER_POSTS, payload: posts })
