import { Outlet } from 'react-router-dom'

import Providers from '@/Providers'
import AppBar from '@/components/AppBar'

const AppMain = () => {
  return (
    <Providers>
      <AppBar />
      <Outlet />
    </Providers>
  )
}

export default AppMain
