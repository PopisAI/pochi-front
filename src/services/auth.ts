import demoUsers from '@/data/users.json'
import { User } from '@/types/User'
import axios from 'axios'

const url = `${import.meta.env.VITE_ENV === 'local' ? 'http' : 'https'}://${import.meta.env.VITE_HOST_URL}`

export const loginService = async (username: string, password: string): Promise<User | null> => {
  let user = null

  for (const _u in demoUsers) {
    const _user = demoUsers[_u] as User
    if (_user.username === username && _user.password === password) {
      user = _user
    }
  }

  return user
}

export const registerService = async (username: string, password: string): Promise<User | null> => {
  const user = await axios
    .post(
      `${url}/api/register`,
      { username, password },
      { headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    )
    .then((res) => res.data)

  return user?.id ? user : null
}

export const logoutService = async (): Promise<boolean> => {
  await setTimeout(() => {}, 500)
  return true
}
