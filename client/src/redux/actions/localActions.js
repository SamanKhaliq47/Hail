import { CheckSession } from '../../services/auth'
import {
  grabGamePosts,
  grabCommentByPostId,
  postComment,
  toggle
} from '../../services/localServices'
import {
  GET_POSTS,
  SET_USER_STATE,
  TOGGLE_AUTH,
  GET_COMMENTS,
  POST_COMMENTS,
  CREATE_POST
} from '../types'

export function authToggle(boolean) {
  return async (dispatch) => {
    try {
      dispatch({ type: TOGGLE_AUTH, payload: boolean })
    } catch (error) {
      throw error
    }
  }
}

export function setUser() {
  return async (dispatch) => {
    try {
      const session = await CheckSession()
      dispatch({ type: SET_USER_STATE, payload: session })
    } catch (error) {
      throw error
    }
  }
}

export function getPosts() {
  return async (dispatch) => {
    try {
      const posts = await grabGamePosts()
      dispatch({ type: GET_POSTS, payload: posts })
    } catch (error) {
      throw error
    }
  }
}

export function getComments(postid) {
  return async (dispatch) => {
    try {
      const comment = await grabCommentByPostId(postid)
      dispatch({ type: GET_COMMENTS, payload: comment })
    } catch (error) {
      throw error
    }
  }
}
export function postComments(body) {
  return async (dispatch) => {
    try {
      const res = await postComment(body)
      dispatch({ type: POST_COMMENTS, payload: res })
    } catch (error) {
      throw error
    }
  }
}
