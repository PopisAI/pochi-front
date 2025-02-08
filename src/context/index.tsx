import { createContext, useReducer } from 'react'

const AppContext = createContext({})

enum ActionsKind {
  setAuth = 'setAuth',
}

interface AppAction {
  type: ActionsKind
  payload: any
}

interface AppState {
  user: {
    id: string
    emai: string
  }
  isAuthenticated: boolean
}

const reducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case ActionsKind.setAuth:
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
    user: undefined,
    isAuthenticated: false,
  })

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { AppContext, ContextProvider, Consumer as AppConsumer }
