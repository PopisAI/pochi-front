import { NavLink } from 'react-router-dom'

const AppBar = () => {
  const activeStyle = 'underline underline-thickness-3 underline-offset-2'
  return (<header className="absolute inset-x-0 top-0 z-50 bg-stone-100/90 text-gray-900">
    <nav className="flex justify-between items-center p-4 w-full">
      <ul className='flex items-center space-x-4'>
        <li className='font-semibold text-lg'>
          <NavLink to="/">Pochi.po</NavLink>
        </li>
      </ul>
      <ul className='flex items-center space-x-4'>
        <li>
          Connect Wallet
        </li>
      </ul>
    </nav>
    </header>
  )
}

export default AppBar
