"use client"

import React, { useState, useEffect } from 'react'
import SignUpTemplate from '@ui/templates/SignUpTemplate'
import { setCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation'

const Page = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  useEffect(() => {
    if (getCookie('session')) {
      router.push('/u/profile')
    }
  }, [router])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
    const data = await res.json()
    setCookie('session', { id: data._id, token: data.token })
    router.push('/u/profile')
  }

  return (
    <>
      <SignUpTemplate 
        name={name} 
        email={email} 
        password={password} 
        handleChangeName={(e) => setName(e.target.value)} 
        handleChangeEmail={(e) => setEmail(e.target.value)}
        handleChangePassword={(e) => setPassword(e.target.value)}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default Page