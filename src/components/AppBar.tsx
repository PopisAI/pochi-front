import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useReadContract } from 'wagmi'

import { popisContractConfig, wagmiContractConfig } from '@/services/contract'

const activeStyle = 'underline underline-thickness-3 underline-offset-2'

const AppBar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0()
  // const { data: balance, error, isPending } = useReadContract({
  //   ...wagmiContractConfig,
  //   functionName: 'balanceOf',
  //   args: ['0x93a758c63CD7B15C8def570378E017ea0a2d7fd2'],
  // })
  // console.log("🚀 ~ AppBar ~ Balance:", balance, error, isPending)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-stone-100/90 text-gray-900">
      <nav className="flex justify-between items-center p-4 w-full">
        <div className="navbar-start">
          <NavLink className="font-semibold text-xl" to="/">
            Pochi.po
          </NavLink>
        </div>
        <div className="navbar-center">
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
                <button className="btn" onClick={() => loginWithRedirect()}>
                  Log In
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default AppBar
