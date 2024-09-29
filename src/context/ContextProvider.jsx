import { Children, createContext } from "react"

export const UserContext=createContext()
const ContextProvider = ({children}) => {
  const role='user'
  const authenticated=true
  return (
    <UserContext.Provider value={{role,authenticated}}>
        {children}
    </UserContext.Provider>
  )
}

export default ContextProvider