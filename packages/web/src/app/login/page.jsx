"use client"

import React, { useState, useEffect } from 'react'
import LoginTemplate from '@ui/templates/LoginTemplate'
import { setCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation'

const Page = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  useEffect(() => {
    if (getCookie('session')) {
      router.push('/profile')
    }
  }, [router])

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
    setCookie('session', { id: data._id, token: data.token })
    router.push('/profile')
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