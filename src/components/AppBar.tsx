import { NavLink } from 'react-router-dom'
import { useReadContract } from 'wagmi'

import { popisContractConfig, wagmiContractConfig } from '@/services/contract'

const activeStyle = 'underline underline-thickness-3 underline-offset-2'

const AppBar = () => {
  const { data: balance, error, isPending } = useReadContract({
    ...wagmiContractConfig,
    functionName: 'balanceOf',
    args: ['0x93a758c63CD7B15C8def570378E017ea0a2d7fd2'],
  })
  console.log("🚀 ~ AppBar ~ Balance:", balance, error, isPending)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-stone-100/90 text-gray-900">
      <nav className="flex justify-between items-center p-4 w-full">
        <ul className="flex items-center space-x-4">
          <li className="font-semibold text-lg">
            <NavLink to="/">Pochi.po</NavLink>
          </li>
          <li>
            <NavLink
              to="/tokens"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Tokens
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center space-x-4">
          <li>Connect Wallet</li>
        </ul>
      </nav>
    </header>
  )
}

export default AppBar
