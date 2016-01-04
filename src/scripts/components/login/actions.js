import Firebase from 'firebase'
import { pushPath } from 'redux-simple-router'

const ref = new Firebase('https://toptal-project.firebaseio.com')

export default {
  logIn() {
    return (dispatch, getState) => {
      const userInfo = {
        email: getState().users.email,
        password: getState().users.password
      }
      ref.authWithPassword(userInfo, (loginError, authData) => {
        if (loginError) {
          dispatch({type: 'LOG_IN_FAILURE', payload: loginError})
        } else {
          dispatch({type: 'LOG_IN_SUCCESS', payload: authData})
          dispatch(pushPath('jogs'))
        }
      })
      dispatch({type: 'LOG_IN_REQUEST'})
    }
  },
  updateEmail(email) {
    return {
      type: 'UPDATE_EMAIL',
      payload: email
    }
  },
  updatePassword(password) {
    return {
      type: 'UPDATE_PASSWORD',
      payload: password
    }
  }
}
