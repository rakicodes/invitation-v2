"use client"

import React, { useState } from 'react'
import LoginTemplate from '@ui/templates/LoginTemplate'

const Page = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <LoginTemplate 
        email={email} 
        password={password} 
        handleChangeEmail={(e) => setEmail(e.target.value)}
        handleChangePassword={(e) => setPassword(e.target.value)}
        handleSubmit={() => console.log("Logging in....")}
      />
    </>
  )
}

export default Page