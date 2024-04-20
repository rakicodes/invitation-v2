"use client"

import React, { useState } from 'react'
import SignUpTemplate from '@ui/templates/SignUpTemplate'
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation'

const Page = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3333/api/auth/register', {
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
    router.push('/profile')
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