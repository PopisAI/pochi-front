import { Outlet } from 'react-router-dom'

import AppBar from '@/components/AppBar'
import AgentWidget from '@/components/agent/AgentWidget'

const AppMain = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <AgentWidget />
    </>
  )
}

export default AppMain
