"use client"

import Header from "@ui/organisms/Header"
import HomeTemplate from "@ui/templates/HomeTemplate"
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

export default function Home() {
  const router = useRouter()
  const handleCTA = () => {
    if (getCookie("session")) {
      router.push("/u/create")
    } else {
      router.push("/u/login")
    }
  }
  return <>
      <Header />
      <HomeTemplate handleCTA={handleCTA}/>
  </>;
}
