import { useContext } from 'react'
import { AuthContext } from '../context/auth/AuthContext.js'

const useAuth = () => {
  const { token, currentUser, onLogin, onLogout } = useContext(AuthContext)

  return {
    token,
    currentUser,
    onLogin,
    onLogout,
  }
}

export default useAuth
