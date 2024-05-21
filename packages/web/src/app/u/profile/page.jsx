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
				setData(data.invitations);
			} catch (error) {
				console.log("error", error);
			}
		};

		fetchData();
	}, [router]);

	const handleDelete = async (id) => {
		const res = await fetch(`http://localhost:3333/api/invitations/${id}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${JSON.parse(getCookie("session")).token}`,
			},
		});

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
				setData(data.invitations);
			} catch (error) {
				console.log("error", error);
			}
		};

		fetchData();
		router.refresh()
	}

	const handleCreate = () => {
		router.push("/u/create")
	}

  return (
    <>
      <ProfileTemplate data={data} handleDelete={handleDelete} handleCreate={handleCreate} />
    </>
  )
}

export default Page