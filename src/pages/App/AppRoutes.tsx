import { BrowserRouter, useRoutes } from 'react-router-dom'

import Home from '../Home'
import Tokens from '../Tokens'
import AppMain from './AppMain'
import NotFound from '../NotFound'
import TokenView from '../TokenView'

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <AppMain />, // Add AppBar
      children: [
        { element: <Home />, index: true },
        { path: '/tokens', element: <Tokens /> },
        { path: '/tokens/:tokenId', element: <TokenView /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ])
  return routes
}

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default AppRoutes
