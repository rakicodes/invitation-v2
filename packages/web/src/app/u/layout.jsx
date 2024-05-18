"use client"

import Header from "@ui/organisms/Header"
import Drawer from "@ui/organisms/Drawer"
import { CookieContext } from "../context/cookie"
import { useContext, useEffect, useState } from "react"

const Layout = ({ children }) => {
  const cookie = useContext(CookieContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(cookie ? true : false)
  }, [cookie])

  const handleOpenMenu = () => {
		console.log("opening");
	};

  return (
    <>
        <Header isLoggedIn={isLoggedIn} handleOpenMenu={handleOpenMenu}/>
        <Drawer />
        {children}
    </>
  )
}

export default Layout