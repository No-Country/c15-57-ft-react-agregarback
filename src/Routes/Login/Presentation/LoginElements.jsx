import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../../Store/contextStore/UserContext'

const LoginElements = () => {
  const { user, setUser } = useUserContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate('/User')
  }, [user])

  return (
    <div>
      <h1>LoginElements</h1>
      <button onClick={() => setUser(true)}> Login </button>
    </div>
  )
}

export default LoginElements
