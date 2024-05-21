"use client";

import Header from "@ui/organisms/Header";
import HomeTemplate from "@ui/templates/HomeTemplate";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Drawer from "@ui/organisms/Drawer";
import { getCookie } from "cookies-next";

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsLoggedIn(getCookie("session") ? true : false);
  }, []);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleIsLoggedIn = () => {
    setIsLoggedIn(getCookie("session") ? true : false);
  };

  const handleCTA = () => {
    if (cookie) {
      router.push("/u/create");
    } else {
      router.push("/u/login");
    }
  };
  return (
    <>
      <Drawer
        isLoggedIn={isLoggedIn}
        isOpen={isOpen}
        handleOpenMenu={handleOpenMenu}
      />
      <Header
        isLoggedIn={isLoggedIn}
        handleOpenMenu={handleOpenMenu}
        handleIsLoggedIn={handleIsLoggedIn}
      />
      <HomeTemplate handleCTA={handleCTA} />
    </>
  );
}
