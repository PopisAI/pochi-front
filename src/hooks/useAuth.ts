import { useContext } from 'react'

import { AppContext, AppState } from '@/context'
import { loginService, logoutService, registerService } from '@/services/auth'

const useAuth = () => {
  const { state, dispatch} = (useContext(AppContext) as AppState)

  const login = async (username: string, password: string): Promise<boolean> => {
    const user = await loginService(username, password)
    dispatch({type: 'setAuth', payload: { user: user } })

    return !!user
  }

  const register = async (username: string, password: string): Promise<boolean> => {
    const user = await registerService(username, password)

    return !!user
  }

  const logout = async (): Promise<boolean> => {
    const _lo = await logoutService()
    if (_lo) dispatch({type: 'setAuth', payload: { user: null } })

    return _lo
  }

  return { user: state?.user, isAuthenticated: state?.isAuthenticated, login, register, logout }
}

export default useAuth
