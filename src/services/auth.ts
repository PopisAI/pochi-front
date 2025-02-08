import demoUsers from '@/data/users.json'
import { User } from '@/types/User'
import axios from 'axios'

const url = `${import.meta.env.VITE_ENV === 'local' ? 'http' : 'https'}://${import.meta.env.VITE_HOST_URL}`

export const loginService = async (email: string, password: string): Promise<User | null> => {
  let user = null

  for (const _u in demoUsers) {
    const _user = demoUsers[_u] as User
    if (_user.email === email && _user.password === password) {
      user = _user
    }
  }

  return user
}

export const registerService = async (email: string, password: string): Promise<User | null> => {
  const user = await axios
    .post(
      `${url}/api/register`,
      { username: email, password },
      { headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    )
    .then((res) => res.data)
  console.log('User', user)

  return null
}

export const logoutService = async (): Promise<boolean> => {
  await setTimeout(() => {}, 500)
  return true
}
