import { createContext, Dispatch, useReducer } from 'react'

import { User } from '@/types/User'
import { getUser, removeUser, saveUser } from '@/services/storage';

type AppAction = { type: 'setAuth'; payload: { user: User | null} } | { type: 'setOther'; payload: any }

interface AppState {
  user: User | null
  isAuthenticated: boolean
}

interface CompleteState {
  state: AppState
  dispatch: Dispatch<AppAction>
}

const AppContext = createContext<CompleteState | null>(null)

const reducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case 'setAuth':
      const user = action.payload.user
      if (user) {
        saveUser(user)
      } else {
        removeUser()
      }

      return {
        ...state,
        isAuthenticated: !!action.payload.user,
        user
      }
    default:
      return state
  }
}

const { Provider, Consumer } = AppContext

interface ContextProviderProps {
  children: React.ReactNode
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const user = getUser()
  const [state, dispatch] = useReducer(reducer, {
    user,
    isAuthenticated: !!user,
  })

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { AppContext, ContextProvider, Consumer as AppConsumer }
export type { CompleteState as AppState, AppAction }
