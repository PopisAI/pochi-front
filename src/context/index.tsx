import { createContext, Dispatch, useReducer } from 'react'

import { User } from '@/types/User'

type AppAction = { type: 'setAuth'; payload: any } | { type: 'setOther'; payload: any }

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
      return {
        ...state,
        isAuthenticated: !!action.payload.user,
        user: action.payload.user,
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
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    isAuthenticated: false,
  })

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { AppContext, ContextProvider, Consumer as AppConsumer }
export type { CompleteState as AppState, AppAction }
