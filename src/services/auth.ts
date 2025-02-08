import demoUsers from '@/data/users.json'
import { User } from '@/types/User'

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
  console.log('New user', email, password)
  const _users = demoUsers.filter(_u => _u.email === email)

  return _users.length > 0 ? _users[0] as User : null
}

export const logoutService = async (): Promise<boolean> => {
  await setTimeout(()=> {}, 500)
  return true
}