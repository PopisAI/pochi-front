import { NavLink } from 'react-router-dom'

const AppBar = () => {
  const activeStyle = 'underline underline-thickness-3 underline-offset-2'
  return (
    <nav className="flex justify-between items-center p-4 bg-stone-100 text-gray-900">
      <ul className='flex items-center space-x-4'>
        <li className='font-semibold text-lg'>
          <NavLink to="/">PhPop</NavLink>
        </li>
        <li>
          <NavLink to="/token/2" className={({ isActive }) => isActive ? activeStyle : undefined}>
            Demo 1
          </NavLink>
        </li>
        <li>
          <NavLink to="/token/1" className={({ isActive }) => isActive ? activeStyle : undefined}>
            Demo 2
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center space-x-4'>
        <li>
          Connect Wallet
        </li>
      </ul>
    </nav>
  )
}

export default AppBar
