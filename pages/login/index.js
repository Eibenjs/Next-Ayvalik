import { useRef, useState } from 'react'
import Input from '../../components/ui/inputTP'
import { setUser } from '../../store/auth'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { login } from '../../components/firebase/firestoreApp'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()
  const user = useSelector((state) => state.auth.user)
  if (user) {
    router.push('/admin')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(username, password)
    // router.push('/admin')
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-slate-900">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-slate-800 rounded-lg flex flex-col gap-2 w-1/3"
      >
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          label="email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          label="password"
        />
        <button
          className="w-full h-[32px] bg-slate-900 text-white rounded  hover:bg-slate-700 transition"
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  )
}

export default Login
