"use client";

import { useRouter } from "next/navigation";
import { useEffect } from 'react'
import ErrorTemplate from "@ui/templates/ErrorTemplate";

const Error = ({ error }) => {
	const router = useRouter();
    useEffect(() => {
        console.error(error)
      }, [error])
    
	return (
		<>
			<ErrorTemplate onClick={() => router.push("/")} />
		</>
	);
};

export default Error;
