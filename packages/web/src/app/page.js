"use client"

import Header from "@ui/organisms/Header"
import HomeTemplate from "@ui/templates/HomeTemplate"
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react"
import { CookieContext } from "./context/cookie"

export default function Home() {
  const router = useRouter()
  const cookie = useContext(CookieContext)
  const [isLoggedIn, setIsLoggedIn] = useState(null)

  useEffect(() => {
    setIsLoggedIn(cookie ? true : false)
  }, [cookie])

  const handleOpenMenu = () => {
		console.log("opening");
	};

  const handleCTA = () => {
    if (cookie) {
      router.push("/u/create")
    } else {
      router.push("/u/login")
    }
  }
  return <>
      <Header isLoggedIn={isLoggedIn} handleOpenMenu={handleOpenMenu}/>
      <HomeTemplate handleCTA={handleCTA}/>
  </>;
}
