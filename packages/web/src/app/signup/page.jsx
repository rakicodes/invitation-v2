"use client"

import React, { useState } from 'react'
import SignUpTemplate from '@ui/templates/SignUpTemplate'
import { setCookie } from 'cookies-next';

const Page = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

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
    setCookie('token', data.token)
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