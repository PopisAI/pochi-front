import { useContext } from 'react'

import { AppContext, AppState } from '@/context'
import { loginService, logoutService, registerService } from '@/services/auth'

const useAuth = () => {
  const { state, dispatch} = (useContext(AppContext) as AppState)

  const login = async (email: string, password: string): Promise<boolean> => {
    const user = await loginService(email, password)
    dispatch({type: 'setAuth', payload: { isAuthenticaed: !!user, user: user } })

    return !!user
  }

  const register = async (email: string, password: string): Promise<boolean> => {
    const user = await registerService(email, password)
    dispatch({type: 'setAuth', payload: { isAuthenticaed: !!user, user: user } })

    return !!user
  }

  const logout = async (): Promise<boolean> => {
    const _lo = await logoutService()
    if (_lo) dispatch({type: 'setAuth', payload: { isAuthenticaed: false, user: null } })

    return _lo

  }

  return { user: state?.user, isAuthenticated: state?.isAuthenticated, login, register, logout }
}

export default useAuth
