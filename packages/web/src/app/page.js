"use client"

import Header from "@ui/organisms/Header"
import HomeTemplate from "@ui/templates/HomeTemplate"
import { useState, useEffect } from "react"

export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
			try {
				const res = await fetch(`http://localhost:3333/api/invitations`);
				const data = await res.json();
        console.log(data)
				setData(data);
			} catch (error) {
				console.log("error", error);
			}
		};

		fetchData();
  }, [])

  return <>
      <Header />
      <HomeTemplate invitations={data} />
  </>;
}
