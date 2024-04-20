"use client";

import { useRouter } from "next/navigation";
import ErrorTemplate from "@ui/templates/ErrorTemplate";

const NotFound = () => {
    const router = useRouter();
	return (
		<>
			<ErrorTemplate onClick={() => router.push("/")} message="Sorry the page you are looking for doesn't exist"/>
		</>
	);
};

export default NotFound;