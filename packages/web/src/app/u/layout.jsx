"use client"

import Header from "@ui/organisms/Header"
import Drawer from "@ui/organisms/Drawer"
import { useEffect, useState } from "react"
import { getCookie } from "cookies-next"
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const [isOpen, setIsOpen] = useState(true)
  const pathname = usePathname();

  useEffect(() => {
    setIsLoggedIn(getCookie("session") ? true : false)
  }, [pathname])

  const handleOpenMenu = () => {
		setIsOpen(!isOpen)
	};

  const handleIsLoggedIn = () => {
    setIsLoggedIn(getCookie("session") ? true : false)
  }

  return (
    <>
        <Drawer isLoggedIn={isLoggedIn} isOpen={isOpen} handleOpenMenu={handleOpenMenu}/>
        <Header isLoggedIn={isLoggedIn} handleOpenMenu={handleOpenMenu} handleIsLoggedIn={handleIsLoggedIn}/>
        {children}
    </>
  )
}

export default Layout