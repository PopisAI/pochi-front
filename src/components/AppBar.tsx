import { NavLink } from 'react-router-dom'
// import { useReadContract } from 'wagmi'

// import { popisContractConfig } from '@/services/contract'
import useAuth from '@/hooks/useAuth'
import { MenuIcon } from '@/icons'

const activeStyle = 'underline underline-thickness-3 underline-offset-2'

const AppBar = () => {
  const { logout, isAuthenticated } = useAuth()
  // const {
  //   data: mCap,
  //   error,
  //   isPending,
  // } = useReadContract({
  //   ...popisContractConfig,
  //   functionName: 'getCurveProgressBps',
  //   args: [],
  // })
  // console.log('🚀 ~ AppBar ~ Balance:', mCap, error, isPending)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-stone-100/90 text-gray-900">
      <nav className="flex justify-between items-center p-3 w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <MenuIcon />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-neutral-100 dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/tokens">Tokens</NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="font-semibold text-xl ml-2 md:ml-4" to="/">
            <img src="/pochipologo.svg" alt="Banner" className="h-8" />
          </NavLink>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="flex items-center space-x-4">
            <li className="text-md">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About
              </NavLink>
            </li>
            <li className="text-md">
              <NavLink
                to="/tokens"
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Tokens
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="flex items-center space-x-4">
            <li>
              {isAuthenticated ? (
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="User"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-neutral-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a onClick={() => logout()}>Logout</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <NavLink to="/register">
                    <button className="btn btn-outline mr-2">Register</button>
                  </NavLink>
                  <NavLink to="/login">
                    <button className="btn mr-2">Log In</button>
                  </NavLink>
                </>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default AppBar
