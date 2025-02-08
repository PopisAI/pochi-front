import { useNavigate } from 'react-router-dom'

import useAuth from '@/hooks/useAuth'
import Layout from '@/components/Layout'
import { KeyIcon, UserIcon } from '@/icons'
import { useEffect, useState } from 'react'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { login, isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated])

  const handleLogin = async () => {
    if (!(password.length > 0 && email.length > 0 && email.includes('@')&& email.includes('.'))) return

    const isAuth = await login(email, password)
    if (isAuth) navigate('/')
  }

  return (
    <Layout>
      <div className="flex  justify-center h-full w-full">
        <div className="card bg-base-300 p-4 mt-8 w-96">
          <div className="card-body items-center text-center p-2 sm:p-4">
            <h1 className="card-title max-[380px]:text-md sm:block sm:text-xl md:text-2xl lg:text-3xl">
              Login
            </h1>
            <label className="input input-bordered flex items-center gap-2">
              <UserIcon />
              <input
                type="text"
                className="grow"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <KeyIcon />
              <input
                type="password"
                className="grow"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div className="card-actions">
              <button
                className="btn btn-outline max-[380px]:btn-xs"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
