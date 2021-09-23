import axios from 'axios'
import Client from './api'

export async function grabGamePosts() {
  try {
    const res = await Client.get('/gameposts')
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function grabCommentByPostId(postid) {
  try {
    const res = await Client.get(`/comments/view/${postid}`)
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}

export default grabGamePosts

export async function postComment(body) {
  try {
    const res = await Client.post(`/comments/create`, body, {
      headers: { 'Content-Type': 'application/json' }
    })
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}
