import Link from "next/link";
import OutlineButton from "../atoms/OutlineButton";
import { deleteCookie } from "cookies-next";

const Drawer = ({ isLoggedIn, isOpen, handleOpenMenu }) => {
	const handleLogout = () => {
		deleteCookie("session");
        handleOpenMenu();
	};

	return (
		<div className={isOpen ? "hidden" : ""}>
			<div className="min-h-screen flex items-center justify-center fixed bg-pink w-3/4 md:w-1/2 opacity-90 z-10">
				<div>
					{isLoggedIn ? (
						<div className="gap-8 flex flex-col text-white">
							<OutlineButton
								onClick={handleOpenMenu}
								backgroundColor="#b25674"
								fontColor="#fff9fb">
								<Link
									className="hover:text-green"
									href="/u/profile">
									Profile
								</Link>
							</OutlineButton>
							<OutlineButton
								onClick={handleLogout}
								backgroundColor="#b25674"
								fontColor="#fff9fb">
								<Link
									className="hover:text-green"
									href="/">
									Log out
								</Link>
							</OutlineButton>
						</div>
					) : isLoggedIn === null ? (
						<div></div>
					) : (
						<div className="gap-8 flex flex-col text-white">
							<OutlineButton
								onClick={handleOpenMenu}
								backgroundColor="#b25674"
								fontColor="#fff9fb">
								<Link
									className="hover:text-green"
									href="/u/login">
									Log in
								</Link>
							</OutlineButton>
							<OutlineButton
								onClick={handleOpenMenu}
								backgroundColor="#b25674"
								fontColor="#fff9fb">
								<Link
									className="hover:text-green"
									href="/u/signup">
									Sign up
								</Link>
							</OutlineButton>
						</div>
					)}
				</div>
			</div>
            <div className="min-h-screen w-1/4 md:w-1/2 opacity-10 fixed right-0 bg-white z-10" onClick={handleOpenMenu}>

            </div>
		</div>
	);
};

export default Drawer;
