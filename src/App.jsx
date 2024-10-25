import React, { useState } from 'react'
import Login from './pages/Login'

const App = () => {
  const [hidden, setHidden] = useState(true)
  const checkBol = () => {
    if (hidden) {
      setHidden(false)
    } else {
      setHidden(true)
    }
  }
  return (
    <>
    <Login/>
    </>
  )
}
export default App
