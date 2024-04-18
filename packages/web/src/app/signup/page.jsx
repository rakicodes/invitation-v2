"use client"

import React, { useState } from 'react'
import SignUpTemplate from '@ui/templates/SignUpTemplate'

const Page = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <SignUpTemplate 
        name={name} 
        email={email} 
        password={password} 
        handleChangeName={(e) => setName(e.target.value)} 
        handleChangeEmail={(e) => setEmail(e.target.value)}
        handleChangePassword={(e) => setPassword(e.target.value)}
        handleSubmit={() => console.log("Signing up....")}
      />
    </>
  )
}

export default Page