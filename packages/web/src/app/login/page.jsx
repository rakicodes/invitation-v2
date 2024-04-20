"use client"

import React, { useState } from 'react'
import LoginTemplate from '@ui/templates/LoginTemplate'
import { setCookie } from 'cookies-next';

const Page = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:3333/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const data = await res.json()
    setCookie('token', data.token)

  }

  return (
    <>
      <LoginTemplate 
        email={email} 
        password={password} 
        handleChangeEmail={(e) => setEmail(e.target.value)}
        handleChangePassword={(e) => setPassword(e.target.value)}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default Page