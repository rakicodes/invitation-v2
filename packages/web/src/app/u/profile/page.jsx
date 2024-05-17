"use client"
import { useEffect, useState } from "react"
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import ProfileTemplate from "@ui/templates/ProfileTemplate"

const Page = () => {
  const router = useRouter()
  const [data, setData] = useState([])
  useEffect(() => {
		if (!getCookie("session")) {
			router.push('/')
		}
	}, [router])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`http://localhost:3333/api/invitations/user/${JSON.parse(getCookie("session")).id}`, {
					headers: {
						Authorization: `Bearer ${JSON.parse(getCookie("session")).token}`,
					},
				});
				const data = await res.json();
        if (data.user !== JSON.parse(getCookie("session")).id) {
					router.push("/")
					return
				}
				setData(data);
        console.log("data",data)
			} catch (error) {
				console.log("error", error);
			}
		};

		fetchData();
	}, [router]);

  return (
    <>
      <ProfileTemplate data={data} />
    </>
  )
}

export default Page