"use client"

import React, { useState, useEffect } from 'react'
import CreateInvitationTemplate from '@ui/templates/CreateInvitationTemplate'
import responseEffects from './responseEffect'
import visibilityInvitation from './visibilityInvitation'
import sampleInvitation from './sampleInvitation'
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation'


const Page = () => {
  const [message, setMessage] = useState("")
  const [image, setImage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [successImage, setSuccessImage] = useState("")
  const [failedMessage, setFailedMessage] = useState("")
  const [failedImage, setFailedImage] = useState("")
  const [recipient, setRecipient] = useState("")
  const [responseEffect, setResponseEffect] = useState("NO_EFFECT")
  const [isPublic, setIsPublic] = useState("PRIVATE")
  const [backgroundColor, setBackgroundColor] = useState(sampleInvitation.backgroundColor)
  const [fontColor, setFontColor] = useState(sampleInvitation.fontColor)
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState(sampleInvitation.buttonBackgroundColor)
  const [buttonFontColor, setButtonFontColor] = useState(sampleInvitation.buttonFontColor)
  const router = useRouter()

  useEffect(() => {
		if (!getCookie("session")) {
			router.push('/')
		}
	}, [router])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:3333/api/invitations', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${JSON.parse(getCookie('session')).token}`
      },
      body: JSON.stringify({
        message,
        messageImage: image,
        successMessage,
        successImage,
        failedMessage,
        failedImage,
        recipient,
        responseEffect,
        isPublic,
        backgroundColor,
        fontColor,
        buttonBackgroundColor,
        buttonFontColor
      })
    })
    const data = await res.json()
    router.push('/profile')
  }

  return (
    <>
      <CreateInvitationTemplate 
        message={message}
        image={image}
        successMessage={successMessage}
        successImage={successImage}
        failedMessage={failedMessage}
        failedImage={failedImage}
        recipient={recipient}
        responseEffect={responseEffect}
        responseEffectRadioGroup={responseEffects}
        isPublic={isPublic}
        isPublicRadioGroup={visibilityInvitation}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        buttonBackgroundColor={buttonBackgroundColor}
        buttonFontColor={buttonFontColor}
        handleChangeMessage={(e) => setMessage(e.target.value)}
        handleChangeImage={(e) => setImage(e.target.value)}
        handleChangeSuccessMessage={(e) => setSuccessMessage(e.target.value)}
        handleChangeSuccessImage={(e) => setSuccessImage(e.target.value)}
        handleChangeFailedMessage={(e) => setFailedMessage(e.target.value)}
        handleChangeFailedImage={(e) => setFailedImage(e.target.value)}
        handleChangeRecipient={(e) => setRecipient(e.target.value)}
        handleChangeResponseEffect={(e) => setResponseEffect(e.target.value)}
        handleChangeIsPublic={(e) => setIsPublic(e.target.value)}
        handleChangeBackgroundColor={(e) => setBackgroundColor(e.target.value)}
        handleChangeFontColor={(e) => setFontColor(e.target.value)}
        handleChangeButtonBackgroundColor={(e) => setButtonBackgroundColor(e.target.value)}
        handleChangeButtonFontColor={(e) => setButtonFontColor(e.target.value)}
        handleSubmit={handleSubmit}
        preview={sampleInvitation}
      />
    </>
  )
}

export default Page