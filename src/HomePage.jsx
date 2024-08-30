import React from 'react'
import {useMyContext} from "./context/MyContext.jsx"

import Chat from "./components/chat.jsx";
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"

const HomePage = () => {
    const {isLoggedIn, user, logoutUser, login} = useMyContext()
  return (
  <>
  {
    isLoggedIn ? (<Chat />) : (login ? <Login /> : <Register />)
  }
  </>
  )
}

export default HomePage