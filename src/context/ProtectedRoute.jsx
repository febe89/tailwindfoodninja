import { useContext } from 'react'
import { UserContext } from './ContextProvider'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children,roles}) => {
  const { role, authenticated } = useContext(UserContext)
  if (!authenticated) {
    return <Navigate to='/login' />
  }
  if (!roles.includes(role)) {
    return <Navigate
      ate to={'/unauthorized'} />
  }
  return children
}

export default ProtectedRoute
