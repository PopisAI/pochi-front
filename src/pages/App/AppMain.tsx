import { Outlet } from "react-router-dom"

import AppBar from "../../components/AppBar"

const AppMain = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  )
}

export default AppMain