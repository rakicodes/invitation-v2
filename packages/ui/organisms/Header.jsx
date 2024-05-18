"use client";

import Link from "next/link";
import Button from "../atoms/Button";
import OutlineButton from "../atoms/OutlineButton";
import CIcon from "@coreui/icons-react";
import { cilHamburgerMenu } from "@coreui/icons";
import { useRouter } from "next/navigation";
import { getCookie, deleteCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = ({ isLoggedIn, handleOpenMenu }) => {
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {}, [pathname, isLoggedIn]);

	const handleSignup = () => {
		console.log("sign up..");
		router.push("/u/signup");
	};

	const handleLogin = () => {
		console.log("log in..");
		router.push("/u/login");
	};

	const handleLogout = () => {
		console.log("log out..");
		deleteCookie("session");
		router.push("/");
	};

	const handleProfile = () => {
		console.log("profile...");
		router.push("/u/profile");
	};
	return (
		<header className="flex justify-between items-center px-6 py-3 bg-white">
			<Link
				href="/"
				className="text-pink hover:underline">
				Home
			</Link>
			<div className="w-1/4 sm:w-1/3">
				{isLoggedIn ? (
					<div className="gap-2 hidden sm:flex">
						<OutlineButton onClick={handleProfile}>Profile</OutlineButton>
						<Button onClick={handleLogout}>Log out</Button>
					</div>
				) : isLoggedIn === null ? (
					<div></div>
				) : (
					<div className="gap-2 hidden sm:flex">
						<OutlineButton onClick={handleLogin}>Log in</OutlineButton>
						<Button onClick={handleSignup}>Sign up</Button>
					</div>
				)}
				<div
					className="flex justify-end h-6 sm:hidden"
					onClick={handleOpenMenu}>
					<CIcon icon={cilHamburgerMenu} />
				</div>
			</div>
		</header>
	);
};

export default Header;
