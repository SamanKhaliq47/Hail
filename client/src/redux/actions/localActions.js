import { connect } from 'react-redux'
import { CheckSession } from '../../services/auth'
import toggleFunc from '../../services/localServices'
import { SET_USER_STATE, TOGGLE_AUTH } from '../types'

function authToggle(boolean) {
  return async (dispatch) => {
    try {
      dispatch({ type: TOGGLE_AUTH, payload: boolean })
    } catch (error) {
      throw error
    }
  }
}

function setUser() {
  return async (dispatch) => {
    try {
      const session = await CheckSession()
      dispatch({ type: SET_USER_STATE, payload: session })
    } catch (error) {
      throw error
    }
  }
}

export default authToggle(setUser)