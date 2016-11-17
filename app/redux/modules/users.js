// Users
{
  type: AUTH_USER,
  uid,
}

{
  type: UNAUTH_USER,
}

{
  type: FETCHING_USER,
}

{
  type: FETCHING_USER_FAILURE,
  error: 'Error fetching user',
}

{
  type: FETCHING_USER_SUCCESS,
  uid,
  user,
  timestamp
}


//Users
const initialUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
    avatar: '',
  }
}

function user (state = initialUserState, action) {
  switch(action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp
      }
    default:
      return state
  }
}

const initialState = {
  isFetching: false,
  error: '',
  isAuthed: false,
  authedId: ''
}

function users(state = initialState, action) {
  switch(action.type) {
    case AUTH_USER :
      return  { 
        ...state,
        isAuthed: true,
        authedId: action.uid,
      }
    case UNAUTH_USER :
      return  { 
        ...state,
        isAuthed: false,
        authedId:'',
      }
    case FETCHING_USER :
      return  { 
        ...state,
        isFetching: true,
      }
    case FETCHING_USER_FAILURE :
      return  { 
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_USER_SUCCESS :
      return action.user === null
        ? { 
        ...state,
        isFetching: false,
        error: '',
        }
        : {
          ...state,
          isFetching: false,
          error: '',
          [action.uid]: user(state[action.uid], action)
        }
    default:
      return state      
  }
}
