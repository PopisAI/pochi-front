import { User } from '@/types/User'
import axios from 'axios'

const url = `${import.meta.env.VITE_ENV === 'local' ? 'http' : 'https'}://${import.meta.env.VITE_HOST_URL}`

export const loginService = async (username: string, password: string): Promise<User | null> => {
  const user = await axios
    .post(
      `${url}/api/login`,
      { username, password },
      { headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    )
    .then((res) => res.data)

  return { username, token: user?.token } as User
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
  return true
}
