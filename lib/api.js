const API_URL = 'http://ec2-54-84-203-251.compute-1.amazonaws.com:8080'

export function createUser(data) {
  return fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export async function createPost(data) {
  const token = window.localStorage.getItem('token')
  const response = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error('Failed to create post')
  }

  return await response.json()
}

export async function login(email, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })

  if (!response.ok) {
    throw new Error('Failed to login')
  }

  const json = await response.json()
  return { token: json.data.token, id: json.data.id }
}

export async function getPosts() {
  const response = await fetch(`${API_URL}/posts`)
  const json = await response.json()
  return json.data.posts
}

export async function getPostById(id) {
  const response = await fetch(`${API_URL}/posts/${id}`)
  const json = await response.json()
  return json.data.post
}

export async function deletePost(id) {
  const token = window.localStorage.getItem('token')
  return fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
}
