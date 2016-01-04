const initialState = {loading: false, errorMessage: null, loggedIn: null}

export default function logIn(state = initialState, action) {
  switch (action.type) {
    case 'LOG_IN_REQUEST':
      return {...state, loading: true, errorMessage: null}
    case 'LOG_IN_SUCCESS':
      return {...state, loading: false, errorMessage: null, loggedIn: action.payload.auth.uid}
    case 'LOG_IN_FAILURE':
      return {...state, loading: false, errorMessage: null, loggedIn: null}
    case 'UPDATE_EMAIL':
      return {...state, email: action.payload}
    case 'UPDATE_PASSWORD':
      return {...state, password: action.payload}
    default:
      return state
  }
}
