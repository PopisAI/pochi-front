import { useNavigate } from 'react-router-dom'

import useAuth from '@/hooks/useAuth'
import Layout from '@/components/Layout'
import { KeyIcon, UserIcon } from '@/icons'
import { useEffect, useState } from 'react'

const Register = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { register, isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated])

  const handleRegister = async () => {
    if (!(password.length > 0 && username.length > 0)) return

    const isAuth = await register(username, password)
    if (isAuth) navigate('/login')
  }

  return (
    <Layout>
      <div className="flex  justify-center h-full w-full">
        <div className="card bg-base-300 p-4 mt-8 w-96">
          <div className="card-body items-center text-center p-2 sm:p-4">
            <h1 className="card-title max-[380px]:text-md sm:block sm:text-xl md:text-2xl lg:text-3xl">
              Register
            </h1>
            <label className="input input-bordered flex items-center gap-2">
              <UserIcon />
              <input
                type="text"
                className="grow"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                onClick={handleRegister}
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Register